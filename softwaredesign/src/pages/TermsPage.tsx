import PageHero from "../components/ui/PageHero";
import Reveal from "../components/ui/Reveal";
import { site } from "../data/site";

export default function TermsPage() {
  return (
    <div className="space-y-12 max-w-3xl">
      <PageHero
        eyebrow="Legal"
        title="Terms of Service"
        description="The terms that govern use of this website and our design services."
      />

      <Reveal>
        <p className="text-sm text-ink-muted">Last updated: January 2026</p>
      </Reveal>

      <Reveal delay={0.05}>
        <section className="space-y-4">
          <h2 className="font-serif text-2xl font-semibold text-ink-primary">Website use</h2>
          <p className="text-ink-secondary leading-relaxed">
            By accessing {site.name}, you agree to use this site for lawful purposes only. Content on this site is provided for general information and may not be reproduced without permission.
          </p>
        </section>
      </Reveal>

      <Reveal delay={0.1}>
        <section className="space-y-4">
          <h2 className="font-serif text-2xl font-semibold text-ink-primary">Engagements</h2>
          <p className="text-ink-secondary leading-relaxed">
            Design and development services are governed by a separate statement of work or master services agreement signed before work begins. Quotes provided through this site are estimates until a formal agreement is executed.
          </p>
        </section>
      </Reveal>

      <Reveal delay={0.15}>
        <section className="space-y-4">
          <h2 className="font-serif text-2xl font-semibold text-ink-primary">Intellectual property</h2>
          <p className="text-ink-secondary leading-relaxed">
            Work product ownership is defined in each client agreement. Portfolio case studies may reference completed work with client permission.
          </p>
        </section>
      </Reveal>

      <Reveal delay={0.2}>
        <section className="space-y-4">
          <h2 className="font-serif text-2xl font-semibold text-ink-primary">Contact</h2>
          <p className="text-ink-secondary leading-relaxed">
            Questions about these terms? Email{" "}
            <a href={`mailto:${site.email}`} className="text-accent-soft hover:underline">
              {site.email}
            </a>
            .
          </p>
        </section>
      </Reveal>
    </div>
  );
}
