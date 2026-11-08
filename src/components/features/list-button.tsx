'use client';

import { ListChecks } from '@phosphor-icons/react';
import { useEnquiryList } from '@/lib/enquiry-list';
import { buttonClass } from '@/components/ui/button';

// Opens the enquiry drawer and shows how many items are in the list.
export function ListButton({ variant = 'header' }: { variant?: 'header' | 'dock' }) {
  const { items, setDrawerOpen } = useEnquiryList();
  const count = items.length;

  return (
    <button
      type="button"
      onClick={() => setDrawerOpen(true)}
      aria-label={`Open enquiry list, ${count} ${count === 1 ? 'item' : 'items'}`}
      className={buttonClass({
        variant: 'outline',
        size: variant === 'dock' ? 'md' : 'sm',
        className: variant === 'dock' ? 'flex-1' : 'relative max-sm:w-10 max-sm:px-0',
      })}
    >
      <ListChecks size={18} weight="bold" aria-hidden />
      <span className={variant === 'header' ? 'hidden sm:inline' : ''}>{variant === 'dock' ? 'My list' : 'Enquiry list'}</span>
      {count > 0 && (
        <span
          className={`grid h-5 min-w-5 place-items-center rounded-full bg-accent px-1.5 text-xs font-bold text-white tabular-nums ${
            variant === 'header' ? 'max-sm:absolute max-sm:-top-1.5 max-sm:-right-1.5' : ''
          }`}
        >
          {count}
        </span>
      )}
    </button>
  );
}
