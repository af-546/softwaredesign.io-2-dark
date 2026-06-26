export default function Contact() {
  return (
    <section id="contact" className="space-y-8 pb-24">
      <div className="space-y-3">
        <h2 className="text-xl md:text-2xl font-semibold text-ink-primary">
          Start a project
        </h2>
        <p className="text-ink-secondary max-w-xl">
          Share a short description of what you want to build, your timeline, and any
          references. I will reply with a clear scope and next steps.
        </p>
      </div>

      <div className="grid md:grid-cols-[2fr,1fr] gap-6">
        <form
          className="space-y-4 rounded-2xl bg-bg-surface border border-border-subtle p-5"
          onSubmit={(event) => event.preventDefault()}
        >
          <div className="space-y-1">
            <label htmlFor="name" className="text-xs text-ink-muted">
              Name
            </label>
            <input
              id="name"
              name="name"
              className="w-full rounded-lg bg-bg-elevated border border-border-subtle px-3 py-2 text-xs text-ink-primary focus:outline-none focus:border-accent-soft"
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
              className="w-full rounded-lg bg-bg-elevated border border-border-subtle px-3 py-2 text-xs text-ink-primary focus:outline-none focus:border-accent-soft"
              placeholder="you@example.com"
            />
          </div>
          <div className="space-y-1">
            <label htmlFor="details" className="text-xs text-ink-muted">
              Project details
            </label>
            <textarea
              id="details"
              name="details"
              className="w-full rounded-lg bg-bg-elevated border border-border-subtle px-3 py-2 text-xs text-ink-primary h-28 resize-none focus:outline-none focus:border-accent-soft"
              placeholder="What do you want to build? Any references or deadlines?"
            />
          </div>
          <button
            type="submit"
            className="px-5 py-2.5 rounded-full bg-accent text-white shadow-glow hover:bg-accent-soft transition-all text-xs"
          >
            Send message
          </button>
        </form>

        <div className="space-y-3 rounded-2xl bg-bg-surface border border-border-subtle p-5 text-xs text-ink-muted">
          <p>
            Prefer email? Reach out directly at{" "}
            <a
              href="mailto:ali@softwaredesign.io"
              className="text-ink-secondary hover:text-ink-primary transition-colors"
            >
              ali@softwaredesign.io
            </a>
            .
          </p>
          <p>
            For quick calls, you can attach a calendar link or booking tool here once you
            set it up.
          </p>
        </div>
      </div>
    </section>
  );
}
