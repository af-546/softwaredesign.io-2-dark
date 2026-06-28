import { Navigate, useParams } from "react-router-dom";
import MagneticButton from "../components/ui/MagneticButton";
import PageHero from "../components/ui/PageHero";
import Reveal from "../components/ui/Reveal";
import { MagneticCard, RevealItem, RevealStagger } from "../components/ui/Reveal";
import { getService } from "../data/services";

export default function ServicePage() {
  const { slug } = useParams();
  const service = slug ? getService(slug) : undefined;

  if (!service) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <PageHero
        eyebrow={service.name}
        title={service.heroHeadline}
        description={service.heroSub}
      />

      <section className="py-10 flex flex-wrap gap-3">
        <MagneticButton to="/contact">Start a project</MagneticButton>
        <MagneticButton to="/work" variant="secondary">
          See related work
        </MagneticButton>
      </section>

      <section className="py-16 md:py-20">
        <Reveal className="mb-10">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent-soft mb-4">
            What's included
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-ink-primary">
            Every engagement includes:
          </h2>
        </Reveal>
        <RevealStagger className="grid md:grid-cols-2 gap-6">
          {service.deliverables.map((item) => (
            <RevealItem key={item.title}>
              <MagneticCard className="rounded-2xl bg-bg-surface border border-border-subtle p-6 h-full hover:border-accent-soft/60 transition-colors">
                <h3 className="text-lg font-semibold text-ink-primary">{item.title}</h3>
                <p className="mt-2 text-sm text-ink-secondary leading-relaxed">
                  {item.description}
                </p>
              </MagneticCard>
            </RevealItem>
          ))}
        </RevealStagger>
      </section>

      <section className="py-16 md:py-20 border-t border-border-subtle">
        <Reveal className="mb-10">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent-soft mb-4">
            The process
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-ink-primary">
            How a typical engagement unfolds.
          </h2>
        </Reveal>
        <RevealStagger className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {service.process.map((step) => (
            <RevealItem key={step.step}>
              <MagneticCard className="rounded-2xl bg-bg-surface border border-border-subtle p-6 h-full">
                <span className="font-mono text-xs text-accent-soft">{step.step}</span>
                <h3 className="mt-2 text-lg font-semibold text-ink-primary">{step.title}</h3>
                <p className="mt-2 text-sm text-ink-secondary leading-relaxed">
                  {step.description}
                </p>
              </MagneticCard>
            </RevealItem>
          ))}
        </RevealStagger>
      </section>

      {service.faqs.length > 0 && (
        <section className="pb-16 md:pb-24 space-y-4 max-w-3xl">
          {service.faqs.map((item, index) => (
            <Reveal key={item.question} delay={index * 0.05}>
              <details className="rounded-2xl bg-bg-surface border border-border-subtle p-5">
                <summary className="cursor-pointer text-sm font-medium text-ink-primary">
                  {item.question}
                </summary>
                <p className="mt-3 text-sm text-ink-secondary leading-relaxed">{item.answer}</p>
              </details>
            </Reveal>
          ))}
        </section>
      )}
    </>
  );
}
