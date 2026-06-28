import { motion } from "framer-motion";
import { processSteps } from "../../data/processSteps";
import SectionHeader from "../ui/SectionHeader";
import { MagneticCard } from "../ui/Reveal";

export default function Process() {
  return (
    <section id="process" className="space-y-12 md:space-y-16">
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
        <div
          className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 shimmer-line"
          aria-hidden="true"
        />
        <div
          className="lg:hidden absolute left-4 top-0 bottom-0 w-px shimmer-line"
          aria-hidden="true"
        />

        <div className="space-y-8 lg:space-y-14">
          {processSteps.map((step, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div
                key={step.number}
                className="relative lg:grid lg:grid-cols-2 lg:gap-12 items-center"
              >
                <motion.div
                  initial={{ opacity: 0, x: isLeft ? -36 : 36 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
                  className={`pl-10 lg:pl-0 ${
                    isLeft ? "lg:col-start-1 lg:pr-10" : "lg:col-start-2 lg:pl-10"
                  }`}
                >
                  <MagneticCard className="rounded-2xl bg-bg-surface border border-border-subtle p-6 shadow-soft hover:border-accent-soft/60 transition-colors">
                    <div className="absolute lg:hidden -left-[1.35rem] top-6 h-3 w-3 rounded-full bg-accent border-4 border-bg shadow-glow" />
                    <div className="inline-flex items-center gap-2 mb-3">
                      <span className="font-mono text-xs font-medium text-accent-soft">
                        {step.number}
                      </span>
                      <span className="font-mono text-[10px] text-ink-muted">
                        {step.duration}
                      </span>
                    </div>
                    <h3
                      className={`text-lg font-semibold ${
                        step.accent ? "text-accent-soft" : "text-ink-primary"
                      }`}
                    >
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm text-ink-secondary leading-relaxed">
                      {step.description}
                    </p>
                  </MagneticCard>
                </motion.div>

                <div
                  className={`hidden lg:block ${
                    isLeft ? "lg:col-start-2" : "lg:col-start-1 lg:row-start-1"
                  }`}
                  aria-hidden="true"
                >
                  <div className="flex justify-center">
                    <div className="h-4 w-4 rounded-full bg-accent border-4 border-bg shadow-glow" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
