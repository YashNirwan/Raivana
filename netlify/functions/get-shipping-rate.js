const PICKUP_PINCODE = '110077';

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

// Fallback rates in INR: [base for first 500g, additional per extra 500g]
// Used only if Shiprocket API returns no couriers.
const FALLBACK_RATES = {
  'NP': [700,  300], 'BD': [700,  300], 'LK': [700,  300], 'PK': [700,  300],
  'SG': [900,  400], 'MY': [900,  400], 'TH': [1100, 450], 'ID': [1100, 450], 'PH': [1100, 450], 'VN': [1100, 450],
  'AE': [1200, 450], 'SA': [1300, 500], 'QA': [1200, 450], 'KW': [1200, 450], 'BH': [1200, 450], 'OM': [1200, 450],
  'JP': [1600, 600], 'KR': [1600, 600], 'CN': [1400, 550], 'HK': [1400, 550], 'TW': [1400, 550],
  'GB': [2000, 700], 'DE': [2000, 700], 'FR': [2000, 700], 'IT': [2000, 700], 'ES': [2000, 700],
  'NL': [2000, 700], 'SE': [2000, 700], 'NO': [2000, 700], 'DK': [2000, 700], 'CH': [2000, 700],
  'AT': [2000, 700], 'BE': [2000, 700], 'PT': [2000, 700], 'IE': [2000, 700],
  'US': [2200, 800], 'CA': [2200, 800], 'AU': [2000, 750], 'NZ': [2000, 750],
  'ZA': [2000, 700], 'NG': [2000, 700], 'KE': [2000, 700], 'EG': [1800, 650],
  'BR': [2200, 800], 'MX': [2200, 800], 'AR': [2200, 800],
};

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const { weightG, hasCeramics, country, pincode, declaredValue } = JSON.parse(event.body);

    const packagingG = 200 + (hasCeramics ? 300 : 0);
    const totalWeightKg = Math.max((weightG + packagingG) / 1000, 0.5);
    const countryCode = COUNTRY_CODES[country] || null;

    const shippingInr = country === 'India'
      ? await getDomesticRate(await getShiprocketToken(), pincode, totalWeightKg)
      : getInternationalRate(countryCode, totalWeightKg);

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ shipping_inr: shippingInr }),
    };
  } catch (err) {
    console.error('Shipping rate error:', err.message);
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ shipping_inr: null }),
    };
  }
};

async function getShiprocketToken() {
  const res = await fetch('https://apiv2.shiprocket.in/v1/external/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email:    process.env.SHIPROCKET_EMAIL,
      password: process.env.SHIPROCKET_PASSWORD,
    }),
  });
  const data = await res.json();
  if (!data.token) {
    console.error('Shiprocket auth response:', JSON.stringify(data));
    throw new Error('Shiprocket auth failed');
  }
  return data.token;
}

// Couriers excluded from domestic selection — slow, unreliable, or not e-commerce grade
const EXCLUDED_COURIERS = ['india post', 'surface', 'ekart', 'amazon'];

function isReliableCourier(name) {
  const lower = name.toLowerCase();
  return !EXCLUDED_COURIERS.some(excl => lower.includes(excl));
}

async function getDomesticRate(token, deliveryPincode, weightKg) {
  if (!deliveryPincode || String(deliveryPincode).replace(/\s/g, '').length < 6) {
    throw new Error('Invalid pincode');
  }
  const url = `https://apiv2.shiprocket.in/v1/external/courier/serviceability/?pickup_postcode=${PICKUP_PINCODE}&delivery_postcode=${deliveryPincode}&weight=${weightKg}&cod=0`;
  const res = await fetch(url, { headers: { Authorization: `Bearer ${token}` } });
  const data = await res.json();

  const all = data?.data?.available_courier_companies;
  if (!all || all.length === 0) throw new Error('No domestic couriers available');

  const reliable = all.filter(c => isReliableCourier(c.courier_name));
  const pool = reliable.length > 0 ? reliable : all; // fallback to all if filter leaves nothing

  const cheapest = pool.reduce((min, c) =>
    c.freight_charge < min.freight_charge ? c : min, pool[0]);
  return Math.round(cheapest.freight_charge);
}

// Shiprocket's international serviceability API requires an order_id (post-creation only),
// so live rates aren't available at checkout. Use calibrated regional estimates instead.
function getInternationalRate(countryCode, weightKg) {
  return fallbackRate(countryCode, weightKg);
}

function fallbackRate(countryCode, weightKg) {
  const r = FALLBACK_RATES[countryCode] || [2000, 700];
  const additionalSlabs = Math.ceil(Math.max(weightKg - 0.5, 0) / 0.5);
  return r[0] + additionalSlabs * r[1];
}
