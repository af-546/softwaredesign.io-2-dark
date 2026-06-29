import { Link } from "react-router-dom";
import PageHero from "../components/ui/PageHero";
import { caseStudies } from "../data/caseStudies";
import { MagneticCard, RevealItem, RevealStagger } from "../components/ui/Reveal";
import MagneticButton from "../components/ui/MagneticButton";

export default function WorkPage() {
  return (
    <div className="space-y-16 md:space-y-24">
      <PageHero
        eyebrow="Selected work"
        title={
          <>
            Real work.{" "}
            <span className="text-accent-soft italic">Real outcomes.</span>
          </>
        }
        description="A selection of recent client engagements. Each case study covers the challenge, the approach, and the measured outcome."
      />

      <RevealStagger className="grid gap-8">
        {caseStudies.map((study) => (
          <RevealItem key={study.slug}>
            <MagneticCard>
              <Link
                to={`/work/${study.slug}`}
                className="group block rounded-2xl border border-border-subtle bg-bg-surface/70 p-6 md:p-8 hover:border-accent-soft/50 hover:shadow-soft transition-all"
              >
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs uppercase tracking-wider text-accent-soft border border-accent-soft/40 rounded-full px-2.5 py-1">
                    {study.category}
                  </span>
                  <span className="text-xs text-ink-muted">{study.year}</span>
                  <span className="text-xs text-ink-muted">{study.duration}</span>
                </div>
                <h2 className="font-serif text-2xl md:text-3xl font-semibold text-ink-primary group-hover:text-accent-soft transition-colors">
                  {study.client}
                </h2>
                <p className="mt-2 text-sm text-ink-muted">{study.industry}</p>
                <p className="mt-4 text-ink-secondary leading-relaxed">{study.summary}</p>
                <p className="mt-4 text-sm font-medium text-accent-soft">{study.outcome}</p>
              </Link>
            </MagneticCard>
          </RevealItem>
        ))}
      </RevealStagger>

      <section className="rounded-3xl border border-border-subtle bg-bg-surface/70 p-8 md:p-12 text-center">
        <h2 className="font-serif text-2xl md:text-3xl font-semibold text-ink-primary">
          Have a project in mind?
        </h2>
        <p className="mt-4 text-ink-secondary">
          Tell us about the challenge. We&apos;ll reply within one business day.
        </p>
        <MagneticButton
          to="/contact"
          className="inline-flex items-center mt-6 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white hover:bg-accent-soft transition-colors shadow-glow"
        >
          Start a project
        </MagneticButton>
      </section>
    </div>
  );
}
