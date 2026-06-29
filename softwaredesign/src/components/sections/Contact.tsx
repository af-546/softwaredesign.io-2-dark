import { Link } from "react-router-dom";
import { site } from "../../data/site";
import SectionHeader from "../ui/SectionHeader";
import MagneticButton from "../ui/MagneticButton";
import Reveal from "../ui/Reveal";

export default function Contact() {
  return (
    <section id="contact" className="py-12 md:py-16">
      <div className="rounded-3xl border border-border-subtle bg-bg-surface/70 p-8 md:p-12 mesh-bg">
        <SectionHeader
          eyebrow="Ready to start?"
          title={
            <>
              Software designed{" "}
              <span className="text-accent-soft italic">right.</span>
            </>
          }
          description="Tell us about the project and get concrete next steps — not a pitch."
        />

        <Reveal className="mt-8 flex flex-col sm:flex-row gap-4">
          <MagneticButton
            href={`mailto:${site.email}`}
            className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-medium text-white hover:bg-accent-soft transition-colors shadow-glow"
          >
            Book a call
          </MagneticButton>
          <a
            href={`mailto:${site.email}`}
            className="inline-flex items-center justify-center rounded-full border border-border-subtle px-6 py-3 text-sm font-medium text-ink-primary hover:border-accent-soft/50 transition-colors"
          >
            {site.email}
          </a>
        </Reveal>

        <Reveal className="mt-8 text-sm text-ink-muted" delay={0.1}>
          <p>
            {site.address.street}, {site.address.city}
          </p>
          <p className="mt-1">
            <Link to="/contact" className="text-accent-soft hover:underline">
              Full contact form →
            </Link>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
