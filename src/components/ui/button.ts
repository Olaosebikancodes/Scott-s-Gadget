// Shared button styles for <button>, <a> and <Link>. Controls are always full pill.

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-semibold whitespace-nowrap select-none ' +
  'transition-[background-color,color,border-color,transform] duration-200 ease-snappy active:scale-[0.97] ' +
  'disabled:pointer-events-none disabled:opacity-40 aria-disabled:pointer-events-none aria-disabled:opacity-40';

const sizes = {
  sm: 'h-10 px-4 text-sm',
  md: 'h-11 px-5 text-[15px]',
  lg: 'h-12 px-6 text-base',
} as const;

const variants = {
  primary: 'bg-ink text-white hover:bg-ink-soft',
  accent: 'bg-accent text-white hover:bg-[#bd3909]',
  outline: 'border border-line-strong bg-surface text-ink hover:border-ink',
  ghost: 'text-ink hover:bg-ink/5',
} as const;

export function buttonClass({
  variant = 'primary',
  size = 'md',
  className = '',
}: { variant?: keyof typeof variants; size?: keyof typeof sizes; className?: string } = {}) {
  return `${base} ${sizes[size]} ${variants[variant]} ${className}`;
}
