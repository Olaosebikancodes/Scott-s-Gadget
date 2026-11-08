# Scott's Gadgets

The website for Scott's Gadgets. Customers browse iPhones, iPads, Macs and gaming gear, add devices to an enquiry list, and send that list to Scott on WhatsApp. There is no cart, checkout or payment on the site.

Built with Next.js, TypeScript and Tailwind CSS. Hosted on Vercel.

## Running it on your computer

You need [Node.js](https://nodejs.org) 20 or newer.

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Changing what's in the shop

Every product lives in one file: [`src/data/products.ts`](src/data/products.ts).

**Add a product**

1. Put a square photo (about 1200 × 1200 pixels, `.jpg`) in `public/products/`, for example `public/products/iphone-15.jpg`.
2. In `src/data/products.ts`, copy an existing product block and change it:

```ts
{
  slug: 'iphone-15',                       // unique, lowercase, dashes. Becomes /products/iphone-15
  name: 'iPhone 15',
  category: 'iPhone',                      // 'iPhone' | 'iPad' | 'Mac' | 'Gaming'
  detail: '6.1-inch · 128GB to 512GB',     // the short line under the name
  highlights: ['A16 Bionic chip', '48MP Main camera', 'Dynamic Island', 'USB-C'],
  description: 'One or two plain sentences about who it suits.',
  images: ['/products/iphone-15.jpg'],
},
```

**Show a price.** Add `price: 650000` (naira, numbers only). Without it the site shows "Ask for price".

**Show condition.** Add `condition: 'Brand new'` or `condition: 'UK used'`.

**Put it first in the shop.** Add `featured: true`.

**Help search find it.** Add `tags: ['ps5', 'sony']` for words people might type that aren't in the name.

**Remove a product.** Delete its block. Its page disappears on the next deploy.

When you are done, save, check it with `npm run dev`, then deploy (see below).

## Photos

The current photos come from Wikimedia Commons under free licences, listed in [`src/data/photo-credits.json`](src/data/photo-credits.json). They show each model in general, not Scott's actual stock. Photos under CC BY or CC BY-SA licences must credit their author, so each product page shows a small credit line under the buttons. CC0 photos don't need one.

**Best next step:** replace them with photos of Scott's own devices. Shoot them on a plain light background, crop them square, and keep the same file names. When you swap a Commons photo for your own, remove its entry from `photo-credits.json` and its credit line disappears.

## Other settings

[`src/data/site.ts`](src/data/site.ts) holds:

- **The WhatsApp number.** Digits only, in international format: `2349063251302`.
- **The site name and tagline.**
- **Category blurbs.**

The FAQ answers are in `src/components/features/faq.tsx`.

## Deploying

The site is set up for [Vercel](https://vercel.com).

1. Push this folder to a GitHub repository.
2. In Vercel, choose **Add New → Project** and import the repository. The defaults are correct.
3. Once a custom domain is connected, add an environment variable `NEXT_PUBLIC_SITE_URL` with the full address (for example `https://scottsgadgets.ng`) and redeploy. WhatsApp messages and link previews use this address. Until then, Vercel's own address is used automatically.

Every push to the main branch redeploys the site.
