import MagneticButton from "../ui/MagneticButton";
import Reveal from "../ui/Reveal";
import { site } from "../../data/site";

export default function Contact() {
  return (
    <section id="contact" className="space-y-10 pb-8">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-border-subtle bg-gradient-to-br from-accent/20 via-bg-surface to-bg p-8 md:p-12 text-center">
          <div className="pointer-events-none absolute inset-0 mesh-bg opacity-60" aria-hidden="true" />
          <div className="relative max-w-2xl mx-auto space-y-5">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent-soft">
              Ready to start?
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-ink-primary tracking-tight">
              Software designed right.
            </h2>
            <p className="text-base text-ink-secondary leading-relaxed">
              Tell us about the project and get concrete next steps — not a pitch.
            </p>
            <div className="flex justify-center">
              <MagneticButton href={`mailto:${site.email}`}>Book a call →</MagneticButton>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6">
          <form
            className="space-y-4 rounded-2xl bg-bg-surface border border-border-subtle p-6"
            onSubmit={(event) => event.preventDefault()}
          >
            <div className="space-y-1">
              <label htmlFor="name" className="text-xs text-ink-muted">
                Name
              </label>
              <input
                id="name"
                name="name"
                className="w-full rounded-lg bg-bg-elevated border border-border-subtle px-3 py-2.5 text-sm text-ink-primary focus:outline-none focus:border-accent-soft transition-colors"
                placeholder="Your name"
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="email" className="text-xs text-ink-muted">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="w-full rounded-lg bg-bg-elevated border border-border-subtle px-3 py-2.5 text-sm text-ink-primary focus:outline-none focus:border-accent-soft transition-colors"
                placeholder="you@company.com"
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="details" className="text-xs text-ink-muted">
                Project details
              </label>
              <textarea
                id="details"
                name="details"
                className="w-full rounded-lg bg-bg-elevated border border-border-subtle px-3 py-2.5 text-sm text-ink-primary h-32 resize-none focus:outline-none focus:border-accent-soft transition-colors"
                placeholder="What are you building? Timeline, budget, references?"
              />
            </div>
            <MagneticButton type="submit">Send message</MagneticButton>
          </form>

          <div className="space-y-5 rounded-2xl bg-bg-surface border border-border-subtle p-6 text-sm text-ink-secondary">
            <div>
              <p className="text-xs uppercase tracking-wider text-ink-muted mb-2">Email</p>
              <a
                href={`mailto:${site.email}`}
                className="text-ink-primary hover:text-accent-soft transition-colors"
              >
                {site.email}
              </a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-ink-muted mb-2">Studio</p>
              <p>{site.address.street}</p>
              <p>{site.address.city}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-ink-muted mb-2">Hours</p>
              <p>{site.hours.label}</p>
              <p>{site.hours.time}</p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
