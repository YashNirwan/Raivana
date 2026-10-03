const Razorpay = require('razorpay');
const https = require('https');
const { RAIVANA_PRODUCTS } = require('../../products-data.js');
const EXTRA_PRODUCTS = require('../../products-extra.json');

// The browser sends the amount to charge. Before creating the Razorpay order, price
// the bag from the catalogue the same way checkout.html does and refuse an amount
// that doesn't match, so a pricing bug or an edited request can't undercharge.
const TOLERANCE = 0.04;          // rate drift between the browser's cached rates and ours
const TOLERANCE_NO_RATES = 0.10; // if the live rates can't be fetched
const FALLBACK_RATES = { USD: 1, GBP: 0.79, EUR: 0.92, INR: 94.75, AED: 3.67, AUD: 1.53, CAD: 1.36, SGD: 1.34 };

function itemPriceInr(item, isIntl) {
  const all = RAIVANA_PRODUCTS.concat(Array.isArray(EXTRA_PRODUCTS) ? EXTRA_PRODUCTS : []);
  const product = all.find(p => p.name === item.name);
  if (!product) return null;
  let inr = null;
  if (product.variants && item.size) {
    const v = product.variants.find(v => v.label === item.size);
    if (v) inr = isIntl ? (v.price_inr_export || v.price_inr) : v.price_inr;
  }
  if (inr === null || inr === undefined) inr = isIntl ? (product.price_inr_export || product.price_inr) : product.price_inr;
  return typeof inr === 'number' && inr > 0 ? inr : null;
}

function fetchRates() {
  return new Promise(resolve => {
    const req = https.get('https://api.exchangerate-api.com/v4/latest/USD', { timeout: 3000 }, res => {
      let body = '';
      res.on('data', c => body += c);
      res.on('end', () => { try { resolve(JSON.parse(body).rates || null); } catch (e) { resolve(null); } });
    });
    req.on('timeout', () => { req.destroy(); resolve(null); });
    req.on('error', () => resolve(null));
  });
}

// Expected total in the payment currency, or { error } if the bag can't be priced.
async function expectedTotal(items, currency, customer, shippingCostInr) {
  const isIntl = !!(customer && customer.country && customer.country !== 'India');
  let inr = 0;
  for (const item of items) {
    const price = itemPriceInr(item, isIntl);
    if (price === null) return { error: `"${item.name}" can't be priced. Please remove it from your bag and contact us.` };
    inr += price;
  }
  inr += Number(shippingCostInr) || 0;
  const cur = currency.toUpperCase();
  if (cur === 'INR') return { amount: inr, tolerance: TOLERANCE };
  const live = await fetchRates();
  const rates = live && live.INR && live[cur] ? live : FALLBACK_RATES;
  if (!rates[cur]) return { error: `Unsupported currency ${cur}.` };
  return { amount: (inr / rates.INR) * rates[cur], tolerance: rates === live ? TOLERANCE : TOLERANCE_NO_RATES };
}

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const { items, currency, customer, shippingCost, weight, amountOverride, inrSubtotal } = JSON.parse(event.body);

    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

    if (!Array.isArray(items) || !items.length || !currency) {
      return { statusCode: 400, body: JSON.stringify({ error: 'Your bag is empty.' }) };
    }
    const expected = await expectedTotal(items, currency, customer, shippingCost);
    if (expected.error) return { statusCode: 409, body: JSON.stringify({ error: expected.error }) };
    const requested = (amountOverride !== undefined && amountOverride !== null) ? Number(amountOverride) : expected.amount;
    const slack = expected.amount * expected.tolerance + 1;
    if (!(Math.abs(requested - expected.amount) <= slack)) {
      console.error('create-order: amount mismatch', JSON.stringify({ currency, requested, expected: expected.amount, country: customer && customer.country, items: items.map(i => [i.name, i.size || '']) }));
      return { statusCode: 409, body: JSON.stringify({ error: "We couldn't confirm your order total. Please refresh the page and try again." }) };
    }

    const zeroDecimalCurrencies = ['JPY', 'KRW'];
    const amount = zeroDecimalCurrencies.includes(currency.toUpperCase()) ? Math.round(requested) : Math.round(requested * 100);

    const notes = {
      items: JSON.stringify(items.map(i => ({ name: i.name, price: i.price, size: i.size || '', category: i.category || 'brass' })))
    };

    if (customer) {
      notes.customer_name    = customer.name     || '';
      notes.customer_email   = customer.email    || '';
      notes.customer_phone   = customer.phone    || '';
      notes.shipping_address = customer.address  || '';
      notes.ship_address1    = customer.address1 || '';
      notes.ship_address2    = customer.address2 || '';
      notes.ship_city        = customer.city     || '';
      notes.ship_state       = customer.state    || '';
      notes.ship_pin         = customer.pin      || '';
      notes.ship_country     = customer.country  || '';
      if (shippingCost)  notes.shipping_cost = String(shippingCost);
      if (weight?.totalG) notes.weight_g    = String(weight.totalG);
      if (inrSubtotal)   notes.inr_subtotal = String(inrSubtotal);
    }

    const order = await razorpay.orders.create({
      amount,
      currency: currency.toUpperCase(),
      receipt: `rcpt_${Date.now()}`,
      notes,
    });

    return {
      statusCode: 200,
      headers: { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json' },
      body: JSON.stringify({ orderId: order.id, amount: order.amount, currency: order.currency })
    };
  } catch (err) {
    console.error(err);
    const errorMsg = err.message || (err.error && err.error.description) || JSON.stringify(err);
    return { statusCode: 500, body: JSON.stringify({ error: errorMsg }) };
  }
};
