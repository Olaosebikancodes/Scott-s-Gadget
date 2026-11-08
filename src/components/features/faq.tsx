import { Plus } from '@phosphor-icons/react/ssr';

const QUESTIONS = [
  {
    q: 'Why are prices not listed?',
    a: 'Prices change with stock and the exchange rate, so Scott confirms the exact price for the exact device when you message him.',
  },
  {
    q: 'Can I ask about several devices at once?',
    a: 'Yes. Add each one to your enquiry list and send the whole list in a single WhatsApp message.',
  },
  {
    q: 'Are the devices new or used?',
    a: 'It depends on the device. Ask in your message and Scott will tell you the condition, what comes in the box and any warranty before you commit.',
  },
  {
    q: 'Are the photos of the actual device?',
    a: 'The photos on this site show each model in general. Ask Scott for pictures of the actual unit you are buying.',
  },
  {
    q: 'Do you deliver?',
    a: 'Delivery and pickup depend on where you are. Tell Scott your location in the chat and he will confirm the options.',
  },
  {
    q: "Can you get something that isn't listed?",
    a: 'Often, yes. Message Scott with the model, storage and colour you want and he will check.',
  },
];

export function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:py-28">
      <div>
        <p className="text-sm font-medium tracking-[0.14em] text-muted uppercase">Questions</p>
        <h2 id="faq-title" className="mt-3 text-4xl font-semibold tracking-[-0.03em] text-balance sm:text-5xl">
          Good to know before you message.
        </h2>
      </div>
      <div className="border-t border-line-strong">
        {QUESTIONS.map(({ q, a }) => (
          <details key={q} className="group border-b border-line-strong">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-[17px] font-semibold tracking-tight">
              {q}
              <Plus size={18} weight="bold" aria-hidden className="faq-icon shrink-0 text-accent transition-[rotate] duration-300 ease-snappy" />
            </summary>
            <p className="max-w-[60ch] pb-6 leading-relaxed text-muted">{a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
