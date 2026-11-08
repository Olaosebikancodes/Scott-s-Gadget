import type { Category } from './site';

/*
  THE CATALOGUE. This is the one file to edit when stock changes.

  - To add a product: copy one block, give it a new unique `slug` (lowercase, dashes),
    put its photo in /public/products/ and point `images` at it.
  - To show a price: add `price: 850000` (naira, numbers only). Leave it out to show "Ask for price".
  - To show condition: add `condition: 'Brand new'` or `condition: 'UK used'`.
  - `featured: true` puts a product first in the shop.
  - To remove a product: delete its block.
*/

export type Product = {
  slug: string;
  name: string;
  category: Category;
  detail: string;
  highlights: string[];
  description: string;
  images: string[];
  price?: number;
  condition?: string;
  featured?: boolean;
  tags?: string[];
};

export const PRODUCTS: Product[] = [
  // iPhone
  {
    slug: 'iphone-duo',
    name: 'iPhone Duo',
    category: 'iPhone',
    detail: '256GB to 2TB · Night Sky, Star White',
    highlights: ['A20 Pro chip', '7.6-inch folding OLED display inside', '5.4-inch OLED display outside', '48MP Dual Fusion camera system'],
    description: "Apple's foldable iPhone. Use it closed like a compact phone, then open it into a 7.6-inch screen for reading, watching and working.",
    images: ['/products/iphone-duo.jpg'],
    featured: true,
    tags: ['fold', 'foldable'],
  },
  {
    slug: 'iphone-18-pro-max',
    name: 'iPhone 18 Pro Max',
    category: 'iPhone',
    detail: '6.9-inch · 256GB to 2TB',
    highlights: ['A20 Pro chip', '6.9-inch Super Retina XDR display with ProMotion', '48MP Main, Ultra Wide and 4x Telephoto cameras', 'Colours: Black, Silver, Glacier, Burgundy'],
    description: "The biggest screen and best cameras in Apple's newest Pro line, with an aluminium unibody design.",
    images: ['/products/iphone-18-pro-max.jpg'],
    featured: true,
  },
  {
    slug: 'iphone-18-pro',
    name: 'iPhone 18 Pro',
    category: 'iPhone',
    detail: '6.3-inch · 256GB to 2TB',
    highlights: ['A20 Pro chip', '6.3-inch Super Retina XDR display with ProMotion', '48MP Main, Ultra Wide and 4x Telephoto cameras', 'Colours: Black, Silver, Glacier, Burgundy'],
    description: 'All the power and cameras of the Pro Max in a size that is easier to hold in one hand.',
    images: ['/products/iphone-18-pro.jpg'],
  },
  {
    slug: 'iphone-17-pro-max',
    name: 'iPhone 17 Pro Max',
    category: 'iPhone',
    detail: '6.9-inch · 256GB to 2TB',
    highlights: ['A19 Pro chip', '6.9-inch Super Retina XDR display with ProMotion', 'Three 48MP Fusion cameras, including 4x Telephoto', 'Colours: Cosmic Orange, Deep Blue, Silver'],
    description: 'Last year’s flagship and still a powerhouse, with a huge display and excellent battery life.',
    images: ['/products/iphone-17-pro-max.jpg'],
    featured: true,
  },
  {
    slug: 'iphone-air',
    name: 'iPhone Air',
    category: 'iPhone',
    detail: '6.5-inch · 256GB to 1TB',
    highlights: ['A19 Pro chip', '6.5-inch Super Retina XDR display with ProMotion', 'The thinnest iPhone Apple has made', '48MP Fusion camera'],
    description: 'A big, bright display in a remarkably thin and light body. Made for people who want a premium phone that disappears in the pocket.',
    images: ['/products/iphone-air.jpg'],
  },
  {
    slug: 'iphone-17',
    name: 'iPhone 17',
    category: 'iPhone',
    detail: '6.3-inch · 256GB, 512GB',
    highlights: ['A19 chip', '6.3-inch display with ProMotion up to 120Hz', '48MP Fusion Main and 48MP Fusion Ultra Wide cameras', 'Colours: Black, White, Mist Blue, Sage, Lavender'],
    description: 'The everyday iPhone with a smooth 120Hz display and two 48MP cameras.',
    images: ['/products/iphone-17.jpg'],
  },
  {
    slug: 'iphone-17e',
    name: 'iPhone 17e',
    category: 'iPhone',
    detail: '6.1-inch · 256GB, 512GB',
    highlights: ['A19 chip', '6.1-inch OLED display', '48MP Fusion camera with 2x telephoto', 'Colours: Black, White, Soft Pink'],
    description: 'The most affordable way into a current iPhone, with the same A19 chip as the iPhone 17.',
    images: ['/products/iphone-17e.jpg'],
  },
  {
    slug: 'iphone-16-pro-max',
    name: 'iPhone 16 Pro Max',
    category: 'iPhone',
    detail: '6.9-inch · 256GB to 1TB',
    highlights: ['A18 Pro chip', '6.9-inch Super Retina XDR display with ProMotion', '48MP Fusion camera and 5x Telephoto', 'Titanium design'],
    description: 'A titanium Pro Max with a 5x zoom camera. Great value now that newer models are out.',
    images: ['/products/iphone-16-pro-max.jpg'],
  },
  {
    slug: 'iphone-16',
    name: 'iPhone 16',
    category: 'iPhone',
    detail: '6.1-inch · 128GB to 512GB',
    highlights: ['A18 chip', '6.1-inch Super Retina XDR display', '48MP Fusion camera', 'Camera Control and Action button'],
    description: 'A dependable, colourful iPhone with a 48MP camera and the handy Camera Control button.',
    images: ['/products/iphone-16.jpg'],
  },
  {
    slug: 'iphone-15-pro-max',
    name: 'iPhone 15 Pro Max',
    category: 'iPhone',
    detail: '6.7-inch · 256GB to 1TB',
    highlights: ['A17 Pro chip', '6.7-inch Super Retina XDR display with ProMotion', '48MP Main camera and 5x Telephoto', 'Titanium design with USB-C'],
    description: 'The first titanium iPhone and still a favourite. A big screen and pro cameras for less.',
    images: ['/products/iphone-15-pro-max.jpg'],
  },
  {
    slug: 'iphone-14-pro-max',
    name: 'iPhone 14 Pro Max',
    category: 'iPhone',
    detail: '6.7-inch · 128GB to 1TB',
    highlights: ['A16 Bionic chip', '6.7-inch Super Retina XDR display with Always-On', '48MP Main camera', 'Dynamic Island'],
    description: 'A proven Pro Max with an Always-On display and Dynamic Island at a friendlier price.',
    images: ['/products/iphone-14-pro-max.jpg'],
  },
  {
    slug: 'iphone-13',
    name: 'iPhone 13',
    category: 'iPhone',
    detail: '6.1-inch · 128GB to 512GB',
    highlights: ['A15 Bionic chip', '6.1-inch Super Retina XDR display', 'Dual 12MP camera system', 'Face ID and MagSafe'],
    description: 'A solid, budget-friendly iPhone that still handles everyday apps, photos and video well.',
    images: ['/products/iphone-13.jpg'],
  },

  // iPad
  {
    slug: 'ipad-pro',
    name: 'iPad Pro (M5)',
    category: 'iPad',
    detail: '11-inch · 13-inch',
    highlights: ['Apple M5 chip', 'Ultra Retina XDR display', 'Supports Apple Pencil Pro', 'Works with Magic Keyboard for iPad Pro'],
    description: 'The most powerful iPad, with a stunning display. Pair it with a keyboard and it can stand in for a laptop.',
    images: ['/products/ipad-pro.jpg'],
    featured: true,
  },
  {
    slug: 'ipad-air',
    name: 'iPad Air (M4)',
    category: 'iPad',
    detail: '11-inch · 13-inch',
    highlights: ['Apple M4 chip', 'Liquid Retina display', 'Supports Apple Pencil Pro', 'Thin and light design'],
    description: 'Serious performance in a thin, light iPad. A great pick for students and creatives.',
    images: ['/products/ipad-air.jpg'],
  },
  {
    slug: 'ipad',
    name: 'iPad (A16)',
    category: 'iPad',
    detail: '11-inch · 128GB to 512GB',
    highlights: ['A16 chip', '11-inch Liquid Retina display', 'Supports Apple Pencil (USB-C)', 'Colours: Blue, Pink, Yellow, Silver'],
    description: 'The colourful, all-screen iPad for school, streaming and everyday browsing.',
    images: ['/products/ipad.jpg'],
  },
  {
    slug: 'ipad-mini',
    name: 'iPad mini (A20 Pro)',
    category: 'iPad',
    detail: '8.5-inch · Super Retina XDR',
    highlights: ['A20 Pro chip', '8.5-inch Super Retina XDR display', 'Supports Apple Pencil Pro', 'Small enough to hold in one hand'],
    description: 'The full iPad experience in a size that slips into a small bag. Perfect for reading and notes on the move.',
    images: ['/products/ipad-mini.jpg'],
  },

  // Mac
  {
    slug: 'macbook-neo',
    name: 'MacBook Neo',
    category: 'Mac',
    detail: '13-inch · 256GB, 512GB',
    highlights: ['Apple A18 Pro chip', '13-inch Liquid Retina display', '8GB unified memory', 'Touch ID on the 512GB model'],
    description: "Apple's most affordable MacBook. Light, quiet and great for school, browsing and office work.",
    images: ['/products/macbook-neo.jpg'],
    featured: true,
  },
  {
    slug: 'macbook-air-13',
    name: 'MacBook Air 13-inch (M5)',
    category: 'Mac',
    detail: '13.6-inch · from 16GB, 512GB',
    highlights: ['Apple M5 chip', '13.6-inch Liquid Retina display', 'From 16GB unified memory', 'From 512GB storage'],
    description: 'Thin, fast and silent with no fan. The laptop most people should buy.',
    images: ['/products/macbook-air-13.jpg'],
    featured: true,
  },
  {
    slug: 'macbook-air-15',
    name: 'MacBook Air 15-inch (M5)',
    category: 'Mac',
    detail: '15.3-inch · from 16GB, 512GB',
    highlights: ['Apple M5 chip', '15.3-inch Liquid Retina display', 'From 16GB unified memory', 'From 512GB storage'],
    description: 'Everything good about MacBook Air with a bigger screen for spreadsheets, editing and films.',
    images: ['/products/macbook-air-15.jpg'],
  },
  {
    slug: 'macbook-pro-14',
    name: 'MacBook Pro 14-inch',
    category: 'Mac',
    detail: 'M6, M5 Pro or M5 Max',
    highlights: ['Apple M6, M5 Pro or M5 Max chip', '14.2-inch Liquid Retina XDR display', 'From 16GB unified memory', 'From 1TB storage'],
    description: 'A powerful, portable laptop for editing, coding and design work.',
    images: ['/products/macbook-pro-14.jpg'],
  },
  {
    slug: 'macbook-pro-16',
    name: 'MacBook Pro 16-inch',
    category: 'Mac',
    detail: 'M5 Pro or M5 Max',
    highlights: ['Apple M5 Pro or M5 Max chip', '16.2-inch Liquid Retina XDR display', 'From 24GB unified memory', 'From 1TB storage'],
    description: 'The big-screen MacBook Pro for heavy video, 3D and music production.',
    images: ['/products/macbook-pro-16.jpg'],
  },
  {
    slug: 'macbook-pro-proled',
    name: 'MacBook Pro PROLED XDR',
    category: 'Mac',
    detail: '14-inch · 16-inch · Touch display',
    highlights: ['Apple M5 Pro or M5 Max chip', 'Tandem OLED PROLED XDR display with Touch', '14.2-inch and 16.3-inch sizes', 'From 24GB memory and 1TB storage'],
    description: "Apple's most advanced MacBook Pro, with an OLED touch display.",
    images: ['/products/macbook-pro-proled.jpg'],
  },
  {
    slug: 'imac',
    name: 'iMac (M6)',
    category: 'Mac',
    detail: '24-inch · 4.5K Retina',
    highlights: ['Apple M6 chip', '24-inch 4.5K Retina display', 'All-in-one design, one cable to set up', 'Two-port and four-port models'],
    description: 'A colourful all-in-one desktop for the home or office. Plug it in and it is ready to go.',
    images: ['/products/imac.jpg'],
  },
  {
    slug: 'mac-mini',
    name: 'Mac mini',
    category: 'Mac',
    detail: 'M6 or M5 Pro',
    highlights: ['Apple M6 or M5 Pro chip', 'Supports up to three displays', 'Tiny footprint on any desk', "Apple's most affordable desktop Mac"],
    description: 'A small, powerful desktop. Bring your own screen, keyboard and mouse.',
    images: ['/products/mac-mini.jpg'],
  },

  // Gaming
  {
    slug: 'ps5-pro',
    name: 'PlayStation 5 Pro',
    category: 'Gaming',
    detail: '2TB SSD · Digital',
    highlights: ['2TB SSD storage', 'Upgraded graphics for sharper, smoother games', 'Wi-Fi 7', 'Disc drive sold separately'],
    description: 'The most powerful PlayStation, built for 4K TVs and players who want the best performance.',
    images: ['/products/ps5-pro.jpg'],
    featured: true,
    tags: ['ps5', 'playstation', 'sony', 'console'],
  },
  {
    slug: 'ps5-slim',
    name: 'PlayStation 5 Slim',
    category: 'Gaming',
    detail: 'Disc Edition · Digital Edition',
    highlights: ['Ultra-high-speed SSD', 'DualSense controller included', 'Disc Edition plays 4K Blu-ray discs', 'Plays most PS4 games too'],
    description: 'The current PS5 in a slimmer body. Choose the Disc Edition if you buy physical games.',
    images: ['/products/ps5-slim.jpg'],
    tags: ['ps5', 'playstation', 'sony', 'console'],
  },
  {
    slug: 'xbox-series-x',
    name: 'Xbox Series X',
    category: 'Gaming',
    detail: '1TB SSD · 4K gaming',
    highlights: ['4K gaming at up to 120 FPS', '1TB custom SSD', 'Quick Resume between games', 'Ready for Xbox Game Pass'],
    description: 'The most powerful Xbox, with fast loading and a huge library through Game Pass.',
    images: ['/products/xbox-series-x.jpg'],
    tags: ['xbox', 'microsoft', 'console'],
  },
  {
    slug: 'xbox-series-s',
    name: 'Xbox Series S',
    category: 'Gaming',
    detail: '512GB · 1TB · All-digital',
    highlights: ['All-digital, no disc drive', '512GB and 1TB models', 'Up to 120 FPS', 'The smallest Xbox yet'],
    description: 'A compact, affordable next-gen console. Ideal with a Game Pass subscription.',
    images: ['/products/xbox-series-s.jpg'],
    tags: ['xbox', 'microsoft', 'console'],
  },
  {
    slug: 'nintendo-switch-2',
    name: 'Nintendo Switch 2',
    category: 'Gaming',
    detail: '256GB · 7.9-inch screen',
    highlights: ['7.9-inch 1080p screen with HDR, up to 120Hz', '256GB internal storage', 'Up to 4K on your TV when docked', 'Magnetic Joy-Con 2 controllers'],
    description: "Nintendo's newest console. Play on the TV at home or take it with you.",
    images: ['/products/nintendo-switch-2.jpg'],
    featured: true,
    tags: ['nintendo', 'switch', 'console', 'handheld'],
  },
  {
    slug: 'nintendo-switch-oled',
    name: 'Nintendo Switch OLED Model',
    category: 'Gaming',
    detail: '64GB · 7-inch OLED',
    highlights: ['7-inch OLED screen', '64GB internal storage', 'Wide adjustable stand', 'Play on the TV or on the go'],
    description: 'The original Switch with a vivid OLED screen and a huge library of games.',
    images: ['/products/nintendo-switch-oled.jpg'],
    tags: ['nintendo', 'switch', 'console', 'handheld'],
  },
  {
    slug: 'dualsense',
    name: 'DualSense Wireless Controller',
    category: 'Gaming',
    detail: 'PS5 · Several colours',
    highlights: ['Haptic feedback', 'Adaptive triggers', 'Built-in microphone', 'USB-C charging'],
    description: 'An extra or replacement PS5 controller for two-player nights.',
    images: ['/products/dualsense.jpg'],
    tags: ['ps5', 'playstation', 'controller', 'pad'],
  },
  {
    slug: 'dualsense-edge',
    name: 'DualSense Edge',
    category: 'Gaming',
    detail: 'PS5 · Pro controller',
    highlights: ['Replaceable stick modules', 'Back buttons you can map', 'Custom control profiles', 'Carrying case included'],
    description: 'A pro-grade PS5 controller you can tune to the way you play.',
    images: ['/products/dualsense-edge.jpg'],
    tags: ['ps5', 'playstation', 'controller', 'pad'],
  },
  {
    slug: 'xbox-wireless-controller',
    name: 'Xbox Wireless Controller',
    category: 'Gaming',
    detail: 'Xbox · PC · Mobile',
    highlights: ['Works with Xbox Series X|S, Xbox One and Windows', 'Bluetooth for PC, phones and tablets', 'Share button', 'Hybrid D-pad'],
    description: 'The standard Xbox controller. It also works with PC and phone gaming.',
    images: ['/products/xbox-wireless-controller.jpg'],
    tags: ['xbox', 'controller', 'pad', 'pc'],
  },
  {
    slug: 'playstation-portal',
    name: 'PlayStation Portal',
    category: 'Gaming',
    detail: 'Remote Player · 8-inch screen',
    highlights: ['8-inch LCD screen, 1080p at 60fps', 'Plays your PS5 games over Wi-Fi', 'DualSense features built in', 'Cloud streaming with PlayStation Plus Premium'],
    description: 'Keep playing your PS5 when someone else needs the TV.',
    images: ['/products/playstation-portal.jpg'],
    tags: ['ps5', 'playstation', 'handheld', 'remote'],
  },
  {
    slug: 'meta-quest-3',
    name: 'Meta Quest 3',
    category: 'Gaming',
    detail: '512GB · Mixed reality',
    highlights: ['Mixed reality with full-colour passthrough', '512GB storage', 'Touch Plus controllers included', 'Large library of VR games and apps'],
    description: 'A standalone VR headset. No PC or console needed.',
    images: ['/products/meta-quest-3.jpg'],
    tags: ['vr', 'virtual reality', 'oculus', 'headset'],
  },
];

export const getProduct = (slug: string) => PRODUCTS.find((p) => p.slug === slug);

export const formatPrice = (p: Pick<Product, 'price'>) =>
  p.price ? `₦${p.price.toLocaleString('en-NG')}` : 'Ask for price';
