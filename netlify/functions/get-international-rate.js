let _token = null, _tokenExpiry = 0, _pickup = null;

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') return { statusCode: 405, body: 'Method Not Allowed' };

  console.log('get-international-rate invoked');
  try {
    const { customer, items, weightG, hasCeramics, inrSubtotal } = JSON.parse(event.body);
    console.log('Params: country=%s city=%s pin=%s weight=%s', customer?.country, customer?.city, customer?.pin, weightG);

    if (!customer?.country || !customer?.city || !customer?.pin) {
      return { statusCode: 200, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ shipping_inr: null }) };
    }

    const packagingG = 200 + (hasCeramics ? 300 : 0);
    const weightKg = Math.max((weightG + packagingG) / 1000, 0.5);
    const subTotal = inrSubtotal || 1000;

    const token = await getShiprocketToken();

    // Fetch pickup location to get its numeric ID and seller address
    const pickup = await getPickupLocation(token);
    console.log('Pickup location:', pickup?.id, pickup?.pickup_location);

    const orderItems = (items || []).length > 0
      ? items.map((item, i) => ({
          name:           item.name + (item.size ? ` (${item.size})` : ''),
          sku:            `SKU-${i + 1}`,
          category_name:  'Default Category',
          tax:            '0',
          hsn:            getHsn(item.category),
          units:          '1',
          selling_price:  String(Math.round(subTotal / items.length)),
          discount:       '',
        }))
      : [{ name: 'Raivana Product', sku: 'SKU-1', category_name: 'Default Category', tax: '0', hsn: '83062900', units: '1', selling_price: String(subTotal), discount: '' }];

    const draftOrderId = `RVN-RATE-${Date.now()}`;
    const orderDate = new Date(Date.now() + 19800000).toISOString().slice(0, 16).replace('T', ' ');

    const payload = {
      order_id:                draftOrderId,
      isd_code:                '',
      billing_isd_code:        '+91',
      order_date:              orderDate,
      // Billing = seller (Raivana India)
      billing_customer_name:   pickup?.pickup_location || 'Raivana',
      billing_last_name:       '',
      billing_address:         pickup?.address || 'New Delhi',
      billing_address_2:       pickup?.address_2 || '',
      billing_city:            pickup?.city || 'New Delhi',
      billing_state:           pickup?.state || 'Delhi',
      billing_country:         'India',
      billing_pincode:         String(pickup?.pin_code || '110077'),
      billing_phone:           String(pickup?.phone || '9999999999').replace(/\D/g, ''),
      billing_email:           'info@raivana.in',
      // Shipping = customer (destination)
      shipping_is_billing:     0,
      shipping_customer_name:  customer.name || 'Customer',
      shipping_last_name:      '',
      shipping_address:        sanitizeAddress(customer.address1),
      shipping_address_2:      customer.address2 || '',
      shipping_city:           customer.city,
      shipping_state:          customer.state || '',
      shipping_country:        customer.country,
      shipping_pincode:        customer.pin,
      shipping_phone:          parseInt((customer.phone || '').replace(/\D/g, '')) || 9876543210,
      shipping_email:          customer.email || 'customer@raivana.in',
      order_items:             orderItems,
      payment_method:          'Prepaid',
      sub_total:               subTotal,
      weight:                  weightKg,
      length:                  30,
      breadth:                 20,
      height:                  20,
      pickup_location_id:      pickup?.id,
      purpose_of_shipment:     0,
      currency:                'INR',
      reasonOfExport:          2,
      commodity:               'true',
      mies:                    'true',
      igstPaymentStatus:       'N',
      Terms_Of_Invoice:        'CIF',
      is_order_revamp:         1,
      is_document:             0,
      delivery_challan:        false,
    };

    const createRes = await fetch('https://apiv2.shiprocket.in/v1/external/international/orders/create/adhoc', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      body: JSON.stringify(payload),
    });

    const orderData = await createRes.json();
    console.log('Draft order result:', orderData?.order_id ?? JSON.stringify(orderData?.message ?? orderData?.errors));

    if (!orderData.order_id) {
      console.error('Draft order failed. Full response:', JSON.stringify(orderData));
      return { statusCode: 200, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ shipping_inr: null }) };
    }

    const svcRes = await fetch(
      `https://apiv2.shiprocket.in/v1/external/international/courier/serviceability?order_id=${orderData.order_id}`,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    const svcData = await svcRes.json();
    const couriers = svcData?.data?.available_courier_companies;
    console.log('Couriers available:', couriers?.length ?? 0);
    if (couriers?.length > 0) console.log('First courier sample:', JSON.stringify(couriers[0]));

    if (couriers && couriers.length > 0) {
      const getCharge = c => (typeof c.rate === 'object' ? c.rate?.rate : c.rate) ?? c.freight_charge ?? 999999;
      const cheapest = couriers.reduce((min, c) => getCharge(c) < getCharge(min) ? c : min, couriers[0]);
      const baseRate = Math.round(getCharge(cheapest));
      const coverage = cheapest.coverage_charges || 0;
      const rate = baseRate + coverage;
      console.log('Cheapest courier:', cheapest.courier_name, 'base:', baseRate, 'coverage:', coverage, 'total:', rate);
      await deleteDraftOrder(token, orderData.order_id);
      return {
        statusCode: 200,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ shipping_inr: rate }),
      };
    }

    await deleteDraftOrder(token, orderData.order_id);
    return { statusCode: 200, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ shipping_inr: null }) };

  } catch (err) {
    console.error('International rate error:', err.message);
    return { statusCode: 200, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ shipping_inr: null }) };
  }
};

async function deleteDraftOrder(token, orderId) {
  if (!orderId) return;
  try {
    const r = await fetch(`https://apiv2.shiprocket.in/v1/external/orders/${orderId}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log('Draft order delete status:', orderId, r.status);
  } catch (e) {
    console.log('Draft order delete failed (non-critical):', e.message);
  }
}

function sanitizeAddress(addr) {
  const a = (addr || '').trim();
  if (!a) return '1 Main St';
  // Shiprocket requires at least one digit in the address
  return /\d/.test(a) ? a : '1 ' + a;
}

function getHsn(category) {
  if (category === 'ceramics') return '69131090';
  if (category === 'woodwork') return '44209090';
  return '83062900'; // brass / default
}

async function getPickupLocation(token) {
  if (_pickup) return _pickup;
  try {
    const res = await fetch('https://apiv2.shiprocket.in/v1/external/settings/company/pickup', {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await res.json();
    const locations = data?.data?.shipping_address || [];
    const name = process.env.SHIPROCKET_PICKUP_LOCATION || 'Home';
    _pickup = locations.find(l => l.pickup_location === name) || locations[0] || null;
    return _pickup;
  } catch (_) {
    return null;
  }
}

async function getShiprocketToken() {
  if (_token && Date.now() < _tokenExpiry) return _token;
  const res = await fetch('https://apiv2.shiprocket.in/v1/external/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: process.env.SHIPROCKET_EMAIL, password: process.env.SHIPROCKET_PASSWORD }),
  });
  const data = await res.json();
  if (!data.token) throw new Error('Shiprocket auth failed');
  _token = data.token;
  _tokenExpiry = Date.now() + 22 * 60 * 60 * 1000; // cache 22 hrs
  return _token;
}
