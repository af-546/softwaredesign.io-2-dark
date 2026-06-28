import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MagneticButton from "../ui/MagneticButton";
import Reveal from "../ui/Reveal";

const slides = [
  {
    domain: "northshoreroofing.com",
    headline: "Slate. Copper.",
    subhead: "Craftsmanship.",
    body: "Boston's North Shore specialty roofing contractor.",
    cta: "Request a quote",
    tags: ["Slate roofing", "Copper work", "Restoration"],
    accent: "from-amber-900/40 to-slate-800/60",
  },
  {
    domain: "brewlab.coffee",
    headline: "BREWLAB",
    subhead: "Origin: Ethiopia",
    body: "Single Origin · Light roast · $24.00",
    cta: "Add to cart",
    tags: ["Espresso blend", "Brazil + Colombia", "$22.00"],
    accent: "from-stone-800/60 to-amber-950/40",
  },
  {
    domain: "linewise.app",
    headline: "Linewise",
    subhead: "Active workflows",
    body: "247 active · 42 queued · 98% success",
    cta: "View dashboard",
    tags: ["Dashboard", "Workflows", "Reports"],
    accent: "from-indigo-950/50 to-bg-elevated",
  },
];

export default function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 4500);
    return () => window.clearInterval(timer);
  }, []);

  const slide = slides[active];

  return (
    <section
      id="hero"
      className="relative grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] items-center pt-4"
    >
      <div className="pointer-events-none absolute -top-32 -left-24 h-72 w-72 rounded-full bg-accent-subtle blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 right-0 h-80 w-80 rounded-full bg-accent-subtle blur-3xl" />

      <Reveal className="space-y-6 relative z-10">
        <p className="text-xs font-semibold tracking-[0.25em] uppercase text-accent-soft">
          Boston-based design studio
        </p>
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-ink-primary leading-[1.05]">
          Software design that ships.
        </h1>
        <p className="text-base md:text-lg text-ink-secondary max-w-xl leading-relaxed">
          We design and ship software for small businesses and SaaS teams. From
          landing pages to full product redesigns.
        </p>

        <div className="flex flex-wrap items-center gap-3">
          <MagneticButton to="/contact">Start a project</MagneticButton>
          <MagneticButton to="/work" variant="secondary">
            See our work
          </MagneticButton>
        </div>
      </Reveal>

      <Reveal delay={0.12} className="relative z-10">
        <motion.div
          className="rounded-3xl border border-border-subtle bg-bg-surface shadow-soft overflow-hidden"
          whileHover={{ y: -4 }}
          transition={{ type: "spring", stiffness: 260, damping: 22 }}
        >
          <div className="flex items-center gap-1 px-4 py-3 border-b border-border-subtle bg-bg">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
            <span className="ml-3 text-[11px] text-ink-muted font-mono">
              {slide.domain}
            </span>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={slide.domain}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.45, ease: [0.32, 0.72, 0, 1] }}
              className={`p-6 md:p-8 min-h-[280px] bg-gradient-to-br ${slide.accent}`}
            >
              <p className="text-[11px] uppercase tracking-[0.2em] text-ink-muted mb-3">
                Featured project
              </p>
              <h2 className="font-serif text-2xl md:text-3xl text-ink-primary">
                {slide.headline}
              </h2>
              <p className="font-serif text-xl md:text-2xl text-ink-secondary mt-1">
                {slide.subhead}
              </p>
              <p className="text-sm text-ink-secondary mt-4 max-w-sm">{slide.body}</p>
              <MagneticButton variant="primary" className="mt-6 !px-4 !py-2 !text-xs">
                {slide.cta} →
              </MagneticButton>
              <div className="mt-6 flex flex-wrap gap-2">
                {slide.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border-subtle bg-bg/50 px-3 py-1 text-[10px] uppercase tracking-wider text-ink-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        <div className="mt-4 flex items-center justify-center gap-2">
          {slides.map((item, index) => (
            <button
              key={item.domain}
              type="button"
              aria-label={`Show ${item.domain}`}
              onClick={() => setActive(index)}
              className={`h-2 rounded-full transition-all ${
                index === active
                  ? "w-8 bg-accent-soft"
                  : "w-2 bg-bg-elevated hover:bg-ink-muted"
              }`}
            />
          ))}
        </div>
      </Reveal>
    </section>
  );
}
