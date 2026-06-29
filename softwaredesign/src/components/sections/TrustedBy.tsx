import { trustedLogos } from "../../data/site";
import SectionHeader from "../ui/SectionHeader";
import { RevealItem, RevealStagger } from "../ui/Reveal";

export default function TrustedBy() {
  return (
    <section className="py-12 md:py-16 border-y border-border-subtle">
      <SectionHeader
        eyebrow="Trusted by"
        title="Founders, operators, and product teams"
        align="center"
      />
      <RevealStagger className="mt-10 flex flex-wrap items-center justify-center gap-10 md:gap-12">
        {trustedLogos.map((logo) => (
          <RevealItem key={logo.name}>
            <img
              src={logo.src}
              alt={logo.name}
              className="h-8 md:h-12 w-auto max-w-[140px] object-contain grayscale brightness-200 opacity-60 hover:opacity-100 transition-opacity"
            />
          </RevealItem>
        ))}
      </RevealStagger>
    </section>
  );
}
