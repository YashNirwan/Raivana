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
      { label: '8 inch',  price_inr: 1600, price_inr_export: 4500, weight_g: 200 },
      { label: '10 inch', price_inr: 2000, price_inr_export: 5500, weight_g: 310 },
      { label: '12 inch', price_inr: 2400, price_inr_export: 6500, weight_g: 450 }
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
    price_inr: 3000,
    price_inr_export: 9000,
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
    price_inr: 24000,
    price_inr_export: 35000,
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
