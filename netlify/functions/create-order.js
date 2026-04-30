// netlify/functions/create-order.js
// Creates a Razorpay order server-side

const Razorpay = require('razorpay');

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const { items, currency } = JSON.parse(event.body);

    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

    // Calculate total in smallest unit (paise for INR, cents for others)
    const amount = calculateTotal(items, currency);

    const order = await razorpay.orders.create({
      amount,
      currency: currency.toUpperCase(),
      receipt: `rcpt_${Date.now()}`,
      notes: {
        items: JSON.stringify(items.map(i => ({
          name: i.name,
          price: i.price,
          size: i.size || ''
        })))
      }
    });

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        orderId: order.id,
        amount: order.amount,
        currency: order.currency
      })
    };
  } catch (err) {
    console.error(err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message })
    };
  }
};

function calculateTotal(items, currency) {
  // Extract numeric value from price strings like "₹2,500" or "$45.00"
  const total = items.reduce((sum, item) => {
    const num = parseFloat(item.price.replace(/[^0-9.]/g, '')) || 0;
    return sum + num;
  }, 0);

  // Zero decimal currencies
  const zeroDecimal = ['JPY', 'KRW'];
  if (zeroDecimal.includes(currency.toUpperCase())) {
    return Math.round(total);
  }

  // INR and most others — multiply by 100 for paise/cents
  return Math.round(total * 100);
}
