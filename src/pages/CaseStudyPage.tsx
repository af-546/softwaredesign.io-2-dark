import { Link, Navigate, useParams } from "react-router-dom";
import MagneticButton from "../components/ui/MagneticButton";
import Reveal from "../components/ui/Reveal";
import { getCaseStudy } from "../data/caseStudies";

export default function CaseStudyPage() {
  const { slug } = useParams();
  const study = slug ? getCaseStudy(slug) : undefined;

  if (!study) {
    return <Navigate to="/work" replace />;
  }

  return (
    <>
      <section className="relative -mx-4 md:-mx-6 lg:-mx-8 px-4 md:px-6 lg:px-8 pt-8 pb-16 md:pb-20 mesh-bg border-b border-border-subtle">
        <Reveal className="max-w-4xl">
          <Link
            to="/work"
            className="inline-flex text-xs text-ink-muted hover:text-accent-soft transition-colors mb-6"
          >
            ← Back to work
          </Link>
          <span className="block rounded-md bg-accent-subtle border border-accent-soft/40 px-2.5 py-1 text-[10px] uppercase tracking-wider text-accent-soft w-fit mb-4">
            {study.category}
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-semibold text-ink-primary leading-[1.05]">
            {study.client}
          </h1>
          <p className="mt-6 text-lg text-ink-secondary leading-relaxed">{study.headline}</p>
          <p className="mt-4 text-sm font-medium text-accent-soft">{study.outcome}</p>
        </Reveal>
      </section>

      <section className="py-16 md:py-20 grid lg:grid-cols-[1.2fr_0.8fr] gap-10">
        <div className="space-y-10">
          {[
            ["Challenge", study.challenge],
            ["Approach", study.approach],
            ["Result", study.result],
          ].map(([label, text], index) => (
            <Reveal key={label} delay={index * 0.05}>
              <p className="text-xs uppercase tracking-[0.2em] text-accent-soft mb-3">
                {label}
              </p>
              <p className="text-base text-ink-secondary leading-relaxed">{text}</p>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.1}>
          <div className="rounded-2xl bg-bg-surface border border-border-subtle p-6 space-y-4 sticky top-28">
            <p className="text-xs uppercase tracking-wider text-ink-muted">Metrics</p>
            {study.metrics.map((metric) => (
              <div
                key={metric.label}
                className="flex items-center justify-between border-b border-border-subtle pb-3 last:border-0 last:pb-0"
              >
                <span className="text-sm text-ink-secondary">{metric.label}</span>
                <span className="text-sm font-semibold text-accent-soft">{metric.value}</span>
              </div>
            ))}
            <div className="pt-4">
              <MagneticButton to="/contact" className="w-full justify-center">
                Start a similar project
              </MagneticButton>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
