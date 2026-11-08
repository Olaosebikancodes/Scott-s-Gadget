import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CaretRight, CheckCircle, WhatsappLogo } from '@phosphor-icons/react/ssr';
import { AddToListButton } from '@/components/features/add-to-list-button';
import { ProductCard } from '@/components/features/product-card';
import { buttonClass } from '@/components/ui/button';
import { CATEGORY_INFO } from '@/data/site';
import { PRODUCTS, formatPrice, getProduct } from '@/data/products';
import { productEnquiry } from '@/lib/whatsapp';
import { photoCredit } from '@/lib/photo-credit';

// Every product page is built ahead of time from the catalogue file; unknown slugs are a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<'/products/[slug]'>): Promise<Metadata> {
  const product = getProduct((await params).slug);
  if (!product) return {};
  const description = `${product.name}, ${product.detail}. ${product.description} Message Scott on WhatsApp for the price.`;
  return {
    title: product.name,
    description,
    alternates: { canonical: `/products/${product.slug}` },
    openGraph: {
      title: product.name,
      description,
      images: [{ url: product.images[0], width: 1200, height: 1200, alt: product.name }],
    },
  };
}

export default async function ProductPage({ params }: PageProps<'/products/[slug]'>) {
  const product = getProduct((await params).slug);
  if (!product) notFound();

  const categoryHref = `/?c=${CATEGORY_INFO[product.category].key}#shop`;
  const related = PRODUCTS.filter((p) => p.category === product.category && p.slug !== product.slug).slice(0, 4);
  const credit = photoCredit(product.slug);

  return (
    <div className="mx-auto max-w-7xl px-4 pt-6 sm:px-6">
      <nav aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted">
          <li>
            <Link href="/#shop" className="hover:text-ink">Shop</Link>
          </li>
          <li aria-hidden><CaretRight size={12} weight="bold" /></li>
          <li>
            <Link href={categoryHref} className="hover:text-ink">{product.category}</Link>
          </li>
          <li aria-hidden><CaretRight size={12} weight="bold" /></li>
          <li aria-current="page" className="text-ink">{product.name}</li>
        </ol>
      </nav>

      <div className="mt-6 grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
        <div className="relative aspect-square overflow-hidden rounded-2xl bg-tile">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            priority
            sizes="(min-width: 1280px) 660px, (min-width: 1024px) 52vw, 100vw"
            className="object-cover"
          />
        </div>

        <div className="lg:sticky lg:top-24 lg:self-start">
          <Link href={categoryHref} className="text-sm font-medium text-muted hover:text-ink">
            {product.category}
          </Link>
          <h1 className="mt-2 text-4xl leading-[1.05] font-semibold tracking-[-0.03em] text-balance sm:text-5xl">{product.name}</h1>
          <p className="mt-3 text-lg text-muted">{product.detail}</p>

          <p className="mt-6 text-2xl font-semibold tracking-tight tabular-nums">
            {formatPrice(product)}
            {product.condition && <span className="ml-2 text-base font-medium text-muted">· {product.condition}</span>}
          </p>

          <p className="mt-5 max-w-[52ch] leading-relaxed text-ink-soft">{product.description}</p>

          <ul className="mt-6 grid gap-3 border-t border-line pt-6">
            {product.highlights.map((h) => (
              <li key={h} className="flex gap-3">
                <CheckCircle size={20} weight="fill" aria-hidden className="mt-0.5 shrink-0 text-accent" />
                <span>{h}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 grid gap-2">
            <a href={productEnquiry(product)} target="_blank" rel="noopener noreferrer" className={buttonClass({ size: 'lg', className: 'w-full' })}>
              <WhatsappLogo size={20} weight="bold" aria-hidden />
              Enquire on WhatsApp
            </a>
            <AddToListButton product={product} variant="full" />
          </div>
          <p className="mt-4 text-sm text-faint">
            The photo shows this model in general. Ask Scott for pictures of the actual unit.
          </p>
          {credit && (
            <p className="mt-1 text-xs text-faint">
              Photo:{' '}
              <a href={credit.source} target="_blank" rel="noopener noreferrer" className="underline decoration-line-strong underline-offset-2 hover:text-ink">
                {credit.author}
              </a>{' '}
              via Wikimedia Commons,{' '}
              <a href={credit.licenseUrl} target="_blank" rel="noopener noreferrer" className="underline decoration-line-strong underline-offset-2 hover:text-ink">
                {credit.license}
              </a>
            </p>
          )}
        </div>
      </div>

      {related.length > 0 && (
        <section aria-labelledby="related-title" className="mt-24">
          <div className="flex items-end justify-between gap-4">
            <h2 id="related-title" className="text-3xl font-semibold tracking-[-0.03em]">
              More {product.category}
            </h2>
            <Link href={categoryHref} className="text-sm font-medium text-muted hover:text-ink">
              See all
            </Link>
          </div>
          <ul className="mt-8 grid grid-cols-2 gap-x-3 gap-y-10 sm:gap-x-5 lg:grid-cols-4">
            {related.map((p) => (
              <li key={p.slug}>
                <ProductCard product={p} />
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
