import { Link, useParams } from "react-router-dom";
import { getServiceBySlug } from "../data/services";
import { caseStudies } from "../data/caseStudies";
import PageHero from "../components/ui/PageHero";
import Reveal from "../components/ui/Reveal";
import MagneticButton from "../components/ui/MagneticButton";
import NotFoundPage from "./NotFoundPage";

export default function ServicePage() {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : undefined;

  if (!service) return <NotFoundPage />;

  const relatedWork = caseStudies.filter((c) =>
    c.services.some((s) => s.toLowerCase().includes(service.shortTitle.toLowerCase().split(" ")[0])),
  ).slice(0, 2);

  return (
    <div className="space-y-16 md:space-y-24">
      <PageHero
        eyebrow={service.title}
        title={service.tagline}
        description={service.description}
      />

      <Reveal>
        <div className="flex flex-wrap gap-4">
          <MagneticButton
            href="/contact"
            className="inline-flex items-center rounded-full bg-accent px-6 py-3 text-sm font-medium text-white hover:bg-accent-soft transition-colors shadow-glow"
          >
            Start a project
          </MagneticButton>
          <Link
            to="/work"
            className="inline-flex items-center rounded-full border border-border-subtle px-6 py-3 text-sm font-medium text-ink-primary hover:border-accent-soft/50 transition-colors"
          >
            See related work
          </Link>
        </div>
      </Reveal>

      <section className="space-y-8">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent-soft">
            What&apos;s included
          </p>
          <h2 className="font-serif text-3xl font-semibold text-ink-primary mt-4">
            Every engagement includes:
          </h2>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-2">
          {service.deliverables.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.05}>
              <div className="rounded-2xl border border-border-subtle bg-bg-surface/50 p-6">
                <h3 className="font-serif text-lg font-semibold text-ink-primary">{item.title}</h3>
                <p className="mt-2 text-sm text-ink-secondary leading-relaxed">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent-soft">
            The process
          </p>
          <h2 className="font-serif text-3xl font-semibold text-ink-primary mt-4">
            How a typical engagement unfolds.
          </h2>
        </Reveal>
        <div className="space-y-6">
          {service.process.map((step, i) => (
            <Reveal key={step.number} delay={i * 0.05}>
              <div className="flex gap-6 items-start">
                <span className="font-mono text-sm text-accent-soft shrink-0">{step.number}</span>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-ink-primary">{step.title}</h3>
                  <p className="mt-2 text-sm text-ink-secondary leading-relaxed">{step.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {relatedWork.length > 0 && (
        <section className="space-y-8">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent-soft">
              Recent work
            </p>
            <h2 className="font-serif text-3xl font-semibold text-ink-primary mt-4">
              {service.title} in practice.
            </h2>
            <Link to="/work" className="inline-block mt-2 text-sm text-accent-soft hover:underline">
              All work →
            </Link>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            {relatedWork.map((study, i) => (
              <Reveal key={study.slug} delay={i * 0.05}>
                <Link
                  to={`/work/${study.slug}`}
                  className="block rounded-2xl border border-border-subtle bg-bg-surface/50 p-6 hover:border-accent-soft/50 transition-colors"
                >
                  <span className="text-xs text-accent-soft uppercase tracking-wider">{study.category}</span>
                  <h3 className="font-serif text-xl font-semibold text-ink-primary mt-2">{study.client}</h3>
                  <p className="mt-2 text-sm text-ink-secondary">{study.summary}</p>
                  <p className="mt-3 text-sm text-accent-soft">{study.outcome}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      <section className="space-y-6">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent-soft">
            Common questions
          </p>
          <h2 className="font-serif text-3xl font-semibold text-ink-primary mt-4">
            Questions about {service.title.toLowerCase()}.
          </h2>
        </Reveal>
        <div className="space-y-4 max-w-3xl">
          {service.faqs.map((faq, i) => (
            <Reveal key={faq.question} delay={i * 0.05}>
              <details className="group rounded-xl border border-border-subtle bg-bg-surface/50">
                <summary className="flex items-center justify-between cursor-pointer p-5 text-sm font-medium text-ink-primary list-none">
                  {faq.question}
                  <span className="ml-3 text-accent-soft group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-5 pb-5 text-sm text-ink-secondary leading-relaxed border-t border-border-subtle pt-4">
                  {faq.answer}
                </div>
              </details>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-border-subtle bg-bg-surface/70 p-8 md:p-12 text-center">
        <h2 className="font-serif text-2xl md:text-3xl font-semibold text-ink-primary">
          Ready to start?
        </h2>
        <p className="mt-4 text-ink-secondary">
          Tell us about the project. We reply within one business day.
        </p>
        <MagneticButton
          href="/contact"
          className="inline-flex items-center mt-6 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white hover:bg-accent-soft transition-colors shadow-glow"
        >
          Start a project
        </MagneticButton>
      </section>
    </div>
  );
}
