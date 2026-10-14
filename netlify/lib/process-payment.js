// Everything that happens after a payment is captured: the customer's confirmation,
// the order email to info@raivana.in, and the Shiprocket order. Shared by the Razorpay
// webhook and the admin recovery tool so both run exactly the same steps.
//
// Each step is recorded in Netlify Blobs only once it has succeeded, under its own key.
// A retry (Razorpay's, or a manual replay) redoes only what failed, so nobody gets two
// emails and Shiprocket never gets a duplicate order.

const Razorpay = require('razorpay');
const { Resend } = require('resend');
const { getStore } = require('@netlify/blobs');

const STEPS = ['customer-email', 'merchant-email', 'shiprocket'];
const TTL = 60 * 60 * 24 * 90; // seconds

function razorpayClient() {
  return new Razorpay({ key_id: process.env.RAZORPAY_KEY_ID, key_secret: process.env.RAZORPAY_KEY_SECRET });
}

function paymentStore() {
  // Standard (eventual) reads: strong consistency is not available to Lambda-compatible
  // functions, and the v2 format could not load the razorpay package.
  return getStore({ name: 'processed-payments' });
}

// Which steps are already done for a payment. A payment the old webhook recorded as a
// whole (key = payment id) counts as fully done.
async function doneSteps(store, paymentId) {
  const [whole, ...each] = await Promise.all([paymentId, ...STEPS.map(s => `${paymentId}:${s}`)].map(k => store.get(k)));
  if (whole) return new Set(STEPS);
  return new Set(STEPS.filter((_, i) => each[i]));
}

async function processPayment(payment) {
  const store = paymentStore();
  const done = await doneSteps(store, payment.id);
  if (done.size === STEPS.length) return { ok: true, skipped: true, steps: {} };

  const order = await razorpayClient().orders.fetch(payment.order_id);
  const notes = order.notes || {};
  const customerName    = notes.customer_name    || payment.email;
  const customerEmail   = notes.customer_email   || payment.email;
  const customerPhone   = notes.customer_phone   || payment.contact || '';
  const shippingAddress = notes.shipping_address || 'Not provided';
  const items           = safeParseItems(notes.items);
  const amountFormatted = formatAmount(payment.amount, payment.currency);
  const resend = new Resend(process.env.RESEND_API_KEY);

  // Resend reports failure in its reply ({ error }) rather than by throwing.
  const send = async (msg) => {
    const { error } = await resend.emails.send(msg);
    if (error) { console.error('Resend error:', JSON.stringify(error)); return false; }
    return true;
  };
  const work = {
    'customer-email': () => send({
      from: 'Raivana <orders@raivana.in>', to: customerEmail,
      subject: 'Your Raivana order is confirmed',
      html: customerEmailHtml({ customerName, items, shippingAddress, amountFormatted }),
    }),
    'merchant-email': () => send({
      from: 'Raivana Orders <orders@raivana.in>', to: 'info@raivana.in',
      subject: `New order from ${customerName} — ${amountFormatted}`,
      html: merchantEmailHtml({ customerName, customerEmail, customerPhone, items, shippingAddress, amountFormatted, orderId: payment.order_id, paymentId: payment.id }),
    }),
    'shiprocket': () => pushToShiprocket(notes, payment),
  };

  const steps = {};
  for (const step of STEPS) {
    if (done.has(step)) { steps[step] = 'already done'; continue; }
    let ok = false;
    try { ok = await work[step](); } catch (err) { console.error(`${step} failed for ${payment.id}:`, err.message); }
    steps[step] = ok ? 'done' : 'failed';
    if (ok) await store.set(`${payment.id}:${step}`, new Date().toISOString(), { ttl: TTL });
  }
  const ok = Object.values(steps).every(v => v !== 'failed');
  if (!ok) console.error('Payment not fully processed:', payment.id, JSON.stringify(steps));
  return { ok, steps, customerName, amountFormatted };
}

module.exports = { processPayment, razorpayClient, paymentStore, doneSteps, STEPS };

