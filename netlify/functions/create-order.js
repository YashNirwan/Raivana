const Razorpay = require('razorpay');

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const { items, currency, customer, shippingCost, weight, amountOverride } = JSON.parse(event.body);

    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

    const zeroDecimalCurrencies = ['JPY', 'KRW'];
    const amount = (amountOverride !== undefined && amountOverride !== null)
      ? (zeroDecimalCurrencies.includes(currency.toUpperCase()) ? Math.round(amountOverride) : Math.round(amountOverride * 100))
      : calculateTotal(items, currency, shippingCost || 0);

    const notes = {
      items: JSON.stringify(items.map(i => ({ name: i.name, price: i.price, size: i.size || '' })))
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
      if (shippingCost) notes.shipping_cost = String(shippingCost);
      if (weight?.totalG)  notes.weight_g   = String(weight.totalG);
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

function calculateTotal(items, currency, shippingCost) {
  const productTotal = items.reduce((sum, item) => {
    return sum + (parseFloat(item.price.replace(/[^0-9.]/g, '')) || 0);
  }, 0);
  const total = productTotal + (shippingCost || 0);
  if (['JPY', 'KRW'].includes(currency.toUpperCase())) return Math.round(total);
  return Math.round(total * 100);
}
