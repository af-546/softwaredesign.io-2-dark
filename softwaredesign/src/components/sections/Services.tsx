import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { services } from "../../data/services";
import SectionHeader from "../ui/SectionHeader";
import { MagneticCard, RevealItem, RevealStagger } from "../ui/Reveal";

const previews: Record<string, ReactNode> = {
  "web-design": (
    <div className="space-y-2 p-3">
      <p className="text-[10px] text-ink-muted">Wood-fired Neapolitan pies</p>
      <p className="font-serif text-sm text-ink-primary">Reserve a table</p>
    </div>
  ),
  "saas-design": (
    <div className="p-3 grid grid-cols-3 gap-2">
      {[
        ["Revenue", "$42.8k"],
        ["Active", "2,847"],
        ["Growth", "+24%"],
      ].map(([label, value]) => (
        <div key={label} className="rounded-lg bg-bg-elevated border border-border-subtle p-2">
          <p className="text-[8px] uppercase text-ink-muted">{label}</p>
          <p className="text-xs font-semibold text-ink-primary">{value}</p>
        </div>
      ))}
    </div>
  ),
};

export default function Services() {
  return (
    <section id="services" className="space-y-10">
      <SectionHeader
        eyebrow="What we do"
        title="Six disciplines. One studio."
        description="Design, engineering, and platform admin on the same team."
      />

      <RevealStagger className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {services.map((service) => (
          <RevealItem key={service.slug}>
            <MagneticCard className="h-full">
              <Link
                to={`/services/${service.slug}`}
                className="group block h-full rounded-2xl bg-bg-surface border border-border-subtle overflow-hidden hover:border-accent-soft hover:shadow-soft transition-all"
              >
                <div className="border-b border-border-subtle bg-bg min-h-[120px]">
                  {previews[service.slug] ?? (
                    <div className="p-4 text-xs text-ink-muted">{service.name} preview</div>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="text-sm font-semibold text-ink-primary mb-2 group-hover:text-accent-soft transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-xs text-ink-secondary leading-relaxed">
                    {service.shortDescription}
                  </p>
                </div>
              </Link>
            </MagneticCard>
          </RevealItem>
        ))}
      </RevealStagger>
    </section>
  );
}
