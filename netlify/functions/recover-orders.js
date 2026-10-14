// Admin tool: find captured payments whose order emails or Shiprocket order never went
// out, and run the missing steps. Built after the webhook failed silently from June 19
// to October 14; also the way to recover any single order a future outage drops.
//
// POST { password, action: 'list', since: 'YYYY-MM-DD' }
// POST { password, action: 'process', payment_id: 'pay_...' }
const { connectLambda } = require('@netlify/blobs');
const { processPayment, razorpayClient, paymentStore, doneSteps, STEPS } = require('../lib/process-payment');

const json = (statusCode, body) => ({ statusCode, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') return json(405, { error: 'Method Not Allowed' });
  let body;
  try { body = JSON.parse(event.body || '{}'); } catch { return json(400, { error: 'Bad request.' }); }
  if (!process.env.ADMIN_PASSWORD || body.password !== process.env.ADMIN_PASSWORD) {
    return json(401, { error: 'Incorrect password.' });
  }

  connectLambda(event);
  try {
    const razorpay = razorpayClient();
    if (body.action === 'list') {
      const from = Math.floor(new Date(body.since || '2026-06-19').getTime() / 1000);
      if (!from) return json(400, { error: 'Bad date.' });
      const store = paymentStore();
      const payments = [];
      for (let skip = 0; skip < 1000; skip += 100) {
        const page = await razorpay.payments.all({ from, count: 100, skip });
        payments.push(...page.items);
        if (page.items.length < 100) break;
      }
      // All lookups at once: one at a time ran past the function time limit.
      const rows = await Promise.all(payments.filter(p => p.status === 'captured').map(async p => {
        const done = await doneSteps(store, p.id);
        return {
          payment_id: p.id,
          order_id: p.order_id,
          date: new Date(p.created_at * 1000).toISOString(),
          amount: `${p.currency} ${(p.amount / 100).toFixed(2)}`,
          email: p.email,
          missing: STEPS.filter(s => !done.has(s)),
        };
      }));
      return json(200, { payments: rows });
    }

    if (body.action === 'process') {
      const payment = await razorpay.payments.fetch(String(body.payment_id || ''));
      if (payment.status !== 'captured') return json(409, { error: `Payment is ${payment.status}, not captured.` });
      const result = await processPayment(payment);
      return json(200, { payment_id: payment.id, ...result });
    }

    return json(400, { error: 'Unknown action.' });
  } catch (err) {
    console.error('recover-orders error:', err);
    return json(500, { error: err.error?.description || err.message || JSON.stringify(err).slice(0, 300) });
  }
};
