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
    id: "salesloft",
    name: "Salesloft",
    subtitle: "Sales engagement SaaS platform",
    categories: ["fullstack"],
    impactBadge: "Enterprise sales workflows",
    badges: ["Ruby on Rails", "React", "JavaScript", "REST APIs"],
    highlights: [
      "Developed Rails features and REST APIs on a large production SaaS platform.",
      "Built React.js components for sales workflows; contributed tests, reviews, and stability fixes.",
    ],
    liveUrl: "https://www.salesloft.com/",
    gallerySlides: [],
  },
  {
    id: "prodigy-finance",
    name: "Prodigy Finance",
    subtitle: "Multi-tenant fintech API platform",
    categories: ["fullstack"],
    impactBadge: "Regulated fintech APIs",
    badges: ["Python", "FastAPI", "Flask", "PostgreSQL", "MongoDB"],
    highlights: [
      "Built production APIs with FastAPI and Flask for fintech workflows.",
      "Implemented multi-tenant architecture with tenant-level API and database isolation.",
    ],
    liveUrl: "https://prodigyfinance.com/",
    gallerySlides: [],
  },
  {
    id: "acceptpay-global",
    name: "AcceptPay Global",
    subtitle: "Stripe payment gateway integration",
    categories: ["fullstack"],
    impactBadge: "Payments & billing",
    badges: ["Ruby on Rails", "React", "PostgreSQL", "Stripe"],
    highlights: [
      "Integrated Stripe into Ruby on Rails with state-machine-driven payment lifecycles.",
      "Built React.js screens and backend APIs for payment creation, tracking, and review.",
    ],
    liveUrl: "https://acceptpayglobal.com/",
    gallerySlides: [],
  },
  {
    id: "bynder",
    name: "Bynder",
    subtitle: "Ruby on Rails 8 production upgrade",
    categories: ["fullstack"],
    impactBadge: "Zero-downtime Rails upgrade",
    badges: ["Rails 8", "React", "Python", "PostgreSQL"],
    highlights: [
      "Upgraded production from Rails 7.1 to Rails 8 using zero-downtime deployment.",
      "Fixed security and dependency issues across Rails, Python, and Go repositories.",
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
];
