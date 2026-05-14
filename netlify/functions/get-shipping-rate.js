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

// Fallback rates in INR per 500g slab, used if Shiprocket API doesn't return couriers
const FALLBACK_RATE_PER_SLAB = {
  'NP': 800,  'BD': 800,  'LK': 800,  'PK': 800,
  'SG': 1200, 'MY': 1200, 'TH': 1400, 'ID': 1400, 'PH': 1400, 'VN': 1400,
  'AE': 1500, 'SA': 1600, 'QA': 1500, 'KW': 1500, 'BH': 1500, 'OM': 1500,
  'JP': 2000, 'KR': 2000, 'CN': 1800, 'HK': 1800, 'TW': 1800,
  'GB': 2500, 'DE': 2500, 'FR': 2500, 'IT': 2500, 'ES': 2500,
  'NL': 2500, 'SE': 2500, 'NO': 2500, 'DK': 2500, 'CH': 2500,
  'AT': 2500, 'BE': 2500, 'PT': 2500, 'IE': 2500,
  'US': 3000, 'CA': 3000, 'AU': 2800, 'NZ': 2800,
  'ZA': 2500, 'NG': 2500, 'KE': 2500, 'EG': 2200,
  'BR': 3000, 'MX': 3000, 'AR': 3000,
};

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const { weightG, hasCeramics, country, pincode } = JSON.parse(event.body);

    const packagingG = 200 + (hasCeramics ? 300 : 0);
    const totalWeightKg = Math.max((weightG + packagingG) / 1000, 0.5);
    const countryCode = COUNTRY_CODES[country] || null;

    const token = await getShiprocketToken();

    const shippingInr = country === 'India'
      ? await getDomesticRate(token, pincode, totalWeightKg)
      : await getInternationalRate(token, countryCode, totalWeightKg);

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

async function getInternationalRate(token, countryCode, weightKg) {
  if (!countryCode) return fallbackRate(null, weightKg);
  try {
    const url = `https://apiv2.shiprocket.in/v1/external/courier/serviceability/international?pickup_postcode=${PICKUP_PINCODE}&delivery_country=${countryCode}&weight=${weightKg}&cod=0&declared_value=50`;
    const res = await fetch(url, { headers: { Authorization: `Bearer ${token}` } });
    const data = await res.json();
    const couriers = data?.data?.available_courier_companies;
    if (couriers && couriers.length > 0) {
      const cheapest = couriers.reduce((min, c) =>
        c.freight_charge < min.freight_charge ? c : min, couriers[0]);
      return Math.round(cheapest.freight_charge);
    }
  } catch (_) { /* fall through */ }
  return fallbackRate(countryCode, weightKg);
}

function fallbackRate(countryCode, weightKg) {
  const ratePerSlab = FALLBACK_RATE_PER_SLAB[countryCode] || 2500;
  const slabs = Math.ceil(weightKg / 0.5);
  return ratePerSlab * slabs;
}
