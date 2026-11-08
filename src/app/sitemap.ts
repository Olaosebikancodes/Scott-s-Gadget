import type { MetadataRoute } from 'next';
import { SITE } from '@/data/site';
import { PRODUCTS } from '@/data/products';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE.url, changeFrequency: 'weekly', priority: 1 },
    ...PRODUCTS.map((p) => ({
      url: `${SITE.url}/products/${p.slug}`,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    })),
  ];
}
