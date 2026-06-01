// ── RAIVANA CURRENCY DETECTION ───────────────────────────────────────────────
// Detects user location via IP, converts prices automatically

const CURRENCY_CONFIG = {
  USD: { symbol: '$',  code: 'USD', name: 'US Dollar',       flag: '🇺🇸' },
  GBP: { symbol: '£',  code: 'GBP', name: 'British Pound',   flag: '🇬🇧' },
  EUR: { symbol: '€',  code: 'EUR', name: 'Euro',             flag: '🇪🇺' },
  INR: { symbol: '₹',  code: 'INR', name: 'Indian Rupee',    flag: '🇮🇳' },
  AED: { symbol: 'AED ', code: 'AED', name: 'UAE Dirham',    flag: '🇦🇪' },
  AUD: { symbol: 'A$', code: 'AUD', name: 'Australian Dollar', flag: '🇦🇺' },
  CAD: { symbol: 'CA$', code: 'CAD', name: 'Canadian Dollar', flag: '🇨🇦' },
  SGD: { symbol: 'S$', code: 'SGD', name: 'Singapore Dollar', flag: '🇸🇬' },
};

// Country → currency mapping
const COUNTRY_CURRENCY = {
  US: 'USD', GB: 'GBP', IE: 'EUR', DE: 'EUR', FR: 'EUR', IT: 'EUR',
  ES: 'EUR', NL: 'EUR', BE: 'EUR', AT: 'EUR', PT: 'EUR', FI: 'EUR',
  IN: 'INR', AE: 'AED', SA: 'AED', QA: 'AED', KW: 'AED', BH: 'AED',
  AU: 'AUD', NZ: 'AUD', CA: 'CAD', SG: 'SGD', MY: 'USD', HK: 'USD',
};

let currentCurrency = localStorage.getItem('raivana_currency') || 'USD';
let exchangeRates = { USD: 1 };

// Base prices are in USD
async function initCurrency() {
  // Detect from IP — no manual override
  const country = await detectCountry();
  if (country) {
    currentCurrency = COUNTRY_CURRENCY[country] || 'USD';
    localStorage.setItem('raivana_currency', currentCurrency);
  } else {
    currentCurrency = localStorage.getItem('raivana_currency') || 'USD';
  }

  await fetchRates();
  if (typeof applyPrices === 'function') applyPrices();
  // Re-render product grid prices if on products page
  if (typeof window.onCurrencyReady === 'function') window.onCurrencyReady();
  // Also re-render after a short delay to catch any timing issues
  setTimeout(function() {
    if (typeof window.onCurrencyReady === 'function') window.onCurrencyReady();
  }, 500);
}

async function fetchRates() {
  try {
    const cached = localStorage.getItem('raivana_rates');
    const cacheTime = localStorage.getItem('raivana_rates_time');
    const oneHour = 60 * 60 * 1000;

    // Use cached rates if less than 1 hour old
    if (cached && cacheTime && (Date.now() - parseInt(cacheTime)) < oneHour) {
      exchangeRates = JSON.parse(cached);
      return;
    }

    const res = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
    const data = await res.json();
    exchangeRates = data.rates;
    localStorage.setItem('raivana_rates', JSON.stringify(data.rates));
    localStorage.setItem('raivana_rates_time', Date.now().toString());
  } catch (e) {
    // Fallback static rates if API fails
    exchangeRates = {
      USD: 1, GBP: 0.79, EUR: 0.92, INR: 94.75,
      AED: 3.67, AUD: 1.53, CAD: 1.36, SGD: 1.34
    };
  }
}

function convertPrice(usdAmount) {
  const rate = exchangeRates[currentCurrency] || 1;
  const converted = usdAmount * rate;
  const cfg = CURRENCY_CONFIG[currentCurrency];

  // Format based on currency
  if (currentCurrency === 'INR') {
    return cfg.symbol + Math.round(converted).toLocaleString('en-IN');
  }
  if (['AED'].includes(currentCurrency)) {
    return cfg.symbol + converted.toFixed(0);
  }
  return cfg.symbol + converted.toFixed(2);
}

function applyPrices() {
  // Find all elements with data-usd attribute and convert
  document.querySelectorAll('[data-usd]').forEach(el => {
    const usd = parseFloat(el.dataset.usd);
    if (!isNaN(usd)) el.innerText = convertPrice(usd);
  });

  // Also update any visible price displays
  document.querySelectorAll('[data-usd-from]').forEach(el => {
    const usd = parseFloat(el.dataset.usdFrom);
    if (!isNaN(usd)) el.innerText = 'From ' + convertPrice(usd);
  });

  // Notify pages that have a currency-ready hook (products page, detail page)
  if (typeof window.onCurrencyReady === 'function') window.onCurrencyReady();
}

function setCurrency(code) {
  // Manual switching disabled — currency is location-locked
  if (!CURRENCY_CONFIG[code]) return;
  currentCurrency = code;
  applyPrices();
}

function renderCurrencySelector() {
  // Currency is auto-detected and locked — no manual switcher shown
  const el = document.getElementById('currency-selector');
  if (!el) return;
  const cfg = CURRENCY_CONFIG[currentCurrency];
  // Just show the detected currency as read-only text
  el.innerHTML = `<span style="font-size:0.65rem;letter-spacing:0.15em;text-transform:uppercase;opacity:0.55;color:var(--deep);">${cfg.flag} ${cfg.code}</span>`;
}

async function detectCountry() {
  // Primary: Cloudflare trace on this domain — same-origin, no CORS, always available
  try {
    const res = await fetch('/cdn-cgi/trace');
    const text = await res.text();
    const match = text.match(/^loc=([A-Z]{2})/m);
    if (match && match[1]) return match[1];
  } catch (e) {}

  // Fallback: ipapi.co
  try {
    const res = await fetch('https://ipapi.co/json/');
    const data = await res.json();
    if (data.country_code) return data.country_code;
  } catch (e) {}

  return null;
}

// Run on load
document.addEventListener('DOMContentLoaded', initCurrency);
