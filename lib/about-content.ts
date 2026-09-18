export const ABOUT_HERO_STATS = [
  { value: "8+ Years", label: "Software Development Experience" },
  { value: "Global Remote", label: "Collaborating Across Timezones" },
  { value: "Rails & Python", label: "Full-Stack Production Delivery" },
] as const;

export const ABOUT_HERO_FOCUS_BADGES = [
  "Ruby on Rails",
  "Python / FastAPI",
  "React.js",
  "PostgreSQL",
  "AWS",
  "Stripe / APIs",
  "AI / GenAI",
] as const;

export type AboutTrustAccent = "purple" | "emerald" | "indigo" | "amber";

export type AboutTrustItem = {
  id: string;
  title: string;
  lead: string;
  body: string;
  detail: string;
  accent: AboutTrustAccent;
};

export const ABOUT_TRUST_ITEMS: AboutTrustItem[] = [
  {
    id: "remote",
    title: "Remote & global delivery",
    lead: "8+ years",
    body:
      "of remote experience shipping SaaS, APIs, and production web applications for startups and product teams worldwide.",
    detail:
      "Strong {{async communication}}, clear written updates, and reliable overlap with {{US / EU time zones}} when needed.",
    accent: "purple",
  },
  {
    id: "quality",
    title: "Quality & reliability",
    lead: "Production-grade",
    body:
      "REST APIs, automated testing, and observability built into every engagement—not bolted on at the end.",
    detail:
      "{{RSpec / Pytest}}, {{API validation}}, and {{production troubleshooting}} to keep releases stable.",
    accent: "emerald",
  },
  {
    id: "execution",
    title: "Full-stack ownership",
    lead: "End-to-end execution",
    body:
      "from database schema and backend APIs to React frontends, integrations, payments, and deployment-ready delivery.",
    detail:
      "One senior engineer across the stack — move faster with {{fewer handoffs}} and {{less rework}}.",
    accent: "indigo",
  },
  {
    id: "delivery",
    title: "Predictable shipping",
    lead: "Agile delivery",
    body:
      "with clear milestones, regular demos, and transparent progress—friendly to Upwork and long-term contracts.",
    detail:
      "Scope in {{shippable increments}} — always know {{what’s done}} and {{what’s next}}.",
    accent: "amber",
  },
];

export const ABOUT_CORE_SKILLS = [
  {
    title: "Full-Stack Engineering",
    tags: ["Ruby on Rails", "React.js", "TypeScript", "Node.js"],
  },
  {
    title: "Python Backend",
    tags: ["FastAPI", "Flask", "Django", "Microservices"],
  },
  {
    title: "AI / GenAI",
    tags: ["LLMs", "RAG", "LangGraph", "OpenAI APIs"],
  },
  {
    title: "Cloud & DevOps",
    tags: ["AWS", "Docker", "Kubernetes", "CI/CD"],
  },
  {
    title: "Data & APIs",
    tags: ["PostgreSQL", "MongoDB", "REST APIs", "Stripe"],
  },
  {
    title: "Quality & Delivery",
    tags: ["RSpec", "Pytest", "Code Reviews", "Multi-Tenant SaaS"],
  },
] as const;

export type AboutExperienceRole = {
  company: string;
  title: string;
  period: string;
  location: string;
  bullets: string[];
};

export const ABOUT_EXPERIENCE: AboutExperienceRole[] = [
  {
    company: "Upwork",
    title: "Full Stack Developer | Full-Time Freelancer",
    period: "Sep 2026 – Present",
    location: "Remote",
    bullets: [
      "Develop web applications and REST APIs using Python, Ruby on Rails, Node.js, and React.js.",
      "Build backend services, business logic, database integrations, authentication, and third-party integrations.",
      "Develop reusable React.js components and full-stack features end to end.",
      "Work with clients on requirements, technical solutions, estimation, development, testing, and delivery.",
      "Handle debugging, performance optimization, deployment, and production support with Git, Docker, CI/CD, and cloud platforms.",
    ],
  },
  {
    company: "Everbee",
    title: "Senior Full Stack Developer | Contract",
    period: "Sep 2024 – Aug 2026",
    location: "Remote",
    bullets: [
      "Developed full-stack applications using Ruby on Rails, React.js, and Python.",
      "Designed REST APIs, backend services, authentication, authorization, and third-party integrations.",
      "Built React.js features and optimized PostgreSQL schemas, queries, relationships, and indexes.",
      "Implemented background processing and asynchronous workflows with job-processing systems.",
      "Worked with AWS, Docker, CI/CD, monitoring, and production deployments; resolved production issues and delivered features with Agile teams.",
    ],
  },
  {
    company: "Natureglobal",
    title: "Senior Software Developer",
    period: "Aug 2020 – Jul 2024",
    location: "Remote",
    bullets: [
      "Developed scalable backend applications and REST APIs using Python, Node.js, and React.js.",
      "Implemented business logic, authentication, authorization, data validation, and third-party API integrations.",
      "Built React.js frontend features integrated with REST APIs.",
      "Designed and optimized PostgreSQL databases, queries, indexes, and data models.",
      "Built asynchronous workflows and background processing; supported Docker, Linux, CI/CD, and production operations.",
    ],
  },
  {
    company: "Kangaroo Software",
    title: "Software Developer",
    period: "Jun 2018 – Jul 2020",
    location: "India",
    bullets: [
      "Developed web applications using Ruby on Rails, React.js, and JavaScript.",
      "Designed REST APIs, validations, authentication, and database workflows.",
      "Built reusable React.js components and integrated third-party APIs.",
      "Maintained PostgreSQL schemas, queries, and indexes; wrote tests and supported production fixes.",
    ],
  },
];

export const ABOUT_EDUCATION = {
  degree: "",
  institution: "RGPV University, Bhopal",
  years: "2014 – 2018",
};

export const ABOUT_EDUCATION_SUBJECTS = [
  "CS Fundamentals",
  "Algorithms",
  "Database Systems",
  "System Design",
] as const;
