import SectionHeader from "../ui/SectionHeader";
import Reveal from "../ui/Reveal";

const faqs = [
  {
    q: "How long does a typical project take?",
    a: "Four to eight weeks for most engagements. Single landing page: 3–4 weeks. Multi-page SMB site or SaaS surface redesign: 6–8 weeks. Full product or mobile app design: 10–16 weeks.",
  },
  {
    q: "Do you work with clients outside Boston?",
    a: "Most of our clients are remote. Boston is our home base but we work with teams across the US and internationally. Regular demos over Zoom, async updates in between.",
  },
  {
    q: "What's your payment structure?",
    a: "50% on kickoff, 25% at the project midpoint, 25% on launch.",
  },
  {
    q: "Do you handle ongoing maintenance after launch?",
    a: "Optional monthly retainer for content updates, performance monitoring, and small feature additions. Most clients take the 7-day post-launch support window and then decide if they want ongoing engagement.",
  },
  {
    q: "Do you sign NDAs?",
    a: "Standard mutual NDA. No fee. Send yours or use ours.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="space-y-10">
      <SectionHeader
        eyebrow="Questions"
        title="Frequently asked."
        description="If your question is not here, send us a note. We reply to every message within one business day."
      />

      <div className="space-y-4 max-w-3xl">
        {faqs.map((item, index) => (
          <Reveal key={item.q} delay={index * 0.05}>
            <details className="group rounded-2xl bg-bg-surface border border-border-subtle p-5 hover:border-accent-soft/50 transition-colors">
              <summary className="flex justify-between items-center cursor-pointer text-sm font-medium text-ink-primary">
                <span>{item.q}</span>
                <span className="text-xs text-ink-muted group-open:hidden">+</span>
                <span className="text-xs text-ink-muted hidden group-open:inline">−</span>
              </summary>
              <p className="mt-3 text-sm text-ink-secondary leading-relaxed">{item.a}</p>
            </details>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
