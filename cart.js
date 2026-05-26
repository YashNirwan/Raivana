// ── RAIVANA SHARED CART ──────────────────────────────────────────────────────
// Persists across all pages via localStorage

function getCart() {
  try { return JSON.parse(localStorage.getItem('raivana_cart')) || []; }
  catch(e) { return []; }
}

function saveCart(items) {
  localStorage.setItem('raivana_cart', JSON.stringify(items));
}

function openCart(e) {
  if (e) e.preventDefault();
  document.getElementById('cartDrawer').classList.add('open');
  document.getElementById('cartOverlay').classList.add('open');
}

function closeCart() {
  document.getElementById('cartDrawer').classList.remove('open');
  document.getElementById('cartOverlay').classList.remove('open');
}

function removeItem(index) {
  const cart = getCart();
  cart.splice(index, 1);
  saveCart(cart);
  renderCart();
}

function addToCart(name, price, img, size) {
  const cart = getCart();
  cart.push({ name, price, img: img || '', size: size || null });
  saveCart(cart);
  renderCart();
  openCart();
  if (typeof fbq === 'function') {
    fbq('track', 'AddToCart', { content_name: name, currency: 'INR' });
  }
}

function renderCart() {
  const cart = getCart();
  const container = document.getElementById('cart-items-container');
  const emptyMsg = document.getElementById('cart-empty-msg');
  const countEl = document.getElementById('cart-count');
  const subtotalEl = document.getElementById('cart-subtotal-price');

  if (!container) return;

  // Clear existing items (keep empty msg)
  container.querySelectorAll('.cart-item').forEach(el => el.remove());

  if (cart.length === 0) {
    if (emptyMsg) emptyMsg.style.display = 'block';
    if (subtotalEl) subtotalEl.innerText = '$0.00';
    if (countEl) countEl.innerText = '0';
    return;
  }

  if (emptyMsg) emptyMsg.style.display = 'none';

  let total = 0;
  cart.forEach((item, i) => {
    const price = parseFloat(item.price.replace(/[^0-9.]/g, '')) || 0;
    total += price;
    const el = document.createElement('div');
    el.className = 'cart-item';
    el.innerHTML = `
      ${item.img ? `<img src="${item.img}" class="cart-item-img" alt="${item.name}" onerror="this.style.display='none'">` : '<div class="cart-item-img" style="background:var(--blush);"></div>'}
      <div class="cart-item-info">
        <div class="cart-item-title">${item.name}</div>
        <div class="cart-item-price">${item.price}</div>
        ${item.size ? `<div style="font-size:0.7rem;color:rgba(28,16,8,0.5);margin-top:0.2rem;">Size: ${item.size}</div>` : ''}
        <button class="cart-item-remove" onclick="removeItem(${i})">Remove</button>
      </div>`;
    container.appendChild(el);
  });

  if (subtotalEl) subtotalEl.innerText = (cart[0]?.price?.match(/^[^\d]*/)?.[0] || '$') + total.toFixed(2);
  if (countEl) countEl.innerText = cart.length;

  // Re-apply currency conversion if available
  if (typeof applyPrices === 'function') applyPrices();
}

function whatsappCheckout() {
  const cart = getCart();
  if (cart.length === 0) return;
  // Go to Stripe checkout page
  window.location.href = 'checkout.html';
}

function whatsappFallback() {
  const cart = getCart();
  if (cart.length === 0) return;
  let msg = 'Hello! I would like to enquire about purchasing from Raivana:%0A%0A';
  cart.forEach(item => {
    msg += `• ${item.name}${item.size ? ' (Size: ' + item.size + ')' : ''} — ${item.price}%0A`;
  });
  msg += '%0APlease let me know how to proceed. Thank you!';
  window.open('https://wa.me/919599225549?text=' + msg, '_blank');
}

// Render cart on every page load
document.addEventListener('DOMContentLoaded', renderCart);


