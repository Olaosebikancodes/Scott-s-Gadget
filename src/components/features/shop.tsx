'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { AnimatePresence, motion } from 'motion/react';
import { CaretDown, MagnifyingGlass, WhatsappLogo, X } from '@phosphor-icons/react';
import { ProductCard } from './product-card';
import { buttonClass } from '@/components/ui/button';
import { CATEGORIES, CATEGORY_INFO, categoryFromKey, type Category } from '@/data/site';
import { PRODUCTS, type Product } from '@/data/products';
import { generalEnquiry } from '@/lib/whatsapp';

type SortKey = 'featured' | 'az' | 'za';
const SORTS: { value: SortKey; label: string }[] = [
  { value: 'featured', label: 'Featured' },
  { value: 'az', label: 'Name A to Z' },
  { value: 'za', label: 'Name Z to A' },
];
const toSort = (v: string | null): SortKey => (v === 'az' || v === 'za' ? v : 'featured');

const COUNTS = Object.fromEntries(CATEGORIES.map((c) => [c, PRODUCTS.filter((p) => p.category === c).length])) as Record<
  Category,
  number
>;

function matches(p: Product, words: string[]) {
  const hay = `${p.name} ${p.category} ${p.detail} ${(p.tags ?? []).join(' ')}`.toLowerCase();
  return words.every((w) => hay.includes(w));
}

function filterProducts(category: Category | null, query: string, sort: SortKey) {
  const words = query.toLowerCase().split(/\s+/).filter(Boolean);
  const list = PRODUCTS.filter((p) => (!category || p.category === category) && matches(p, words));
  if (sort === 'az') return list.sort((a, b) => a.name.localeCompare(b.name));
  if (sort === 'za') return list.sort((a, b) => b.name.localeCompare(a.name));
  return list.sort((a, b) => Number(!!b.featured) - Number(!!a.featured));
}

// Writes filter state into the address bar so a filtered view can be shared or bookmarked.
function setParams(patch: Record<string, string | null>) {
  const next = new URLSearchParams(window.location.search);
  for (const [k, v] of Object.entries(patch)) {
    if (v) next.set(k, v);
    else next.delete(k);
  }
  const qs = next.toString();
  window.history.replaceState(null, '', qs ? `?${qs}` : window.location.pathname);
}

/** Reads the filters from the URL. Must sit inside <Suspense>; ShopView is its static fallback. */
export function ShopBrowser() {
  const params = useSearchParams();
  return (
    <ShopView
      category={categoryFromKey(params.get('c'))}
      sort={toSort(params.get('sort'))}
      initialQuery={params.get('q') ?? ''}
    />
  );
}

