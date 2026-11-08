'use client';

import { useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { useEnquiryList } from '@/lib/enquiry-list';

// Confirms list changes. Sits above the mobile dock; disappears after a moment.
export function Toast() {
  const { toast, dismissToast, setDrawerOpen, undoClear } = useEnquiryList();

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(dismissToast, toast.action === 'undo' ? 6000 : 2600);
    return () => clearTimeout(t);
  }, [toast, dismissToast]);

  return (
    <div role="status" aria-live="polite" className="pointer-events-none fixed inset-x-0 bottom-24 z-40 flex justify-center px-4 md:bottom-8">
      <AnimatePresence>
        {toast && (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: 12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-auto flex items-center gap-3 rounded-full bg-ink py-2 pr-2 pl-5 text-sm font-medium text-white shadow-lift"
          >
            {toast.message}
            <button
              type="button"
              onClick={() => {
                if (toast.action === 'undo') return undoClear();
                dismissToast();
                setDrawerOpen(true);
              }}
              className="rounded-full bg-white/12 px-3 py-1.5 text-sm font-semibold transition-colors hover:bg-white/20"
            >
              {toast.action === 'undo' ? 'Undo' : 'View list'}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
