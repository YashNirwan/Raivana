// Netlify Functions v2 format. Netlify Blobs is configured automatically here, including
// the strongly consistent reads the per-step idempotency relies on. The previous
// exports.handler (Lambda compatibility) version could not do strong reads at all.
import crypto from 'node:crypto';
import lib from '../lib/process-payment.js';

const { processPayment } = lib;

export default async (req) => {
  if (req.method !== 'POST') return new Response('Method Not Allowed', { status: 405 });

  // Verify Razorpay signature over the raw body
  const secret    = process.env.RAZORPAY_WEBHOOK_SECRET;
  const signature = req.headers.get('x-razorpay-signature');
  const body      = await req.text();

  if (!secret || !signature) return new Response('Missing signature config', { status: 400 });

  const expected = crypto.createHmac('sha256', secret).update(body).digest('hex');
  if (expected !== signature) return new Response('Invalid signature', { status: 400 });

  const payload = JSON.parse(body);

  // Only act on successful captures
  if (payload.event !== 'payment.captured') return new Response('OK');

  try {
    const result = await processPayment(payload.payload.payment.entity);
    // A non-2xx makes Razorpay retry; steps that already succeeded are skipped then.
    return result.ok ? new Response('OK') : new Response('Retry', { status: 500 });
  } catch (err) {
    console.error('Webhook processing error:', err);
    return new Response('Retry', { status: 500 });
  }
};
