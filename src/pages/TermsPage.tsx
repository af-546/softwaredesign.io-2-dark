import PageHero from "../components/ui/PageHero";
import Reveal from "../components/ui/Reveal";
import { site } from "../data/site";

const sections = [
  {
    title: "Agreement",
    body: "By accessing or using the SoftwareDesign.io website, you agree to these Terms of Service. If you do not agree, please do not use the site.",
  },
  {
    title: "Services",
    body: "SoftwareDesign.io provides design, engineering, and related consulting services under separate statements of work or proposals. Website content is for general information and does not constitute a binding offer.",
  },
  {
    title: "Intellectual property",
    body: "Unless otherwise agreed in writing, project deliverables and site content remain the property of their respective owners. You may not reproduce site materials without permission.",
  },
  {
    title: "Limitation of liability",
    body: "To the fullest extent permitted by law, SoftwareDesign.io is not liable for indirect, incidental, or consequential damages arising from use of this website.",
  },
  {
    title: "Contact",
    body: `Questions about these terms? Contact us at ${site.email}.`,
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of Service"
        description="The rules and expectations for using our website and services."
      />
      <section className="py-16 md:py-24 space-y-8 max-w-3xl">
        {sections.map((section, index) => (
          <Reveal key={section.title} delay={index * 0.05}>
            <h2 className="text-xl font-semibold text-ink-primary mb-3">{section.title}</h2>
            <p className="text-sm text-ink-secondary leading-relaxed">{section.body}</p>
          </Reveal>
        ))}
      </section>
    </>
  );
}
