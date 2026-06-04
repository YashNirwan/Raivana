const PICKUP_PINCODE = '110077';

const COUNTRY_CODES = {
  'United States': 'US', 'Canada': 'CA', 'United Kingdom': 'GB',
  'Australia': 'AU', 'New Zealand': 'NZ', 'Singapore': 'SG',
  'United Arab Emirates': 'AE', 'Saudi Arabia': 'SA', 'Qatar': 'QA',
  'Kuwait': 'KW', 'Bahrain': 'BH', 'Oman': 'OM',
  'Germany': 'DE', 'France': 'FR', 'Italy': 'IT', 'Spain': 'ES',
  'Netherlands': 'NL', 'Sweden': 'SE', 'Norway': 'NO', 'Denmark': 'DK',
  'Switzerland': 'CH', 'Austria': 'AT', 'Belgium': 'BE', 'Portugal': 'PT',
  'Ireland': 'IE', 'Malaysia': 'MY', 'Hong Kong': 'HK',
  'Japan': 'JP', 'South Korea': 'KR', 'Thailand': 'TH',
  'South Africa': 'ZA', 'Brazil': 'BR', 'Mexico': 'MX',
  'Nepal': 'NP', 'Sri Lanka': 'LK', 'Bangladesh': 'BD',
};

let _token = null, _tokenExpiry = 0;

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') return { statusCode: 405, body: 'Method Not Allowed' };

  console.log('get-international-rate invoked');
  try {
    const { customer, items, weightG, hasCeramics, inrSubtotal } = JSON.parse(event.body);
    console.log('Params: country=%s weight=%s', customer?.country, weightG);

    if (!customer?.country) {
      return { statusCode: 200, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ shipping_inr: null }) };
    }

    const packagingG = 200 + (hasCeramics ? 300 : 0);
    const weightKg = Math.max((weightG + packagingG) / 1000, 0.5);
    const countryCode = COUNTRY_CODES[customer.country] || customer.country;
    console.log('Country code:', customer.country, '->', countryCode);

    const token = await getShiprocketToken();

    const url = `https://apiv2.shiprocket.in/v1/external/international/courier/serviceability?pickup_postcode=${PICKUP_PINCODE}&delivery_country=${encodeURIComponent(countryCode)}&weight=${weightKg}&cod=0`;
    const res = await fetch(url, { headers: { Authorization: `Bearer ${token}` } });
    const data = await res.json();

    const couriers = data?.data?.available_courier_companies;
    console.log('Couriers available:', couriers?.length ?? 0);

    if (couriers && couriers.length > 0) {
      const getCharge = c => (typeof c.rate === 'object' ? c.rate?.rate : c.rate) ?? c.freight_charge ?? 999999;
      const cheapest = couriers.reduce((min, c) => getCharge(c) < getCharge(min) ? c : min, couriers[0]);
      const baseRate = Math.round(getCharge(cheapest));
      const coverage = cheapest.coverage_charges || 0;
      const rate = baseRate + coverage;
      console.log('Cheapest courier:', cheapest.courier_name, 'base:', baseRate, 'coverage:', coverage, 'total:', rate);
      return {
        statusCode: 200,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ shipping_inr: rate }),
      };
    }

    console.log('No couriers returned');
    return { statusCode: 200, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ shipping_inr: null }) };

  } catch (err) {
    console.error('International rate error:', err.message);
    return { statusCode: 200, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ shipping_inr: null }) };
  }
};

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
  _tokenExpiry = Date.now() + 22 * 60 * 60 * 1000;
  return _token;
}
