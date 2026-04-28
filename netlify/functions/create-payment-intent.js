// netlify/functions/create-payment-intent.js
// Runs server-side on Netlify — secret key never exposed to browser

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event) => {
  // Only allow POST
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const { items, currency } = JSON.parse(event.body);

    // Calculate total in smallest currency unit (cents/paise)
    const amount = calculateTotal(items, currency);

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: currency.toLowerCase(),
      automatic_payment_methods: { enabled: true },
      metadata: {
        items: JSON.stringify(items.map(i => ({ name: i.name, price: i.price, size: i.size || '' })))
      }
    });

    return {
      statusCode: 200,
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({ clientSecret: paymentIntent.client_secret })
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
  // Items have price strings like "$45.00" or "₹3,750"
  // Extract numeric value and convert to cents
  let totalUSD = items.reduce((sum, item) => {
    const num = parseFloat(item.price.replace(/[^0-9.]/g, '')) || 0;
    return sum + num;
  }, 0);

  // Zero-decimal currencies (no cents)
  const zeroDecimal = ['INR', 'JPY', 'KRW'];
  if (zeroDecimal.includes(currency.toUpperCase())) {
    return Math.round(totalUSD);
  }
  return Math.round(totalUSD * 100);
}
