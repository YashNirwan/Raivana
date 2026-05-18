// ── RAIVANA PRODUCT DATA ─────────────────────────────────────────────────────
// All prices in INR (base currency)
// International prices apply 15% markup before currency conversion
// weight_g = product weight in grams (excludes packaging)

const RAIVANA_PRODUCTS = [
  {
    id: 1,
    name: "Brass Lord Ganesha Idol",
    subtitle: "Detailed Sitting Ganpati Murti",
    category: "brass",
    subcategory: "Brass God Idols",
    description: "Beautifully handcrafted brass Lord Ganesha idol in a seated posture with intricate detailing and a rich antique finish. Symbolizing wisdom, prosperity, and good fortune, this piece is perfect for home temples, office desks, or gifting.",
    price_inr: 2500,
    variants: null,
    details: { weight: "200 gm" },
    weight_g: 200,
    images: ["img/p1-1.jpeg", "img/p1-2.jpeg", "img/p1-3.jpeg"]
  },
  {
    id: 2,
    name: "Brass Goddess Lakshmi Idol",
    subtitle: "Seated Lakshmi Murti",
    category: "brass",
    subcategory: "Brass God Idols",
    description: "Elegant brass Goddess Lakshmi idol seated on a lotus, symbolizing wealth, prosperity, and abundance. Designed with fine craftsmanship, ideal for Diwali puja, home temples, and auspicious décor.",
    price_inr: 2600,
    variants: null,
    details: { weight: "200 gm" },
    weight_g: 200,
    images: ["img/p2-1.jpeg", "img/p2-2.jpeg", "img/p2-3.jpeg"]
  },
  {
    id: 3,
    name: "Brass Lord Venkateswara (Balaji) Standing Idol",
    subtitle: "Tirupati Balaji Murti",
    category: "brass",
    subcategory: "Brass God Idols",
    description: "Premium brass idol of Lord Venkateswara in a standing posture, featuring detailed carvings and traditional design. A powerful symbol of devotion and blessings, perfect for temple placement and spiritual spaces.",
    price_inr: 1800,
    variants: null,
    details: { weight: "80–150 gm" },
    weight_g: 150,
    images: ["img/p3-1.jpeg", "img/p3-2.jpeg"]
  },
  {
    id: 4,
    name: "Brass Vishnu Reclining on Sheshnag",
    subtitle: "Sheshshayi Vishnu Idol",
    category: "brass",
    subcategory: "Brass God Idols",
    description: "Exquisite brass idol of Lord Vishnu reclining on the serpent Sheshnag, accompanied by Goddess Lakshmi. A masterpiece of divine art representing cosmic balance and protection, ideal for spiritual décor and premium gifting.",
    price_inr: null,
    variants: [
      { label: "300 gm", price_inr: 5600,  weight_g: 300 },
      { label: "460 gm", price_inr: 8200,  weight_g: 460 }
    ],
    details: {},
    images: ["img/p4-1.jpeg", "img/p4-2.jpeg", "img/p4-3.jpeg"]
  },
  {
    id: 5,
    name: "Brass Lakshmi Narayan Idol on Sheshnag",
    subtitle: "Divine Couple on Sheshnag",
    category: "brass",
    subcategory: "Brass God Idols",
    description: "Beautifully detailed brass idol of Lord Vishnu with Goddess Lakshmi seated on Sheshnag. Symbolizing harmony, prosperity, and divine protection, this elegant piece enhances any home temple or sacred space.",
    price_inr: 6200,
    variants: null,
    details: { weight: "570 gm" },
    weight_g: 570,
    images: ["img/p5-1.jpeg", "img/p5-2.jpeg"]
  },
  {
    id: 6,
    name: "Brass Radha Krishna Idol",
    subtitle: "Divine Couple Murti",
    category: "brass",
    subcategory: "Brass God Idols",
    description: "Beautifully crafted brass Radha Krishna idol symbolizing eternal love and devotion. Designed with intricate detailing and a rich finish, this elegant piece is perfect for home temples, décor, and spiritual gifting.",
    price_inr: null,
    variants: [
      { label: "120 gm", price_inr: 2200, weight_g: 120 },
      { label: "140 gm", price_inr: 2600, weight_g: 140 },
      { label: "180 gm", price_inr: 2200, weight_g: 180 },
      { label: "240 gm", price_inr: 3200, weight_g: 240 }
    ],
    details: {},
    images: ["img/p6-1.jpeg", "img/p6-2.jpeg", "img/p6-3.jpeg"]
  },
  {
    id: 7,
    name: "Brass Lord Hanuman Idol",
    subtitle: "Veer Hanuman Murti",
    category: "brass",
    subcategory: "Brass God Idols",
    description: "Finely detailed brass Hanuman idol representing strength, devotion, and protection. Ideal for puja rooms and spiritual spaces, bringing courage and positivity into your home.",
    price_inr: null,
    variants: [
      { label: "180 gm", price_inr: 2200, weight_g: 180 },
      { label: "240 gm", price_inr: 3200, weight_g: 240 }
    ],
    details: {},
    images: ["img/p7-1.jpeg", "img/p7-2.jpeg", "img/p7-3.jpeg"]
  },
  {
    id: 8,
    name: "Brass Lord Ganesha Idol",
    subtitle: "Seated Ganpati with Trishul & Axe",
    category: "brass",
    subcategory: "Brass God Idols",
    description: "Intricately crafted brass Lord Ganesha idol in a seated posture, holding traditional symbolic elements like trishul and axe. Designed with fine detailing and a rich antique finish — ideal for home temples, office décor, or gifting.",
    price_inr: null,
    variants: [
      { label: "130 gm", price_inr: 1200, weight_g: 130 },
      { label: "210 gm", price_inr: 1850, weight_g: 210 }
    ],
    details: {},
    images: ["img/p8-1.jpeg", "img/p8-2.jpeg", "img/p8-3.jpeg"]
  },
  {
    id: 9,
    name: "Brass Engraved Pooja Kalash",
    subtitle: "Decorative Sacred Pot",
    category: "brass",
    subcategory: "Brass Decor",
    description: "Beautifully engraved brass kalash featuring traditional floral and peacock motifs. Perfect for religious rituals, vastu placement, and festive décor. Symbolizes purity, abundance, and auspicious beginnings.",
    price_inr: 1050,
    variants: null,
    details: { weight: "120 gm" },
    weight_g: 120,
    images: ["img/p9-1.jpeg", "img/p9-2.jpeg", "img/p9-3.jpeg"]
  },
  {
    id: 10,
    name: "Brass Decorative Diya Stand",
    subtitle: "Traditional Oil Lamp Holder",
    category: "brass",
    subcategory: "Brass Decor",
    description: "Elegant brass diya stand with intricate carvings and a classic elevated design. Ideal for lighting diyas during puja, aarti, and festivals, adding a warm and spiritual glow to your home.",
    price_inr: 600,
    variants: null,
    details: { weight: "60 gm" },
    weight_g: 60,
    images: ["img/p10-1.jpeg", "img/p10-2.jpeg"]
  },
  {
    id: 11,
    name: "Brass Temple Bell",
    subtitle: "Handheld Pooja Ghanti",
    category: "brass",
    subcategory: "Brass Decor",
    description: "Finely detailed brass temple bell with an ornate handle and traditional design. Produces a clear, soothing sound that enhances the spiritual ambiance during puja and aarti rituals.",
    price_inr: 550,
    variants: null,
    details: { weight: "60 gm" },
    weight_g: 60,
    images: ["img/p11-1.jpeg", "img/p11-2.jpeg", "img/p11-3.jpeg"]
  },
  {
    id: 12,
    name: "Shivling with Nandi",
    subtitle: "Sacred Shiva Lingam with Nandi Bull",
    category: "brass",
    subcategory: "Brass God Idols",
    description: "A beautifully crafted brass Shiva Lingam with a Nandi bull, symbolizing Lord Shiva's presence and grace. Perfect for home worship, temple placement, and spiritual decor.",
    price_inr: null,
    variants: [
      { label: "100 gm", price_inr: 1400, weight_g: 100 },
      { label: "210 gm", price_inr: 2500, weight_g: 210 }
    ],
    details: {},
    imagepos: "75% center",
    images: ["img/p12-2.jpeg", "img/p12-3.jpeg"]
  },
  {
    id: 13,
    name: "Ganesha Elephant God with Decorative Attire",
    subtitle: "Embellished Ganesh Murti",
    category: "brass",
    subcategory: "Brass God Idols",
    description: "An intricately designed brass idol of Lord Ganesha, the elephant-headed deity of wisdom and prosperity, adorned with detailed embellishments. Available in four sizes to suit every sacred space.",
    price_inr: null,
    variants: [
      { label: "125 gm", price_inr: 2200, weight_g: 125 },
      { label: "210 gm", price_inr: 3300, weight_g: 210 },
      { label: "300 gm", price_inr: 4200, weight_g: 300 },
      { label: "510 gm", price_inr: 6800, weight_g: 510 }
    ],
    details: {},
    images: ["img/p13-1.jpeg", "img/p13-2.jpeg", "img/p13-3.jpeg"]
  },
  {
    id: 14,
    name: "Brass Elephant Carving with Ornate Detailing",
    subtitle: "Decorative Brass Elephant Sculpture",
    category: "brass",
    subcategory: "Brass Animals",
    description: "A stunning brass sculpture of an elephant, showcasing traditional Rajasthani craftsmanship and detailed ornamentation. A timeless statement piece for home decor and spiritual spaces.",
    price_inr: 3500,
    variants: null,
    details: { weight: "200 gm" },
    weight_g: 200,
    images: ["img/p14-1.jpeg", "img/p14-2.jpeg", "img/p14-3.jpeg"]
  },
  {
    id: 15,
    name: "Brass Cow (Holy Cow / Nandi)",
    subtitle: "Sacred Cow Idol",
    category: "brass",
    subcategory: "Brass Animals",
    description: "A brass idol of Nandi, the sacred cow of Lord Shiva, symbolizing strength, abundance, and devotion. Handcrafted with fine detailing, available in two variants.",
    price_inr: null,
    variants: [
      { label: "Small · 260 gm", price_inr: 2850, weight_g: 260 },
      { label: "Large · 380 gm", price_inr: 3200, weight_g: 380 }
    ],
    details: {},
    images: ["img/p15-1.jpeg", "img/p15-2.jpeg", "img/p15-3.jpeg"]
  },
  {
    id: 16,
    name: "Brass Krishna Ghanti (Hand Bell)",
    subtitle: "Decorative Puja Bell",
    category: "brass",
    subcategory: "Brass Decor",
    description: "Exquisitely handcrafted brass ghanti featuring Lord Krishna at the handle top. With fine detailing and divine sound resonance, this bell is perfect for daily pooja rituals or temple decor.",
    price_inr: 2000,
    variants: null,
    details: { weight: "110 gm", height: "5.5 in", length: "2 in" },
    weight_g: 110,
    images: ["img/p16-1.jpeg", "img/p16-2.jpeg", "img/p16-3.jpeg"]
  },
  {
    id: 17,
    name: "Brass Radha Krishna Divine Couple",
    subtitle: "Standing Radha Krishna Idol",
    category: "brass",
    subcategory: "Brass God Idols",
    description: "Beautiful brass sculpture of Lord Krishna and Goddess Radha standing together, symbolizing eternal love and divine union. Detailed craftsmanship enhances its spiritual and ornamental value.",
    price_inr: 6200,
    variants: null,
    details: { weight: "610 gm", height: "6.5 in", length: "4.25 in" },
    weight_g: 610,
    images: ["img/p17-1.jpeg", "img/p17-2.jpeg"]
  },
  {
    id: 18,
    name: "Brass Ram Darbar",
    subtitle: "Lord Ram with Sita and Lakshman",
    category: "brass",
    subcategory: "Brass God Idols",
    description: "An elegant brass idol of Lord Ram with Sita and Lakshman, a depiction of divine harmony and virtue. A sacred centerpiece for home temples and devotional spaces.",
    price_inr: null,
    variants: [
      { label: "260 gm", price_inr: 3800, weight_g: 260 },
      { label: "500 gm", price_inr: 7500, weight_g: 500 }
    ],
    details: {},
    images: ["img/p18-1.jpeg", "img/p18-2.jpeg", "img/p18-3.jpeg"]
  },
  {
    id: 19,
    name: "Brass Namdev Saint Idol",
    subtitle: "Hindu Saint Figurine",
    category: "brass",
    subcategory: "Brass God Idols",
    description: "A finely detailed brass statue representing the Hindu saint Namdev, holding spiritual offerings with a serene expression and graceful posture. Perfect for devotional settings and spiritual gifting.",
    price_inr: 6200,
    variants: null,
    details: { weight: "410 gm", height: "9.75 in", length: "2.75 in" },
    weight_g: 410,
    images: ["img/p19-1.jpeg", "img/p19-2.jpeg", "img/p19-3.jpeg"]
  },
  {
    id: 20,
    name: "Brass Kamal Ganesha Idol",
    subtitle: "Ganesha Seated on Lotus",
    category: "brass",
    subcategory: "Brass God Idols",
    description: "Traditional brass idol of Lord Ganesha seated on a lotus base, crafted with exquisite embellishments. Ideal for pooja rooms, gifting, and auspicious beginnings. Available in two sizes.",
    price_inr: null,
    variants: [
      { label: "330 gm · 5 in", price_inr: 5000, weight_g: 330 },
      { label: "530 gm · 6 in", price_inr: 7500, weight_g: 530 }
    ],
    details: {},
    images: ["img/p20-1.jpeg", "img/p20-2.jpeg", "img/p20-3.jpeg"]
  },
  {
    id: 21,
    name: "Brass Kamal Saraswati Idol",
    subtitle: "Goddess Saraswati on Lotus",
    category: "brass",
    subcategory: "Brass God Idols",
    description: "Divine statue of Goddess Saraswati seated on a lotus, playing the veena. Made of pure brass with intricate detailing, it embodies wisdom, music, and learning. Available in two sizes.",
    price_inr: null,
    variants: [
      { label: "340 gm · 5 in", price_inr: 5000, weight_g: 340 },
      { label: "540 gm · 6 in", price_inr: 7200, weight_g: 540 }
    ],
    details: {},
    images: ["img/p21-1.jpeg", "img/p21-2.jpeg", "img/p21-3.jpeg"]
  },
  {
    id: 22,
    name: "Brass Kamal Lakshmi Idol",
    subtitle: "Goddess Lakshmi on Lotus",
    category: "brass",
    subcategory: "Brass God Idols",
    description: "A graceful statue of Goddess Lakshmi seated on a lotus flower, holding lotuses in both hands. Crafted in pure brass with fine detailing symbolizing abundance and purity. Available in two sizes.",
    price_inr: null,
    variants: [
      { label: "310 gm · 5 in", price_inr: 4500, weight_g: 310 },
      { label: "470 gm · 6 in", price_inr: 6200, weight_g: 470 }
    ],
    details: {},
    images: ["img/p22-1.jpeg", "img/p22-2.jpeg", "img/p22-3.jpeg"]
  },
  {
    id: 23,
    name: "Brass Lord Ganesha Idol",
    subtitle: "Classic Carved Ganesha · 4 inch",
    category: "brass",
    subcategory: "Brass God Idols",
    description: "Finely designed brass statue of Lord Ganesha, the remover of obstacles and harbinger of prosperity. Adorned with elaborate carvings, this piece is a sacred addition to your pooja space.",
    price_inr: 4500,
    variants: null,
    details: { weight: "270 gm", height: "4 in", length: "3.25 in" },
    weight_g: 270,
    images: ["img/p23-1.jpeg", "img/p23-2.jpeg", "img/p23-3.jpeg"]
  },
  {
    id: 24,
    name: "Brass Kamal Lakshmi Idol with Umbrella",
    subtitle: "Lakshmi with Ornate Canopy",
    category: "brass",
    subcategory: "Brass God Idols",
    description: "Magnificent depiction of Goddess Lakshmi seated on a lotus with an ornate umbrella canopy. Crafted in brass with intricate artistry, symbolizing wealth and divine grace.",
    price_inr: 3700,
    variants: null,
    details: { weight: "240 gm", height: "5.5 in", length: "2 in" },
    weight_g: 240,
    images: ["img/p24-1.jpeg", "img/p24-2.jpeg", "img/p24-3.jpeg"]
  },
  {
    id: 25,
    name: "Brass Lord Krishna with Flute",
    subtitle: "Krishna Playing Flute",
    category: "brass",
    subcategory: "Brass God Idols",
    description: "A graceful brass statue of Lord Krishna playing his flute, symbolizing love, compassion, and divine joy. Available in two sizes for different spaces.",
    price_inr: null,
    variants: [
      { label: "70 gm",  price_inr: 800,  weight_g: 70  },
      { label: "100 gm", price_inr: 1200, weight_g: 100 }
    ],
    details: {},
    images: ["img/p25-1.jpeg", "img/p25-2.jpeg", "img/p25-3.jpeg"]
  },
  {
    id: 26,
    name: "Brass Lord Ganesha Idol",
    subtitle: "Ornate Carved Ganesha · 4 inch",
    category: "brass",
    subcategory: "Brass God Idols",
    description: "Finely designed brass statue of Lord Ganesha, the remover of obstacles and harbinger of prosperity. Adorned with elaborate carvings, this piece is a sacred addition to your pooja space.",
    price_inr: 3200,
    variants: null,
    details: { weight: "270 gm", height: "4 in", length: "3.25 in" },
    weight_g: 270,
    images: ["img/p26-1.jpeg", "img/p26-2.jpeg", "img/p26-3.jpeg"]
  },
  {
    id: 27,
    name: "Brass Radha Krishna Statue",
    subtitle: "Krishna with Flute & Radha",
    category: "brass",
    subcategory: "Brass God Idols",
    description: "An intricately crafted brass idol of Lord Krishna playing the flute with Goddess Radha beside him. Symbolizing eternal love and devotion, this idol brings charm and serenity to any home or altar.",
    price_inr: 5400,
    variants: null,
    details: { weight: "490 gm", height: "6 in", length: "3.75 in" },
    weight_g: 490,
    images: ["img/p27-1.jpeg", "img/p27-2.jpeg", "img/p27-3.jpeg"]
  },
  {
    id: 28,
    name: "Brass Maa Ganga Idol",
    subtitle: "Goddess Ganga on Makara",
    category: "brass",
    subcategory: "Brass God Idols",
    description: "Beautifully detailed brass statue of Goddess Ganga standing on her divine vahana, the crocodile (Makara). She holds a trident and offers blessings — ideal for spiritual decor and devotion.",
    price_inr: null,
    variants: [
      { label: "230 gm · 4.75 in", price_inr: 3200, weight_g: 230 },
      { label: "350 gm · 5.75 in", price_inr: 4800, weight_g: 350 }
    ],
    details: {},
    images: ["img/p28-1.jpeg", "img/p28-2.jpeg", "img/p28-3.jpeg"]
  },
  {
    id: 29,
    name: "Blue Lotus Print Plate",
    subtitle: "Handcrafted Jaipur Blue Pottery",
    category: "ceramics",
    subcategory: "Plates",
    description: "Bring home a piece of Rajasthan's timeless artistry with this 100% handmade blue pottery plate, carefully crafted by skilled artisans in the villages of Rajasthan. Each design reflects generations of traditional craftsmanship using techniques passed down over centuries.",
    price_inr: null,
    price_inr_export: null,
    variants: [
      { label: '8 inch',  price_inr: 2200, price_inr_export: 6000, weight_g: 200 },
      { label: '10 inch', price_inr: 2750, price_inr_export: 7500, weight_g: 310 },
      { label: '12 inch', price_inr: 3300, price_inr_export: 9000, weight_g: 450 }
    ],
    details: { material: "Quartz-based ceramic", technique: "Hand-molded & hand-painted", finish: "Glossy glaze" },
    imagefit: "contain",
    images: ["img/p29-1.jpeg", "img/p29-2.jpeg"]
  },
  {
    id: 30,
    name: "Rajkumari Shringaar Vase",
    subtitle: "Royal Lady Adornment · Jaipur Blue Pottery",
    category: "ceramics",
    subcategory: "Vases",
    description: "Bring home a piece of Rajasthan's royal heritage with this 100% handcrafted Jaipur Blue Pottery vase. The vase depicts a Rajkumari in her shringaar, adorning herself with jewellery, surrounded by delicate foliage. Rendered in the signature Jaipur cobalt blue on a crackled ivory base.",
    price_inr: 15000,
    price_inr_export: 25000,
    variants: null,
    details: { weight: "450 gm", height: "8 in", material: "Quartz-based ceramic", technique: "Hand-molded & hand-painted", finish: "Glossy glaze" },
    weight_g: 450,
    images: ["img/p30-1.jpeg", "img/p30-2.jpeg", "img/p30-3.jpeg"]
  },
  {
    id: 31,
    name: "Mayur Vriksha Plate",
    subtitle: "Peacock & Blossoms · Jaipur Blue Pottery",
    category: "ceramics",
    subcategory: "Plates",
    description: "Celebrate India's national bird with this 100% handcrafted Jaipur Blue Pottery plate. Painted entirely by hand, capturing a regal peacock perched on a blossoming tree against a vivid turquoise sky. Each feather, leaf, and bloom is drawn with fine brushes using natural mineral colours.",
    price_inr: 6000,
    price_inr_export: 18000,
    variants: null,
    details: { material: "Quartz-based ceramic", technique: "Hand-molded & hand-painted", finish: "Glossy glaze" },
    weight_g: 250,
    images: ["img/p31-1.jpeg", "img/p31-2.jpeg"]
  },
  {
    id: 32,
    name: "Neel Kamal Plate",
    subtitle: "Blue Lotus · Jaipur Blue Pottery",
    category: "ceramics",
    subcategory: "Plates",
    description: "Echoing the elegance of Mughal gardens, this 100% handcrafted Jaipur Blue Pottery wall plate features delicate white lotus blooms dancing across a rich cobalt sky. Each flower and leaf is painted freehand by master artisans using the 400-year-old Jaipur blue pottery technique.",
    price_inr: null,
    price_inr_export: null,
    variants: [
      { label: '8 inch',  price_inr: 1450, price_inr_export: 3500, weight_g: 200 },
      { label: '10 inch', price_inr: 1650, price_inr_export: 4500, weight_g: 310 },
      { label: '12 inch', price_inr: 1850, price_inr_export: 5500, weight_g: 450 }
    ],
    details: { material: "Quartz-based ceramic", technique: "Hand-molded & hand-painted", finish: "Glossy glaze" },
    images: ["img/p32-1.jpeg", "img/p32-2.jpeg"]
  },

  // ── WOODWORK ──────────────────────────────────────────────────────────────────
  {
    id: 33,
    name: "Heritage Elephant Sculpture",
    subtitle: "Rajasthani Lattice Motifs · Kadam Wood",
    category: "woodwork",
    subcategory: "Animal Sculptures",
    description: "Handcarved by master artisans in Jaipur from seasoned Kadam wood, this elephant sculpture features intricate Rajasthani lattice, floral, and geometric motifs on a howdah-style backrest. Kadam wood's fine grain and light weight make it ideal for deep, precise handcarving without splintering. Each piece is carved entirely by hand with no machines, so the pattern and depth vary slightly in every item. The smooth matte finish highlights the natural warmth of the wood and the depth of the carving.",
    price_inr: null,
    price_inr_export: null,
    variants: [
      { label: "8 inch",  price_inr: 6000,  price_inr_export: 12000, weight_g: 2400 },
      { label: "12 inch", price_inr: 15000, price_inr_export: 24000, weight_g: 8000 }
    ],
    details: { material: "Seasoned Kadam Wood", craft: "100% Handcarved in Jaipur, India", finish: "Natural matte lacquer" },
    images: ["img/w1-1.jpeg", "img/w1-2.jpeg"]
  },
  {
    id: 34,
    name: "Lattice Owl Bird Sculpture",
    subtitle: "Hidden Owl in Jali Lattice · Kadam Wood",
    category: "woodwork",
    subcategory: "Animal Sculptures",
    description: "Handcarved from seasoned Kadam wood, this sculpture appears as a bird at first glance but reveals an intricately carved owl hidden within the open jali lattice on its body. The fine grain of Kadam wood allows for precise, delicate cuts done entirely by hand, so the pattern varies slightly in every piece. The openwork design creates dynamic shadow patterns when placed near light. A unique conversation piece for shelves, desks, and display cabinets.",
    price_inr: 2500,
    price_inr_export: 4500,
    variants: null,
    details: { material: "Seasoned Kadam Wood", craft: "Handcarved in India", finish: "Natural matte polish", size: "6 inch" },
    weight_g: 250,
    images: ["img/w2-1.jpeg", "img/w2-2.jpeg"]
  },
  {
    id: 35,
    name: "Serene Buddha Head Sculpture",
    subtitle: "Meditative Expression · Kadam Wood",
    category: "woodwork",
    subcategory: "Buddha Collection",
    description: "Handcarved from seasoned Kadam wood, this Buddha head captures a calm, meditative expression with smooth contours and clean detailing. The fine grain of Kadam wood allows for precise handcarving entirely by hand, giving each piece its own subtle character. The natural matte finish highlights the wood's warmth and the softness of the facial features. Designed as a minimalist decor piece for shelves, mantels, and meditation spaces.",
    price_inr: null,
    price_inr_export: null,
    variants: [
      { label: "8 inch",  price_inr: 6000,  price_inr_export: 10000, weight_g: 1000 },
      { label: "10 inch", price_inr: 8000,  price_inr_export: 12000, weight_g: 2000 },
      { label: "12 inch", price_inr: 12000, price_inr_export: 16000, weight_g: 3000 }
    ],
    details: { material: "Seasoned Kadam Wood", craft: "Handcarved in India", finish: "Natural matte lacquer" },
    images: ["img/w3-1.jpeg", "img/w3-2.jpeg", "img/w3-3.jpeg"]
  },
  {
    id: 36,
    name: "Royal Procession Painted Elephant Sculpture",
    subtitle: "Miniature Scenes · Hand-Painted Kadam Wood",
    category: "woodwork",
    subcategory: "Animal Sculptures",
    description: "Handcarved from seasoned Kadam wood and hand-painted with fine detail, this elephant sculpture depicts a traditional royal procession scene with miniature-style figures, palace architecture, and ornate gold accents. Each piece is painted by hand, making the colours and patterns slightly unique across items. A vibrant statement decor piece for consoles, shelves, and display tables.",
    price_inr: null,
    price_inr_export: null,
    variants: [
      { label: "6.5 inch", price_inr: 6000, price_inr_export: 12000, weight_g: 600 },
      { label: "8.5 inch", price_inr: 9000, price_inr_export: 18000, weight_g: 900 }
    ],
    details: { material: "Seasoned Kadam Wood with Hand-Painted Finish", craft: "Handcarved and Hand-Painted in India", finish: "Glossy lacquer" },
    images: ["img/w4-1.jpeg", "img/w4-2.jpeg", "img/w4-3.jpeg", "img/w4-4.jpeg"]
  },
  {
    id: 37,
    name: "Festive Peacock Elephant Sculpture",
    subtitle: "Floral & Peacock Motifs · Hand-Painted Kadam Wood",
    category: "woodwork",
    subcategory: "Animal Sculptures",
    description: "Handcarved from seasoned Kadam wood and hand-painted with detailed floral and peacock motifs in vibrant red, gold, and green. Each piece is painted entirely by hand, so the patterns and colour placement vary slightly, making every sculpture one-of-a-kind. A compact statement piece for shelves, desks, and display tables.",
    price_inr: 3500,
    price_inr_export: 7000,
    variants: null,
    details: { material: "Seasoned Kadam Wood with Hand-Painted Finish", craft: "Handcarved and Hand-Painted in India", finish: "Glossy lacquer", size: "3 inch" },
    weight_g: 200,
    images: ["img/w5-1.jpeg", "img/w5-2.jpeg"]
  },
  {
    id: 38,
    name: "Ornate Ganesha Shrine Sculpture",
    subtitle: "Floral Arch Frame · Kadam Wood",
    category: "woodwork",
    subcategory: "God Idols",
    description: "Handcarved from seasoned Kadam wood, this Ganesha sculpture sits under a detailed arch with floral, geometric, and elephant motifs framing the deity. The fine grain of Kadam wood allows for deep, precise carving done entirely by hand. The natural matte finish highlights the intricate details of the crown, jewellery, and base. A statement decor piece for shelves, mantels, and display tables.",
    price_inr: 28000,
    price_inr_export: 40000,
    variants: null,
    details: { material: "Seasoned Kadam Wood", craft: "Handcarved in India", finish: "Natural matte lacquer", size: "18 inch" },
    weight_g: 4200,
    images: ["img/w6-1.jpeg", "img/w6-2.jpeg"]
  },
  {
    id: 39,
    name: "Twin Parrots Lattice Sculpture",
    subtitle: "Jali Openwork · Kadam Wood",
    category: "woodwork",
    subcategory: "Animal Sculptures",
    description: "Handcarved from seasoned Kadam wood, this sculpture features two parrots facing each other with open jali lattice work across their bodies. The fine grain of Kadam wood allows for delicate, precise cuts done entirely by hand, creating a light, airy form with detailed feather patterns. A striking decor piece for shelves, consoles, and display tables.",
    price_inr: 1200,
    price_inr_export: 2500,
    variants: null,
    details: { material: "Seasoned Kadam Wood", craft: "Handcarved in India", finish: "Natural matte lacquer", size: "6 inch" },
    weight_g: 150,
    images: ["img/w7-1.jpeg", "img/w7-2.jpeg"]
  },
  {
    id: 40,
    name: "Carved Desert Camel Sculpture",
    subtitle: "Floral & Paisley Etchings · Kadam Wood",
    category: "woodwork",
    subcategory: "Animal Sculptures",
    description: "Handcarved from seasoned Kadam wood, this camel sculpture features intricate floral and paisley patterns etched across its saddle and body. The fine grain of Kadam wood allows for clean, detailed carving done entirely by hand, giving each piece a distinct character. A compact decor piece ideal for shelves, desks, and display tables.",
    price_inr: 1400,
    price_inr_export: 3000,
    variants: null,
    details: { material: "Seasoned Kadam Wood", craft: "Handcarved in India", finish: "Natural matte lacquer", size: "6 inch" },
    weight_g: 275,
    images: ["img/w8-1.jpeg", "img/w8-2.jpeg"]
  },
  {
    id: 41,
    name: "Divine Radha Krishna Sculpture",
    subtitle: "Lotus Base · Kadam Wood",
    category: "woodwork",
    subcategory: "God Idols",
    description: "Handcarved from seasoned Kadam wood, this sculpture captures Radha and Krishna standing together on a lotus base with fine detailing in their attire, jewellery, and expressions. The dense grain of Kadam wood allows for precise handcarving, preserving delicate features and openwork details. A timeless decor piece for shelves, altars, and display tables.",
    price_inr: 2500,
    price_inr_export: 4000,
    variants: null,
    details: { material: "Seasoned Kadam Wood", craft: "Handcarved in India", finish: "Natural matte lacquer", size: "6 inch" },
    weight_g: 160,
    images: ["img/w9-1.jpeg", "img/w9-2.jpeg"]
  },
  {
    id: 42,
    name: "Lattice Arch Buddha Sculpture",
    subtitle: "Pierced Floral Arch · Kadam Wood",
    category: "woodwork",
    subcategory: "Buddha Collection",
    description: "Handcarved from seasoned Kadam wood, this sculpture features Buddha seated in meditation under a pierced floral and vine arch. The fine grain of Kadam wood allows for delicate jali work and clean detailing on the robes and base, all done entirely by hand. A calming decor piece for shelves, meditation spaces, and display tables.",
    price_inr: 4000,
    price_inr_export: 7500,
    variants: null,
    details: { material: "Seasoned Kadam Wood", craft: "Handcarved in India", finish: "Natural matte lacquer", size: "7 inch" },
    weight_g: 400,
    images: ["img/w10-1.jpeg", "img/w10-2.jpeg"]
  },
  {
    id: 43,
    name: "Lotus Seat Buddha Sculpture",
    subtitle: "Layered Lotus Base · Kadam Wood",
    category: "woodwork",
    subcategory: "Buddha Collection",
    description: "Handcarved from seasoned Kadam wood, this Buddha sits in meditation on a layered lotus base with clean, flowing lines in the robes and a calm expression. The dense grain of Kadam wood allows for smooth detailing and sharp contours, carved entirely by hand. A minimalist decor piece for shelves, desks, and meditation corners.",
    price_inr: 2350,
    price_inr_export: 4000,
    variants: null,
    details: { material: "Seasoned Kadam Wood", craft: "Handcarved in India", finish: "Natural matte lacquer", size: "6 inch" },
    weight_g: 250,
    images: ["img/w11-1.jpeg", "img/w11-2.jpeg"]
  },
  {
    id: 44,
    name: "Laughing Hotei Sculpture",
    subtitle: "Laughing Buddha · Kadam Wood",
    category: "woodwork",
    subcategory: "Buddha Collection",
    description: "Handcarved from seasoned Kadam wood, this sculpture captures the Laughing Buddha in a standing pose with a wide smile, beaded necklace, and flowing robes. The fine grain of Kadam wood allows for smooth, rounded carving and clean detailing, done entirely by hand. A cheerful decor piece for entryways, shelves, and workspaces.",
    price_inr: 10000,
    price_inr_export: 16000,
    variants: null,
    details: { material: "Seasoned Kadam Wood", craft: "Handcarved in India", finish: "Natural matte lacquer", size: "12 inch" },
    weight_g: 2400,
    images: ["img/w12-1.jpeg", "img/w12-2.jpeg"]
  },
  {
    id: 45,
    name: "Lattice Carved Elephant Sculpture",
    subtitle: "Jali Openwork · Compact · Kadam Wood",
    category: "woodwork",
    subcategory: "Animal Sculptures",
    description: "Handcarved from seasoned Kadam wood, this elephant features openwork lattice patterns across its body with fine floral and geometric detailing. The lightweight Kadam wood allows for delicate jali work done entirely by hand, creating a light, airy form without losing strength. A compact statement piece for shelves, desks, and display tables.",
    price_inr: 2000,
    price_inr_export: 3500,
    variants: null,
    details: { material: "Seasoned Kadam Wood", craft: "Handcarved in India", finish: "Natural matte lacquer", size: "3 inch" },
    weight_g: 250,
    images: ["img/w13-1.jpeg", "img/w13-2.jpeg"]
  },

  // ── CERAMICS (NEW) ────────────────────────────────────────────────────────────
  {
    id: 46,
    name: "Seated Ganesha Plate",
    subtitle: "Lord Ganesha · Handpainted Blue Pottery",
    category: "ceramics",
    subcategory: "Plates",
    description: "Handpainted blue pottery plate in cobalt and white, depicting Lord Ganesha seated with a modak, lotus, and axe in his hands. The fine linework details the ornate crown, jewellery, and drapery, set against a crosshatched and wave-patterned background. The glazed finish keeps the intricate strokes crisp and adds a smooth, luminous surface. A devotional decor piece for pooja spaces, shelves, and wall displays.",
    price_inr: 12000,
    price_inr_export: 18000,
    variants: null,
    details: { material: "Blue Pottery Ceramic", technique: "100% Handmade, Handpainted in India", finish: "Glazed", size: "10 inch" },
    weight_g: 400,
    images: ["img/p46-1.jpeg", "img/p46-2.jpeg"]
  },
  {
    id: 47,
    name: "Dancing Peacock Plate",
    subtitle: "Full Plume Peacock · Blue Pottery",
    category: "ceramics",
    subcategory: "Plates",
    description: "Handpainted blue pottery plate with a peacock in full display, rendered in emerald green, teal, and ochre against a white centre. The detailed tail feathers and turquoise floral border create a balanced, vibrant composition. The glazed finish enhances the colour depth and gives a smooth, glossy surface that is easy to maintain. A lively decor piece for walls, shelves, and entryways.",
    price_inr: 5000,
    price_inr_export: 12000,
    variants: null,
    details: { material: "Blue Pottery Ceramic", technique: "100% Handmade, Handpainted in India", finish: "Glazed", size: "10 inch" },
    weight_g: 400,
    images: ["img/p47-1.jpeg", "img/p47-2.jpeg"]
  },
  {
    id: 48,
    name: "Kamdhenu Blessings Plate",
    subtitle: "Sacred Cow · Handpainted Ceramic",
    category: "ceramics",
    subcategory: "Plates",
    description: "Handpainted ceramic plate featuring a sacred white cow with orange spots, seated on a golden-yellow archway against a cobalt-blue border. The border is adorned with red lotus flowers and green leaves, with lotus buds rising from a blue water panel below. The glossy glaze seals the bold colours and fine details with a smooth, luminous finish. An auspicious decor piece for pooja spaces, entryways, and wall displays.",
    price_inr: 2200,
    price_inr_export: 7000,
    variants: null,
    details: { material: "Ceramic", technique: "100% Handmade, Handpainted in India", finish: "Glazed", size: "10 inch" },
    weight_g: 400,
    images: ["img/p48-1.jpeg", "img/p48-2.jpeg"]
  },
  {
    id: 49,
    name: "Govardhan Melody Plate",
    subtitle: "Krishna Playing Flute · Blue Pottery",
    category: "ceramics",
    subcategory: "Plates",
    description: "Handpainted blue pottery plate in cobalt and white, depicting Krishna playing the flute under a tree with a cow and peacock at his side. The detailed landscape of hills, flowers, and foliage is rendered in fine brushwork and soft washes for depth. The glazed finish preserves the intricate linework and gives a smooth, luminous surface. A serene decor piece for walls, shelves, and pooja spaces.",
    price_inr: 12500,
    price_inr_export: 22000,
    variants: null,
    details: { material: "Blue Pottery Ceramic", technique: "100% Handmade, Handpainted in India", finish: "Glazed", size: "12 inch" },
    weight_g: 650,
    images: ["img/p49-1.jpeg", "img/p49-2.jpeg"]
  },
  {
    id: 50,
    name: "Koi Pond Plate",
    subtitle: "Koi Fish & Lotus · Handpainted Ceramic",
    category: "ceramics",
    subcategory: "Plates",
    description: "Handpainted ceramic plate featuring four koi fish swimming among lily pads and lotus blooms on a deep cobalt ground. The fish in white, rust, and bright yellow are detailed with fine hatching and brushwork, creating movement and balance across the surface. The glossy glaze intensifies the rich blue background and gives the design a smooth, durable finish. A calming decor piece for walls, dining tables, and living spaces.",
    price_inr: 2000,
    price_inr_export: 6000,
    variants: null,
    details: { material: "Ceramic", technique: "100% Handmade, Handpainted in India", finish: "Glazed", size: "10 inch" },
    weight_g: 400,
    images: ["img/p50-1.jpeg", "img/p50-2.jpeg"]
  },
  {
    id: 51,
    name: "Divine Embrace Plate",
    subtitle: "Radha Krishna · Blue Pottery",
    category: "ceramics",
    subcategory: "Plates",
    description: "Handpainted blue pottery plate in cobalt and white, capturing Radha and Krishna in a graceful dance pose with their foreheads nearly touching. The flowing drapery and expressive faces are rendered in fine brushwork against a clean white ground, framed by a solid cobalt rim. The glazed finish keeps the lines sharp and adds a smooth, luminous surface. A romantic devotional piece for walls, shelves, and bedside displays.",
    price_inr: 8000,
    price_inr_export: 15000,
    variants: null,
    details: { material: "Blue Pottery Ceramic", technique: "100% Handmade, Handpainted in India", finish: "Glazed", size: "10 inch" },
    weight_g: 400,
    images: ["img/p51-1.jpeg", "img/p51-2.jpeg"]
  },
  {
    id: 52,
    name: "Ceremonial Horse Plate",
    subtitle: "Caparisoned Horse · Blue Pottery",
    category: "ceramics",
    subcategory: "Plates",
    description: "Handpainted blue pottery plate featuring a white caparisoned horse with yellow and coral detailing set against a deep cobalt ground. The yellow and white geometric border frames the centre, adding contrast and symmetry to the design. The glossy glaze brings out the bold colours and gives the surface a smooth, durable finish. A striking decor piece for accent walls, consoles, and dining areas.",
    price_inr: 3500,
    price_inr_export: 6000,
    variants: null,
    details: { material: "Blue Pottery Ceramic", technique: "100% Handmade, Handpainted in India", finish: "Glazed", size: "10 inch" },
    weight_g: 400,
    images: ["img/p52-1.jpeg", "img/p52-2.jpeg"]
  },
  {
    id: 53,
    name: "Radha Krishna Flute Plate",
    subtitle: "Riverbank Moment · Blue Pottery",
    category: "ceramics",
    subcategory: "Plates",
    description: "Handpainted blue pottery plate in cobalt and white, showing Radha and Krishna in an intimate moment by the riverbank with foliage and a water pot in the background. The flowing drapery and fine linework capture movement and emotion in the scene. The glazed surface keeps the details crisp and adds a smooth, glossy finish. A graceful decor piece for walls, sideboards, and bedside displays.",
    price_inr: 12500,
    price_inr_export: 22000,
    variants: null,
    details: { material: "Blue Pottery Ceramic", technique: "100% Handmade, Handpainted in India", finish: "Glazed", size: "12 inch" },
    weight_g: 650,
    images: ["img/p53-1.jpeg", "img/p53-2.jpeg"]
  },
  {
    id: 54,
    name: "Radha Krishna Yamuna Plate",
    subtitle: "Yamuna Riverbank Scene · Blue Pottery",
    category: "ceramics",
    subcategory: "Plates",
    description: "Handpainted blue pottery plate showing Radha and Krishna seated by a riverbank, with Krishna playing the flute and Radha listening. The scene uses bright yellows, blues, greens, and coral against a white ground, framed by a green and rust border with floral detailing at the base. The glazed finish gives a smooth, vibrant surface that keeps the colours rich. A lively devotional decor piece for walls, pooja corners, and living spaces.",
    price_inr: 16000,
    price_inr_export: 28000,
    variants: null,
    details: { material: "Blue Pottery Ceramic", technique: "100% Handmade, Handpainted in India", finish: "Glazed", size: "12 inch" },
    weight_g: 650,
    images: ["img/p54-1.jpeg", "img/p54-2.jpeg"]
  },
  {
    id: 55,
    name: "Ganesha Mandala Plate",
    subtitle: "Mandala Motifs · Blue Pottery",
    category: "ceramics",
    subcategory: "Plates",
    description: "Handpainted blue pottery plate with Lord Ganesha rendered in fine cobalt linework on a white ground, surrounded by a flowing mandala of lotus and paisley motifs. The detailed patterns and calm expression give the piece a meditative feel. The glazed finish keeps the linework sharp and adds a smooth, protective surface. An auspicious decor piece for pooja spaces, entryways, and wall displays.",
    price_inr: 8000,
    price_inr_export: 15000,
    variants: null,
    details: { material: "Blue Pottery Ceramic", technique: "100% Handmade, Handpainted in India", finish: "Glazed", size: "10 inch" },
    weight_g: 400,
    images: ["img/p55-1.jpeg", "img/p55-2.jpeg"]
  },
  {
    id: 56,
    name: "Lotus Bloom Plate",
    subtitle: "Lotus Flowers · Handpainted Ceramic",
    category: "ceramics",
    subcategory: "Plates",
    description: "Handpainted ceramic plate with vibrant blue and peach lotus flowers, buds, and leaves set against a warm terracotta ground and framed by a bright yellow rim. The bold colour contrast and flowing stems give the design an energetic, traditional feel. The glazed finish seals the artwork with a smooth, glossy surface that keeps the colours vivid. A cheerful decor piece for walls, shelves, and dining tables.",
    price_inr: 2200,
    price_inr_export: 4000,
    variants: null,
    details: { material: "Ceramic", technique: "100% Handmade, Handpainted in India", finish: "Glazed", size: "10 inch" },
    weight_g: 400,
    images: ["img/p56-1.jpeg", "img/p56-2.jpeg"]
  },

  // ── WOODWORK (NEW) ────────────────────────────────────────────────────────────
  {
    id: 57,
    name: "Naga Protected Buddha Sculpture",
    subtitle: "Naga Canopy · Kadam Wood",
    category: "woodwork",
    subcategory: "Buddha Collection",
    description: "Handcarved from seasoned Kadam wood, this sculpture depicts Buddha seated in meditation under the protective canopy of a multi-headed naga. The fine grain of Kadam wood allows for detailed carving of the draped robes, lotus base, and serpent scales, all done entirely by hand. The dual-tone finish highlights the contrast between the figure and the naga canopy, adding depth to the design. A meaningful decor piece for meditation corners, shelves, and display tables.",
    price_inr: 5000,
    price_inr_export: 10000,
    variants: null,
    details: { material: "Seasoned Kadam Wood", craft: "Handcarved and Handpainted in India", finish: "Dual-tone matte and metallic", size: "12 inch" },
    weight_g: 750,
    images: ["img/w14-1.jpeg", "img/w14-2.jpeg"]
  },
  {
    id: 58,
    name: "Kadam Raj Darbar",
    subtitle: "Royal Procession · Hand-Painted Kadam Wood",
    category: "woodwork",
    subcategory: "Animal Sculptures",
    description: "This handcarved Kadam wood elephant features a vibrant miniature painting of a royal procession, with figures seated on an elephant against a palace backdrop. The black base is accented with rich gold, green, yellow, and red details, creating a regal, eye-catching piece. 100% handmade, handcarved, and handpainted by skilled artisans. The glossy finish and intricate brushwork make it perfect for shelf styling, console decor, or as a thoughtful gift. Each piece has subtle variations that make it one of a kind.",
    price_inr: 5000,
    price_inr_export: 10000,
    variants: null,
    details: { material: "Seasoned Kadam Wood", craft: "Handcarved and Handpainted in India", finish: "Glossy lacquer", size: "6 inch" },
    weight_g: 600,
    images: ["img/w15-1.jpeg", "img/w15-2.jpeg"]
  },
  {
    id: 59,
    name: "Shahi Haathi",
    subtitle: "Gold & Black Royal Elephant · Kadam Wood",
    category: "woodwork",
    subcategory: "Animal Sculptures",
    description: "This handcarved elephant is handpainted with a royal procession scene in gold and black. The glossy finish and fine detailing give it a regal, heritage look. 100% handmade, handcarved, and handpainted by skilled artisans. Each piece is unique with subtle variations. Perfect for shelves, desks, and gifting.",
    price_inr: 5000,
    price_inr_export: 10000,
    variants: null,
    details: { material: "Seasoned Kadam Wood", craft: "Handcarved and Handpainted in India", finish: "Glossy lacquer", size: "6.5 inch" },
    weight_g: 1000,
    images: ["img/w16-1.jpeg", "img/w16-2.jpeg"]
  },
  {
    id: 60,
    name: "Noor Hathi",
    subtitle: "Miniature Royal Scene · Hand-Painted Kadam Wood",
    category: "woodwork",
    subcategory: "Animal Sculptures",
    description: "This Kadam wood elephant is handcarved and handpainted with a miniature royal procession scene on its back. The glossy black base is detailed with gold, blue, red, and green motifs, giving it a regal, heritage look. 100% handmade, handcarved, and handpainted by skilled artisans. The fine brushwork and glossy finish make it a striking accent for shelves, desks, and gifting. Each piece is unique, with slight variations that come from the handcrafted process.",
    price_inr: null,
    price_inr_export: null,
    variants: [
      { label: "4 inch", price_inr: 2000, price_inr_export: 5000, weight_g: 250 },
      { label: "5 inch", price_inr: 3500, price_inr_export: 7500, weight_g: 350 },
      { label: "6 inch", price_inr: 5000, price_inr_export: 10000, weight_g: 500 }
    ],
    details: { material: "Seasoned Kadam Wood", craft: "Handcarved and Handpainted in India", finish: "Glossy lacquer" },
    images: ["img/w17-1.jpeg", "img/w17-2.jpeg"]
  },
  {
    id: 61,
    name: "Nataraja Wood Sculpture",
    subtitle: "Cosmic Dance of Shiva · Kadam Wood",
    category: "woodwork",
    subcategory: "God Idols",
    description: "This handcarved wooden Nataraja captures Lord Shiva's cosmic dance within an intricately detailed circular frame. The flowing posture, carved flames, and fine facial detailing reflect traditional craftsmanship and spiritual energy. 100% handmade and handcarved by skilled artisans. The natural wood finish and warm tones make it a powerful centrepiece for home altars, living spaces, or meditation corners. Each piece carries subtle variations from the handcrafted process.",
    price_inr: 10000,
    price_inr_export: 15000,
    variants: null,
    details: { material: "Seasoned Kadam Wood", craft: "Handcarved in India", finish: "Natural matte lacquer", size: "8 inch" },
    weight_g: 1000,
    images: ["img/w18-1.jpeg", "img/w18-2.jpeg"]
  },
  {
    id: 62,
    name: "Radha Krishna Divine Union Sculpture",
    subtitle: "Divine Couple · Kadam Wood",
    category: "woodwork",
    subcategory: "God Idols",
    description: "This Radha Krishna sculpture captures the divine couple in an intricately detailed pose, with flowing garments and expressive forms. The craftsmanship highlights the grace and harmony between Radha and Krishna. 100% handmade and handcarved by skilled artisans. The natural finish and warm tones make it a meaningful centrepiece for home altars, shelves, or gifting. Each piece has subtle variations from the handcrafted process.",
    price_inr: null,
    price_inr_export: null,
    variants: [
      { label: "8 inch",  price_inr: 6500,  price_inr_export: 10000, weight_g: 650 },
      { label: "10 inch", price_inr: 9000,  price_inr_export: 12500, weight_g: 800 },
      { label: "12 inch", price_inr: 12000, price_inr_export: 16000, weight_g: 1200 }
    ],
    details: { material: "Seasoned Kadam Wood", craft: "Handcarved in India", finish: "Natural matte lacquer" },
    images: ["img/w19-1.jpeg", "img/w19-2.jpeg"]
  },
  {
    id: 63,
    name: "Panchamukha Ganesha Blessing Sculpture",
    subtitle: "Five-Headed Ganesha · Kadam Wood",
    category: "woodwork",
    subcategory: "God Idols",
    description: "This Panchamukha Ganesha sculpture shows Lord Ganesha seated on a lotus base, holding traditional symbols with detailed ornamentation and a richly painted finish. The five heads and intricate carving represent wisdom, prosperity, and protection. 100% handmade and handcarved by skilled artisans. The painted detailing and natural base make it a striking centrepiece for home altars, entryways, or gifting. Each piece has subtle variations from the handcrafted process.",
    price_inr: 20000,
    price_inr_export: 28000,
    variants: null,
    details: { material: "Seasoned Kadam Wood", craft: "Handcarved in India", finish: "Natural matte lacquer", size: "12 inch" },
    weight_g: 1200,
    images: ["img/w20-1.jpeg", "img/w20-2.jpeg"]
  },
  {
    id: 64,
    name: "Ganesha Lotus Blessing Sculpture",
    subtitle: "Lotus Throne · Kadam Wood",
    category: "woodwork",
    subcategory: "God Idols",
    description: "This Ganesha sculpture depicts Lord Ganesha seated in a calm blessing posture on a carved lotus base. The detailed ornamentation, expressive features, and balanced proportions reflect traditional craftsmanship and serene energy. 100% handmade and handcarved by skilled artisans. The natural finish makes it a versatile centrepiece for home altars, living spaces, or gifting. Each piece carries subtle variations from the handcrafted process.",
    price_inr: null,
    price_inr_export: null,
    variants: [
      { label: "8 inch",  price_inr: 6000,  price_inr_export: 10000, weight_g: 350 },
      { label: "10 inch", price_inr: 8500,  price_inr_export: 15000, weight_g: 500 },
      { label: "12 inch", price_inr: 12000, price_inr_export: 20000, weight_g: 750 }
    ],
    details: { material: "Seasoned Kadam Wood", craft: "Handcarved in India", finish: "Natural matte lacquer" },
    images: ["img/w21-1.jpeg", "img/w21-2.jpeg"]
  },
  {
    id: 65,
    name: "Heritage Elephant Family Sculpture",
    subtitle: "Mother & Calves · Kadam Wood",
    category: "woodwork",
    subcategory: "Animal Sculptures",
    description: "This sculpture features a large elephant adorned with detailed animal and floral motifs, supported by two baby elephants underneath. The layered carving and symmetrical design create a strong sense of heritage and craftsmanship. 100% handmade and handcarved by skilled artisans. The natural finish highlights the depth of the carving and makes it a striking centrepiece for shelves, consoles, or gifting. Each piece has subtle variations from the handcrafted process.",
    price_inr: 14000,
    price_inr_export: 25000,
    variants: null,
    details: { material: "Seasoned Kadam Wood", craft: "Handcarved in India", finish: "Natural matte lacquer", size: "10 inch" },
    weight_g: 1000,
    images: ["img/w22-1.jpeg", "img/w22-2.jpeg"]
  },
  {
    id: 66,
    name: "Shiva Yogeshwara Meditation Sculpture",
    subtitle: "Meditating Shiva · Kadam Wood",
    category: "woodwork",
    subcategory: "God Idols",
    description: "This Shiva sculpture captures Lord Shiva in a serene meditative pose, seated on an intricately carved base with a trishul in hand. The calm expression and detailed ornamentation reflect balance, strength, and spiritual depth. 100% handmade and handcarved by skilled artisans. The natural finish highlights the grain and detail, making it a powerful centrepiece for home altars, meditation spaces, or gifting. Each piece has subtle variations from the handcrafted process.",
    price_inr: null,
    price_inr_export: null,
    variants: [
      { label: "8 inch",  price_inr: 6000,  price_inr_export: 12000, weight_g: 350 },
      { label: "10 inch", price_inr: 8500,  price_inr_export: 15000, weight_g: 450 },
      { label: "12 inch", price_inr: 12500, price_inr_export: 20000, weight_g: 550 }
    ],
    details: { material: "Seasoned Kadam Wood", craft: "Handcarved in India", finish: "Natural matte lacquer" },
    images: ["img/w23-1.jpeg", "img/w23-2.jpeg"]
  },
  {
    id: 67,
    name: "Ram Darbar Devotional Sculpture",
    subtitle: "Ram, Sita, Lakshman & Hanuman · Kadam Wood",
    category: "woodwork",
    subcategory: "God Idols",
    description: "This Ram Darbar sculpture depicts Lord Ram with Sita, Lakshman, and Hanuman in a balanced composition on a carved base. The detailed expressions, traditional attire, and symbolic elements capture the essence of devotion and harmony. 100% handmade and handcarved by skilled artisans. The natural finish enhances the intricate detailing, making it a meaningful centrepiece for home altars, living spaces, or gifting. Each piece carries subtle variations from the handcrafted process.",
    price_inr: null,
    price_inr_export: null,
    variants: [
      { label: "8 inch",  price_inr: 18000, price_inr_export: null, weight_g: 1100 },
      { label: "10 inch", price_inr: 25000, price_inr_export: null, weight_g: 1900 },
      { label: "12 inch", price_inr: 32000, price_inr_export: null, weight_g: 2800 }
    ],
    details: { material: "Seasoned Kadam Wood", craft: "Handcarved in India", finish: "Natural matte lacquer" },
    images: ["img/w24-1.jpeg", "img/w24-2.jpeg"]
  },
  {
    id: 68,
    name: "Hanuman Abhaya Blessing Sculpture",
    subtitle: "Standing Abhaya Mudra · Kadam Wood",
    category: "woodwork",
    subcategory: "God Idols",
    description: "This Hanuman sculpture depicts Lord Hanuman standing in an abhaya mudra, holding a gada with a calm yet powerful expression. The detailed armour, garland, and posture reflect strength, devotion, and protection. 100% handmade and handcarved by skilled artisans. The natural finish highlights the depth of the carving, making it a striking centrepiece for home altars, desks, or gifting. Each piece has subtle variations from the handcrafted process.",
    price_inr: 10000,
    price_inr_export: 20000,
    variants: null,
    details: { material: "Seasoned Kadam Wood", craft: "Handcarved in India", finish: "Natural matte lacquer", size: "8 inch" },
    weight_g: 500,
    images: ["img/w25-1.jpeg", "img/w25-2.jpeg"]
  },
  {
    id: 69,
    name: "Hanuman Dhyan Blessing Sculpture",
    subtitle: "Seated Meditation · Kadam Wood",
    category: "woodwork",
    subcategory: "God Idols",
    description: "This Hanuman sculpture shows Lord Hanuman seated in a calm, meditative posture with one hand in abhaya mudra and the other resting on a gada. The detailed carving, serene expression, and traditional ornamentation reflect devotion and inner strength. 100% handmade and handcarved by skilled artisans. The natural finish brings out the depth of the detailing, making it a meaningful centrepiece for home altars, meditation spaces, or gifting. Each piece carries subtle variations from the handcrafted process.",
    price_inr: 7500,
    price_inr_export: 14000,
    variants: null,
    details: { material: "Seasoned Kadam Wood", craft: "Handcarved in India", finish: "Natural matte lacquer", size: "9 inch" },
    weight_g: 450,
    images: ["img/w26-1.jpeg", "img/w26-2.jpeg"]
  },

  // ── CERAMICS VASES & SPECIAL PIECES ──────────────────────────────────────────
  {
    id: 70,
    name: "Zard Neel Mughal Floral Vase",
    subtitle: "Mustard & Cobalt Florals · Handpainted Ceramic",
    category: "ceramics",
    subcategory: "Vases",
    description: "Handpainted ceramic vase with a tall baluster form, featuring cobalt-blue floral and vine motifs against a warm mustard-yellow ground. The design includes large stylized blooms, scrolling leaves, and fine foliage, framed by banded blue patterns at the neck and base with a yellow rim detail. The glossy glaze enhances the vivid contrast between yellow and indigo. A bold statement piece for entryways, consoles, and living spaces.",
    price_inr: null,
    price_inr_export: null,
    variants: [
      { label: "15 inch", price_inr: 8000,  price_inr_export: 12500, weight_g: 1000 },
      { label: "20 inch", price_inr: 12000, price_inr_export: 20000, weight_g: 1500 }
    ],
    details: { material: "Ceramic", technique: "100% Handmade, Handpainted in India", finish: "Glazed" },
    images: ["img/v1-1.jpeg", "img/v1-2.jpeg"]
  },
  {
    id: 71,
    name: "Panna Jaali Leaf Vase",
    subtitle: "Emerald Foliage · Handpainted Ceramic",
    category: "ceramics",
    subcategory: "Vases",
    description: "Handpainted ceramic vase with a slender baluster form, covered in dense emerald-green foliage and floral motifs against a crisp white ground. The design features flowing leafy vines and stylized flowers, framed by banded green and blue detailing at the neck, shoulder, and base. The glossy glaze locks in the fine hand-painted patterns and gives the surface a smooth, reflective finish. An elegant nature-inspired piece for consoles, dining tables, and shelf styling.",
    price_inr: null,
    price_inr_export: null,
    variants: [
      { label: "15 inch", price_inr: 8000,  price_inr_export: 12500, weight_g: 1000 },
      { label: "20 inch", price_inr: 12000, price_inr_export: 20000, weight_g: 1500 }
    ],
    details: { material: "Ceramic", technique: "100% Handmade, Handpainted in India", finish: "Glazed" },
    images: ["img/v2-1.jpeg", "img/v2-2.jpeg"]
  },
  {
    id: 72,
    name: "Neel Gulbahar Cylindrical Vase",
    subtitle: "Yellow & Blue Florals · Tall Cylinder",
    category: "ceramics",
    subcategory: "Vases",
    description: "Handpainted ceramic cylinder featuring cascading yellow and blue flowers with coral buds and lush green foliage against a deep cobalt-blue ground. The dense floral vine pattern wraps around the entire surface, framed by thin white bands at the rim and base. The glossy glaze locks in the vibrant hand-painted details. A versatile piece for use as a planter, umbrella stand, or tall accent vase for corners and entryways.",
    price_inr: 16000,
    price_inr_export: 25000,
    variants: null,
    details: { material: "Ceramic", technique: "100% Handmade, Handpainted in India", finish: "Glazed", size: "20 inch" },
    weight_g: 1800,
    images: ["img/v3-1.jpeg", "img/v3-2.jpeg"]
  },
  {
    id: 73,
    name: "Kaali Champa Floral Vase",
    subtitle: "White on Black Florals · Handpainted Ceramic",
    category: "ceramics",
    subcategory: "Vases",
    description: "Handpainted ceramic vase with a classic bulbous body and flared neck, covered in white floral vines and leaves against a deep black ground. The design features large champa blossoms, delicate foliage, and scrolling tendrils with subtle blue shading that adds depth to the motifs. The glossy glaze seals the hand-painted details and gives the black surface a smooth, reflective finish. A bold statement piece for consoles, mantels, and modern interiors.",
    price_inr: 6000,
    price_inr_export: 12000,
    variants: null,
    details: { material: "Ceramic", technique: "100% Handmade, Handpainted in India", finish: "Glazed", size: "10 inch" },
    weight_g: 500,
    images: ["img/v4-1.jpeg", "img/v4-2.jpeg"]
  },
  {
    id: 74,
    name: "Neel Mehraab Chevron Vase",
    subtitle: "Geometric Chevron · Turquoise Cylinder",
    category: "ceramics",
    subcategory: "Vases",
    description: "Handpainted ceramic cylinder vase with a tall, straight form featuring a repeating scallop and chevron pattern in white against a bright turquoise-blue ground. The bold geometric motif creates a rhythmic, wave-like effect that wraps seamlessly around the vase. The glossy glaze enhances the crisp contrast between the sky-blue base and white detailing. A modern yet traditional accent piece for consoles, shelves, and entryways.",
    price_inr: 12000,
    price_inr_export: 20000,
    variants: null,
    details: { material: "Ceramic", technique: "100% Handmade, Handpainted in India", finish: "Glazed", size: "20 inch" },
    weight_g: 1800,
    images: ["img/v5-1.jpeg", "img/v5-2.jpeg"]
  },
  {
    id: 75,
    name: "Cobalt Bloom Cylinder Vase",
    subtitle: "Hibiscus Scrollwork · Cobalt Cylinder",
    category: "ceramics",
    subcategory: "Vases",
    description: "Handpainted ceramic cylinder vase with a tall, straight silhouette fully covered in white floral and vine scrollwork against a deep cobalt-blue ground. The design features large hibiscus blooms, layered leaves, and curling tendrils arranged in continuous bands from rim to base. The glossy glaze deepens the rich blue tone and locks in the crisp white hand-painted details. A striking accent for consoles, entryways, and floor displays.",
    price_inr: 15000,
    price_inr_export: 24000,
    variants: null,
    details: { material: "Ceramic", technique: "100% Handmade, Handpainted in India", finish: "Glazed", size: "20 inch" },
    weight_g: 1800,
    images: ["img/v6-1.jpeg", "img/v6-2.jpeg"]
  },
  {
    id: 76,
    name: "Hiranwali Rani Figurative Vase",
    subtitle: "Rajasthani Folk Narrative · Handpainted Ceramic",
    category: "ceramics",
    subcategory: "Vases",
    description: "Handpainted ceramic bottle vase featuring a traditional Rajasthani scene of a woman in a yellow sari cradling a fawn against a teal-blue ground. The artwork uses vibrant turquoise, gold, blue, and earthy tones with fine linework and expressive detailing to capture the folk-narrative style. The glossy glaze seals the hand-painted illustration and enhances the rich colours. A storytelling accent piece for shelves, mantels, and curated displays.",
    price_inr: 6500,
    price_inr_export: 12000,
    variants: null,
    details: { material: "Ceramic", technique: "100% Handmade, Handpainted in India", finish: "Glazed", size: "10 inch" },
    weight_g: 500,
    images: ["img/v7-1.jpeg", "img/v7-2.jpeg"]
  },
  {
    id: 77,
    name: "Panna Leaf Scroll Vase",
    subtitle: "Emerald Vines · Small Handpainted Ceramic",
    category: "ceramics",
    subcategory: "Vases",
    description: "Handpainted ceramic vase with a bulbous body and flared neck, featuring emerald-green floral vines and leaves against a crisp white ground. The design showcases flowing scrollwork with stylized foliage and petal motifs, accented by thin blue bands and solid green detailing at the rim and base. The glossy glaze locks in the hand-painted patterns and gives the surface a smooth, reflective finish. A fresh, nature-inspired accent for shelves, desks, and tabletops.",
    price_inr: 1800,
    price_inr_export: 5000,
    variants: null,
    details: { material: "Ceramic", technique: "100% Handmade, Handpainted in India", finish: "Glazed", size: "6 inch" },
    weight_g: 300,
    images: ["img/v8-1.jpeg", "img/v8-2.jpeg"]
  },
  {
    id: 78,
    name: "Chidiya Bagh Vase",
    subtitle: "Birds & Garden · Handpainted Ceramic",
    category: "ceramics",
    subcategory: "Vases",
    description: "Handpainted ceramic vase with a bulbous body and flared neck, featuring yellow birds, blue flowers, and green foliage against a crisp white ground. The design combines scrolling vines with small red blossoms and butterflies, creating a lively garden scene framed by cobalt-blue bands at the rim and base. The glossy glaze seals the colourful hand-painted details. A cheerful statement piece for shelves, consoles, and entryways.",
    price_inr: 3500,
    price_inr_export: 7000,
    variants: null,
    details: { material: "Ceramic", technique: "100% Handmade, Handpainted in India", finish: "Glazed", size: "12 inch" },
    weight_g: 700,
    images: ["img/v9-1.jpeg", "img/v9-2.jpeg"]
  },
  {
    id: 79,
    name: "Turquoise Gulabi Floral Vase",
    subtitle: "Warm Florals on Turquoise · Handpainted Ceramic",
    category: "ceramics",
    subcategory: "Vases",
    description: "Handpainted ceramic vase with a bulbous body and slender flared neck, featuring vibrant yellow, orange, and red floral motifs against a turquoise-blue ground. The design showcases flowing white vines and leaves connecting large central blooms, framed by striped bands at the neck and base. The glossy glaze enhances the bright colours and locks in the fine hand-painted details. A cheerful accent piece for shelves, tables, and entryways.",
    price_inr: 3500,
    price_inr_export: 7000,
    variants: null,
    details: { material: "Ceramic", technique: "100% Handmade, Handpainted in India", finish: "Glazed", size: "12 inch" },
    weight_g: 700,
    images: ["img/v10-1.jpeg", "img/v10-2.jpeg"]
  },
  {
    id: 80,
    name: "Noir Jaali Floral Vase",
    subtitle: "White Scrollwork on Black · Handpainted Ceramic",
    category: "ceramics",
    subcategory: "Vases",
    description: "Handpainted ceramic vase with a tapered mehraab form, covered in white floral vines and leaves against a deep black ground. The dense scrollwork features large hibiscus blooms, serrated leaves, and curling tendrils with subtle blue outlining for depth and contrast. The glossy glaze seals the hand-painted details and gives the black surface a smooth, reflective finish. A bold statement piece for consoles, mantels, and modern interiors.",
    price_inr: 3500,
    price_inr_export: 7000,
    variants: null,
    details: { material: "Ceramic", technique: "100% Handmade, Handpainted in India", finish: "Glazed", size: "12 inch" },
    weight_g: 700,
    images: ["img/v11-1.jpeg", "img/v11-2.jpeg"]
  },
  {
    id: 81,
    name: "Radha Krishna Neelkamal Vase",
    subtitle: "Radha Krishna · Cobalt Blue Pottery",
    category: "ceramics",
    subcategory: "Vases",
    description: "Handpainted ceramic vase with a mehraab silhouette, depicting Radha and Krishna in an intimate blue-and-white scene against a white ground. The central panel shows the divine couple in traditional attire, framed by floral and peacock-feather motifs in cobalt blue with fine linework and delicate detailing. The glossy glaze deepens the indigo tones and seals the hand-painted narrative art. A devotional and decorative piece for altars, shelves, and curated displays.",
    price_inr: 12500,
    price_inr_export: 20000,
    variants: null,
    details: { material: "Ceramic", technique: "100% Handmade, Handpainted in India", finish: "Glazed", size: "8 inch" },
    weight_g: 400,
    images: ["img/v12-1.jpeg", "img/v12-2.jpeg"]
  },
  {
    id: 82,
    name: "Cobalt Multicolor Floral Pot Vase",
    subtitle: "Multicolor Blooms · Cobalt Pot",
    category: "ceramics",
    subcategory: "Vases",
    description: "Handpainted ceramic pot vase with a rounded body and flared neck, featuring vibrant blue, turquoise, green, orange, and yellow floral motifs against a deep cobalt-blue ground. The design combines large central blooms with scrolling leaves and buds, framed by banded patterns at the neck and base. The glossy glaze enhances the rich colours and seals the hand-painted details. A cheerful accent piece for shelves, tables, and entryways.",
    price_inr: 1600,
    price_inr_export: 4000,
    variants: null,
    details: { material: "Ceramic", technique: "100% Handmade, Handpainted in India", finish: "Glazed", size: "6 inch" },
    weight_g: 300,
    images: ["img/v13-1.jpeg", "img/v13-2.jpeg"]
  },
  {
    id: 83,
    name: "Indigo Turquoise Floral Pot Vase",
    subtitle: "White & Turquoise on Indigo · Handpainted",
    category: "ceramics",
    subcategory: "Vases",
    description: "Handpainted ceramic pot vase with a rounded bulbous body and narrow flared neck, featuring white floral scrollwork against a deep indigo-blue ground. Small turquoise flowers and leaves are hand-detailed throughout the vines, adding a subtle pop of colour to the traditional motif. The glossy glaze enhances the rich blue tone and seals the hand-painted patterns. A compact accent piece perfect for shelves, desks, and small tables.",
    price_inr: 1800,
    price_inr_export: 4000,
    variants: null,
    details: { material: "Ceramic", technique: "100% Handmade, Handpainted in India", finish: "Glazed", size: "10 inch" },
    weight_g: 500,
    images: ["img/v14-1.jpeg", "img/v14-2.jpeg"]
  },
  {
    id: 84,
    name: "Indigo Turquoise Jaali Pot Vase",
    subtitle: "Scrollwork on Deep Indigo · Handpainted",
    category: "ceramics",
    subcategory: "Vases",
    description: "Handpainted ceramic pot vase with a rounded body and short flared neck, covered in white floral vines and scrollwork against a deep indigo-blue ground. Turquoise accents highlight the small flowers and leaves, adding contrast to the traditional blue and white motif. The glossy glaze deepens the cobalt tone and locks in the hand-painted details. A compact decor piece ideal for shelves, desks, and tabletop styling.",
    price_inr: 6000,
    price_inr_export: 12000,
    variants: null,
    details: { material: "Ceramic", technique: "100% Handmade, Handpainted in India", finish: "Glazed", size: "10 inch" },
    weight_g: 500,
    images: ["img/v15-1.jpeg", "img/v15-2.jpeg"]
  },
  {
    id: 85,
    name: "Cobalt Lotus Cylinder Vase",
    subtitle: "Lotus Blooms · Cobalt Cylinder",
    category: "ceramics",
    subcategory: "Vases",
    description: "Handpainted ceramic cylinder vase with tall, slender form and vertical white lotus blooms against a deep cobalt-blue ground. The flowing stems and layered petals extend from base to rim, creating an elegant, elongating pattern. The glossy glaze deepens the blue tone and seals the hand-painted motifs with a smooth, reflective finish. A striking accent for mantels, consoles, and dining tables.",
    price_inr: 2200,
    price_inr_export: 5000,
    variants: null,
    details: { material: "Ceramic", technique: "100% Handmade, Handpainted in India", finish: "Glazed", size: "8.5 inch" },
    weight_g: 400,
    images: ["img/v16-1.jpeg", "img/v16-2.jpeg"]
  },
  {
    id: 86,
    name: "Blue Lotus Mini Vase",
    subtitle: "Lotus on Cobalt · Mini Ceramic Vase",
    category: "ceramics",
    subcategory: "Vases",
    description: "Handpainted ceramic vase with a rounded body and short neck, featuring white lotus blooms and buds against a deep cobalt-blue ground. The flowing stems and delicate petals create a balanced, nature-inspired pattern across the surface. The glossy glaze enhances the contrast between the white motifs and rich blue base. A versatile accent piece for shelves, desks, and small tables.",
    price_inr: 1500,
    price_inr_export: 3200,
    variants: null,
    details: { material: "Ceramic", technique: "100% Handmade, Handpainted in India", finish: "Glazed", size: "5 inch" },
    weight_g: 200,
    images: ["img/v17-1.jpeg", "img/v17-2.jpeg"]
  },

  // ── CERAMICS — SPECIAL PIECES ─────────────────────────────────────────────────
  {
    id: 87,
    name: "Nocturne Owl Ceramic Sculpture",
    subtitle: "Cobalt on Ivory · Jaipur Blue Pottery",
    category: "ceramics",
    subcategory: "Miniatures & Decor",
    description: "A quiet guardian for your shelf. This owl is 100% handmade and handpainted by Jaipur artisans using the traditional cobalt-on-ivory technique. Each floral pattern is painted freehand, so no two pieces are identical. Matte finish, hand-glazed, built to sit pretty for years. Perfect for console tables, bookshelves, and gifting.",
    price_inr: 8000,
    price_inr_export: 16000,
    variants: null,
    details: { material: "Ceramic", technique: "100% Handmade, Handpainted in India", finish: "Glazed", size: "10 inch" },
    weight_g: 600,
    images: ["img/v18-1.jpeg", "img/v18-2.jpeg"]
  },
  {
    id: 88,
    name: "Floral Filigree Owl Figurine",
    subtitle: "Cobalt Scroll Motifs · Ceramic Owl",
    category: "ceramics",
    subcategory: "Miniatures & Decor",
    description: "A striking ivory ceramic owl adorned with intricate cobalt-blue scroll and floral motifs, hand-painted by skilled artisans using traditional techniques. The sculpted eyes and rounded form give it a timeless, elegant presence. Perfect for display on a console, bookshelf, or side table, it adds a touch of heritage craftsmanship to modern interiors. The piece is glazed for durability and comes with subtle variations that make each owl unique.",
    price_inr: 12000,
    price_inr_export: 20000,
    variants: null,
    details: { material: "Ceramic", technique: "100% Handmade, Handpainted in India", finish: "Glazed", size: "10 inch" },
    weight_g: 600,
    images: ["img/v19-1.jpeg", "img/v19-2.jpeg"]
  },
  {
    id: 89,
    name: "Cobalt Floral Conch Shell",
    subtitle: "Coastal Heritage · Handpainted Ceramic",
    category: "ceramics",
    subcategory: "Miniatures & Decor",
    description: "Shaped like a classic conch and painted with delicate cobalt blue florals, this ceramic shell brings coastal and heritage vibes together. The glossy glaze highlights every curve, while the ivory base keeps it light and versatile for modern or traditional spaces. Place it on a stone slab, coffee table, or pooja setup for a sculptural accent that sparks conversation. Each piece is hand-finished, so expect subtle variations that make it one of a kind.",
    price_inr: 2500,
    price_inr_export: 5000,
    variants: null,
    details: { material: "Ceramic", technique: "100% Handmade, Handpainted in India", finish: "Glazed" },
    weight_g: 300,
    images: ["img/v20-1.jpeg", "img/v20-2.jpeg"]
  },
  {
    id: 90,
    name: "Neel Kamal Shankh",
    subtitle: "Blue Lotus Conch · Handpainted Ceramic",
    category: "ceramics",
    subcategory: "Miniatures & Decor",
    description: "Handpainted ceramic conch shell with flowing cobalt-blue floral vines and large lotus motifs against a crisp white ground. The design follows the natural spiral of the shankh with layered scrollwork, leafy tendrils, and banded patterns at the apex and opening. The glossy glaze locks in the fine hand-painted details. A traditional decorative accent for pooja spaces, shelves, and cultural displays.",
    price_inr: 2500,
    price_inr_export: 5000,
    variants: null,
    details: { material: "Ceramic", technique: "100% Handmade, Handpainted in India", finish: "Glazed" },
    weight_g: 300,
    images: ["img/v21-1.jpeg", "img/v21-2.jpeg"]
  },
  {
    id: 91,
    name: "Neel Zard Kamal Shankh",
    subtitle: "Cobalt, White & Mustard Conch · Handpainted",
    category: "ceramics",
    subcategory: "Miniatures & Decor",
    description: "Handpainted ceramic conch shell with a sweeping spiral form, featuring white lotus and floral vines against a deep cobalt-blue ground. The pointed tip and inner rim are accented in bright mustard-yellow with geometric detailing, creating a striking contrast to the blue-and-white body. The glossy glaze seals the intricate hand-painted patterns and enhances the vivid colours. A traditional decorative piece for pooja spaces, shelves, and cultural displays.",
    price_inr: 3600,
    price_inr_export: 7200,
    variants: null,
    details: { material: "Ceramic", technique: "100% Handmade, Handpainted in India", finish: "Glazed" },
    weight_g: 300,
    images: ["img/v22-1.jpeg", "img/v22-2.jpeg"]
  },
  {
    id: 92,
    name: "Saffron Medallion Plate",
    subtitle: "Radiating Floral Vines · Handpainted Ceramic",
    category: "ceramics",
    subcategory: "Plates",
    description: "Handpainted ceramic plate featuring radiating floral vines in gradient saffron and rust tones on an off-white ground, centered around a circular medallion motif. The symmetrical scrollwork flows outward and is framed by a warm terracotta rim. The glazed finish locks in the hand-painted details and gives the surface a smooth, glossy sheen. A traditional decor piece for walls, sideboards, and festive table settings.",
    price_inr: 6000,
    price_inr_export: 12000,
    variants: null,
    details: { material: "Ceramic", technique: "100% Handmade, Handpainted in India", finish: "Glazed", size: "12 inch" },
    weight_g: 500,
    images: ["img/v23-1.jpeg", "img/v23-2.jpeg"]
  },
  {
    id: 93,
    name: "Indigo Bloom Plate",
    subtitle: "Golden Vines on Cobalt Blue · Handpainted Ceramic",
    category: "ceramics",
    subcategory: "Plates",
    description: "Handpainted ceramic plate with golden-yellow floral vines and leaves cascading across a rich indigo-blue ground. The bold contrast and flowing scrollwork create a striking, regal pattern reminiscent of Mughal jaali work. The glazed finish deepens the cobalt tone and gives the surface a smooth, luminous shine. An elegant decor piece for walls, mantels, and display shelves.",
    price_inr: 5000,
    price_inr_export: 10000,
    variants: null,
    details: { material: "Ceramic", technique: "100% Handmade, Handpainted in India", finish: "Glazed", size: "12 inch" },
    weight_g: 500,
    images: ["img/v24-1.jpeg", "img/v24-2.jpeg"]
  },
  {
    id: 94,
    name: "Marigold Flame Plate",
    subtitle: "Crimson & Gold Floral Vines · Handpainted Ceramic",
    category: "ceramics",
    subcategory: "Plates",
    description: "Handpainted ceramic plate with dense floral vines in gradient shades of crimson and golden yellow on an off-white ground. The warm tones and fine linework give the design an energetic, festive feel, framed by a deep red rim. The glazed finish enhances the color depth and seals the surface with a smooth, glossy shine. A vibrant decor piece for walls, dining tables, and festive displays.",
    price_inr: 6000,
    price_inr_export: 12000,
    variants: null,
    details: { material: "Ceramic", technique: "100% Handmade, Handpainted in India", finish: "Glazed", size: "12 inch" },
    weight_g: 500,
    images: ["img/v25-1.jpeg", "img/v25-2.jpeg"]
  },
  {
    id: 95,
    name: "Green Chintz Garden Plate",
    subtitle: "White Blooms on Forest Green · Handpainted Ceramic",
    category: "ceramics",
    subcategory: "Plates",
    description: "Handpainted ceramic plate featuring white floral scrollwork and yellow blossoms with maroon centers set against a deep forest-green ground. A border of white leaf motifs and mustard dots frames the design, finished with a bright yellow rim. The glazed finish locks in the vivid colors and gives the surface a smooth, glossy sheen. A bold decor piece for walls, consoles, and shelving displays.",
    price_inr: null,
    price_inr_export: null,
    variants: [
      { label: "10 inch", price_inr: 2500, price_inr_export: 5000, weight_g: 350 },
      { label: "12 inch", price_inr: 5000, price_inr_export: 10000, weight_g: 500 }
    ],
    details: { material: "Ceramic", technique: "100% Handmade, Handpainted in India", finish: "Glazed", size: "10 inch / 12 inch" },
    weight_g: 500,
    images: ["img/v26-1.jpeg", "img/v26-2.jpeg"]
  },
  {
    id: 96,
    name: "Mustard Gaj Plate",
    subtitle: "Ceremonial Elephant · Handpainted Ceramic",
    category: "ceramics",
    subcategory: "Plates",
    description: "Handpainted ceramic plate featuring a white ceremonial elephant walking against a vibrant mustard-yellow ground. The elephant is adorned with a blue howdah and cloth detailed with floral and cross motifs in turquoise, red, and green, with red anklets and fine folk-art outlines. The glossy glaze locks in the bold colors and brushwork, giving the surface a smooth, luminous finish. An auspicious decor piece for walls, entryways, and shelves.",
    price_inr: null,
    price_inr_export: null,
    variants: [
      { label: "10 inch", price_inr: 4000, price_inr_export: 8000, weight_g: 350 },
      { label: "12 inch", price_inr: 9000, price_inr_export: 18000, weight_g: 500 }
    ],
    details: { material: "Ceramic", technique: "100% Handmade, Handpainted in India", finish: "Glazed", size: "10 inch / 12 inch" },
    weight_g: 500,
    images: ["img/v27-1.jpeg", "img/v27-2.jpeg"]
  },
  {
    id: 97,
    name: "Saffron Ashwa Plate",
    subtitle: "Folk Horse on Mustard Ground · Handpainted Ceramic",
    category: "ceramics",
    subcategory: "Plates",
    description: "Handpainted ceramic plate featuring a white folk-style horse captured mid-gallop against a vibrant mustard-yellow ground. The horse wears a colorful saddle and bridle in turquoise, red, and blue with bold geometric patterns and a central rosette motif. The glossy glaze enhances the rich yellow background and seals the hand-painted details with a smooth, luminous finish. A dynamic decor piece for walls, consoles, and cultural displays.",
    price_inr: null,
    price_inr_export: null,
    variants: [
      { label: "10 inch", price_inr: 4000, price_inr_export: 8000, weight_g: 350 },
      { label: "12 inch", price_inr: 9000, price_inr_export: 18000, weight_g: 500 }
    ],
    details: { material: "Ceramic", technique: "100% Handmade, Handpainted in India", finish: "Glazed", size: "10 inch / 12 inch" },
    weight_g: 500,
    images: ["img/v28-1.jpeg", "img/v28-2.jpeg"]
  },
  {
    id: 98,
    name: "Blue Matsya Plate",
    subtitle: "Twin Fish on Cobalt Blue · Handpainted Ceramic",
    category: "ceramics",
    subcategory: "Plates",
    description: "Handpainted ceramic plate featuring two stylized fish swimming in opposite directions against a deep cobalt-blue ground. The fish are rendered in white with turquoise scales, rust-red accents, and green fins, outlined in fine detail and framed by a simple white rim. The glossy glaze enhances the rich blue background and gives the hand-painted motifs a smooth, luminous finish. A symbolic decor piece for walls, shelves, and entryways, representing prosperity and good fortune.",
    price_inr: null,
    price_inr_export: null,
    variants: [
      { label: "10 inch", price_inr: 6000, price_inr_export: 12000, weight_g: 350 },
      { label: "12 inch", price_inr: 12000, price_inr_export: 24000, weight_g: 500 }
    ],
    details: { material: "Ceramic", technique: "100% Handmade, Handpainted in India", finish: "Glazed", size: "10 inch / 12 inch" },
    weight_g: 500,
    images: ["img/v29-1.jpeg", "img/v29-2.jpeg"]
  },
  {
    id: 99,
    name: "Nandi Yellow Plate",
    subtitle: "Sacred Cow on Mustard Ground · Handpainted Ceramic",
    category: "ceramics",
    subcategory: "Plates",
    description: "Handpainted ceramic plate featuring a white sacred cow with red spots and decorative bells, set against a vibrant mustard-yellow ground. The cow is adorned with blue and green ornaments and captured mid-step, surrounded by a border of white floral motifs and green accents. The glossy glaze locks in the bold colors and fine brushwork with a smooth, luminous finish. An auspicious decor piece for pooja spaces, entryways, and wall displays.",
    price_inr: null,
    price_inr_export: null,
    variants: [
      { label: "10 inch", price_inr: 5500, price_inr_export: 11000, weight_g: 350 },
      { label: "12 inch", price_inr: 10000, price_inr_export: 20000, weight_g: 500 }
    ],
    details: { material: "Ceramic", technique: "100% Handmade, Handpainted in India", finish: "Glazed", size: "10 inch / 12 inch" },
    weight_g: 500,
    images: ["img/v30-1.jpeg", "img/v30-2.jpeg"]
  },
  {
    id: 100,
    name: "Red Bloom Jaali Plate",
    subtitle: "Turquoise Vines on Terracotta Red · Handpainted Ceramic",
    category: "ceramics",
    subcategory: "Plates",
    description: "Handpainted ceramic plate with turquoise-blue floral vines and leaves swirling across a rich terracotta-red ground. The fine jaali-inspired scrollwork radiates from the center, creating a bold contrast between the cool blue motifs and warm red base. The glazed finish deepens the colors and seals the surface with a smooth, glossy sheen. A striking decor piece for walls, shelves, and festive displays.",
    price_inr: 7500,
    price_inr_export: 14000,
    variants: null,
    details: { material: "Ceramic", technique: "100% Handmade, Handpainted in India", finish: "Glazed", size: "12 inch" },
    weight_g: 500,
    images: ["img/v31-1.jpeg", "img/v31-2.jpeg"]
  },
  {
    id: 101,
    name: "Green Jaali Vine Plate",
    subtitle: "Flowing Green Scrollwork · Handpainted Ceramic",
    category: "ceramics",
    subcategory: "Plates",
    description: "Handpainted ceramic plate with flowing green floral vines and leaves spreading across an off-white ground. The dense scrollwork forms a balanced, organic pattern framed by a deep olive-green rim with a leaf-and-dot border. The glazed finish deepens the green tones and gives the surface a smooth, glossy sheen. A versatile decor piece for walls, consoles, and dining tables.",
    price_inr: 5000,
    price_inr_export: 10000,
    variants: null,
    details: { material: "Ceramic", technique: "100% Handmade, Handpainted in India", finish: "Glazed", size: "12 inch" },
    weight_g: 500,
    images: ["img/v32-1.jpeg", "img/v32-2.jpeg"]
  },
  {
    id: 102,
    name: "Blue Chintz Vine Plate",
    subtitle: "Cascading Blue Vines on Off-White · Handpainted Ceramic",
    category: "ceramics",
    subcategory: "Plates",
    description: "Handpainted ceramic plate featuring cascading blue floral vines with layered shading on an off-white ground. The dense scrollwork creates a flowing, organic pattern framed by a deep cobalt rim. The glazed finish enhances the depth of the blue tones and seals the surface with a smooth, glossy sheen. An elegant decor piece for walls, shelves, and dining tables.",
    price_inr: 6000,
    price_inr_export: 12000,
    variants: null,
    details: { material: "Ceramic", technique: "100% Handmade, Handpainted in India", finish: "Glazed", size: "12 inch" },
    weight_g: 500,
    images: ["img/v33-1.jpeg", "img/v33-2.jpeg"]
  },
  {
    id: 103,
    name: "Mughal Vine Plate",
    subtitle: "Cobalt, Mustard & Crimson Vine · Handpainted Ceramic",
    category: "ceramics",
    subcategory: "Plates",
    description: "Handpainted ceramic plate with a flowing floral vine pattern in cobalt blue, mustard yellow, and crimson, set against an off-white ground. Lush green leaves intertwine across the surface, radiating from a central medallion and framed by a bright yellow rim. The glazed finish enhances the color depth and gives the surface a smooth, glossy shine. A versatile decor piece for walls, sideboards, and dining tables.",
    price_inr: null,
    price_inr_export: null,
    variants: [
      { label: "10 inch", price_inr: 2500, price_inr_export: 5000, weight_g: 350 },
      { label: "12 inch", price_inr: 6000, price_inr_export: 12000, weight_g: 500 }
    ],
    details: { material: "Ceramic", technique: "100% Handmade, Handpainted in India", finish: "Glazed", size: "10 inch / 12 inch" },
    weight_g: 500,
    images: ["img/v34-1.jpeg", "img/v34-2.jpeg"]
  }
];

