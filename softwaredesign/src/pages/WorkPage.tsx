import { Link } from "react-router-dom";
import PageHero from "../components/ui/PageHero";
import MagneticButton from "../components/ui/MagneticButton";
import { MagneticCard, RevealItem, RevealStagger } from "../components/ui/Reveal";
import { caseStudies } from "../data/caseStudies";

export default function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Selected work"
        title="Real work. Real outcomes."
        description="A selection of recent client engagements. Each case study covers the challenge, the approach, and the measured outcome."
      />

      <section className="py-16 md:py-24">
        <RevealStagger className="grid md:grid-cols-2 gap-6 md:gap-8">
          {caseStudies.map((study) => (
            <RevealItem key={study.slug}>
              <MagneticCard className="h-full">
                <Link
                  to={`/work/${study.slug}`}
                  className="group block h-full rounded-2xl bg-bg-surface border border-border-subtle overflow-hidden hover:border-accent-soft hover:shadow-soft transition-all"
                >
                  <div className="aspect-[4/3] bg-bg mesh-bg relative p-8 flex flex-col items-center justify-center text-center">
                    <span className="rounded-md bg-accent-subtle border border-accent-soft/40 px-2.5 py-1 text-[10px] uppercase tracking-wider text-accent-soft mb-4">
                      {study.category}
                    </span>
                    <p className="font-serif text-2xl md:text-3xl font-semibold text-ink-primary">
                      {study.client}
                    </p>
                    <p className="mt-2 font-mono text-[10px] uppercase tracking-wider text-ink-muted">
                      {study.industry}
                    </p>
                  </div>
                  <div className="p-6 md:p-8">
                    <h3 className="text-lg font-semibold text-ink-primary leading-tight group-hover:text-accent-soft transition-colors">
                      {study.headline}
                    </h3>
                    <p className="mt-3 text-sm text-ink-secondary">{study.outcome}</p>
                    <p className="mt-5 font-mono text-[10px] text-ink-muted uppercase tracking-wider">
                      {study.year} · {study.duration} · {study.services.join(", ")}
                    </p>
                  </div>
                </Link>
              </MagneticCard>
            </RevealItem>
          ))}
        </RevealStagger>
      </section>

      <section className="pb-16 text-center">
        <MagneticButton to="/contact">Start a project</MagneticButton>
      </section>
    </>
  );
}
