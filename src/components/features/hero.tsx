import Image from 'next/image';
import Link from 'next/link';
import { ArrowDown, WhatsappLogo } from '@phosphor-icons/react/ssr';
import { buttonClass } from '@/components/ui/button';
import { generalEnquiry } from '@/lib/whatsapp';

const SHOTS = [
  { src: '/products/iphone-18-pro-max.jpg', alt: 'iPhone 18 Pro Max in Burgundy', href: '/products/iphone-18-pro-max' },
  { src: '/products/macbook-neo.jpg', alt: 'MacBook Neo in Citrus', href: '/products/macbook-neo' },
  { src: '/products/dualsense.jpg', alt: 'DualSense wireless controller', href: '/products/dualsense' },
];

export function Hero() {
  return (
    <section className="mx-auto grid max-w-7xl items-center gap-10 px-4 pt-10 pb-14 sm:px-6 lg:grid-cols-[1fr_1.05fr] lg:gap-14 lg:pt-16 lg:pb-20">
      <div>
        <p className="rise text-sm font-medium text-muted" style={{ '--i': 0 } as React.CSSProperties}>
          iPhone · iPad · Mac · Gaming
        </p>
        <h1
          className="rise mt-4 text-[clamp(2.6rem,6vw,4.5rem)] leading-[1.02] font-semibold tracking-[-0.04em] text-balance"
          style={{ '--i': 1 } as React.CSSProperties}
        >
          Gadgets, sorted <span className="text-accent">on WhatsApp.</span>
        </h1>
        <p className="rise mt-5 max-w-[34ch] text-lg leading-relaxed text-muted" style={{ '--i': 2 } as React.CSSProperties}>
          iPhones, iPads, Macs and gaming gear. Pick what you like and Scott confirms price, condition and availability in a chat.
        </p>
        <div className="rise mt-8 flex flex-wrap gap-3" style={{ '--i': 3 } as React.CSSProperties}>
          <Link href="/#shop" className={buttonClass({ size: 'lg' })}>
            Browse the shop
            <ArrowDown size={18} weight="bold" aria-hidden />
          </Link>
          <a href={generalEnquiry()} target="_blank" rel="noopener noreferrer" className={buttonClass({ variant: 'outline', size: 'lg' })}>
            <WhatsappLogo size={20} weight="bold" aria-hidden />
            Chat on WhatsApp
          </a>
        </div>
      </div>

      <div className="grid aspect-[5/4] grid-cols-[1.45fr_1fr] grid-rows-2 gap-3 sm:gap-4">
        {SHOTS.map((shot, i) => (
          <Link
            key={shot.src}
            href={shot.href}
            className={`rise group relative overflow-hidden rounded-2xl bg-tile ${i === 0 ? 'row-span-2' : ''}`}
            style={{ '--i': i + 2 } as React.CSSProperties}
          >
            <Image
              src={shot.src}
              alt={shot.alt}
              fill
              priority={i === 0}
              sizes={i === 0 ? '(min-width: 1024px) 34vw, 58vw' : '(min-width: 1024px) 22vw, 40vw'}
              className="object-cover transition-transform duration-700 ease-snappy group-hover:scale-[1.04]"
            />
          </Link>
        ))}
      </div>
    </section>
  );
}
