# Raivana — Authentic Rajasthani Handicrafts

> A full-stack e-commerce platform built to bring handcrafted Indian artisan goods to global markets — designed, engineered, and deployed from scratch.

![Live](https://img.shields.io/badge/Live-raivana.in-C1622F?style=flat-square)
![Stack](https://img.shields.io/badge/Stack-HTML%20%2F%20CSS%20%2F%20JS-1C1008?style=flat-square)
![Payments](https://img.shields.io/badge/Payments-Razorpay-3395FF?style=flat-square)
![Hosting](https://img.shields.io/badge/Hosting-Netlify-00C7B7?style=flat-square)
![CDN](https://img.shields.io/badge/CDN-Cloudflare-F38020?style=flat-square)

---

## Overview

Raivana is a luxury handicraft export business sourcing handmade ceramics, brass metalwork, mango wood mirrors, and kadam wood sculptures directly from artisan workshops in Jaipur, Rajasthan. The platform is built to position authentic Indian craft as a premium product for global buyers in the US, UK, UAE, and Europe — and ships worldwide.

This repository contains the complete frontend and serverless backend.

---

## Features

### Storefront
- Multi-page website with cinematic scroll storytelling
- Fully responsive across mobile, tablet, and desktop
- Hover mega-menu with category panels (Brass / Ceramics / Woodwork / New Collection), subcategory deep-links, and editorial product images
- Mobile nav: hamburger left, logo centred, cart icon right
- Animated hero, marquee ticker, image breaks, and fade-in scroll effects
- Live Instagram feed via Behold API (always shows latest 3 posts)

### Product Catalogue
- **156 products** across Brass, Ceramics, and Woodwork categories
- Product listing page with live category + subcategory filtering
- Product detail page with image gallery carousel, size/variant selection, and currency-aware pricing
- Persistent shopping cart via `localStorage` — survives page navigation
- Slide-out cart drawer on every page with live item count

### Payments & Checkout
- **Razorpay** live integration — UPI, cards, netbanking, wallets for India; cards for international
- Razorpay order created server-side via Netlify Function (secret key never in browser)
- Shipping address and product category stored in Razorpay order notes
- Webhook handler (`razorpay-webhook.js`) verifies HMAC signature on every event
- On `payment.captured`: sends order confirmation email via **Resend** + creates Shiprocket shipment

### Shipping
- **Shiprocket** integration for domestic and international shipping
- `get-shipping-rate.js` — live domestic rates, ₹100 fallback
- `get-international-rate.js` — creates Shiprocket draft order, queries serviceability API, returns cheapest courier rate (~10–15s, Shiprocket API is slow)
- International shipping: supports 45+ countries with live rate calculation at checkout
- HSN codes per category: brass `83062900`, ceramics `69131090`, woodwork `44209090`

### Currency & Localisation
- Country detection via Cloudflare `/cdn-cgi/trace` (same-origin, no CORS, no rate limits) with `ipapi.co` fallback
- Supports 8 currencies: USD, GBP, EUR, INR, AED, AUD, CAD, SGD
- Live exchange rates via `exchangerate-api.com` with 1-hour `localStorage` cache
- India → domestic INR price; all other countries → export INR price converted at live rates
- Currency auto-detected on page load; cached in `localStorage`

### Analytics & Marketing
- **Google Analytics GA4** (`G-HFCMV6P07V`)
- **Meta Pixel** (`27009709722029654`) — ViewContent, AddToCart, Purchase events
- **Pinterest** domain claimed and verified
- Structured data (JSON-LD) on all pages

### Contact & Communication
- Contact form connected to **Formspree** → info@raivana.in
- WhatsApp direct link (+91 9599225549) pre-filled with cart contents
- Order confirmation emails from orders@raivana.in via **Resend**

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | Vanilla HTML5, CSS3, JavaScript (ES2020) |
| Payments | Razorpay (Orders API + Webhooks) |
| Shipping | Shiprocket (domestic + international) |
| Email | Resend (transactional order confirmations) |
| Serverless | Netlify Functions (Node.js) |
| Form Backend | Formspree |
| Currency | Cloudflare trace + ipapi.co + exchangerate-api.com |
| CDN / Security | Cloudflare (free plan, in front of Netlify) |
| Hosting | Netlify (auto-deploy from GitHub `main`) |
| Domain | GoDaddy → Cloudflare nameservers → Netlify |
| Version Control | Git + GitHub (YashNirwan/Raivana) |

---

## Architecture

```
raivana/
├── index.html                      # Homepage — hero, mega-menu, marquee, brand story, Instagram feed
├── story.html                      # Brand story — cinematic scroll narrative
├── products.html                   # Product listing with category + subcategory filters
├── product-detail.html             # Individual product page — gallery, variants, accordions
├── checkout.html                   # Razorpay + Shiprocket checkout (domestic + international)
├── contact.html                    # Contact form + WhatsApp integration
├── cart.js                         # Shared cart state (localStorage) + Meta Pixel events
├── currency.js                     # IP geolocation + live exchange rate conversion
├── products-data.js                # All 156 products — prices, images, variants, details
└── netlify/
    └── functions/
        ├── create-order.js             # Server-side Razorpay order creation
        ├── razorpay-webhook.js         # payment.captured → Resend email + Shiprocket order
        ├── get-shipping-rate.js        # Live domestic Shiprocket rates
        └── get-international-rate.js   # Live international rates via Shiprocket serviceability
```

---

## Key Engineering Decisions

**Vanilla JS over a framework** — The site is content-heavy and conversion-focused. Zero framework overhead keeps page load fast. All interactivity (cart, currency, filtering, gallery, mega-menu) is implemented in plain JS.

**Cloudflare `/cdn-cgi/trace` for geolocation** — Used instead of `ipapi.co` as the primary currency detection source. It's same-origin (no CORS), has no rate limits, and is always available since the site is behind Cloudflare. `ipapi.co` remains as fallback.

**Razorpay over Stripe** — Razorpay supports UPI, netbanking, and Indian wallets natively, which is essential for domestic buyers. International card payments also work through Razorpay.

**Shiprocket for shipping** — Handles both domestic (DTDC, Bluedart) and international (DHL, FedEx) with a single integration. Live rates are fetched at checkout so buyers see actual shipping costs before paying.

**Webhook-driven fulfillment** — Order confirmation emails and Shiprocket shipment creation happen inside the `razorpay-webhook.js` function after `payment.captured` fires, not on the client side. This ensures fulfillment only happens for successfully paid orders.

**localStorage cart** — Cross-page cart persistence with zero backend dependency. Cart state survives navigation, refresh, and tab closure.

---

## Environment Variables (Netlify Dashboard)

```
RAZORPAY_KEY_ID
RAZORPAY_KEY_SECRET
RAZORPAY_WEBHOOK_SECRET
SHIPROCKET_EMAIL
SHIPROCKET_PASSWORD
SHIPROCKET_PICKUP_LOCATION
RESEND_API_KEY
```

---

## Deployment

Connected to Netlify via GitHub. Every push to `main` triggers an automatic deploy. Cloudflare sits in front of Netlify as CDN and bot protection.

**Note:** After pushing image changes, purge Cloudflare cache — `.webp` files are aggressively cached.

---

## Live Site

**[raivana.in](https://raivana.in)**

---

## About

Built by **Yash Nirwan** for **Trishna Nirwan's** Raivana — a Rajasthani handicraft export business. The project spans brand identity, full-stack web development, payment integration, international shipping, and e-commerce — built end to end without a pre-built platform.

---

*Crafted in Rajasthan. Delivered to the world.*
