import { useEffect, useState } from "react";

const links = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Work", href: "#work" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur bg-bg/80 border-b border-border-subtle"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-xl bg-accent-subtle border border-accent-soft shadow-glow flex items-center justify-center">
            <span className="font-mono text-xs text-accent">SD</span>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold tracking-tight text-ink-primary">
              Softwaredesign.io
            </span>
            <span className="text-xs text-ink-muted">
              Design-driven web engineering
            </span>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-ink-muted hover:text-ink-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-4 px-4 py-1.5 rounded-full bg-accent text-xs font-semibold text-white shadow-glow hover:bg-accent-soft transition-all"
          >
            Start a project
          </a>
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
        <div className="md:hidden border-t border-border-subtle bg-bg/95">
          <div className="mx-auto max-w-6xl px-4 py-3 flex flex-col gap-2 text-sm">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-ink-muted hover:text-ink-primary transition-colors"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-2 inline-flex items-center justify-center rounded-full bg-accent px-4 py-1.5 text-xs font-semibold text-white shadow-glow hover:bg-accent-soft transition-all"
              onClick={() => setOpen(false)}
            >
              Start a project
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