// ── PRICING UTILS ─────────────────────────────────────────────────────────────
const INTL_MARKUP = 1.15;

function getBasePrice(product, variantIndex) {
  variantIndex = variantIndex || 0;
  if (product.variants) return product.variants[variantIndex].price_inr;
  return product.price_inr;
}

function getExportPrice(product, variantIndex) {
  variantIndex = variantIndex || 0;
  if (product.variants) {
    var v = product.variants[variantIndex];
    return v.price_inr_export || Math.round(v.price_inr * INTL_MARKUP);
  }
  return product.price_inr_export || Math.round(product.price_inr * INTL_MARKUP);
}

function formatPrice(inr, currency, rates) {
  if (!inr) inr = 0;
  if (currency === 'INR') return '₹' + Math.round(inr).toLocaleString('en-IN');
  var amount = inr * INTL_MARKUP;
  var inrRate = (rates && rates['INR']) || 94.75;
  var targetRate = (rates && rates[currency]) || 1;
  var converted = (amount / inrRate) * targetRate;
  var symbols = { USD: '$', GBP: '£', EUR: '€', AED: 'AED ', AUD: 'A$', CAD: 'CA$', SGD: 'S$' };
  var symbol = symbols[currency] || currency + ' ';
  if (currency === 'AED') return symbol + Math.round(converted);
  return symbol + converted.toFixed(2);
}

function getProductPrice(product, variantIndex, currency, rates) {
  variantIndex = variantIndex || 0;
  var inr = getBasePrice(product, variantIndex);
  if (currency === 'INR') return '₹' + Math.round(inr).toLocaleString('en-IN');

  var symbols = { USD: '$', GBP: '£', EUR: '€', AED: 'AED ', AUD: 'A$', CAD: 'CA$', SGD: 'S$' };
  var symbol = symbols[currency] || currency + ' ';

  // Use price_inr_export for ceramics (fixed export INR price), else brass markup
  var exportInr = getExportPrice(product, variantIndex);
  var inrRate = (rates && rates['INR']) || 94.75;
  var targetRate = (rates && rates[currency]) || 1;
  var converted = (exportInr / inrRate) * targetRate;
  if (currency === 'AED') return symbol + Math.round(converted);
  return symbol + converted.toFixed(2);
}

// ── WEIGHT UTIL ───────────────────────────────────────────────────────────────
// Returns product weight in grams for a given variant index
function getProductWeight(product, variantIndex) {
  variantIndex = variantIndex || 0;
  if (product.variants && product.variants[variantIndex]) {
    return product.variants[variantIndex].weight_g || 500;
  }
  return product.weight_g || 500;
}
