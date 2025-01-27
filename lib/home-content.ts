export type ShowcaseCategory = "ai" | "fullstack";

export type ShowcaseGallerySlide = {
  id: string;
  src: string;
  alt: string;
};

export type HomeShowcaseProject = {
  id: string;
  name: string;
  subtitle: string;
  categories: ShowcaseCategory[];
  impactBadge: string;
  badges: string[];
  highlights: string[];
  liveUrl: string;
  gallerySlides: ShowcaseGallerySlide[];
};

export const SHOWCASE_FILTER_TABS = [
  { id: "all" as const, label: "All Work" },
  { id: "ai" as const, label: "AI & Product" },
  { id: "fullstack" as const, label: "Full-Stack & Cloud" },
];

export type ShowcaseFilterId = (typeof SHOWCASE_FILTER_TABS)[number]["id"];

export const HOME_SHOWCASE_PROJECTS: HomeShowcaseProject[] = [
  {
    id: "bynder",
    name: "Bynder",
    subtitle: "Enterprise digital asset management (DAM)",
    categories: ["fullstack"],
    impactBadge: "Global marketing at scale",
    badges: ["React", "TypeScript", "Node.js", "SaaS", "Cloud"],
    highlights: [
      "Full-stack delivery on a cloud DAM platform used by global brands to manage, approve, and distribute creative assets.",
      "Built production features around workflows, integrations, and performance for high-traffic marketing teams.",
    ],
    liveUrl: "https://www.bynder.com/en/",
    gallerySlides: [
      {
        id: "bynder-hero",
        src: "/images/projects/bynder/hero.jpg",
        alt: "Bynder digital asset management platform preview",
      },
    ],
  },
  {
    id: "everbee",
    name: "Everbee",
    subtitle: "AI-powered ecommerce & print-on-demand growth",
    categories: ["ai", "fullstack"],
    impactBadge: "AI-driven storefronts",
    badges: ["React", "Node.js", "AI/LLM", "Ecommerce", "APIs"],
    highlights: [
      "Engineered full-stack product capabilities for sellers scaling print-on-demand and ecommerce workflows.",
      "Integrated AI-assisted merchandising and automation into customer-facing experiences on everbee.io.",
    ],
    liveUrl: "https://www.everbee.io/",
    gallerySlides: [
      {
        id: "everbee-hero",
        src: "/images/projects/everbee/hero.png",
        alt: "Everbee ecommerce and AI product preview",
      },
    ],
  },
  {
    id: "algocyte",
    name: "Algocyte",
    subtitle: "At-home clinical blood testing & health AI",
    categories: ["ai", "fullstack"],
    impactBadge: "Healthcare AI instrument",
    badges: ["AI/ML", "React", "TypeScript", "HealthTech", "IoT"],
    highlights: [
      "Contributed to a regulated health-tech platform pairing connected instruments with companion software and clinician dashboards.",
      "Delivered full-stack features supporting device workflows, results visibility, and production-grade UX on algocyte.ai.",
    ],
    liveUrl: "https://algocyte.ai/",
    gallerySlides: [
      {
        id: "algocyte-hero",
        src: "/images/projects/algocyte/hero.jpg",
        alt: "Algocyte Proxima instrument with companion app",
      },
      {
        id: "algocyte-proxima",
        src: "/images/projects/algocyte/proxima-array.jpg",
        alt: "Algocyte Proxima blood testing hardware detail",
      },
      {
        id: "algocyte-dashboard",
        src: "/images/projects/algocyte/dashboard.jpg",
        alt: "Algocyte clinical dashboard and instruments",
      },
    ],
  },
];
