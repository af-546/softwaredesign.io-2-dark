import { testimonials } from "../../data/site";
import SectionHeader from "../ui/SectionHeader";
import { RevealItem, RevealStagger } from "../ui/Reveal";

export default function Testimonials() {
  return (
    <section className="space-y-12 md:space-y-16 py-12 md:py-16">
      <SectionHeader
        eyebrow="Client feedback"
        title={
          <>
            What clients{" "}
            <span className="text-accent-soft italic">say.</span>
          </>
        }
        description="Real projects, real outcomes."
      />

      <RevealStagger className="grid gap-6 md:grid-cols-3">
        {testimonials.map((item) => (
          <RevealItem key={item.author}>
            <blockquote className="rounded-2xl border border-border-subtle bg-bg-surface/50 p-6 h-full flex flex-col">
              <p className="text-sm text-ink-secondary leading-relaxed flex-1">
                &ldquo;{item.quote}&rdquo;
              </p>
              <footer className="mt-6 pt-4 border-t border-border-subtle">
                <p className="text-sm font-medium text-ink-primary">{item.author}</p>
                <p className="text-xs text-ink-muted">{item.company}</p>
              </footer>
            </blockquote>
          </RevealItem>
        ))}
      </RevealStagger>
    </section>
  );
}
