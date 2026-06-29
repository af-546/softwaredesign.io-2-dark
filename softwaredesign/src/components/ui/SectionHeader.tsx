import type { ReactNode } from "react";
import Reveal from "./Reveal";

type SectionHeaderProps = {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "";

  return (
    <Reveal className={`max-w-3xl ${alignClass}`}>
      <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent-soft mb-4">
        {eyebrow}
      </p>
      <h2 className="font-serif text-3xl md:text-4xl font-semibold text-ink-primary leading-tight tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base md:text-lg text-ink-secondary leading-relaxed">
          {description}
        </p>
      )}
    </Reveal>
  );
}
