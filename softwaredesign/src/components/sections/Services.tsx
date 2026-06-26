const services = [
  {
    title: "Portfolio & personal sites",
    description:
      "Clean, responsive personal sites that showcase your work, skills, and projects with a professional tone.",
    details: "Optimized for recruiters, clients, and product teams.",
  },
  {
    title: "Landing pages for products",
    description:
      "Conversion-focused landing pages with clear messaging, strong visuals, and smooth interactions.",
    details: "Ideal for SaaS, tools, and early-stage startups.",
  },
  {
    title: "Interactive prototypes",
    description:
      "Scroll-reactive, animated prototypes to validate ideas and impress stakeholders before full builds.",
    details: "Perfect for demos, pitches, and concept testing.",
  },
];

export default function Services() {
  return (
    <section id="services" className="space-y-8">
      <div className="space-y-3">
        <h2 className="text-xl md:text-2xl font-semibold text-ink-primary">
          What I build
        </h2>
        <p className="text-ink-secondary max-w-xl">
          The focus is simple: modern, fast, and expressive web experiences that feel
          like real products, not generic templates.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {services.map((service) => (
          <div
            key={service.title}
            className="rounded-2xl bg-bg-surface border border-border-subtle p-5 hover:border-accent-soft hover:shadow-soft transition-all"
          >
            <h3 className="text-sm font-semibold text-ink-primary mb-2">
              {service.title}
            </h3>
            <p className="text-xs text-ink-secondary mb-3">{service.description}</p>
            <p className="text-xs text-ink-muted">{service.details}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
