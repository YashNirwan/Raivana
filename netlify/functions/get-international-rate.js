const COUNTRY_CODES = {
  'India': 'IN', 'Nepal': 'NP', 'Bangladesh': 'BD', 'Sri Lanka': 'LK', 'Pakistan': 'PK',
  'Singapore': 'SG', 'Malaysia': 'MY', 'Thailand': 'TH', 'Indonesia': 'ID', 'Philippines': 'PH', 'Vietnam': 'VN',
  'United Arab Emirates': 'AE', 'Saudi Arabia': 'SA', 'Qatar': 'QA', 'Kuwait': 'KW', 'Bahrain': 'BH', 'Oman': 'OM',
  'Japan': 'JP', 'South Korea': 'KR', 'China': 'CN', 'Hong Kong': 'HK', 'Taiwan': 'TW',
  'United Kingdom': 'GB', 'Germany': 'DE', 'France': 'FR', 'Italy': 'IT', 'Spain': 'ES',
  'Netherlands': 'NL', 'Sweden': 'SE', 'Norway': 'NO', 'Denmark': 'DK', 'Switzerland': 'CH',
  'Austria': 'AT', 'Belgium': 'BE', 'Portugal': 'PT', 'Ireland': 'IE',
  'United States': 'US', 'Canada': 'CA', 'Australia': 'AU', 'New Zealand': 'NZ',
  'South Africa': 'ZA', 'Nigeria': 'NG', 'Kenya': 'KE', 'Egypt': 'EG',
  'Brazil': 'BR', 'Mexico': 'MX', 'Argentina': 'AR',
};

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') return { statusCode: 405, body: 'Method Not Allowed' };

  console.log('get-international-rate invoked');
  try {
    const { customer, items, weightG, hasCeramics, inrSubtotal } = JSON.parse(event.body);
    console.log('Params: country=%s city=%s pin=%s weight=%s', customer?.country, customer?.city, customer?.pin, weightG);

    if (!customer?.country || !customer?.city || !customer?.pin) {
      return { statusCode: 200, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ shipping_inr: null }) };
    }

    const countryCode = COUNTRY_CODES[customer.country] || 'US';
    const packagingG = 200 + (hasCeramics ? 300 : 0);
    const weightKg = Math.max((weightG + packagingG) / 1000, 0.5);
    const subTotal = inrSubtotal || 1000;

    const token = await getShiprocketToken();

    const orderItems = (items || []).length > 0
      ? items.map((item, i) => ({
          name: item.name + (item.size ? ` (${item.size})` : ''),
          sku: `SKU-${i + 1}`,
          units: 1,
          selling_price: Math.round(subTotal / items.length),
          discount: 0,
          tax: 0,
        }))
      : [{ name: 'Raivana Product', sku: 'SKU-1', units: 1, selling_price: subTotal, discount: 0, tax: 0 }];

    const nameParts = (customer.name || 'Customer').split(' ');
    const draftOrderId = `RVN-RATE-${Date.now()}`;

    const createRes = await fetch('https://apiv2.shiprocket.in/v1/external/orders/create/international', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      body: JSON.stringify({
        order_id:              draftOrderId,
        order_date:            new Date(Date.now() + 19800000).toISOString().slice(0, 16).replace('T', ' '),
        pickup_location:       process.env.SHIPROCKET_PICKUP_LOCATION || 'Primary',
        billing_customer_name: nameParts[0] || 'Customer',
        billing_last_name:     nameParts.slice(1).join(' ') || '.',
        billing_address:       customer.address1 || 'Address',
        billing_address_2:     customer.address2 || '',
        billing_city:          customer.city,
        billing_pincode:       customer.pin,
        billing_country:       customer.country,
        billing_country_code:  countryCode,
        billing_email:         customer.email || 'rate@raivana.in',
        billing_phone:         (customer.phone || '9999999999').replace(/\D/g, '').slice(-15) || '9999999999',
        order_items:           orderItems,
        payment_method:        'Prepaid',
        sub_total:             subTotal,
        shipment_purpose:      'Commercial',
        currency:              'INR',
        inco_term:             'CIF',
        length:                30,
        breadth:               20,
        height:                20,
        weight:                weightKg,
      }),
    });

    const orderData = await createRes.json();
    console.log('Draft order:', orderData?.order_id ?? JSON.stringify(orderData?.message ?? orderData?.errors));

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
      console.log('Cheapest:', cheapest.courier_name, rate);
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
