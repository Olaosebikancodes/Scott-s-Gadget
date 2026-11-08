# Scott's Gadgets

The website for Scott's Gadgets. Customers browse iPhones, iPads, Macs and gaming gear, add devices to an enquiry list, and send that list to Scott on WhatsApp. There is no cart, checkout or payment on the site.

Built with Next.js, TypeScript and Tailwind CSS. It builds to a fully static site (plain HTML, CSS, JavaScript and images in the `out/` folder), so it runs on any static host with no server.

## Running it on your computer

You need [Node.js](https://nodejs.org) 20 or newer.

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

To check the finished static site exactly as it will be deployed:

```bash
npm run build
npm start
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

Small WebP copies of every photo are made automatically before each `npm run dev` and `npm run build` (see `scripts/resize-images.mjs`), so phones download small images. You only ever add the one full-size photo.

**Best next step:** replace them with photos of Scott's own devices. Shoot them on a plain light background, crop them square, and keep the same file names. When you swap a Commons photo for your own, remove its entry from `photo-credits.json` and its credit line disappears.

## Other settings

[`src/data/site.ts`](src/data/site.ts) holds:

- **The WhatsApp number.** Digits only, in international format: `2349063251302`.
- **The site name and tagline.**
- **Category blurbs.**

The FAQ answers are in `src/components/features/faq.tsx`.

## Deploying

Because the site is static, any static host works. Two good free options:

**Cloudflare (Workers)**

1. In the Cloudflare dashboard, go to **Workers & Pages → Create → Import a repository** and pick this repository.
2. Build command: `npm run build`. Deploy command: `npx wrangler deploy` (the default). [`wrangler.jsonc`](wrangler.jsonc) tells Cloudflare to serve the static `out/` folder, so nothing else needs setting up.
3. Under **Settings → Build → Variables and secrets**, add `SITE_URL` with the site's address (for example `https://scott-s-gadget.<your-subdomain>.workers.dev`, or a custom domain once it's connected), then redeploy.

If you use Cloudflare **Pages** instead, choose framework preset **None**, build command `npm run build` and output directory `out`.

**Vercel**

1. Choose **Add New → Project** and import this repository. The defaults are correct; Vercel detects the static export.
2. Vercel's own address is used automatically. Once a custom domain is connected, add a `SITE_URL` environment variable with it and redeploy.

`SITE_URL` is the address used in WhatsApp messages, link previews and the sitemap. Every push to the main branch redeploys the site.
