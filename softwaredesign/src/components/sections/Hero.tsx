export default function Hero() {
  return (
    <section
      id="hero"
      className="relative grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] items-center"
    >
      <div className="pointer-events-none absolute -top-32 -left-24 h-72 w-72 rounded-full bg-accent-subtle blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 right-0 h-80 w-80 rounded-full bg-accent-subtle blur-3xl" />

      <div className="space-y-6 relative z-10">
        <p className="text-xs font-semibold tracking-[0.3em] uppercase text-accent-soft">
          Softwaredesign.io
        </p>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-ink-primary">
          Build. Launch. Scale.
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent-soft via-indigo-300 to-emerald-300">
            Beautiful software, done right.
          </span>
        </h1>
        <p className="text-sm md:text-base text-ink-secondary max-w-lg">
          We design, build, and ship production-ready products for founders who
          cannot afford slow teams, bloated timelines, or mediocre UX.
        </p>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-accent px-5 py-2 text-xs font-semibold text-white shadow-glow hover:bg-accent-soft transition-all"
          >
            Start a project
          </a>
          <a
            href="#work"
            className="inline-flex items-center rounded-full border border-border-subtle bg-bg-surface px-4 py-2 text-xs font-semibold text-ink-primary hover:border-accent-soft hover:text-accent-soft transition-all"
          >
            View work
          </a>
        </div>

        <div className="flex flex-wrap gap-4 text-xs text-ink-muted">
          <span>Product strategy · UX/UI · Frontend · Systems</span>
          <span className="inline-flex items-center gap-1 text-emerald-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Fast iterations, no bullshit</span>
          </span>
        </div>
      </div>

      <div className="relative z-10">
        <div className="relative mx-auto max-w-md">
          <div className="rounded-3xl border border-border-subtle bg-bg-surface shadow-soft overflow-hidden">
            <div className="flex items-center gap-1 px-3 py-2 border-b border-border-subtle bg-bg">
              <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
              <span className="ml-3 text-[10px] text-ink-muted">
                softwaredesign.io · dashboard
              </span>
            </div>
            <div className="bg-gradient-to-br from-bg-surface via-bg to-bg-surface p-4">
              <div className="grid grid-cols-[1.2fr_0.8fr] gap-4">
                <div className="space-y-3">
                  <div className="h-4 w-24 rounded-full bg-bg-elevated" />
                  <div className="h-3 w-40 rounded-full bg-bg-elevated" />
                  <div className="h-24 rounded-xl bg-bg border border-border-subtle flex items-center justify-center text-[10px] text-ink-muted">
                    Product metrics, timelines, and sprints.
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="h-3 w-20 rounded-full bg-bg-elevated" />
                  <div className="space-y-2">
                    <div className="h-3 w-full rounded-full bg-bg-elevated" />
                    <div className="h-3 w-5/6 rounded-full bg-bg-elevated" />
                    <div className="h-3 w-4/6 rounded-full bg-bg-elevated" />
                  </div>
                  <div className="h-10 rounded-lg bg-accent-subtle border border-accent-soft flex items-center justify-center text-[10px] text-ink-primary">
                    Launch-ready in weeks, not months.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -right-6 bottom-4 w-28 rounded-2xl border border-border-subtle bg-bg-surface shadow-soft overflow-hidden">
            <div className="h-4 bg-bg flex items-center justify-center">
              <div className="h-2 w-10 rounded-full bg-bg-elevated" />
            </div>
            <div className="p-3 space-y-2 bg-gradient-to-b from-bg-surface via-bg to-bg-surface">
              <div className="h-3 w-16 rounded-full bg-bg-elevated" />
              <div className="h-2 w-full rounded-full bg-bg-elevated" />
              <div className="h-2 w-5/6 rounded-full bg-bg-elevated" />
              <div className="h-7 rounded-lg bg-accent-subtle border border-accent-soft flex items-center justify-center text-[9px] text-ink-primary">
                Mobile-first flows.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
