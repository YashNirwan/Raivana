const crypto  = require('crypto');
const Razorpay = require('razorpay');
const { Resend } = require('resend');

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

  try {
    const payment = payload.payload.payment.entity;

    // Fetch the order to get our stored notes (name, email, address, items)
    const razorpay = new Razorpay({
      key_id:    process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

    const order = await razorpay.orders.fetch(payment.order_id);
    const notes = order.notes || {};

    const customerName    = notes.customer_name    || payment.email;
    const customerEmail   = notes.customer_email   || payment.email;
    const customerPhone   = notes.customer_phone   || payment.contact || '';
    const shippingAddress = notes.shipping_address || 'Not provided';
    const items           = safeParseItems(notes.items);
    const amountFormatted = formatAmount(payment.amount, payment.currency);

    const resend = new Resend(process.env.RESEND_API_KEY);

    await Promise.allSettled([
      resend.emails.send({
        from:    'Raivana <orders@raivana.in>',
        to:      customerEmail,
        subject: 'Your Raivana order is confirmed',
        html:    customerEmailHtml({ customerName, items, shippingAddress, amountFormatted }),
      }),
      resend.emails.send({
        from:    'Raivana Orders <orders@raivana.in>',
        to:      'info@raivana.in',
        subject: `New order from ${customerName} — ${amountFormatted}`,
        html:    merchantEmailHtml({ customerName, customerEmail, customerPhone, items, shippingAddress, amountFormatted, orderId: payment.order_id, paymentId: payment.id }),
      }),
      pushToShiprocket(notes, payment),
    ]);
  } catch (err) {
    // Log but return 200 so Razorpay doesn't retry — email failure shouldn't block capture acknowledgement
    console.error('Webhook email error:', err);
  }

  return { statusCode: 200, body: 'OK' };
};

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
    if (!srEmail || !srPassword) return;

    const authRes = await fetch('https://apiv2.shiprocket.in/v1/external/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: srEmail, password: srPassword }),
    });
    const { token } = await authRes.json();
    if (!token) { console.error('Shiprocket auth failed in webhook'); return; }

    const items    = safeParseItems(notes.items);
    const weightKg = Math.max((parseInt(notes.weight_g) || 500) / 1000, 0.5);
    const nameParts = (notes.customer_name || 'Customer').split(' ');
    const firstName = nameParts[0];
    const lastName  = nameParts.slice(1).join(' ') || '.';
    const country   = notes.ship_country || 'India';
    const isIntl    = country !== 'India';

    const orderItems = items.map((item, i) => ({
      name:          item.name + (item.size ? ` (${item.size})` : ''),
      sku:           `SKU-${i + 1}`,
      units:         1,
      selling_price: parseFloat((item.price || '0').replace(/[^0-9.]/g, '')) || 0,
      discount:      0,
      tax:           0,
    }));

    const subTotal    = isIntl
      ? (parseInt(notes.inr_subtotal) || orderItems.reduce((s, i) => s + i.selling_price, 0))
      : orderItems.reduce((s, i) => s + i.selling_price, 0);
    const orderDate   = new Date(Date.now() + 19800000).toISOString().slice(0, 16).replace('T', ' ');
    const pickup      = process.env.SHIPROCKET_PICKUP_LOCATION || 'Primary';
    const orderId     = `RVN-${payment.order_id}`;

    let endpoint, payload;

    if (isIntl) {
      const countryCode = COUNTRY_CODES[country] || 'US';
      payload = {
        order_id:              orderId,
        order_date:            orderDate,
        pickup_location:       pickup,
        billing_customer_name: firstName,
        billing_last_name:     lastName,
        billing_address:       notes.ship_address1 || notes.shipping_address || '',
        billing_address_2:     notes.ship_address2 || '',
        billing_city:          notes.ship_city     || '',
        billing_pincode:       notes.ship_pin      || '',
        billing_country:       country,
        billing_country_code:  countryCode,
        billing_email:         notes.customer_email || '',
        billing_phone:         (notes.customer_phone || '').replace(/\D/g, '').slice(-15),
        order_items:           orderItems,
        payment_method:        'Prepaid',
        sub_total:             subTotal,
        shipment_purpose:      'Commercial',
        currency:              'INR',
        inco_term:             'CIF',
        length:                30,
        breadth:               20,
        height:                20,
        weight:                weightKg,
      };
      endpoint = 'https://apiv2.shiprocket.in/v1/external/international/orders/create';
    } else {
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
        order_items:            orderItems,
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
    } else {
      console.error('Shiprocket order creation failed:', JSON.stringify(data));
    }
  } catch (err) {
    console.error('Shiprocket push error:', err.message);
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
