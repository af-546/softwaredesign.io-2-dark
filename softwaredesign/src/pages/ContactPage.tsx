import PageHero from "../components/ui/PageHero";
import MagneticButton from "../components/ui/MagneticButton";
import Reveal from "../components/ui/Reveal";
import { site } from "../data/site";

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about your project."
        description="Share a short description of what you want to build, your timeline, and any references. We reply to every message within one business day."
      />

      <section className="py-16 md:py-24 grid lg:grid-cols-[1.4fr_1fr] gap-8">
        <Reveal>
          <form
            className="space-y-4 rounded-2xl bg-bg-surface border border-border-subtle p-6 md:p-8"
            onSubmit={(event) => event.preventDefault()}
          >
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label htmlFor="contact-name" className="text-xs text-ink-muted">
                  Name *
                </label>
                <input
                  id="contact-name"
                  required
                  className="w-full rounded-lg bg-bg-elevated border border-border-subtle px-3 py-2.5 text-sm text-ink-primary focus:outline-none focus:border-accent-soft"
                  placeholder="Your name"
                />
              </div>
              <div className="space-y-1">
                <label htmlFor="contact-email" className="text-xs text-ink-muted">
                  Email *
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  className="w-full rounded-lg bg-bg-elevated border border-border-subtle px-3 py-2.5 text-sm text-ink-primary focus:outline-none focus:border-accent-soft"
                  placeholder="you@company.com"
                />
              </div>
            </div>
            <div className="space-y-1">
              <label htmlFor="contact-company" className="text-xs text-ink-muted">
                Company
              </label>
              <input
                id="contact-company"
                className="w-full rounded-lg bg-bg-elevated border border-border-subtle px-3 py-2.5 text-sm text-ink-primary focus:outline-none focus:border-accent-soft"
                placeholder="Company name"
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="contact-message" className="text-xs text-ink-muted">
                Project details *
              </label>
              <textarea
                id="contact-message"
                required
                className="w-full rounded-lg bg-bg-elevated border border-border-subtle px-3 py-2.5 text-sm text-ink-primary h-36 resize-none focus:outline-none focus:border-accent-soft"
                placeholder="What are you building? Timeline, budget, references?"
              />
            </div>
            <MagneticButton type="submit">Send message</MagneticButton>
          </form>
        </Reveal>

        <Reveal delay={0.1} className="space-y-6">
          <div className="rounded-2xl bg-bg-surface border border-border-subtle p-6 space-y-5 text-sm text-ink-secondary">
            <div>
              <p className="text-xs uppercase tracking-wider text-ink-muted mb-2">Email</p>
              <a href={`mailto:${site.email}`} className="text-ink-primary hover:text-accent-soft">
                {site.email}
              </a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-ink-muted mb-2">Studio</p>
              <p>{site.address.street}</p>
              <p>{site.address.city}</p>
              <a
                href={site.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-2 text-accent-soft hover:text-ink-primary transition-colors"
              >
                Open in Google Maps →
              </a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-ink-muted mb-2">Hours</p>
              <p>{site.hours.label}</p>
              <p>{site.hours.time}</p>
            </div>
          </div>
          <div className="rounded-2xl border border-border-subtle bg-accent-subtle p-6">
            <p className="text-sm text-ink-primary font-medium">Prefer to skip the form?</p>
            <p className="mt-2 text-sm text-ink-secondary">
              Email us directly or book a call — we'll reply with concrete next steps, not a pitch.
            </p>
            <div className="mt-4">
              <MagneticButton href={`mailto:${site.email}`}>Book a call →</MagneticButton>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
