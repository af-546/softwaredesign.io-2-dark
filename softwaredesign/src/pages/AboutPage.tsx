import { Link } from "react-router-dom";
import PageHero from "../components/ui/PageHero";
import Process from "../components/sections/Process";
import Reveal from "../components/ui/Reveal";
import { principles } from "../data/site";
import MagneticButton from "../components/ui/MagneticButton";

export default function AboutPage() {
  return (
    <div className="space-y-16 md:space-y-24">
      <PageHero
        eyebrow="About the studio"
        title={
          <>
            A small studio, obsessed with the craft of{" "}
            <span className="text-accent-soft italic">shipping software.</span>
          </>
        }
        description="We're a Boston-based design studio of nine designers, researchers, and engineers. We work with founders, product teams, and operators who care about the difference between work that's done and work that's right."
      />

      <section className="space-y-8 max-w-3xl">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent-soft">
            Our story
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-ink-primary mt-4">
            Founded on the belief that great software is designed, not assembled.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="space-y-4 text-ink-secondary leading-relaxed">
            <p>
              SoftwareDesign.io started in 2023 as a three-person partnership between designers and engineers who had spent a decade watching agencies hand designs to engineers who didn&apos;t share the same priorities — and ship work that lost something important in the handoff.
            </p>
            <p>
              We built a studio where design and engineering sit together. The translation between Figma and production is a non-event because the same people who designed it are sitting with the people who built it.
            </p>
            <p>
              Three years later we&apos;re a small studio working from 867 Boylston St in Boston. We take a deliberately small number of clients each year — usually six to ten — so we can give each one the attention they paid for.
            </p>
          </div>
          <Link to="/work" className="inline-block mt-6 text-sm text-accent-soft hover:underline">
            See our work →
          </Link>
        </Reveal>
      </section>

      <Process />

      <section className="space-y-12">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent-soft">
            What we believe
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-ink-primary mt-4">
            Six principles that shape how we work.
          </h2>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-2">
          {principles.map((principle, i) => (
            <Reveal key={principle.number} delay={i * 0.05}>
              <div className="rounded-2xl border border-border-subtle bg-bg-surface/50 p-6">
                <span className="font-mono text-sm text-accent-soft">{principle.number}</span>
                <h3 className="font-serif text-xl font-semibold text-ink-primary mt-2">
                  {principle.title}
                </h3>
                <p className="mt-2 text-sm text-ink-secondary leading-relaxed">
                  {principle.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-border-subtle bg-bg-surface/70 p-8 md:p-12 text-center">
        <h2 className="font-serif text-2xl md:text-3xl font-semibold text-ink-primary">
          Want to work together?
        </h2>
        <p className="mt-4 text-ink-secondary">
          Tell us about the project. We&apos;ll reply within one business day.
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
