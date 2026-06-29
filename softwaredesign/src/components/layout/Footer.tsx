import { Link } from "react-router-dom";
import { site } from "../../data/site";
import { services } from "../../data/services";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-border-subtle bg-bg-surface/50">
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <Link to="/" className="font-serif text-lg font-semibold text-ink-primary">
              {site.name}
            </Link>
            <p className="mt-4 text-sm text-ink-secondary leading-relaxed max-w-sm">
              {site.description}
            </p>
            <p className="mt-4 text-sm text-ink-muted">
              {site.address.street}
              <br />
              {site.address.city}
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-ink-muted mb-4">
              Services
            </p>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    to={`/services/${service.slug}`}
                    className="text-sm text-ink-secondary hover:text-accent-soft transition-colors"
                  >
                    {service.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-ink-muted mb-4">
              Studio
            </p>
            <ul className="space-y-2">
              <li>
                <Link to="/work" className="text-sm text-ink-secondary hover:text-accent-soft transition-colors">
                  Work
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-ink-secondary hover:text-accent-soft transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-ink-secondary hover:text-accent-soft transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-sm text-ink-secondary hover:text-accent-soft transition-colors">
                  Privacy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-sm text-ink-secondary hover:text-accent-soft transition-colors">
                  Terms
                </Link>
              </li>
            </ul>
            <p className="mt-6 text-sm text-ink-muted">
              <a href={`mailto:${site.email}`} className="hover:text-accent-soft transition-colors">
                {site.email}
              </a>
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border-subtle flex flex-col md:flex-row justify-between gap-4 text-xs text-ink-muted">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>{site.hours.label} · {site.hours.time}</p>
        </div>
      </div>
    </footer>
  );
}
