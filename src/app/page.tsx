import { Suspense } from 'react';
import { Hero } from '@/components/features/hero';
import { CategoryBento } from '@/components/features/category-bento';
import { ShopBrowser, ShopView } from '@/components/features/shop';
import { HowItWorks } from '@/components/features/how-it-works';
import { Faq } from '@/components/features/faq';
import { ContactPanel } from '@/components/features/contact-panel';

export default function Home() {
  return (
    <>
      <Hero />
      <CategoryBento />

      <section id="shop" aria-labelledby="shop-title" className="mx-auto max-w-7xl px-4 pt-24 pb-24 sm:px-6 lg:pt-28">
        <h2 id="shop-title" className="text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
          Find your next device.
        </h2>
        <p className="mt-3 max-w-[56ch] text-lg text-muted">
          Tap a product for details, or add a few to your list and ask about them in one message.
        </p>
        {/* The filters live in the URL. Until it is read, the full catalogue renders as the static fallback. */}
        <Suspense fallback={<ShopView category={null} sort="featured" initialQuery="" />}>
          <ShopBrowser />
        </Suspense>
      </section>

      <HowItWorks />
      <Faq />
      <ContactPanel />
    </>
  );
}
