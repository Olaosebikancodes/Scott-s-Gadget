import { SITE } from '@/data/site';
import type { Product } from '@/data/products';

// Builds wa.me links with a ready-to-send message. Nothing is ordered or paid; it only opens a chat.

const GREETING = "Hello Scott's Gadgets";

export const waLink = (text: string) => `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;

export const productUrl = (p: Pick<Product, 'slug'>) => `${SITE.url}/products/${p.slug}`;

export const generalEnquiry = () => waLink(`${GREETING}, I'd like to ask about a gadget.`);

export const productEnquiry = (p: Product) =>
  waLink(
    `${GREETING}, I'm interested in the ${p.name} (${p.detail}).\n${productUrl(p)}\n\n` +
      'Is it available? Please share the price and condition.',
  );

export const listEnquiry = (items: Product[]) =>
  waLink(
    `${GREETING}, I'd like to ask about these:\n\n` +
      items.map((p) => `• ${p.name} (${p.detail})\n${productUrl(p)}`).join('\n\n') +
      '\n\nAre they available? Please share the prices and condition.',
  );