const COUNTRY_CODES = {
  'India': 'IN', 'Nepal': 'NP', 'Bangladesh': 'BD', 'Sri Lanka': 'LK',
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

async function pushToShiprocket(notes, payment) {
  try {
    const srEmail    = process.env.SHIPROCKET_EMAIL;
    const srPassword = process.env.SHIPROCKET_PASSWORD;
    if (!srEmail || !srPassword) return true; // not configured: nothing to do

    const authRes = await fetch('https://apiv2.shiprocket.in/v1/external/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: srEmail, password: srPassword }),
    });
    const { token } = await authRes.json();
    if (!token) { console.error('Shiprocket auth failed'); return false; }

    const items    = safeParseItems(notes.items);
    const weightKg = Math.max((parseInt(notes.weight_g) || 500) / 1000, 0.5);
    const nameParts = (notes.customer_name || 'Customer').split(' ');
    const firstName = nameParts[0];
    const lastName  = nameParts.slice(1).join(' ') || '.';
    const country   = notes.ship_country || 'India';
    const isIntl    = country !== 'India';

    const domesticItems = items.map((item, i) => ({
      name:          item.name + (item.size ? ` (${item.size})` : ''),
      sku:           `SKU-${i + 1}`,
      units:         1,
      selling_price: parseFloat((item.price || '0').replace(/[^0-9.]/g, '')) || 0,
      discount:      0,
      tax:           0,
    }));

    const intlItems = items.map((item, i) => ({
      name:           item.name + (item.size ? ` (${item.size})` : ''),
      sku:            `SKU-${i + 1}`,
      category_name:  'Default Category',
      tax:            '0',
      hsn:            getHsn(item.category),
      units:          '1',
      selling_price:  String(parseFloat((item.price || '0').replace(/[^0-9.]/g, '')) || 0),
      discount:       '',
    }));

    const subTotal    = isIntl
      ? (parseInt(notes.inr_subtotal) || domesticItems.reduce((s, i) => s + i.selling_price, 0))
      : domesticItems.reduce((s, i) => s + i.selling_price, 0);
    const orderDate   = new Date(Date.now() + 19800000).toISOString().slice(0, 16).replace('T', ' ');
    const orderId     = `RVN-${payment.order_id}`;

    let endpoint, payload;

    if (isIntl) {
      const pickupLocation = await getPickupLocation(token);
      payload = {
        order_id:                orderId,
        isd_code:                '',
        billing_isd_code:        '+91',
        order_date:              orderDate,
        billing_customer_name:   pickupLocation?.pickup_location || 'Raivana',
        billing_last_name:       '',
        billing_address:         pickupLocation?.address || 'New Delhi',
        billing_address_2:       pickupLocation?.address_2 || '',
        billing_city:            pickupLocation?.city || 'New Delhi',
        billing_state:           pickupLocation?.state || 'Delhi',
        billing_country:         'India',
        billing_pincode:         String(pickupLocation?.pin_code || '110077'),
        billing_phone:           String(pickupLocation?.phone || '9999999999').replace(/\D/g, ''),
        billing_email:           'info@raivana.in',
        shipping_is_billing:     0,
        shipping_customer_name:  firstName,
        shipping_last_name:      lastName,
        shipping_address:        notes.ship_address1 || notes.shipping_address || '',
        shipping_address_2:      notes.ship_address2 || '',
        shipping_city:           notes.ship_city     || '',
        shipping_state:          notes.ship_state    || '',
        shipping_country:        country,
        shipping_pincode:        notes.ship_pin      || '',
        shipping_phone:          parseInt((notes.customer_phone || '9999999999').replace(/\D/g, '')) || 9999999999,
        shipping_email:          notes.customer_email || '',
        order_items:             intlItems,
        payment_method:          'Prepaid',
        sub_total:               subTotal,
        weight:                  weightKg,
        length:                  30,
        breadth:                 20,
        height:                  20,
        pickup_location_id:      pickupLocation?.id,
        purpose_of_shipment:     0,
        currency:                'INR',
        reasonOfExport:          2,
        commodity:               'true',
        mies:                    'true',
        igstPaymentStatus:       'N',
        Terms_Of_Invoice:        'CIF',
        is_order_revamp:         1,
        is_document:             0,
        delivery_challan:        false,
      };
      endpoint = 'https://apiv2.shiprocket.in/v1/external/international/orders/create/adhoc';
    } else {
      // Removed by mistake on June 1 (c6fb8f6) along with the international billing
      // change, which made every domestic order throw before reaching Shiprocket.
      const pickup = process.env.SHIPROCKET_PICKUP_LOCATION || 'Primary';
      payload = {
        order_id:               orderId,
        order_date:             orderDate,
        pickup_location:        pickup,
        billing_customer_name:  firstName,
        billing_last_name:      lastName,
        billing_address:        notes.ship_address1 || notes.shipping_address || '',
        billing_address_2:      notes.ship_address2 || '',
        billing_city:           notes.ship_city     || '',
        billing_pincode:        notes.ship_pin      || '',
        billing_state:          notes.ship_state    || '',
        billing_country:        'India',
        billing_email:          notes.customer_email || '',
        billing_phone:          (notes.customer_phone || '').replace(/\D/g, '').slice(-10),
        shipping_is_billing:    true,
        order_items:            domesticItems,
        payment_method:         'Prepaid',
        sub_total:              subTotal,
        length:                 20,
        breadth:                15,
        height:                 15,
        weight:                 weightKg,
      };
      endpoint = 'https://apiv2.shiprocket.in/v1/external/orders/create/adhoc';
    }

    const res = await fetch(endpoint, {
      method:  'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      body:    JSON.stringify(payload),
    });
    const data = await res.json();

    if (data.order_id) {
      console.log(`Shiprocket ${isIntl ? 'international' : 'domestic'} order created: ${data.order_id} for payment ${payment.id}`);
      return true;
    }
    console.error('Shiprocket order creation failed:', JSON.stringify(data));
    return false;
  } catch (err) {
    console.error('Shiprocket push error:', err.message);
    return false;
  }
}

