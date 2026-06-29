import type { ReactNode } from "react";
import Reveal from "./Reveal";

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  description: string;
};

export default function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative -mx-4 md:-mx-6 lg:-mx-8 px-4 md:px-6 lg:px-8 pt-8 pb-16 md:pb-20 mesh-bg border-b border-border-subtle">
      <Reveal className="max-w-4xl">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent-soft mb-6">
          {eyebrow}
        </p>
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-ink-primary leading-[1.05] tracking-tight">
          {title}
        </h1>
        <p className="mt-8 text-base md:text-lg text-ink-secondary leading-relaxed max-w-3xl">
          {description}
        </p>
      </Reveal>
    </section>
  );
}
