const steps = [
  {
    label: "01",
    title: "Discovery & scope",
    text: "We define the goal of the site, audience, and key pages. You share references, content, and constraints.",
  },
  {
    label: "02",
    title: "Structure & wireframes",
    text: "I map out sections, flows, and interactions. You get a clear layout before visuals and code.",
  },
  {
    label: "03",
    title: "Design & implementation",
    text: "Dark theme, animations, responsive behavior, and content integration, all built in TypeScript and React.",
  },
  {
    label: "04",
    title: "Polish & handoff",
    text: "Performance tuning, accessibility checks, and deployment guidance or direct hosting setup.",
  },
];

export default function Process() {
  return (
    <section id="process" className="space-y-8">
      <div className="space-y-3">
        <h2 className="text-xl md:text-2xl font-semibold text-ink-primary">
          How projects run
        </h2>
        <p className="text-ink-secondary max-w-xl">
          A simple, transparent process that keeps you in the loop without drowning you
          in meetings or docs.
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-6">
        {steps.map((step) => (
          <div
            key={step.label}
            className="rounded-2xl bg-bg-surface border border-border-subtle p-5 flex flex-col gap-2"
          >
            <span className="font-mono text-xs text-accent-soft">{step.label}</span>
            <h3 className="text-sm font-semibold text-ink-primary">{step.title}</h3>
            <p className="text-xs text-ink-muted">{step.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
