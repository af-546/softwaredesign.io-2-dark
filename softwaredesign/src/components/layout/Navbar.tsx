import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { services } from "../../data/services";
import MagneticButton from "../ui/MagneticButton";

const navLinks = [
  { label: "Work", to: "/work" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? "bg-bg/95 backdrop-blur border-b border-border-subtle" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
        <div className="flex h-16 md:h-[4.5rem] items-center justify-between">
          <Link
            to="/"
            className="font-serif text-lg font-semibold text-ink-primary hover:text-accent-soft transition-colors"
          >
            SoftwareDesign.io
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                type="button"
                className="text-sm text-ink-secondary hover:text-ink-primary transition-colors flex items-center gap-1"
              >
                Services
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 pt-2 w-64">
                  <div className="rounded-xl border border-border-subtle bg-bg-surface/95 backdrop-blur p-2 shadow-soft">
                    {services.map((service) => (
                      <Link
                        key={service.slug}
                        to={`/services/${service.slug}`}
                        className="block rounded-lg px-3 py-2 text-sm text-ink-secondary hover:text-ink-primary hover:bg-bg-elevated transition-colors"
                      >
                        {service.shortTitle}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-sm text-ink-secondary hover:text-ink-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}

            <MagneticButton
              href="/contact"
              className="inline-flex items-center rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white hover:bg-accent-soft transition-colors shadow-glow"
            >
              Start a project
            </MagneticButton>
          </nav>

          <button
            type="button"
            className="md:hidden p-2 text-ink-secondary"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {mobileOpen && (
          <nav className="md:hidden pb-4 space-y-2 border-t border-border-subtle pt-4">
            <p className="text-xs font-semibold tracking-wider uppercase text-ink-muted px-2">Services</p>
            {services.map((service) => (
              <Link
                key={service.slug}
                to={`/services/${service.slug}`}
                className="block px-2 py-2 text-sm text-ink-secondary hover:text-ink-primary"
                onClick={() => setMobileOpen(false)}
              >
                {service.shortTitle}
              </Link>
            ))}
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="block px-2 py-2 text-sm text-ink-secondary hover:text-ink-primary"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="block mx-2 mt-2 text-center rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white"
              onClick={() => setMobileOpen(false)}
            >
              Start a project
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
