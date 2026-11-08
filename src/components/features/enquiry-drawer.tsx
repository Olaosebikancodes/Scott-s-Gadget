'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ListChecks, WhatsappLogo, X } from '@phosphor-icons/react';
import { useEnquiryList } from '@/lib/enquiry-list';
import { listEnquiry } from '@/lib/whatsapp';
import { buttonClass } from '@/components/ui/button';

// Native <dialog> so focus trapping, Esc to close and the backdrop come from the browser.
export function EnquiryDrawer() {
  const { items, toggle, clear, drawerOpen, setDrawerOpen } = useEnquiryList();
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (drawerOpen && !dialog.open) dialog.showModal();
    if (!drawerOpen && dialog.open) dialog.close();
  }, [drawerOpen]);

  const close = () => setDrawerOpen(false);

  return (
    <dialog
      ref={ref}
      aria-labelledby="drawer-title"
      onClose={close}
      onClick={(e) => e.target === e.currentTarget && close()}
      className="drawer flex-col border-l border-line bg-surface p-0 text-ink shadow-lift open:flex"
    >
      <div className="flex items-center justify-between border-b border-line px-5 py-4">
        <h2 id="drawer-title" className="text-xl font-semibold tracking-tight">
          Your enquiry list
        </h2>
        <button
          type="button"
          onClick={close}
          aria-label="Close enquiry list"
          className="grid size-10 place-items-center rounded-full text-muted transition-colors hover:bg-ink/5 hover:text-ink"
        >
          <X size={20} weight="bold" aria-hidden />
        </button>
      </div>

      {items.length > 0 ? (
        <ul className="flex-1 divide-y divide-line overflow-y-auto overscroll-contain px-5">
          {items.map((p) => (
            <li key={p.slug} className="flex items-center gap-4 py-4">
              <Link href={`/products/${p.slug}`} onClick={close} className="relative size-16 shrink-0 overflow-hidden rounded-xl bg-tile">
                <Image src={p.images[0]} alt="" fill sizes="64px" className="object-cover" />
              </Link>
              <div className="min-w-0 flex-1">
                <Link href={`/products/${p.slug}`} onClick={close} className="block truncate font-semibold hover:underline">
                  {p.name}
                </Link>
                <p className="truncate text-sm text-muted">{p.detail}</p>
              </div>
              <button
                type="button"
                onClick={() => toggle(p.slug)}
                aria-label={`Remove ${p.name}`}
                className="grid size-10 shrink-0 place-items-center rounded-full text-muted transition-colors hover:bg-ink/5 hover:text-ink"
              >
                <X size={16} weight="bold" aria-hidden />
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
          <span className="grid size-12 place-items-center rounded-full bg-accent-soft text-accent">
            <ListChecks size={22} weight="bold" aria-hidden />
          </span>
          <p className="mt-4 font-semibold">Your list is empty</p>
          <p className="mt-1 max-w-[28ch] text-sm text-muted">
            Tap the plus on any product to ask Scott about several devices in one message.
          </p>
        </div>
      )}

      <div className="grid gap-2 border-t border-line px-5 pt-4 pb-[max(1.25rem,env(safe-area-inset-bottom))]">
        <a
          href={items.length ? listEnquiry(items) : undefined}
          target="_blank"
          rel="noopener noreferrer"
          aria-disabled={items.length === 0}
          className={buttonClass({ size: 'lg', className: 'w-full' })}
        >
          <WhatsappLogo size={20} weight="bold" aria-hidden />
          Send list on WhatsApp
        </a>
        {items.length > 0 && (
          <button
            type="button"
            onClick={() => {
              clear();
              close();
            }}
            className={buttonClass({ variant: 'ghost', size: 'sm', className: 'w-full text-muted' })}>
            Clear list
          </button>
        )}
        <p className="text-center text-xs text-faint">This opens a chat with your list typed out. Nothing is ordered or paid.</p>
      </div>
    </dialog>
  );
}
