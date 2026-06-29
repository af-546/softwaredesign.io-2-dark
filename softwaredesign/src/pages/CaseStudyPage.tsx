import { Link, useParams } from "react-router-dom";
import { getCaseStudyBySlug } from "../data/caseStudies";
import Reveal from "../components/ui/Reveal";
import MagneticButton from "../components/ui/MagneticButton";
import NotFoundPage from "./NotFoundPage";

export default function CaseStudyPage() {
  const { slug } = useParams<{ slug: string }>();
  const study = slug ? getCaseStudyBySlug(slug) : undefined;

  if (!study) return <NotFoundPage />;

  return (
    <article className="space-y-12 md:space-y-16">
      <header className="space-y-6">
        <Reveal>
          <Link to="/work" className="text-sm text-accent-soft hover:underline">
            ← All work
          </Link>
        </Reveal>
        <Reveal delay={0.05}>
          <div className="flex flex-wrap gap-2">
            {study.services.map((service) => (
              <span
                key={service}
                className="text-xs uppercase tracking-wider text-accent-soft border border-accent-soft/40 rounded-full px-2.5 py-1"
              >
                {service}
              </span>
            ))}
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-semibold text-ink-primary mt-6 leading-tight">
            {study.client}
          </h1>
          <p className="mt-2 text-ink-muted">{study.industry}</p>
          <p className="mt-6 text-lg text-accent-soft font-medium">{study.outcome}</p>
        </Reveal>
      </header>

      <Reveal>
        <section className="space-y-4">
          <h2 className="font-serif text-2xl font-semibold text-ink-primary">The challenge</h2>
          <p className="text-ink-secondary leading-relaxed max-w-3xl">{study.challenge}</p>
        </section>
      </Reveal>

      <Reveal delay={0.05}>
        <section className="space-y-4">
          <h2 className="font-serif text-2xl font-semibold text-ink-primary">Our approach</h2>
          <p className="text-ink-secondary leading-relaxed max-w-3xl">{study.approach}</p>
        </section>
      </Reveal>

      <Reveal delay={0.1}>
        <section className="space-y-4">
          <h2 className="font-serif text-2xl font-semibold text-ink-primary">Results</h2>
          <ul className="space-y-3 max-w-3xl">
            {study.results.map((result) => (
              <li key={result} className="flex gap-3 text-ink-secondary">
                <span className="text-accent-soft mt-1">→</span>
                {result}
              </li>
            ))}
          </ul>
        </section>
      </Reveal>

      <Reveal delay={0.15}>
        <div className="rounded-2xl border border-border-subtle bg-bg-surface/70 p-8 text-center">
          <p className="text-ink-secondary">Ready for similar results?</p>
          <MagneticButton
            to="/contact"
            className="inline-flex items-center mt-4 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white hover:bg-accent-soft transition-colors shadow-glow"
          >
            Start a project
          </MagneticButton>
        </div>
      </Reveal>
    </article>
  );
}
