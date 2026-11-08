import Link from 'next/link';
import { WhatsappLogo } from '@phosphor-icons/react/ssr';
import { Logo } from './logo';
import { ListButton } from './list-button';
import { buttonClass } from '@/components/ui/button';
import { generalEnquiry } from '@/lib/whatsapp';

const NAV = [
  { href: '/#shop', label: 'Shop' },
  { href: '/#how', label: 'How it works' },
  { href: '/#faq', label: 'FAQ' },
];

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-line bg-bg/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-8 px-4 sm:px-6">
        <Logo />
        <nav aria-label="Main" className="mr-auto hidden md:block">
          <ul className="flex gap-7">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-[15px] text-muted transition-colors hover:text-ink">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="ml-auto flex items-center gap-2 md:ml-0">
          <ListButton />
          <a
            href={generalEnquiry()}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonClass({ size: 'sm', className: 'max-sm:hidden' })}
          >
            <WhatsappLogo size={18} weight="bold" aria-hidden />
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
