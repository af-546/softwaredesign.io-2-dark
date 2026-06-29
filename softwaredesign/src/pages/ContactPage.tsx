import { useState, type FormEvent } from "react";
import PageHero from "../components/ui/PageHero";
import Reveal from "../components/ui/Reveal";
import { site } from "../data/site";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="space-y-16">
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let&apos;s talk about your{" "}
            <span className="text-accent-soft italic">project.</span>
          </>
        }
        description="Tell us about the challenge. We reply to every message within one business day."
      />

      <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        <Reveal>
          {submitted ? (
            <div className="rounded-2xl border border-accent-soft/40 bg-accent-subtle p-8">
              <h2 className="font-serif text-2xl font-semibold text-ink-primary">Message sent</h2>
              <p className="mt-4 text-ink-secondary">
                Thanks for reaching out. We&apos;ll get back to you within one business day.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-ink-primary mb-2">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    className="w-full rounded-lg border border-border-subtle bg-bg-surface px-4 py-3 text-sm text-ink-primary focus:border-accent-soft focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-ink-primary mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-lg border border-border-subtle bg-bg-surface px-4 py-3 text-sm text-ink-primary focus:border-accent-soft focus:outline-none"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-ink-primary mb-2">
                  Company
                </label>
                <input
                  id="company"
                  name="company"
                  className="w-full rounded-lg border border-border-subtle bg-bg-surface px-4 py-3 text-sm text-ink-primary focus:border-accent-soft focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-ink-primary mb-2">
                  Project details
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full rounded-lg border border-border-subtle bg-bg-surface px-4 py-3 text-sm text-ink-primary focus:border-accent-soft focus:outline-none resize-none"
                />
              </div>
              <button
                type="submit"
                className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-white hover:bg-accent-soft transition-colors shadow-glow"
              >
                Send message
              </button>
            </form>
          )}
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-2xl border border-border-subtle bg-bg-surface/50 p-6 space-y-6">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-ink-muted">Email</p>
              <a href={`mailto:${site.email}`} className="mt-2 block text-accent-soft hover:underline">
                {site.email}
              </a>
            </div>
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-ink-muted">Studio</p>
              <p className="mt-2 text-sm text-ink-secondary">
                {site.address.street}
                <br />
                {site.address.city}
              </p>
              <a
                href={site.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-sm text-accent-soft hover:underline"
              >
                Get directions →
              </a>
            </div>
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-ink-muted">Hours</p>
              <p className="mt-2 text-sm text-ink-secondary">
                {site.hours.label}
                <br />
                {site.hours.time}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