export function ShopView({
  category,
  sort,
  initialQuery,
}: {
  category: Category | null;
  sort: SortKey;
  initialQuery: string;
}) {
  const [query, setQuery] = useState(initialQuery);
  const results = filterProducts(category, query, sort);

  const onQuery = (value: string) => {
    setQuery(value);
    setParams({ q: value.trim() || null });
  };
  const clearAll = () => {
    setQuery('');
    setParams({ c: null, q: null, sort: null });
  };

  const chips: { label: string; key: string | null; count: number; active: boolean }[] = [
    { label: 'All', key: null, count: PRODUCTS.length, active: !category },
    ...CATEGORIES.map((c) => ({ label: c, key: CATEGORY_INFO[c].key, count: COUNTS[c], active: category === c })),
  ];

  return (
    <>
      <div className="sticky top-16 z-20 -mx-4 mt-8 border-b border-line bg-bg/90 px-4 py-3 backdrop-blur-md sm:-mx-6 sm:px-6">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div
            role="group"
            aria-label="Filter by category"
            className="-mx-4 flex gap-2 overflow-x-auto px-4 [scrollbar-width:none] sm:mx-0 sm:px-0"
          >
            {chips.map((chip) => (
              <button
                key={chip.label}
                type="button"
                aria-pressed={chip.active}
                onClick={() => setParams({ c: chip.key })}
                className={`inline-flex h-10 shrink-0 items-center gap-2 rounded-full border px-4 text-sm font-medium transition-[background-color,color,border-color] duration-200 ease-snappy ${
                  chip.active
                    ? 'border-ink bg-ink text-white'
                    : 'border-line-strong bg-surface text-ink-soft hover:border-ink'
                }`}
              >
                {chip.label}
                <span className={`text-xs tabular-nums ${chip.active ? 'text-white/70' : 'text-faint'}`}>{chip.count}</span>
              </button>
            ))}
          </div>

          <div className="flex gap-2">
            <label className="flex h-10 min-w-0 flex-1 items-center gap-2 rounded-full border border-line-strong bg-surface px-4 transition-colors focus-within:border-ink has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-accent lg:w-72 lg:flex-none">
              <MagnifyingGlass size={17} weight="bold" aria-hidden className="shrink-0 text-faint" />
              <span className="sr-only">Search products</span>
              <input
                type="search"
                value={query}
                onChange={(e) => onQuery(e.target.value)}
                placeholder="Search, e.g. PS5"
                autoComplete="off"
                spellCheck={false}
                className="w-full min-w-0 bg-transparent text-[15px] outline-none placeholder:text-faint focus-visible:outline-none [&::-webkit-search-cancel-button]:hidden"
              />
              {query && (
                <button type="button" onClick={() => onQuery('')} aria-label="Clear search" className="-mr-1 grid size-7 shrink-0 place-items-center rounded-full text-muted hover:bg-ink/5 hover:text-ink">
                  <X size={14} weight="bold" aria-hidden />
                </button>
              )}
            </label>
            <label className="relative flex h-10 shrink-0 items-center rounded-full border border-line-strong bg-surface transition-colors focus-within:border-ink has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-accent">
              <span className="sr-only">Sort products</span>
              <select
                value={sort}
                onChange={(e) => setParams({ sort: e.target.value === 'featured' ? null : e.target.value })}
                className="h-full cursor-pointer appearance-none rounded-full bg-transparent pr-9 pl-4 text-sm font-medium outline-none focus-visible:outline-none"
              >
                {SORTS.map((s) => (
                  <option key={s.value} value={s.value}>
                    {s.label}
                  </option>
                ))}
              </select>
              <CaretDown size={14} weight="bold" aria-hidden className="pointer-events-none absolute right-3.5 text-muted" />
            </label>
          </div>
        </div>
      </div>

      <p className="sr-only" aria-live="polite">
        {results.length} {results.length === 1 ? 'product' : 'products'} shown
      </p>

      {results.length > 0 ? (
        <ul className="mt-8 grid grid-cols-2 gap-x-3 gap-y-10 sm:gap-x-5 md:grid-cols-3 xl:grid-cols-4">
          <AnimatePresence mode="popLayout" initial={false}>
            {results.map((p) => (
              <motion.li
                key={p.slug}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <ProductCard product={p} />
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
      ) : (
        <div className="mx-auto max-w-md py-20 text-center">
          <span className="mx-auto grid size-12 place-items-center rounded-full bg-accent-soft text-accent">
            <MagnifyingGlass size={22} weight="bold" aria-hidden />
          </span>
          <h3 className="mt-5 text-xl font-semibold tracking-tight">Nothing matches that yet</h3>
          <p className="mt-2 text-muted">
            Scott can often get devices that aren&apos;t listed here. Clear the filters, or message him with what you need.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            <button type="button" onClick={clearAll} className={buttonClass({ variant: 'outline' })}>
              Clear filters
            </button>
            <a href={generalEnquiry()} target="_blank" rel="noopener noreferrer" className={buttonClass()}>
              <WhatsappLogo size={18} weight="bold" aria-hidden />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      )}
    </>
  );
}
