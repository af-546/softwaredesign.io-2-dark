import PageHero from "../components/ui/PageHero";
import Reveal from "../components/ui/Reveal";
import { site } from "../data/site";

export default function PrivacyPage() {
  return (
    <div className="space-y-12 max-w-3xl">
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="We collect only what we need to reply to you and understand how the site is used. We don't sell your data."
      />

      <Reveal>
        <p className="text-sm text-ink-muted">Last updated: January 2026</p>
      </Reveal>

      <Reveal delay={0.05}>
        <section className="space-y-4">
          <h2 className="font-serif text-2xl font-semibold text-ink-primary">Overview</h2>
          <p className="text-ink-secondary leading-relaxed">
            {site.name} (&ldquo;we,&rdquo; &ldquo;us,&rdquo; &ldquo;our&rdquo;) respects your privacy. This policy explains what information we collect, how we use it, and the choices you have. We don&apos;t sell your data, and we collect only what we need to communicate with you and run our business.
          </p>
        </section>
      </Reveal>

      <Reveal delay={0.1}>
        <section className="space-y-4">
          <h2 className="font-serif text-2xl font-semibold text-ink-primary">What we collect & how we use it</h2>
          <p className="text-ink-secondary leading-relaxed">
            When you fill out our contact form, we collect your name, email address, company name (if provided), and the message you send. We use this information to respond to your inquiry, communicate about a potential or active engagement, and (with your permission) send occasional updates about our work.
          </p>
          <p className="text-ink-secondary leading-relaxed">
            We don&apos;t sell or share your data with third parties for marketing.
          </p>
        </section>
      </Reveal>

      <Reveal delay={0.15}>
        <section className="space-y-4">
          <h2 className="font-serif text-2xl font-semibold text-ink-primary">Analytics & cookies</h2>
          <p className="text-ink-secondary leading-relaxed">
            We use privacy-respecting analytics to understand how visitors use the site. This gives us aggregate data — page views, browser type, country — but does not identify individual users.
          </p>
          <p className="text-ink-secondary leading-relaxed">
            We use minimal essential cookies for basic site functionality. We do not use tracking cookies, advertising cookies, or third-party tracking pixels.
          </p>
        </section>
      </Reveal>

      <Reveal delay={0.2}>
        <section className="space-y-4">
          <h2 className="font-serif text-2xl font-semibold text-ink-primary">Your rights & contact</h2>
          <p className="text-ink-secondary leading-relaxed">
            You can request access to any personal information we have about you, request corrections, or request deletion at any time.
          </p>
          <p className="text-ink-secondary leading-relaxed">
            Questions about this policy or a data request? Email{" "}
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
