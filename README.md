# Raivana — Authentic Rajasthani Handicrafts

> A full-stack e-commerce platform built to bring handcrafted Indian artisan goods to global markets — designed, engineered, and deployed from scratch.

![Raivana](https://img.shields.io/badge/Live-raivana.in-C1622F?style=flat-square)
![Stack](https://img.shields.io/badge/Stack-HTML%20%2F%20CSS%20%2F%20JS-1C1008?style=flat-square)
![Payments](https://img.shields.io/badge/Payments-Stripe-635BFF?style=flat-square)
![Hosting](https://img.shields.io/badge/Hosting-Netlify-00C7B7?style=flat-square)

---

## Overview

Raivana is a luxury handicraft export business founded by Trishna Nirwan, sourcing handmade ceramics, brass metalwork, woodcarvings, and textiles directly from artisan workshops in Jaipur, Rajasthan. The platform was designed to position authentic Indian craft as a premium product for global buyers in the US, UK, UAE, and Europe.

This repository contains the complete frontend and serverless backend for the Raivana e-commerce experience.

---

## Features

### Storefront
- Multi-page website with cinematic scroll storytelling
- Fully responsive across mobile, tablet, and desktop
- Custom hamburger navigation with full-screen mobile menu
- Animated hero sections, image breaks, and fade-in scroll effects

### E-commerce
- Product listing page with live category filtering
- Product detail page with image gallery, size selection, and price updates
- Persistent shopping cart via `localStorage` — survives page navigation
- Slide-out cart drawer on every page with live item count

### Payments
- **Stripe** integration via Netlify serverless functions
- Payment Intent created server-side — secret key never exposed to browser
- Stripe Elements embedded for card collection (PCI compliant)
- Post-payment cart clearance and order confirmation screen

### Currency & Localisation
- Automatic currency detection via IP geolocation (`ipapi.co`)
- Supports 8 currencies: USD, GBP, EUR, INR, AED, AUD, CAD, SGD
- Live exchange rates via `exchangerate-api.com` with 1-hour localStorage cache
- Manual currency switcher in every nav with flag + code display

### Contact & CRM
- Contact form with floating label inputs and enquiry type selector
- Connected to **Formspree** for email delivery — no backend required
- WhatsApp direct link pre-filled with cart items for trade enquiries

### Brand & Content
- Full brand identity system: Cormorant Garamond + Jost typefaces, terracotta/sand/gold palette
- Story page with cinematic chapter-by-chapter scroll narrative
- Autoplay muted looping artisan process video
- "From Earth to Art" interactive process section with 4 craft categories

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | Vanilla HTML5, CSS3, JavaScript (ES2020) |
| Payments | Stripe Payment Intents API + Stripe.js |
| Serverless | Netlify Functions (Node.js) |
| Form Backend | Formspree |
| Currency | ipapi.co (geolocation) + exchangerate-api.com |
| Hosting | Netlify (CDN + Functions) |
| Domain | GoDaddy → raivana.in |
| Version Control | Git + GitHub |

---

## Architecture

```
raivana/
├── index.html              # Homepage — hero, collections, process, artisan sections
├── story.html              # Brand story — cinematic scroll narrative
├── products.html           # Product listing with category filters
├── product-detail.html     # Individual product page with image gallery
├── checkout.html           # Stripe-powered checkout
├── contact.html            # Contact form + WhatsApp integration
├── cart.js                 # Shared cart state (localStorage) across all pages
├── currency.js             # IP geolocation + live exchange rate conversion
├── netlify.toml            # Netlify build + function config
├── package.json            # Node dependencies (stripe)
└── netlify/
    └── functions/
        └── create-payment-intent.js   # Server-side Stripe Payment Intent
```

---

## Key Engineering Decisions

**Vanilla JS over a framework** — The site is content-heavy and conversion-focused. Shipping zero JS framework overhead keeps page load fast and the bundle tiny. All interactivity (cart, currency, filtering, gallery) is implemented in ~400 lines of plain JS.

**localStorage for cart persistence** — Early implementation used in-memory state which wiped on navigation. Switching to localStorage gave true cross-page persistence with zero backend dependency, matching the UX of full e-commerce platforms.

**Serverless for Stripe** — Netlify Functions handle the Payment Intent creation server-side so the Stripe secret key is never exposed in client-side code. The function also handles currency-aware amount calculation including zero-decimal currencies (INR).

**IP-based currency with manual override** — Users land in their detected currency automatically, but can switch manually. The selection persists in localStorage and exchange rates are cached for 1 hour to minimise API calls.

**Base64 image embedding** — Product and story images are embedded as base64 in HTML rather than served as separate files, eliminating HTTP request overhead for critical above-the-fold images.

---

## Local Development

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Install dependencies
npm install

# Run locally (serves functions too)
netlify dev
```

Set environment variables in a `.env` file:
```
STRIPE_SECRET_KEY=sk_test_...
```

---

## Deployment

Connected to Netlify via GitHub. Every push to `main` triggers an automatic deploy.

Environment variables set in Netlify dashboard:
- `STRIPE_SECRET_KEY` — Stripe secret key (never committed to repo)

---

## Live Site

**[raivana.in](https://raivana.in)**

---

## About

Built by **Yash Nirwan** for Raivana, a Rajasthani handicraft export business founded by Trishna Nirwan. The project spans brand identity, full-stack web development, payment integration, and international e-commerce — built end to end without a pre-built e-commerce platform.

---

*Crafted in Rajasthan. Delivered to the world.*
