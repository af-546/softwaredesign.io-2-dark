import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { services } from "../../data/services";
import SectionHeader from "../ui/SectionHeader";
import { MagneticCard, RevealItem, RevealStagger } from "../ui/Reveal";

const previews: Record<string, ReactNode> = {
  "web-design": (
    <div className="text-[10px] space-y-1 text-ink-muted">
      <p>Wood-fired Neapolitan pies</p>
      <div className="flex justify-between text-ink-secondary">
        <span>Margherita</span><span>$18</span>
      </div>
    </div>
  ),
  "saas-design": (
    <div className="grid grid-cols-2 gap-2 text-[10px]">
      <div><p className="text-ink-muted">REVENUE</p><p className="text-ink-primary font-semibold">$42.8k</p></div>
      <div><p className="text-ink-muted">ACTIVE</p><p className="text-ink-primary font-semibold">2,847</p></div>
    </div>
  ),
  "ui-ux": (
    <div className="flex gap-2 text-[8px] text-ink-muted uppercase tracking-wider">
      <span>Wireframe</span><span>·</span><span>Hi-Fi</span>
    </div>
  ),
  "product-design": (
    <div className="text-[10px] text-ink-muted space-y-1">
      <p>Q1 2026 · Discovery</p>
      <p>User research → Wireframes</p>
    </div>
  ),
  "salesforce-netsuite": (
    <div className="text-[10px] space-y-1">
      <div className="flex justify-between text-ink-secondary"><span>Acme Corp</span><span>$48K</span></div>
      <p className="text-ink-muted">Pipeline $171K</p>
    </div>
  ),
  "mobile-app-design": (
    <div className="text-[10px] text-ink-muted">
      <p>Linewise · 4.9 ★</p>
      <p className="text-accent-soft">Workflow automation</p>
    </div>
  ),
};

export default function Services() {
  return (
    <section id="services" className="space-y-12 md:space-y-16 py-12 md:py-16">
      <SectionHeader
        eyebrow="What we do"
        title={
          <>
            Six disciplines.{" "}
            <span className="text-accent-soft italic">One studio.</span>
          </>
        }
        description="Design, engineering, and platform admin on the same team."
      />

      <RevealStagger className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => (
          <RevealItem key={service.slug}>
            <MagneticCard>
              <Link
                to={`/services/${service.slug}`}
                className="group block rounded-2xl border border-border-subtle bg-bg-surface/70 p-6 hover:border-accent-soft/50 hover:shadow-soft transition-all h-full"
              >
                <div className="rounded-lg bg-bg-elevated p-4 mb-4 min-h-[80px]">
                  {previews[service.slug]}
                </div>
                <h3 className="font-serif text-xl font-semibold text-ink-primary group-hover:text-accent-soft transition-colors">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-ink-secondary leading-relaxed">
                  {service.tagline}
                </p>
              </Link>
            </MagneticCard>
          </RevealItem>
        ))}
      </RevealStagger>
    </section>
  );
}
