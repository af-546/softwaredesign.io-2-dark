export type CaseStudy = {
  slug: string;
  client: string;
  category: string;
  services: string[];
  year: string;
  duration: string;
  industry: string;
  headline: string;
  outcome: string;
  challenge: string;
  approach: string;
  result: string;
  metrics: { label: string; value: string }[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "brewlab-coffee",
    client: "BrewLab Coffee",
    category: "Web Design",
    services: ["Web Design"],
    year: "2025",
    duration: "6 weeks",
    industry: "Food & Beverage / E-commerce",
    headline:
      "Custom Shopify storefront for a Boston-based specialty coffee roaster.",
    outcome: "34% lift in checkout conversion in 60 days.",
    challenge:
      "BrewLab had outgrown their off-the-shelf Shopify theme. Mobile conversion was lagging desktop, the brand had matured beyond what the template could express, and the team wanted custom product pages that told the origin story behind each bean.",
    approach:
      "We started with a one-week discovery — analyzed checkout funnel data, interviewed repeat customers, and audited the existing site against competitors. We redesigned the shopping experience around custom product pages with origin storytelling and a streamlined mobile checkout.",
    result:
      "Within 60 days of launch, mobile checkout conversion rose 41%. Desktop rose 28%. Overall checkout conversion lifted 34% blended. Average order value increased 12% from cross-sell improvements.",
    metrics: [
      { label: "Checkout conversion", value: "+34%" },
      { label: "Mobile conversion", value: "+41%" },
      { label: "Average order value", value: "+12%" },
      { label: "Time to launch", value: "6 weeks" },
    ],
  },
  {
    slug: "linewise",
    client: "Linewise",
    category: "SaaS Design",
    services: ["SaaS Design", "UI/UX"],
    year: "2025",
    duration: "10 weeks",
    industry: "B2B SaaS / Operations",
    headline:
      "Full dashboard redesign for a series-A workflow automation platform.",
    outcome: "Active user count grew 2.4× in three months post-launch.",
    challenge:
      "Linewise had product-market fit but the interface had grown organically over three years of feature additions. New users churned during onboarding at twice the industry rate. Power users had built elaborate workarounds for missing functionality.",
    approach:
      "Three weeks of research — user interviews split between new users and power users, full analytics audit, and shadowing sessions with customers. The redesign introduced progressive disclosure — a simple primary surface for new users, with power-user features one click deeper.",
    result:
      "Onboarding completion rate doubled. Time-to-first-action dropped from 14 minutes to 4. Active user count grew 2.4× in three months after launch. NPS went from 32 to 61.",
    metrics: [
      { label: "Active users", value: "2.4×" },
      { label: "Onboarding completion", value: "+102%" },
      { label: "Time to first action", value: "-71%" },
      { label: "NPS", value: "32 → 61" },
    ],
  },
  {
    slug: "northshore-roofing",
    client: "NorthShore Roofing",
    category: "Web Design",
    services: ["Web Design"],
    year: "2024",
    duration: "5 weeks",
    industry: "Construction / Local Services",
    headline:
      "Premium brand site for a specialty roofing contractor on Boston's North Shore.",
    outcome: "Quote requests up 48% in the first quarter after launch.",
    challenge:
      "NorthShore needed a site that communicated craftsmanship and trust — not another generic contractor template. Most competitors looked identical online despite doing very different work.",
    approach:
      "We built a scroll-driven landing experience with strong typography, project photography direction, and a quote flow optimized for mobile. Every section reinforced slate, copper, and restoration expertise.",
    result:
      "Quote requests increased 48% in Q1 post-launch. Mobile session duration increased 62%. The team reported higher-quality inbound leads with clearer project scope.",
    metrics: [
      { label: "Quote requests", value: "+48%" },
      { label: "Mobile session duration", value: "+62%" },
      { label: "Time to launch", value: "5 weeks" },
      { label: "Lead quality", value: "Higher intent" },
    ],
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}
