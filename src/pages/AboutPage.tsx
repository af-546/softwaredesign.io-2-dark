import Reveal from "../components/ui/Reveal";
import PageHero from "../components/ui/PageHero";
import { MagneticCard, RevealItem, RevealStagger } from "../components/ui/Reveal";
import { site } from "../data/site";

const principles = [
  {
    number: "01",
    title: "Craft over volume",
    description:
      "We take fewer projects than we could and put more time into each. The math works out better for everyone.",
  },
  {
    number: "02",
    title: "Weekly demos",
    description:
      "Every Friday you see what we built that week. No big reveals at the end of phases. No surprises at handoff.",
  },
  {
    number: "03",
    title: "Real research, every time",
    description:
      "No assumptions about users we haven't talked to. We conduct user research and testing throughout the project.",
  },
  {
    number: "04",
    title: "Design and engineering, together",
    description:
      "Our designers know HTML. Our engineers care about typography. The handoff between them is a non-event.",
  },
  {
    number: "05",
    title: "Honest scope and pricing",
    description:
      "Quotes are real. Scope creep gets surfaced immediately. Change orders happen in conversation, not in invoices.",
  },
  {
    number: "06",
    title: "Boston-based. Nationally trusted.",
    description: `We're at ${site.address.street}, Boston. Most clients have never been to our office. Both things are true.`,
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About the studio"
        title={
          <>
            A small studio, obsessed with the craft of{" "}
            <span className="text-accent-soft italic">shipping software.</span>
          </>
        }
        description="We're a Boston-based design studio of designers, researchers, and engineers. We work with founders, product teams, and operators who care about the difference between work that's done and work that's right."
      />

      <section className="py-16 md:py-24">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent-soft mb-4">
              Our story
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-ink-primary leading-tight">
              Founded on the belief that great software is{" "}
              <span className="text-accent-soft italic">designed</span>, not assembled.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="space-y-5 text-base text-ink-secondary leading-relaxed">
            <p>
              SoftwareDesign.io started as a reaction to agencies that sell process decks
              instead of shipped work. We built a studio where strategy, design, and
              engineering sit at the same table from day one.
            </p>
            <p>
              Today we partner with SMBs and SaaS teams who need a product surface that
              feels premium, performs under load, and ships on a timeline that respects
              their runway.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <Reveal className="mb-10">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent-soft mb-4">
            How we operate
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-ink-primary">
            Principles we won't compromise on.
          </h2>
        </Reveal>
        <RevealStagger className="grid md:grid-cols-2 gap-6">
          {principles.map((item) => (
            <RevealItem key={item.number}>
              <MagneticCard className="rounded-2xl bg-bg-surface border border-border-subtle p-6 h-full hover:border-accent-soft/60 transition-colors">
                <span className="font-mono text-xs text-accent-soft">{item.number}</span>
                <h3 className="mt-2 text-lg font-semibold text-ink-primary">{item.title}</h3>
                <p className="mt-2 text-sm text-ink-secondary leading-relaxed">
                  {item.description}
                </p>
              </MagneticCard>
            </RevealItem>
          ))}
        </RevealStagger>
      </section>
    </>
  );
}
