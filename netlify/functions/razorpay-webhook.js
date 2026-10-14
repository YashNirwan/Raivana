const crypto = require('crypto');
const { connectLambda } = require('@netlify/blobs');
const { processPayment } = require('../lib/process-payment');

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  // Verify Razorpay signature
  const secret    = process.env.RAZORPAY_WEBHOOK_SECRET;
  const signature = event.headers['x-razorpay-signature'];

  if (!secret || !signature) {
    return { statusCode: 400, body: 'Missing signature config' };
  }

  const expected = crypto.createHmac('sha256', secret).update(event.body).digest('hex');
  if (expected !== signature) {
    return { statusCode: 400, body: 'Invalid signature' };
  }

  const payload = JSON.parse(event.body);

  // Only act on successful captures
  if (payload.event !== 'payment.captured') {
    return { statusCode: 200, body: 'OK' };
  }

  // Functions written as exports.handler run in Lambda compatibility mode, where Netlify
  // Blobs is not configured automatically. Without this, getStore() threw on every
  // webhook from June 19 to October 14, and no order email or Shiprocket order went out.
  connectLambda(event);

  try {
    const result = await processPayment(payload.payload.payment.entity);
    // A non-2xx makes Razorpay retry; steps that already succeeded are skipped then.
    return result.ok ? { statusCode: 200, body: 'OK' } : { statusCode: 500, body: 'Retry' };
  } catch (err) {
    console.error('Webhook processing error:', err);
    return { statusCode: 500, body: 'Retry' };
  }
};
