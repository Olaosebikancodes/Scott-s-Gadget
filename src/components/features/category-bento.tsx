import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from '@phosphor-icons/react/ssr';
import { CATEGORIES, CATEGORY_INFO, type Category } from '@/data/site';
import { PRODUCTS } from '@/data/products';

const TILE_IMAGE: Record<Category, string> = {
  iPhone: '/products/iphone-17-pro-max.jpg',
  iPad: '/products/ipad-pro.jpg',
  Mac: '/products/macbook-pro-proled.jpg',
  Gaming: '/products/nintendo-switch-2.jpg',
};

// Four tiles, four cells: iPhone leads as the tall tile, the rest fill the right-hand side.
const LAYOUT: Record<Category, string> = {
  iPhone: 'col-span-2 lg:row-span-2 aspect-[4/3] lg:aspect-auto',
  iPad: 'col-span-2 aspect-[2/1] lg:aspect-auto',
  Mac: 'aspect-square lg:aspect-auto',
  Gaming: 'aspect-square lg:aspect-auto',
};

export function CategoryBento() {
  return (
    <section aria-labelledby="categories-title" className="mx-auto max-w-7xl px-4 sm:px-6">
      <h2 id="categories-title" className="sr-only">
        Shop by category
      </h2>
      <ul className="grid grid-cols-2 gap-3 sm:gap-4 lg:h-[34rem] lg:grid-cols-4 lg:grid-rows-2">
        {CATEGORIES.map((cat) => {
          const count = PRODUCTS.filter((p) => p.category === cat).length;
          const big = cat === 'iPhone';
          return (
            <li key={cat} className={LAYOUT[cat]}>
              <Link
                href={`/?c=${CATEGORY_INFO[cat].key}#shop`}
                className="group relative flex h-full overflow-hidden rounded-2xl bg-tile"
              >
                <Image
                  src={TILE_IMAGE[cat]}
                  alt=""
                  fill
                  sizes={big ? '(min-width: 1024px) 50vw, 100vw' : '(min-width: 1024px) 25vw, 50vw'}
                  className="object-cover transition-transform duration-700 ease-snappy group-hover:scale-[1.04]"
                />
                <span aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/25 to-transparent" />
                <span className="relative mt-auto flex w-full items-end justify-between gap-3 p-4 text-white sm:p-5">
                  <span>
                    <span className={`block font-semibold tracking-tight ${big ? 'text-3xl sm:text-4xl' : 'text-xl sm:text-2xl'}`}>
                      {cat}
                    </span>
                    <span className={`mt-1 block text-sm text-white/80 ${big ? '' : 'max-sm:hidden'}`}>
                      {CATEGORY_INFO[cat].blurb} · {count} items
                    </span>
                  </span>
                  <span className="grid size-10 shrink-0 place-items-center rounded-full bg-white text-ink transition-transform duration-300 ease-snappy group-hover:rotate-45">
                    <ArrowUpRight size={18} weight="bold" aria-hidden />
                  </span>
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