function getHsn(category) {
  if (category === 'ceramics') return '69131090';
  if (category === 'woodwork') return '44209090';
  return '83062900';
}

async function getPickupLocation(token) {
  try {
    const res = await fetch('https://apiv2.shiprocket.in/v1/external/settings/company/pickup', {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await res.json();
    const locations = data?.data?.shipping_address || [];
    const name = process.env.SHIPROCKET_PICKUP_LOCATION || 'Home';
    return locations.find(l => l.pickup_location === name) || locations[0] || null;
  } catch (_) {
    return null;
  }
}

function safeParseItems(raw) {
  try { return JSON.parse(raw || '[]'); } catch { return []; }
}

function formatAmount(amount, currency) {
  const symbols = { INR: '₹', USD: '$', GBP: '£', EUR: '€', AED: 'AED ', AUD: 'A$', CAD: 'C$', SGD: 'S$' };
  const symbol = symbols[currency] || (currency + ' ');
  return symbol + (amount / 100).toFixed(2);
}

function customerEmailHtml({ customerName, items, shippingAddress, amountFormatted }) {
  const itemRows = items.map(item => `
    <tr>
      <td style="padding:10px 0;border-bottom:1px solid #e8dfc8;font-size:15px;font-family:Georgia,serif;color:#1C1008;">
        ${item.name}${item.size ? ` <span style="font-size:12px;color:#8a7a6a;">(${item.size})</span>` : ''}
      </td>
      <td style="padding:10px 0;border-bottom:1px solid #e8dfc8;text-align:right;font-size:14px;color:#1C1008;">${item.price}</td>
    </tr>`).join('');

  return `<!DOCTYPE html>
<html><head><meta charset="UTF-8"></head>
<body style="margin:0;padding:0;background:#F2EAD8;font-family:'Helvetica Neue',Arial,sans-serif;">
<div style="max-width:580px;margin:0 auto;padding:40px 20px;">
  <div style="height:4px;background:repeating-linear-gradient(90deg,#C1622F 0,#C1622F 20px,#E8A030 20px,#E8A030 40px,#C9A84C 40px,#C9A84C 60px,#1C1008 60px,#1C1008 80px);"></div>
  <div style="background:#FAF6EE;padding:40px;">

    <div style="text-align:center;margin-bottom:32px;">
      <span style="font-family:Georgia,serif;font-size:28px;letter-spacing:6px;color:#1C1008;text-transform:uppercase;">Rai<span style="color:#C1622F;">vana</span></span>
    </div>

    <div style="font-family:Georgia,serif;font-size:22px;color:#1C1008;margin-bottom:8px;">Order Confirmed</div>
    <div style="font-size:14px;color:#6b5c4e;line-height:1.8;margin-bottom:32px;">
      Thank you, ${customerName}. Your order has been received and your handcrafted piece is being prepared with care.
    </div>

    <div style="font-size:10px;letter-spacing:2px;text-transform:uppercase;color:#8a7a6a;margin-bottom:12px;">Order Summary</div>
    <table style="width:100%;border-collapse:collapse;">
      ${itemRows}
      <tr>
        <td style="padding:14px 0 0;font-size:13px;font-weight:bold;color:#1C1008;">Total Paid</td>
        <td style="padding:14px 0 0;text-align:right;font-size:14px;font-weight:bold;color:#C1622F;">${amountFormatted}</td>
      </tr>
    </table>

    <div style="margin-top:32px;padding:20px;background:#F2EAD8;border-left:3px solid #C9A84C;">
      <div style="font-size:10px;letter-spacing:2px;text-transform:uppercase;color:#8a7a6a;margin-bottom:8px;">Shipping To</div>
      <div style="font-size:14px;color:#1C1008;line-height:1.7;">${shippingAddress}</div>
    </div>

    <div style="margin-top:28px;font-size:13px;color:#6b5c4e;line-height:1.8;">
      Your order will be carefully packaged and dispatched within <strong>3–5 business days</strong>. We will send you tracking details once your package is on its way.
    </div>

    <div style="margin-top:32px;padding-top:24px;border-top:1px solid #e8dfc8;font-size:12px;color:#8a7a6a;">
      Questions? Write to us at <a href="mailto:info@raivana.in" style="color:#C1622F;text-decoration:none;">info@raivana.in</a>
    </div>
  </div>
  <div style="height:4px;background:repeating-linear-gradient(90deg,#C1622F 0,#C1622F 20px,#E8A030 20px,#E8A030 40px,#C9A84C 40px,#C9A84C 60px,#1C1008 60px,#1C1008 80px);"></div>
</div>
</body></html>`;
}

function merchantEmailHtml({ customerName, customerEmail, customerPhone, items, shippingAddress, amountFormatted, orderId, paymentId }) {
  const itemList = items.map(item =>
    `<li style="margin-bottom:6px;">${item.name}${item.size ? ` (${item.size})` : ''} — ${item.price}</li>`
  ).join('');

  return `<!DOCTYPE html>
<html><head><meta charset="UTF-8"></head>
<body style="margin:0;padding:0;background:#f5f5f5;font-family:'Helvetica Neue',Arial,sans-serif;">
<div style="max-width:580px;margin:0 auto;padding:40px 20px;">
  <div style="background:#FAF6EE;padding:32px 40px;border-top:4px solid #C1622F;">

    <div style="font-size:13px;color:#8a7a6a;text-transform:uppercase;letter-spacing:1.5px;margin-bottom:4px;">New Order</div>
    <div style="font-family:Georgia,serif;font-size:26px;color:#C1622F;margin-bottom:28px;">${amountFormatted}</div>

    <table style="width:100%;border-collapse:collapse;margin-bottom:28px;">
      <tr><td style="padding:7px 0;font-size:11px;letter-spacing:1.5px;text-transform:uppercase;color:#8a7a6a;width:130px;">Customer</td><td style="font-size:14px;color:#1C1008;">${customerName}</td></tr>
      <tr><td style="padding:7px 0;font-size:11px;letter-spacing:1.5px;text-transform:uppercase;color:#8a7a6a;">Email</td><td style="font-size:14px;"><a href="mailto:${customerEmail}" style="color:#C1622F;text-decoration:none;">${customerEmail}</a></td></tr>
      <tr><td style="padding:7px 0;font-size:11px;letter-spacing:1.5px;text-transform:uppercase;color:#8a7a6a;">Phone</td><td style="font-size:14px;color:#1C1008;">${customerPhone}</td></tr>
      <tr><td style="padding:7px 0;font-size:11px;letter-spacing:1.5px;text-transform:uppercase;color:#8a7a6a;">Order ID</td><td style="font-size:12px;color:#6b5c4e;font-family:monospace;">${orderId}</td></tr>
      <tr><td style="padding:7px 0;font-size:11px;letter-spacing:1.5px;text-transform:uppercase;color:#8a7a6a;">Payment ID</td><td style="font-size:12px;color:#6b5c4e;font-family:monospace;">${paymentId}</td></tr>
    </table>

    <div style="margin-bottom:24px;">
      <div style="font-size:11px;letter-spacing:1.5px;text-transform:uppercase;color:#8a7a6a;margin-bottom:10px;">Items Ordered</div>
      <ul style="margin:0;padding-left:20px;font-size:14px;color:#1C1008;line-height:1.9;">${itemList}</ul>
    </div>

    <div style="background:#F2EAD8;padding:16px 20px;border-left:3px solid #C9A84C;">
      <div style="font-size:11px;letter-spacing:1.5px;text-transform:uppercase;color:#8a7a6a;margin-bottom:8px;">Ship To</div>
      <div style="font-size:14px;color:#1C1008;line-height:1.7;">${shippingAddress}</div>
    </div>

  </div>
</div>
</body></html>`;
}
