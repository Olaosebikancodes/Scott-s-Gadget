// Site-wide settings. Change these here and every page picks them up.

export const SITE = {
  name: "Scott's Gadgets",
  tagline: 'iPhones, iPads, Macs and gaming gear, sorted on WhatsApp.',
  // Scott's WhatsApp number: international format, digits only (234 + number without the leading 0).
  whatsapp: '2349063251302',
  whatsappDisplay: '+234 906 325 1302',
  // The live address of the site. Set NEXT_PUBLIC_SITE_URL in Vercel once a custom domain is live;
  // until then Vercel's own production address is used.
  url: (
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL}`
      : 'http://localhost:3000')
  ).replace(/\/$/, ''),
} as const;

export const CATEGORIES = ['iPhone', 'iPad', 'Mac', 'Gaming'] as const;
export type Category = (typeof CATEGORIES)[number];

// Short blurb and URL key for each category (used by the category tiles and shop filter).
export const CATEGORY_INFO: Record<Category, { key: string; blurb: string }> = {
  iPhone: { key: 'iphone', blurb: 'From the iPhone Duo to dependable older models' },
  iPad: { key: 'ipad', blurb: 'Pro, Air, mini and the everyday iPad' },
  Mac: { key: 'mac', blurb: 'MacBook Neo, Air and Pro, iMac and Mac mini' },
  Gaming: { key: 'gaming', blurb: 'PlayStation, Xbox, Nintendo, controllers and VR' },
};

export const categoryFromKey = (key: string | null | undefined): Category | null =>
  CATEGORIES.find((c) => CATEGORY_INFO[c].key === key) ?? null;
