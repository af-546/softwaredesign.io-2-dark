import { faqs } from "../../data/site";
import SectionHeader from "../ui/SectionHeader";
import Reveal from "../ui/Reveal";

export default function FAQ() {
  return (
    <section id="faq" className="space-y-12 md:space-y-16 py-12 md:py-16">
      <SectionHeader
        eyebrow="Questions"
        title={
          <>
            Frequently{" "}
            <span className="text-accent-soft italic">asked.</span>
          </>
        }
        description="If your question isn't here, send us a note. We reply to every message within one business day."
      />

      <div className="space-y-4 max-w-3xl">
        {faqs.map((faq, i) => (
          <Reveal key={faq.question} delay={i * 0.05}>
            <details className="group rounded-xl border border-border-subtle bg-bg-surface/50 overflow-hidden">
              <summary className="flex items-center justify-between cursor-pointer p-5 text-sm font-medium text-ink-primary hover:bg-bg-elevated transition-colors list-none">
                {faq.question}
                <span className="ml-3 text-accent-soft group-open:rotate-45 transition-transform text-lg leading-none">
                  +
                </span>
              </summary>
              <div className="px-5 pb-5 text-sm text-ink-secondary leading-relaxed border-t border-border-subtle pt-4">
                {faq.answer}
              </div>
            </details>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
