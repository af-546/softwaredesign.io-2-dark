export type Service = {
  slug: string;
  name: string;
  shortDescription: string;
  heroHeadline: string;
  heroSub: string;
  deliverables: { title: string; description: string }[];
  process: { step: string; title: string; description: string }[];
  faqs: { question: string; answer: string }[];
};

export const services: Service[] = [
  {
    slug: "web-design",
    name: "Web Design",
    shortDescription:
      "Websites for restaurants, retailers, and local businesses.",
    heroHeadline: "Websites that work as hard as you do.",
    heroSub:
      "Custom websites for restaurants, retailers, and modern merchants. Built to convert. Built to last.",
    deliverables: [
      {
        title: "Discovery & strategy",
        description:
          "Goals, target customer, competitive landscape. We define what success looks like before a single pixel is drawn.",
      },
      {
        title: "Brand & visual direction",
        description:
          "Mood boards, typography, color, photography direction. Your site should look like nobody else's.",
      },
      {
        title: "Custom design",
        description:
          "Every layout custom-designed. No templates. No theme retreads.",
      },
      {
        title: "Responsive build",
        description:
          "Production-grade React or Webflow. Mobile-first. Built to load fast on every device.",
      },
      {
        title: "SEO foundation",
        description:
          "Schema markup, meta tags, sitemap, performance optimization. Built to rank from day one.",
      },
      {
        title: "Launch & handoff",
        description:
          "DNS, hosting, monitoring. Plus a written handoff doc and a 30-day post-launch support window.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Discover",
        description:
          "One week of stakeholder interviews, customer research, and competitive analysis.",
      },
      {
        step: "02",
        title: "Design",
        description:
          "Two to three weeks of visual direction, wireframes, and high-fidelity comps.",
      },
      {
        step: "03",
        title: "Build",
        description:
          "Two to three weeks of production code. Weekly demo calls. You see progress as it happens.",
      },
      {
        step: "04",
        title: "Launch",
        description:
          "Final QA, performance pass, accessibility audit. Then we ship.",
      },
    ],
    faqs: [
      {
        question: "Do you use WordPress or Webflow?",
        answer:
          "Depends on the project. For SMBs that need to update content frequently, Webflow or React is usually the right call.",
      },
      {
        question: "Can you migrate my existing site?",
        answer:
          "Yes. We handle redirects, SEO preservation, and content migration as part of the engagement.",
      },
    ],
  },
  {
    slug: "saas-design",
    name: "SaaS Design",
    shortDescription:
      "Dashboards and product surfaces that feel as good as they perform.",
    heroHeadline: "Product surfaces that feel as good as they perform.",
    heroSub:
      "From early-stage MVPs to mature platform redesigns. We design SaaS products that users actually want to use.",
    deliverables: [
      {
        title: "Product audit",
        description:
          "Walk-throughs with current users, heuristic evaluation, jobs-to-be-done analysis.",
      },
      {
        title: "Information architecture",
        description:
          "Sitemap, navigation patterns, mental model. The bones before the skin.",
      },
      {
        title: "Design system",
        description:
          "Tokens, components, patterns. Documented in Figma and ready for engineering.",
      },
      {
        title: "Core flows redesigned",
        description:
          "Onboarding, primary workflows, settings. Every screen, every state.",
      },
      {
        title: "Engineering handoff",
        description:
          "Specs, component documentation, dev-ready exports. We work with your engineering team.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Audit",
        description:
          "Existing product walkthrough, user interviews, analytics review.",
      },
      {
        step: "02",
        title: "Strategy",
        description:
          "Information architecture, design principles, success metrics.",
      },
      {
        step: "03",
        title: "Design",
        description:
          "Design system, core flows, prototype, validate with users.",
      },
      {
        step: "04",
        title: "Handoff",
        description:
          "Engineering specs, ongoing design support during build.",
      },
    ],
    faqs: [
      {
        question: "Do you work with existing engineering teams?",
        answer:
          "Yes. We pair with in-house teams and integrate into your sprint cadence.",
      },
    ],
  },
  {
    slug: "ui-ux",
    name: "UI/UX",
    shortDescription:
      "Research, wireframes, prototypes, and design systems.",
    heroHeadline: "Research-driven design. Built in Figma.",
    heroSub:
      "User research, wireframes, high-fidelity prototypes, and design systems for teams that need clarity before code.",
    deliverables: [
      {
        title: "User research",
        description: "Interviews, usability tests, and synthesis that drives decisions.",
      },
      {
        title: "Wireframes & flows",
        description: "Low-fidelity exploration of structure before visual polish.",
      },
      {
        title: "High-fidelity prototypes",
        description: "Interactive prototypes with real content and motion.",
      },
      {
        title: "Design system",
        description: "Reusable components, tokens, and documentation.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Research",
        description: "Discover the problem before designing the solution.",
      },
      {
        step: "02",
        title: "Sketch",
        description: "Low-fidelity wireframes. Explore many paths cheap and fast.",
      },
      {
        step: "03",
        title: "Refine",
        description: "High-fidelity design. Real content. Real interactions.",
      },
      {
        step: "04",
        title: "Validate",
        description: "Test with users. Refine based on what we learn.",
      },
    ],
    faqs: [],
  },
  {
    slug: "product-design",
    name: "Product Design",
    shortDescription:
      "Strategy and design for new products and major redesigns.",
    heroHeadline: "End-to-end product thinking.",
    heroSub:
      "Discovery through launch for new products and major redesigns. Strategy, UX, UI, and handoff in one team.",
    deliverables: [
      {
        title: "Product strategy",
        description: "Problem framing, success metrics, and roadmap alignment.",
      },
      {
        title: "Experience design",
        description: "Flows, screens, and prototypes for core product journeys.",
      },
      {
        title: "Visual design",
        description: "Brand-aligned UI with a scalable design system.",
      },
      {
        title: "Launch support",
        description: "QA on design implementation and post-launch iteration.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Frame",
        description: "What problem are we solving and for whom?",
      },
      {
        step: "02",
        title: "Explore",
        description: "Many directions. Many sketches. Many prototypes.",
      },
      {
        step: "03",
        title: "Refine",
        description: "Converge on the best path. Make it production-ready.",
      },
      {
        step: "04",
        title: "Ship",
        description: "Launch. Measure. Iterate.",
      },
    ],
    faqs: [],
  },
  {
    slug: "salesforce-netsuite-admin",
    name: "Salesforce & NetSuite Admin",
    shortDescription:
      "Configuration, workflows, integrations, and ongoing admin.",
    heroHeadline: "CRM and ERP that actually match how you sell.",
    heroSub:
      "Salesforce and NetSuite configuration, workflow automation, integrations, and ongoing admin support.",
    deliverables: [
      {
        title: "Org audit",
        description: "Current-state review of objects, fields, flows, and permissions.",
      },
      {
        title: "Workflow design",
        description: "Pipeline stages, automations, and approval paths that fit your team.",
      },
      {
        title: "Integrations",
        description: "Connect CRM, ERP, marketing, and finance systems reliably.",
      },
      {
        title: "Training & docs",
        description: "Team training and documentation for ongoing operations.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Discover",
        description:
          "Audit the current org, map workflows, and define what success looks like.",
      },
      {
        step: "02",
        title: "Configure",
        description:
          "Build objects, fields, flows, and permissions in a sandbox first.",
      },
      {
        step: "03",
        title: "Integrate",
        description:
          "Connect systems, migrate data, and validate end-to-end before go-live.",
      },
      {
        step: "04",
        title: "Hand off",
        description:
          "Deploy to production, train your team, and document everything.",
      },
    ],
    faqs: [],
  },
  {
    slug: "mobile-app-design",
    name: "Mobile App Design",
    shortDescription: "iOS and Android, native or cross-platform.",
    heroHeadline: "iOS and Android. Designed for the platforms they live on.",
    heroSub:
      "Native-feeling mobile experiences with research, prototypes, and engineering-ready handoff.",
    deliverables: [
      {
        title: "Platform strategy",
        description: "iOS, Android, or cross-platform recommendations based on your users.",
      },
      {
        title: "Mobile UX flows",
        description: "Onboarding, core loops, and settings designed for thumbs.",
      },
      {
        title: "Visual design & motion",
        description: "High-fidelity screens with interaction specs and motion guidelines.",
      },
      {
        title: "App store assets",
        description: "Screenshots, preview flows, and store listing support.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Discover",
        description: "Target users, platform decisions, feature set.",
      },
      {
        step: "02",
        title: "Design",
        description: "Wireframes, visual design, prototypes, motion.",
      },
      {
        step: "03",
        title: "Test",
        description: "Real-device prototype testing. Refine based on feedback.",
      },
      {
        step: "04",
        title: "Ship",
        description: "Engineering handoff, app store assets, launch support.",
      },
    ],
    faqs: [],
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
