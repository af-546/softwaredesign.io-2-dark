import PageHero from "../components/ui/PageHero";
import Reveal from "../components/ui/Reveal";
import { site } from "../data/site";

const sections = [
  {
    title: "Overview",
    body: `SoftwareDesign.io ("we," "us," "our") respects your privacy. This policy explains what information we collect, how we use it, and the choices you have. We don't sell your data, and we collect only what we need to communicate with you and run our business.`,
  },
  {
    title: "What we collect & how we use it",
    body: "When you fill out our contact form, we collect your name, email address, company name (if provided), and the message you send. We use this information to respond to your inquiry and communicate about a potential or active engagement. We don't sell or share your data with third parties for marketing.",
  },
  {
    title: "Analytics & cookies",
    body: "We use privacy-respecting analytics to understand how visitors use the site. This gives us aggregate data — page views, browser type, country — but does not identify individual users. We use minimal essential cookies for basic site functionality.",
  },
  {
    title: "Your rights & contact",
    body: `You can request access to any personal information we have about you, request corrections, or request deletion at any time. Questions about this policy? Email ${site.email}.`,
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="How we collect, use, and protect your information."
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
