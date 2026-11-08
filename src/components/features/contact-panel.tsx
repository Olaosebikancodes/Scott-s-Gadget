import { WhatsappLogo } from '@phosphor-icons/react/ssr';
import { buttonClass } from '@/components/ui/button';
import { SITE } from '@/data/site';
import { generalEnquiry } from '@/lib/whatsapp';

export function ContactPanel() {
  return (
    <section aria-labelledby="contact-title" className="mx-auto max-w-7xl px-4 sm:px-6">
      <div className="relative overflow-hidden rounded-2xl bg-ink px-6 py-14 text-white sm:px-12 sm:py-16 lg:flex lg:items-end lg:justify-between lg:gap-12">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 -right-24 size-[28rem] rounded-full bg-[radial-gradient(circle,rgb(212_64_10/0.55),transparent_65%)]"
        />
        <div className="relative max-w-xl">
          <h2 id="contact-title" className="text-4xl font-semibold tracking-[-0.03em] text-balance sm:text-5xl">
            Not sure what to get?
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-white/75">
            Tell Scott what you need it for and your budget. He will point you to the right device.
          </p>
        </div>
        <div className="relative mt-8 flex flex-col items-start gap-3 lg:mt-0 lg:items-end">
          <a href={generalEnquiry()} target="_blank" rel="noopener noreferrer" className={buttonClass({ variant: 'accent', size: 'lg' })}>
            <WhatsappLogo size={20} weight="bold" aria-hidden />
            Chat on WhatsApp
          </a>
          <span className="text-sm text-white/65 tabular-nums">{SITE.whatsappDisplay}</span>
        </div>
      </div>
    </section>
  );
}
