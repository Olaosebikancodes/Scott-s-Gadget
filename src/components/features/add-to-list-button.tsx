'use client';

import { Check, Plus } from '@phosphor-icons/react';
import { useEnquiryList } from '@/lib/enquiry-list';
import { buttonClass } from '@/components/ui/button';
import type { Product } from '@/data/products';

// "icon" sits beside the Enquire button on product cards; "full" is the labelled version on product pages.
export function AddToListButton({ product, variant = 'icon' }: { product: Product; variant?: 'icon' | 'full' }) {
  const { has, toggle } = useEnquiryList();
  const added = has(product.slug);
  const Icon = added ? Check : Plus;

  if (variant === 'full') {
    return (
      <button
        type="button"
        onClick={() => toggle(product.slug)}
        aria-pressed={added}
        className={buttonClass({
          variant: 'outline',
          size: 'lg',
          className: `w-full ${added ? 'border-accent bg-accent-soft hover:border-accent' : ''}`,
        })}
      >
        <Icon size={18} weight="bold" aria-hidden className={added ? 'text-accent' : ''} />
        {added ? 'In your enquiry list' : 'Add to enquiry list'}
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={() => toggle(product.slug)}
      aria-pressed={added}
      aria-label={added ? `Remove ${product.name} from enquiry list` : `Add ${product.name} to enquiry list`}
      title={added ? 'Remove from enquiry list' : 'Add to enquiry list'}
      className={`grid size-10 shrink-0 place-items-center rounded-full border transition-[background-color,color,border-color,transform] duration-200 ease-snappy active:scale-[0.92] ${
        added ? 'border-accent bg-accent text-white' : 'border-line-strong bg-surface text-ink hover:border-ink'
      }`}
    >
      <Icon size={18} weight="bold" aria-hidden />
    </button>
  );
}
