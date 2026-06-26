const projects = [
  {
    name: "Milwaukee Riverfront Plaza Offices",
    type: "Real estate landing page",
    stack: "React, Tailwind, GSAP",
    summary:
      "Scroll-reactive, animated landing page showcasing a modern office space with smooth transitions and responsive layout.",
  },
  {
    name: "Softwaredesign.io (current)",
    type: "Personal studio site",
    stack: "React, TypeScript, Tailwind",
    summary:
      "Portfolio and service overview with clean typography, responsive sections, and a focus on clarity.",
  },
  {
    name: "CS180 game project",
    type: "Java game UI",
    stack: "Java, custom sprites",
    summary:
      "Minimal-effort but functional game UI with clear architecture and sprite handling for academic requirements.",
  },
];

export default function Work() {
  return (
    <section id="work" className="space-y-8">
      <div className="space-y-3">
        <h2 className="text-xl md:text-2xl font-semibold text-ink-primary">
          Recent work
        </h2>
        <p className="text-ink-secondary max-w-xl">
          A mix of personal projects, client-style builds, and academic work, all focused
          on clean implementation and interaction.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.name}
            className="rounded-2xl bg-bg-surface border border-border-subtle p-5 hover:border-accent-soft hover:shadow-soft transition-all"
          >
            <h3 className="text-sm font-semibold text-ink-primary mb-1">
              {project.name}
            </h3>
            <p className="text-xs text-ink-muted mb-2">{project.type}</p>
            <p className="text-xs text-ink-secondary mb-3">{project.summary}</p>
            <p className="text-xs font-mono text-accent-soft">{project.stack}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
