import Link from 'next/link';

export function Logo({ className = '' }: { className?: string }) {
  return (
    <Link href="/" className={`group inline-flex items-center gap-2.5 ${className}`} aria-label="Scott's Gadgets home">
      <span
        aria-hidden
        className="relative grid size-8 place-items-center rounded-[10px] bg-ink text-[17px] font-bold text-white transition-transform duration-300 ease-snappy group-hover:-rotate-6"
      >
        S
        <span className="absolute right-[5px] bottom-[6px] size-[5px] rounded-full bg-accent" />
      </span>
      <span className="text-[17px] font-semibold tracking-tight whitespace-nowrap">
        Scott&apos;s <span className="text-muted">Gadgets</span>
      </span>
    </Link>
  );
}
