import { Link } from "react-router-dom";
import { site } from "../../data/site";

export default function Footer() {
  return (
    <footer className="mt-8 border-t border-border-subtle bg-bg-surface/70">
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8 py-10">
        <div className="grid md:grid-cols-[1.2fr_1fr_1fr] gap-8 mb-8">
          <div className="space-y-3">
            <p className="text-sm font-semibold text-ink-primary">{site.name}</p>
            <p className="text-sm text-ink-secondary leading-relaxed max-w-sm">
              {site.description}
            </p>
          </div>
          <div className="space-y-2 text-sm text-ink-secondary">
            <p className="text-xs uppercase tracking-wider text-ink-muted">Contact</p>
            <a
              href={`mailto:${site.email}`}
              className="block hover:text-ink-primary transition-colors"
            >
              {site.email}
            </a>
            <p>{site.address.street}</p>
            <p>{site.address.city}</p>
          </div>
          <div className="space-y-2 text-sm text-ink-secondary">
            <p className="text-xs uppercase tracking-wider text-ink-muted">Explore</p>
            <Link to="/work" className="block hover:text-ink-primary transition-colors">
              Work
            </Link>
            <Link to="/about" className="block hover:text-ink-primary transition-colors">
              About
            </Link>
            <Link to="/contact" className="block hover:text-ink-primary transition-colors">
              Contact
            </Link>
            <Link to="/privacy" className="block hover:text-ink-primary transition-colors">
              Privacy
            </Link>
            <Link to="/terms" className="block hover:text-ink-primary transition-colors">
              Terms
            </Link>
          </div>
        </div>
        <div className="pt-6 border-t border-border-subtle flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-ink-muted">
          <span>&copy; {new Date().getFullYear()} {site.name}. All rights reserved.</span>
          <span>Boston, MA · Insured &amp; bonded</span>
        </div>
      </div>
    </footer>
  );
}
