import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { services } from "../../data/services";
import MagneticButton from "../ui/MagneticButton";

const navLinks = [
  { label: "Work", to: "/work" },
  { label: "About", to: "/about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur bg-bg/80 border-b border-border-subtle"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-xl bg-accent-subtle border border-accent-soft shadow-glow flex items-center justify-center">
            <span className="font-mono text-xs text-accent">SD</span>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold tracking-tight text-ink-primary">
              SoftwareDesign.io
            </span>
            <span className="text-xs text-ink-muted hidden sm:block">
              Software design that ships.
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-5 text-sm">
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              className="text-ink-muted hover:text-ink-primary transition-colors"
              aria-expanded={servicesOpen}
            >
              Services
            </button>
            {servicesOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-72">
                <div className="rounded-2xl border border-border-subtle bg-bg-surface p-2 shadow-soft">
                  {services.map((service) => (
                    <Link
                      key={service.slug}
                      to={`/services/${service.slug}`}
                      className="block rounded-xl px-4 py-3 hover:bg-bg-elevated transition-colors"
                    >
                      <p className="font-medium text-ink-primary">{service.name}</p>
                      <p className="text-xs text-ink-muted mt-0.5">
                        {service.shortDescription}
                      </p>
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
              className="text-ink-muted hover:text-ink-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}

          <Link
            to="/#process"
            className="text-ink-muted hover:text-ink-primary transition-colors"
          >
            Process
          </Link>

          <MagneticButton to="/contact" className="!px-4 !py-1.5 !text-xs">
            Start a project
          </MagneticButton>
        </nav>

        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center rounded-full border border-border-subtle bg-bg-surface/80 px-3 py-1.5 text-xs text-ink-muted"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border-subtle bg-bg/95 max-h-[80vh] overflow-y-auto">
          <div className="mx-auto max-w-6xl px-4 py-3 flex flex-col gap-2 text-sm">
            <p className="text-[10px] uppercase tracking-wider text-ink-muted pt-1">Services</p>
            {services.map((service) => (
              <Link
                key={service.slug}
                to={`/services/${service.slug}`}
                className="text-ink-muted hover:text-ink-primary transition-colors pl-2"
              >
                {service.name}
              </Link>
            ))}
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-ink-muted hover:text-ink-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/#process"
              className="text-ink-muted hover:text-ink-primary transition-colors"
            >
              Process
            </Link>
            <div className="pt-2">
              <MagneticButton to="/contact" className="!text-xs">
                Start a project
              </MagneticButton>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
