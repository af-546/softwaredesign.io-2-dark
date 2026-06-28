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
  return (
    <Reveal className={`max-w-3xl space-y-4 ${align === "center" ? "mx-auto text-center" : ""}`}>
      <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent-soft">
        {eyebrow}
      </p>
      <h2 className="font-serif text-3xl md:text-4xl font-semibold text-ink-primary tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="text-base text-ink-secondary leading-relaxed">{description}</p>
      )}
    </Reveal>
  );
}
