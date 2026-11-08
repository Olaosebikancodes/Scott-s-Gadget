'use client';

import Image from 'next/image';
import Link from 'next/link';
import { WhatsappLogo } from '@phosphor-icons/react';
import { AddToListButton } from './add-to-list-button';
import { buttonClass } from '@/components/ui/button';
import { formatPrice, type Product } from '@/data/products';
import { productEnquiry } from '@/lib/whatsapp';

export function ProductCard({ product, priority = false }: { product: Product; priority?: boolean }) {
  return (
    <article className="group flex h-full flex-col">
      <Link href={`/products/${product.slug}`} className="block rounded-2xl">
        <div className="relative aspect-square overflow-hidden rounded-2xl bg-tile">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            priority={priority}
            sizes="(min-width: 1280px) 290px, (min-width: 768px) 30vw, 48vw"
            className="object-cover transition-transform duration-700 ease-snappy group-hover:scale-[1.04]"
          />
        </div>
        <h3 className="mt-3.5 text-base leading-snug font-semibold tracking-tight sm:text-[17px]">{product.name}</h3>
        <p className="mt-0.5 text-sm text-muted">{product.detail}</p>
      </Link>
      <div className="mt-auto pt-3">
        <p className="mb-3 text-sm">
          <span className={product.price ? 'font-semibold tabular-nums' : 'text-faint'}>{formatPrice(product)}</span>
          {product.condition && <span className="text-faint"> · {product.condition}</span>}
        </p>
        <div className="flex items-center gap-2">
          <a
            href={productEnquiry(product)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Enquire about ${product.name} on WhatsApp`}
            className={buttonClass({ size: 'sm', className: 'flex-1' })}
          >
            <WhatsappLogo size={17} weight="bold" aria-hidden />
            Enquire
          </a>
          <AddToListButton product={product} />
        </div>
      </div>
    </article>
  );
}
