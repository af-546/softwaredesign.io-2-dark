import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import MagneticButton from "../ui/MagneticButton";
import Reveal from "../ui/Reveal";
import TextReveal from "../ui/TextReveal";

const slides = [
  {
    id: "northshore",
    label: "NorthShore Roofing",
    content: (
      <div className="rounded-2xl border border-border-subtle bg-bg-surface p-6 space-y-4">
        <p className="text-xs text-ink-muted font-mono">northshoreroofing.com</p>
        <h3 className="font-serif text-2xl text-ink-primary">Slate. Copper. Craftsmanship.</h3>
        <p className="text-sm text-ink-secondary">
          Boston&apos;s North Shore specialty roofing contractor.
        </p>
        <div className="flex gap-2 flex-wrap">
          {["SLATE ROOFING", "COPPER WORK", "RESTORATION"].map((tag) => (
            <span key={tag} className="text-[10px] tracking-wider uppercase text-accent-soft border border-accent-soft/40 rounded-full px-2.5 py-1">
              {tag}
            </span>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "brewlab",
    label: "BrewLab Coffee",
    content: (
      <div className="rounded-2xl border border-border-subtle bg-gradient-to-br from-amber-900/40 to-amber-950/40 p-6 space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-xs font-mono text-ink-muted">9:41</span>
          <span className="font-serif text-lg text-ink-primary">BREWLAB</span>
        </div>
        <div className="space-y-2">
          <p className="text-xs text-accent-soft uppercase tracking-wider">Origin: Ethiopia</p>
          <p className="font-serif text-xl text-ink-primary">Single Origin Ethiopia</p>
          <p className="text-sm text-ink-secondary">Light roast · $24.00</p>
        </div>
        <button type="button" className="w-full rounded-full bg-accent py-2.5 text-sm font-medium text-white">
          Add to cart
        </button>
      </div>
    ),
  },
  {
    id: "linewise",
    label: "Linewise",
    content: (
      <div className="rounded-2xl border border-border-subtle bg-bg-elevated p-6 space-y-4">
        <div className="flex justify-between items-center border-b border-border-subtle pb-3">
          <span className="font-serif text-lg text-ink-primary">Linewise</span>
          <span className="text-xs text-ink-muted">AC</span>
        </div>
        <div className="grid grid-cols-3 gap-3 text-center">
          <div>
            <p className="text-2xl font-semibold text-ink-primary">247</p>
            <p className="text-[10px] text-ink-muted uppercase tracking-wider">Active</p>
          </div>
          <div>
            <p className="text-2xl font-semibold text-ink-primary">42</p>
            <p className="text-[10px] text-ink-muted uppercase tracking-wider">Queued</p>
          </div>
          <div>
            <p className="text-2xl font-semibold text-emerald-400/80">98%</p>
            <p className="text-[10px] text-ink-muted uppercase tracking-wider">Success</p>
          </div>
        </div>
      </div>
    ),
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative grid gap-10 lg:grid-cols-[1.4fr_1fr] items-center min-h-[60vh] py-8 md:py-16">
      <div className="pointer-events-none absolute -top-32 -left-24 h-72 w-72 rounded-full bg-accent-subtle blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 right-0 h-80 w-80 rounded-full bg-accent-subtle blur-3xl" />

      <Reveal className="space-y-6 relative z-10">
        <p className="text-xs font-semibold tracking-[0.25em] uppercase text-accent-soft">
          Boston-based design studio
        </p>
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-ink-primary leading-[1.05] tracking-tight">
          <TextReveal text="Software design that ships." />
        </h1>
        <p className="text-base md:text-lg text-ink-secondary leading-relaxed max-w-xl">
          We design and ship software for small businesses and SaaS teams. From landing pages to full product redesigns.
        </p>
        <div className="flex flex-wrap gap-4 pt-2">
          <MagneticButton
            to="/contact"
            className="inline-flex items-center rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white hover:bg-accent-soft transition-colors shadow-glow"
          >
            Start a project
          </MagneticButton>
          <MagneticButton
            to="/work"
            className="inline-flex items-center rounded-full border border-border-subtle px-5 py-2.5 text-sm font-medium text-ink-primary hover:border-accent-soft/50 transition-colors"
          >
            See our work
          </MagneticButton>
        </div>
      </Reveal>

      <Reveal className="relative z-10" delay={0.15}>
        <div className="relative min-h-[280px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={slides[index].id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
            >
              {slides[index].content}
            </motion.div>
          </AnimatePresence>
          <div className="flex gap-2 mt-4 justify-center">
            {slides.map((slide, i) => (
              <button
                key={slide.id}
                type="button"
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition-all ${
                  i === index ? "w-8 bg-accent-soft" : "w-2 bg-ink-muted/40"
                }`}
                aria-label={`Show ${slide.label}`}
              />
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
