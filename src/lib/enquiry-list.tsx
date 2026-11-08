'use client';

import { createContext, use, useCallback, useMemo, useState, useSyncExternalStore } from 'react';
import { MotionConfig } from 'motion/react';
import { getProduct, type Product } from '@/data/products';

// The enquiry list lives in localStorage so it survives reloads. useSyncExternalStore keeps
// server HTML (empty list) and the first client render in agreement, then swaps in the saved list.

const KEY = 'sg-list';
const EMPTY: string[] = [];
const listeners = new Set<() => void>();
let cache: string[] | null = null;

function read(): string[] {
  if (cache) return cache;
  try {
    const parsed: unknown = JSON.parse(localStorage.getItem(KEY) ?? '[]');
    cache = Array.isArray(parsed) ? parsed.filter((s): s is string => typeof s === 'string' && !!getProduct(s)) : [];
  } catch {
    cache = [];
  }
  return cache;
}

function write(next: string[]) {
  cache = next;
  try {
    localStorage.setItem(KEY, JSON.stringify(next));
  } catch {
    // Private mode or blocked storage: the list still works for this visit.
  }
  listeners.forEach((l) => l());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  const onStorage = (e: StorageEvent) => {
    if (e.key === KEY) {
      cache = null;
      listener();
    }
  };
  window.addEventListener('storage', onStorage);
  return () => {
    listeners.delete(listener);
    window.removeEventListener('storage', onStorage);
  };
}

type Toast = { id: number; message: string; action: 'view' | 'undo' };

type EnquiryListValue = {
  items: Product[];
  has: (slug: string) => boolean;
  toggle: (slug: string) => void;
  clear: () => void;
  undoClear: () => void;
  drawerOpen: boolean;
  setDrawerOpen: (open: boolean) => void;
  toast: Toast | null;
  dismissToast: () => void;
};

const EnquiryListContext = createContext<EnquiryListValue | null>(null);

export function EnquiryListProvider({ children }: { children: React.ReactNode }) {
  const slugs = useSyncExternalStore(subscribe, read, () => EMPTY);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [toast, setToast] = useState<Toast | null>(null);
  const [cleared, setCleared] = useState<string[]>([]);

  const toggle = useCallback((slug: string) => {
    const current = read();
    const product = getProduct(slug);
    if (!product) return;
    const adding = !current.includes(slug);
    write(adding ? [...current, slug] : current.filter((s) => s !== slug));
    setToast({ id: Date.now(), message: adding ? `${product.name} added to your list` : `${product.name} removed`, action: 'view' });
  }, []);

  // Clearing is instant but reversible from the toast.
  const clear = useCallback(() => {
    setCleared(read());
    write([]);
    setToast({ id: Date.now(), message: 'List cleared', action: 'undo' });
  }, []);
  const undoClear = useCallback(() => {
    write(cleared);
    setToast(null);
  }, [cleared]);
  const dismissToast = useCallback(() => setToast(null), []);

  const value = useMemo<EnquiryListValue>(
    () => ({
      items: slugs.map((s) => getProduct(s)).filter((p): p is Product => !!p),
      has: (slug) => slugs.includes(slug),
      toggle,
      clear,
      undoClear,
      drawerOpen,
      setDrawerOpen,
      toast,
      dismissToast,
    }),
    [slugs, toggle, clear, undoClear, drawerOpen, toast, dismissToast],
  );

  return (
    <EnquiryListContext value={value}>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </EnquiryListContext>
  );
}

export function useEnquiryList() {
  const ctx = use(EnquiryListContext);
  if (!ctx) throw new Error('useEnquiryList must be used inside EnquiryListProvider');
  return ctx;
}
