import Link from 'next/link';
import { buttonClass } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-center px-4 py-28 text-center">
      <p className="text-6xl font-semibold tracking-tighter text-accent">404</p>
      <h1 className="mt-4 text-3xl font-semibold tracking-tight">We couldn&apos;t find that page</h1>
      <p className="mt-3 text-muted">The product may have sold out or moved. Have a look at what is in the shop now.</p>
      <Link href="/#shop" className={buttonClass({ size: 'lg', className: 'mt-8' })}>
        Browse the shop
      </Link>
    </div>
  );
}
