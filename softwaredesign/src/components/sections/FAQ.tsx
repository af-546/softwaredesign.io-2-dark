const faqs = [
  {
    q: "What stack do you use?",
    a: "TypeScript, React, Tailwind, and modern tooling. Animations via GSAP or Framer Motion when needed.",
  },
  {
    q: "Do you handle deployment?",
    a: "Yes. I can help you deploy to Vercel, Netlify, or your preferred hosting, and set up domains.",
  },
  {
    q: "Can you work from existing designs?",
    a: "Absolutely. I can implement Figma or other design files, or help refine rough ideas into a full layout.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="space-y-8">
      <div className="space-y-3">
        <h2 className="text-xl md:text-2xl font-semibold text-ink-primary">
          Common questions
        </h2>
        <p className="text-ink-secondary max-w-xl">
          A few quick answers to how I work, what I use, and what you can expect.
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((item) => (
          <details
            key={item.q}
            className="group rounded-2xl bg-bg-surface border border-border-subtle p-4"
          >
            <summary className="flex justify-between items-center cursor-pointer text-sm text-ink-primary">
              <span>{item.q}</span>
              <span className="text-xs text-ink-muted group-open:hidden">+</span>
              <span className="text-xs text-ink-muted hidden group-open:inline">-</span>
            </summary>
            <p className="mt-2 text-xs text-ink-secondary">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
