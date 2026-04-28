// ── RAIVANA PRODUCT DATA ─────────────────────────────────────────────────────
// All prices in INR (base currency)
// International prices apply 15% markup before currency conversion

const RAIVANA_PRODUCTS = [
  {
    id: 1,
    name: "Brass Lord Ganesha Idol",
    subtitle: "Detailed Sitting Ganpati Murti",
    category: "brass",
    description: "Beautifully handcrafted brass Lord Ganesha idol in a seated posture with intricate detailing and a rich antique finish. Symbolizing wisdom, prosperity, and good fortune, this piece is perfect for home temples, office desks, or gifting.",
    price_inr: 2500,
    variants: null,
    details: { weight: null, height: null },
    images: ["img/p1-1.jpeg", "img/p1-2.jpeg", "img/p1-3.jpeg"]
  },
  {
    id: 2,
    name: "Brass Goddess Lakshmi Idol",
    subtitle: "Seated Lakshmi Murti",
    category: "brass",
    description: "Elegant brass Goddess Lakshmi idol seated on a lotus, symbolizing wealth, prosperity, and abundance. Designed with fine craftsmanship, ideal for Diwali puja, home temples, and auspicious décor.",
    price_inr: 2600,
    variants: null,
    details: {},
    images: ["img/p2-1.jpeg", "img/p2-2.jpeg", "img/p2-3.jpeg"]
  },
  {
    id: 3,
    name: "Brass Lord Venkateswara (Balaji) Standing Idol",
    subtitle: "Tirupati Balaji Murti",
    category: "brass",
    description: "Premium brass idol of Lord Venkateswara in a standing posture, featuring detailed carvings and traditional design. A powerful symbol of devotion and blessings, perfect for temple placement and spiritual spaces.",
    price_inr: 1800,
    variants: null,
    details: {},
    images: ["img/p3-1.jpeg", "img/p3-2.jpeg"]
  },
  {
    id: 4,
    name: "Brass Vishnu Reclining on Sheshnag",
    subtitle: "Sheshshayi Vishnu Idol",
    category: "brass",
    description: "Exquisite brass idol of Lord Vishnu reclining on the serpent Sheshnag, accompanied by Goddess Lakshmi. A masterpiece of divine art representing cosmic balance and protection, ideal for spiritual décor and premium gifting.",
    price_inr: null,
    variants: [
      { label: "300 gm", price_inr: 5600 },
      { label: "460 gm", price_inr: 8200 }
    ],
    details: {},
    images: ["img/p4-1.jpeg", "img/p4-2.jpeg", "img/p4-3.jpeg"]
  },
  {
    id: 5,
    name: "Brass Lakshmi Narayan Idol on Sheshnag",
    subtitle: "Divine Couple on Sheshnag",
    category: "brass",
    description: "Beautifully detailed brass idol of Lord Vishnu with Goddess Lakshmi seated on Sheshnag. Symbolizing harmony, prosperity, and divine protection, this elegant piece enhances any home temple or sacred space.",
    price_inr: 6200,
    variants: null,
    details: {},
    images: ["img/p5-1.jpeg", "img/p5-2.jpeg"]
  },
  {
    id: 6,
    name: "Brass Radha Krishna Idol",
    subtitle: "Divine Couple Murti",
    category: "brass",
    description: "Beautifully crafted brass Radha Krishna idol symbolizing eternal love and devotion. Designed with intricate detailing and a rich finish, this elegant piece is perfect for home temples, décor, and spiritual gifting.",
    price_inr: null,
    variants: [
      { label: "120 gm", price_inr: 2200 },
      { label: "140 gm", price_inr: 2600 },
      { label: "180 gm", price_inr: 2200 },
      { label: "240 gm", price_inr: 3200 }
    ],
    details: {},
    images: ["img/p6-1.jpeg", "img/p6-2.jpeg", "img/p6-3.jpeg"]
  },
  {
    id: 7,
    name: "Brass Lord Hanuman Idol",
    subtitle: "Veer Hanuman Murti",
    category: "brass",
    description: "Finely detailed brass Hanuman idol representing strength, devotion, and protection. Ideal for puja rooms and spiritual spaces, bringing courage and positivity into your home.",
    price_inr: null,
    variants: [
      { label: "180 gm", price_inr: 2200 },
      { label: "240 gm", price_inr: 3200 }
    ],
    details: {},
    images: ["img/p7-1.jpeg", "img/p7-2.jpeg", "img/p7-3.jpeg"]
  },
  {
    id: 8,
    name: "Brass Lord Ganesha Idol",
    subtitle: "Seated Ganpati with Trishul & Axe",
    category: "brass",
    description: "Intricately crafted brass Lord Ganesha idol in a seated posture, holding traditional symbolic elements like trishul and axe. Designed with fine detailing and a rich antique finish — ideal for home temples, office décor, or gifting.",
    price_inr: null,
    variants: [
      { label: "130 gm", price_inr: 1200 },
      { label: "210 gm", price_inr: 1850 }
    ],
    details: {},
    images: ["img/p8-1.jpeg", "img/p8-2.jpeg", "img/p8-3.jpeg"]
  },
  {
    id: 9,
    name: "Brass Engraved Pooja Kalash",
    subtitle: "Decorative Sacred Pot",
    category: "brass",
    description: "Beautifully engraved brass kalash featuring traditional floral and peacock motifs. Perfect for religious rituals, vastu placement, and festive décor. Symbolizes purity, abundance, and auspicious beginnings.",
    price_inr: 1050,
    variants: null,
    details: {},
    images: ["img/p9-1.jpeg", "img/p9-2.jpeg", "img/p9-3.jpeg"]
  },
  {
    id: 10,
    name: "Brass Decorative Diya Stand",
    subtitle: "Traditional Oil Lamp Holder",
    category: "brass",
    description: "Elegant brass diya stand with intricate carvings and a classic elevated design. Ideal for lighting diyas during puja, aarti, and festivals, adding a warm and spiritual glow to your home.",
    price_inr: 600,
    variants: null,
    details: {},
    images: ["img/p10-1.jpeg", "img/p10-2.jpeg"]
  },
  {
    id: 11,
    name: "Brass Temple Bell",
    subtitle: "Handheld Pooja Ghanti",
    category: "brass",
    description: "Finely detailed brass temple bell with an ornate handle and traditional design. Produces a clear, soothing sound that enhances the spiritual ambiance during puja and aarti rituals.",
    price_inr: 550,
    variants: null,
    details: {},
    images: ["img/p11-1.jpeg", "img/p11-2.jpeg", "img/p11-3.jpeg"]
  },
  {
    id: 12,
    name: "Shivling with Nandi",
    subtitle: "Sacred Shiva Lingam with Nandi Bull",
    category: "brass",
    description: "A beautifully crafted brass Shiva Lingam with a Nandi bull, symbolizing Lord Shiva's presence and grace. Perfect for home worship, temple placement, and spiritual decor.",
    price_inr: null,
    variants: [
      { label: "100 gm", price_inr: 1400 },
      { label: "210 gm", price_inr: 2500 }
    ],
    details: {},
    images: ["img/p12-2.jpeg", "img/p12-3.jpeg"]
  },
  {
    id: 13,
    name: "Ganesha Elephant God with Decorative Attire",
    subtitle: "Embellished Ganesh Murti",
    category: "brass",
    description: "An intricately designed brass idol of Lord Ganesha, the elephant-headed deity of wisdom and prosperity, adorned with detailed embellishments. Available in four sizes to suit every sacred space.",
    price_inr: null,
    variants: [
      { label: "125 gm", price_inr: 2200 },
      { label: "210 gm", price_inr: 3300 },
      { label: "300 gm", price_inr: 4200 },
      { label: "510 gm", price_inr: 6800 }
    ],
    details: {},
    images: ["img/p13-1.jpeg", "img/p13-2.jpeg", "img/p13-3.jpeg"]
  },
  {
    id: 14,
    name: "Brass Elephant Carving with Ornate Detailing",
    subtitle: "Decorative Brass Elephant Sculpture",
    category: "brass",
    description: "A stunning brass sculpture of an elephant, showcasing traditional Rajasthani craftsmanship and detailed ornamentation. A timeless statement piece for home decor and spiritual spaces.",
    price_inr: 3500,
    variants: null,
    details: {},
    images: ["img/p14-1.jpeg", "img/p14-2.jpeg", "img/p14-3.jpeg"]
  },
  {
    id: 15,
    name: "Brass Cow (Holy Cow / Nandi)",
    subtitle: "Sacred Cow Idol",
    category: "brass",
    description: "A brass idol of Nandi, the sacred cow of Lord Shiva, symbolizing strength, abundance, and devotion. Handcrafted with fine detailing, available in two variants.",
    price_inr: null,
    variants: [
      { label: "Variant 1", price_inr: 3200 },
      { label: "Variant 2", price_inr: 2850 }
    ],
    details: {},
    images: ["img/p15-1.jpeg", "img/p15-2.jpeg", "img/p15-3.jpeg"]
  },
  {
    id: 16,
    name: "Brass Krishna Ghanti (Hand Bell)",
    subtitle: "Decorative Puja Bell",
    category: "brass",
    description: "Exquisitely handcrafted brass ghanti featuring Lord Krishna at the handle top. With fine detailing and divine sound resonance, this bell is perfect for daily pooja rituals or temple decor.",
    price_inr: 2000,
    variants: null,
    details: { weight: "110 gm", height: "5.5 in", length: "2 in" },
    images: ["img/p16-1.jpeg", "img/p16-2.jpeg", "img/p16-3.jpeg"]
  },
  {
    id: 17,
    name: "Brass Radha Krishna Divine Couple",
    subtitle: "Standing Radha Krishna Idol",
    category: "brass",
    description: "Beautiful brass sculpture of Lord Krishna and Goddess Radha standing together, symbolizing eternal love and divine union. Detailed craftsmanship enhances its spiritual and ornamental value.",
    price_inr: 6200,
    variants: null,
    details: { weight: "610 gm", height: "6.5 in", length: "4.25 in" },
    images: ["img/p17-1.jpeg", "img/p17-2.jpeg"]
  },
  {
    id: 18,
    name: "Brass Ram Darbar",
    subtitle: "Lord Ram with Sita and Lakshman",
    category: "brass",
    description: "An elegant brass idol of Lord Ram with Sita and Lakshman, a depiction of divine harmony and virtue. A sacred centerpiece for home temples and devotional spaces.",
    price_inr: null,
    variants: [
      { label: "260 gm", price_inr: 3800 },
      { label: "500 gm", price_inr: 7500 }
    ],
    details: {},
    images: ["img/p18-1.jpeg", "img/p18-2.jpeg", "img/p18-3.jpeg"]
  },
  {
    id: 19,
    name: "Brass Namdev Saint Idol",
    subtitle: "Hindu Saint Figurine",
    category: "brass",
    description: "A finely detailed brass statue representing the Hindu saint Namdev, holding spiritual offerings with a serene expression and graceful posture. Perfect for devotional settings and spiritual gifting.",
    price_inr: 6200,
    variants: null,
    details: { weight: "410 gm", height: "9.75 in", length: "2.75 in" },
    images: ["img/p19-1.jpeg", "img/p19-2.jpeg", "img/p19-3.jpeg"]
  },
  {
    id: 20,
    name: "Brass Kamal Ganesha Idol",
    subtitle: "Ganesha Seated on Lotus",
    category: "brass",
    description: "Traditional brass idol of Lord Ganesha seated on a lotus base, crafted with exquisite embellishments. Ideal for pooja rooms, gifting, and auspicious beginnings. Available in two sizes.",
    price_inr: null,
    variants: [
      { label: "330 gm · 5 in", price_inr: 5000 },
      { label: "530 gm · 6 in", price_inr: 7500 }
    ],
    details: {},
    images: ["img/p20-1.jpeg", "img/p20-2.jpeg", "img/p20-3.jpeg"]
  },
  {
    id: 21,
    name: "Brass Kamal Saraswati Idol",
    subtitle: "Goddess Saraswati on Lotus",
    category: "brass",
    description: "Divine statue of Goddess Saraswati seated on a lotus, playing the veena. Made of pure brass with intricate detailing, it embodies wisdom, music, and learning. Available in two sizes.",
    price_inr: null,
    variants: [
      { label: "340 gm · 5 in", price_inr: 5000 },
      { label: "540 gm · 6 in", price_inr: 7200 }
    ],
    details: {},
    images: ["img/p21-1.jpeg", "img/p21-2.jpeg", "img/p21-3.jpeg"]
  },
  {
    id: 22,
    name: "Brass Kamal Lakshmi Idol",
    subtitle: "Goddess Lakshmi on Lotus",
    category: "brass",
    description: "A graceful statue of Goddess Lakshmi seated on a lotus flower, holding lotuses in both hands. Crafted in pure brass with fine detailing symbolizing abundance and purity. Available in two sizes.",
    price_inr: null,
    variants: [
      { label: "310 gm · 5 in", price_inr: 4500 },
      { label: "470 gm · 6 in", price_inr: 6200 }
    ],
    details: {},
    images: ["img/p22-1.jpeg", "img/p22-2.jpeg", "img/p22-3.jpeg"]
  },
  {
    id: 23,
    name: "Brass Lord Ganesha Idol",
    subtitle: "Classic Carved Ganesha · 4 inch",
    category: "brass",
    description: "Finely designed brass statue of Lord Ganesha, the remover of obstacles and harbinger of prosperity. Adorned with elaborate carvings, this piece is a sacred addition to your pooja space.",
    price_inr: 4500,
    variants: null,
    details: { weight: "270 gm", height: "4 in", length: "3.25 in" },
    images: ["img/p23-1.jpeg", "img/p23-2.jpeg", "img/p23-3.jpeg"]
  },
  {
    id: 24,
    name: "Brass Kamal Lakshmi Idol with Umbrella",
    subtitle: "Lakshmi with Ornate Canopy",
    category: "brass",
    description: "Magnificent depiction of Goddess Lakshmi seated on a lotus with an ornate umbrella canopy. Crafted in brass with intricate artistry, symbolizing wealth and divine grace.",
    price_inr: 3700,
    variants: null,
    details: { weight: "240 gm", height: "5.5 in", length: "2 in" },
    images: ["img/p24-1.jpeg", "img/p24-2.jpeg", "img/p24-3.jpeg"]
  },
  {
    id: 25,
    name: "Brass Lord Krishna with Flute",
    subtitle: "Krishna Playing Flute",
    category: "brass",
    description: "A graceful brass statue of Lord Krishna playing his flute, symbolizing love, compassion, and divine joy. Available in two sizes for different spaces.",
    price_inr: null,
    variants: [
      { label: "70 gm", price_inr: 800 },
      { label: "100 gm", price_inr: 1200 }
    ],
    details: {},
    images: ["img/p25-1.jpeg", "img/p25-2.jpeg", "img/p25-3.jpeg"]
  },
  {
    id: 26,
    name: "Brass Lord Ganesha Idol",
    subtitle: "Ornate Carved Ganesha · 4 inch",
    category: "brass",
    description: "Finely designed brass statue of Lord Ganesha, the remover of obstacles and harbinger of prosperity. Adorned with elaborate carvings, this piece is a sacred addition to your pooja space.",
    price_inr: 3200,
    variants: null,
    details: { weight: "270 gm", height: "4 in", length: "3.25 in" },
    images: ["img/p26-1.jpeg", "img/p26-2.jpeg", "img/p26-3.jpeg"]
  },
  {
    id: 27,
    name: "Brass Radha Krishna Statue",
    subtitle: "Krishna with Flute & Radha",
    category: "brass",
    description: "An intricately crafted brass idol of Lord Krishna playing the flute with Goddess Radha beside him. Symbolizing eternal love and devotion, this idol brings charm and serenity to any home or altar.",
    price_inr: 5400,
    variants: null,
    details: { weight: "490 gm", height: "6 in", length: "3.75 in" },
    images: ["img/p27-1.jpeg", "img/p27-2.jpeg", "img/p27-3.jpeg"]
  },
  {
    id: 28,
    name: "Brass Maa Ganga Idol",
    subtitle: "Goddess Ganga on Makara",
    category: "brass",
    description: "Beautifully detailed brass statue of Goddess Ganga standing on her divine vahana, the crocodile (Makara). She holds a trident and offers blessings — ideal for spiritual decor and devotion.",
    price_inr: null,
    variants: [
      { label: "230 gm · 4.75 in", price_inr: 3200 },
      { label: "350 gm · 5.75 in", price_inr: 4800 }
    ],
    details: {},
    images: ["img/p28-1.jpeg", "img/p28-2.jpeg", "img/p28-3.jpeg"]
  }
];

// ── PRICING UTILS ─────────────────────────────────────────────────────────────

const INTL_MARKUP = 1.15; // 15% markup for non-India

function getBasePrice(product, variantIndex = 0) {
  if (product.variants) return product.variants[variantIndex].price_inr;
  return product.price_inr;
}

function formatPrice(inr, currency, rates) {
  const isIndia = currency === 'INR';
  const amount = isIndia ? inr : inr * INTL_MARKUP;

  if (currency === 'INR') {
    return '₹' + Math.round(amount).toLocaleString('en-IN');
  }

  const rate = rates[currency] || 1;
  const converted = (amount / (rates['INR'] || 83.5)) * rate;

  const cfg = {
    USD: '$', GBP: '£', EUR: '€',
    AED: 'AED ', AUD: 'A$', CAD: 'CA$', SGD: 'S$'
  };

  const symbol = cfg[currency] || currency + ' ';
  if (['AED'].includes(currency)) return symbol + Math.round(converted);
  return symbol + converted.toFixed(2);
}
