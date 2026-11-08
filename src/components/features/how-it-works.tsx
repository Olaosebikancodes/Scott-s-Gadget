const STEPS = [
  {
    title: 'Pick what you like',
    body: 'Browse the shop and tap the plus on anything you are considering. Your list is saved on this phone.',
  },
  {
    title: 'Send it on WhatsApp',
    body: 'One tap opens a chat with Scott with your list typed out. Ask about price, storage, colour and condition.',
  },
  {
    title: 'Agree the details',
    body: 'Once you have found the right device, sort out payment and pickup or delivery with Scott directly.',
  },
];

export function HowItWorks() {
  return (
    <section id="how" aria-labelledby="how-title" className="border-y border-line bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-24">
        <h2 id="how-title" className="max-w-[18ch] text-4xl font-semibold tracking-[-0.03em] text-balance sm:text-5xl">
          No cart. No checkout. Just a chat.
        </h2>
        <ol className="mt-12 grid gap-10 md:grid-cols-3 md:gap-0 md:divide-x md:divide-line">
          {STEPS.map((step, i) => (
            <li key={step.title} className="md:px-8 md:first:pl-0 md:last:pr-0">
              <span className="block text-6xl leading-none font-semibold tracking-tighter text-accent tabular-nums">{i + 1}</span>
              <h3 className="mt-5 text-xl font-semibold tracking-tight">{step.title}</h3>
              <p className="mt-2 max-w-[36ch] leading-relaxed text-muted">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
