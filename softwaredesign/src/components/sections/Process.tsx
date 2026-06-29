import { processSteps } from "../../data/processSteps";
import SectionHeader from "../ui/SectionHeader";
import { MagneticCard } from "../ui/Reveal";
import Reveal from "../ui/Reveal";

export default function Process() {
  return (
    <section id="process" className="space-y-12 md:space-y-16 py-12 md:py-16">
      <SectionHeader
        eyebrow="How we work"
        title={
          <>
            A process built for{" "}
            <span className="text-accent-soft italic">shipping.</span>
          </>
        }
        description="Five phases with weekly updates and real users in the loop before code gets written. Same rhythm whether the engagement runs six weeks or six months."
      />

      <div className="relative">
        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 shimmer-line" />

        <div className="space-y-12 md:space-y-24 lg:space-y-32">
          {processSteps.map((step, i) => {
            const isLeft = i % 2 === 0;
            return (
              <Reveal key={step.number} delay={i * 0.05}>
                <div
                  className={`lg:grid lg:grid-cols-2 lg:gap-12 items-center ${
                    isLeft ? "" : "lg:direction-rtl"
                  }`}
                >
                  <div
                    className={`${isLeft ? "lg:pr-10 lg:text-right" : "lg:col-start-2 lg:pl-10 lg:row-start-1"} mb-6 lg:mb-0`}
                  >
                    <MagneticCard
                      className={`rounded-2xl border border-border-subtle bg-bg-surface/80 p-6 md:p-8 hover:border-accent-soft/40 transition-colors ${
                        isLeft ? "lg:ml-auto lg:max-w-md" : "lg:max-w-md"
                      }`}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <span className="font-mono text-sm text-accent-soft">{step.number}</span>
                        <span className="text-xs text-ink-muted">{step.duration}</span>
                      </div>
                      <h3 className="font-serif text-2xl font-semibold text-ink-primary">
                        {step.title}
                      </h3>
                      <p className="mt-3 text-sm text-ink-secondary leading-relaxed">
                        {step.description}
                      </p>
                    </MagneticCard>
                  </div>

                  <div
                    className={`hidden lg:flex items-center justify-center ${
                      isLeft ? "lg:col-start-2 lg:row-start-1" : "lg:col-start-1"
                    }`}
                  >
                    <div className="relative z-10 h-4 w-4 rounded-full bg-accent-soft border-4 border-bg shadow-glow" />
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
