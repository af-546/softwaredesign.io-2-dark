import SectionHeader from "../ui/SectionHeader";
import { MagneticCard, RevealItem, RevealStagger } from "../ui/Reveal";

const testimonials = [
  {
    quote:
      "We needed a site that didn't look like every other cleaning website. They made a modern stylish website and got our business booming.",
    author: "Sarah C.",
    title: "Owner",
    company: "Cleaners",
    rating: 5,
  },
  {
    quote:
      "Four weeks from kickoff to production. Our old agency would've still been in the discovery deck.",
    author: "Shaheer P.",
    title: "Founder",
    company: "Umbulizer Inc.",
    rating: 5,
  },
  {
    quote:
      "They pushed back on a feature we wanted — turned out they were right. Saved us six weeks of building the wrong thing.",
    author: "Rowan L.",
    title: "CEO",
    company: "Rowans Photography",
    rating: 4,
  },
];

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, index) => (
        <span
          key={index}
          className={index < rating ? "text-accent-soft" : "text-ink-muted/40"}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="space-y-10">
      <SectionHeader
        eyebrow="Client feedback"
        title="What clients say."
        description="Real projects, real outcomes."
      />

      <RevealStagger className="grid md:grid-cols-3 gap-6">
        {testimonials.map((item) => (
          <RevealItem key={item.author}>
            <MagneticCard className="h-full">
              <blockquote className="rounded-2xl bg-bg-surface border border-border-subtle p-6 flex flex-col gap-4 h-full hover:border-accent-soft/60 transition-colors">
                <Stars rating={item.rating} />
                <p className="text-sm text-ink-secondary leading-relaxed flex-1">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <footer>
                  <p className="text-sm font-semibold text-ink-primary">{item.author}</p>
                  <p className="text-xs text-ink-muted">
                    {item.title}, {item.company}
                  </p>
                </footer>
              </blockquote>
            </MagneticCard>
          </RevealItem>
        ))}
      </RevealStagger>
    </section>
  );
}
