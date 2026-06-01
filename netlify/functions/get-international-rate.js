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
          tax:            '',
          hsn:            '',
          units:          '1',
          selling_price:  String(Math.round(subTotal / items.length)),
          discount:       '',
        }))
      : [{ name: 'Raivana Product', sku: 'SKU-1', category_name: 'Default Category', tax: '', hsn: '', units: '1', selling_price: String(subTotal), discount: '' }];

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
      shipping_address:        customer.address1 || 'Address',
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
      igstPaymentStatus:       'C',
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
    console.log('Couriers available:', couriers?.length ?? 0, '| msg:', svcData?.message);

    if (couriers && couriers.length > 0) {
      const cheapest = couriers.reduce((min, c) => {
        const charge = c.freight_charge ?? c.rate ?? 999999;
        const minCharge = min.freight_charge ?? min.rate ?? 999999;
        return charge < minCharge ? c : min;
      }, couriers[0]);
      const rate = Math.round(cheapest.freight_charge ?? cheapest.rate ?? 0);
      console.log('Cheapest courier:', cheapest.courier_name, rate);
      return {
        statusCode: 200,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ shipping_inr: rate }),
      };
    }

    return { statusCode: 200, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ shipping_inr: null }) };

  } catch (err) {
    console.error('International rate error:', err.message);
    return { statusCode: 200, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ shipping_inr: null }) };
  }
};

async function getPickupLocation(token) {
  try {
    const res = await fetch('https://apiv2.shiprocket.in/v1/external/settings/company/pickup', {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await res.json();
    const locations = data?.data?.shipping_address || [];
    const name = process.env.SHIPROCKET_PICKUP_LOCATION || 'Home';
    return locations.find(l => l.pickup_location === name) || locations[0] || null;
  } catch (_) {
    return null;
  }
}

async function getShiprocketToken() {
  const res = await fetch('https://apiv2.shiprocket.in/v1/external/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: process.env.SHIPROCKET_EMAIL, password: process.env.SHIPROCKET_PASSWORD }),
  });
  const data = await res.json();
  if (!data.token) throw new Error('Shiprocket auth failed');
  return data.token;
}
