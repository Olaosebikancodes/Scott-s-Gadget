import Link from 'next/link';
import { Logo } from './logo';
import { CurrentYear } from './current-year';
import { SITE } from '@/data/site';
import { generalEnquiry } from '@/lib/whatsapp';

export function Footer() {
  return (
    <footer className="mt-20 border-t border-line pb-24 md:pb-0">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-10 sm:px-6 md:flex-row md:items-start md:justify-between">
        <div>
          <Logo />
          <p className="mt-3 max-w-[32ch] text-sm text-muted">{SITE.tagline}</p>
        </div>
        <nav aria-label="Footer" className="grid grid-cols-2 gap-x-12 gap-y-2 text-sm sm:grid-cols-3">
          <Link href="/#shop" className="text-muted hover:text-ink">Shop</Link>
          <Link href="/#how" className="text-muted hover:text-ink">How it works</Link>
          <Link href="/#faq" className="text-muted hover:text-ink">FAQ</Link>
          <a href={generalEnquiry()} target="_blank" rel="noopener noreferrer" className="text-muted tabular-nums hover:text-ink">
            WhatsApp {SITE.whatsappDisplay}
          </a>
        </nav>
      </div>
      <div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-2 border-t border-line px-4 py-5 text-xs text-faint sm:px-6">
        <span>
          © <CurrentYear /> {SITE.name}
        </span>
        <span>Product names are trademarks of their owners. Photos via Wikimedia Commons, credited on each product page.</span>
      </div>
    </footer>
  );
}
