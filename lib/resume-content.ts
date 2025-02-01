/**
 * Single source for résumé PDF content — aligned with portfolio (about, projects, site config).
 */
import { ABOUT_CORE_SKILLS, ABOUT_EDUCATION, ABOUT_EXPERIENCE } from "@/lib/about-content";
import { HOME_SHOWCASE_PROJECTS } from "@/lib/home-content";
import {
  CONTACT_EMAIL,
  GITHUB_PROFILE_URL,
  LINKEDIN_PROFILE_URL,
  siteConfig,
  UPWORK_PROFILE_URL,
} from "@/lib/site-config";

export const RESUME_SOURCE_FILENAME = "Rajendra_R_Senior_Full_Stack_Engineer_Resume.pdf";

export const resumeProfile = {
  name: siteConfig.name.replace(/\.$/, ""),
  headline:
    "Lead Full Stack Developer | Python, FastAPI, Flask, Django | PostgreSQL | React | AI/LLM | SaaS",
  contactParts: [
    "India (Remote)",
    CONTACT_EMAIL,
    GITHUB_PROFILE_URL?.replace("https://", "") ?? "",
    LINKEDIN_PROFILE_URL?.replace("https://www.", "") ?? "",
    UPWORK_PROFILE_URL?.replace("https://www.", "") ?? "",
  ].filter(Boolean),
  summary:
    "Lead Full Stack Developer with 8+ years of experience building, shipping, and maintaining production web applications, SaaS products, and backend systems. Strong in Python (FastAPI, Flask, Django), Ruby on Rails, React, TypeScript, REST APIs, PostgreSQL, background jobs, and cloud deployment. Experienced in end-to-end product development—from API design and MVP features to testing, CI/CD, production support, and scaling. Hands-on with AI/LLM integrations, third-party services, and ecommerce, DAM, and health-tech domains. Comfortable owning delivery remotely for global startups and Upwork or long-term contracts.",
};

export const resumeSkillLines: { label: string; items: string }[] = [
  {
    label: "Backend & Frameworks",
    items:
      "Python, FastAPI, Flask, Django, Ruby on Rails, Node.js, REST APIs, Microservices, Background Jobs",
  },
  {
    label: "Frontend",
    items: "React.js, TypeScript, JavaScript (ES6+), HTML5, CSS3",
  },
  {
    label: "Databases & Caching",
    items: "PostgreSQL, SQL, Redis, Data modeling, Query optimization",
  },
  {
    label: "AI / Automation",
    items: "LLM APIs, Generative AI, Prompt engineering, RAG, Workflow automation",
  },
  {
    label: "Cloud & DevOps",
    items: "AWS, Docker, Git, GitHub Actions, Jenkins, CI/CD",
  },
  {
    label: "Quality & Delivery",
    items: "pytest, RSpec, API testing, TDD, Code reviews, Agile/Scrum, Production support",
  },
];

/** Résumé-length experience (portfolio roles, condensed for two pages). */
export const resumeExperience = [
  {
    company: ABOUT_EXPERIENCE[0].company,
    title: ABOUT_EXPERIENCE[0].title,
    period: ABOUT_EXPERIENCE[0].period,
    location: ABOUT_EXPERIENCE[0].location,
    bullets: ABOUT_EXPERIENCE[0].bullets.slice(0, 5),
  },
  {
    company: ABOUT_EXPERIENCE[1].company,
    title: ABOUT_EXPERIENCE[1].title,
    period: ABOUT_EXPERIENCE[1].period,
    location: ABOUT_EXPERIENCE[1].location,
    bullets: ABOUT_EXPERIENCE[1].bullets.slice(0, 5),
  },
  {
    company: ABOUT_EXPERIENCE[2].company,
    title: ABOUT_EXPERIENCE[2].title,
    period: ABOUT_EXPERIENCE[2].period,
    location: ABOUT_EXPERIENCE[2].location,
    bullets: ABOUT_EXPERIENCE[2].bullets.slice(0, 4),
  },
];

export const resumeProjects = HOME_SHOWCASE_PROJECTS.map((p) => ({
  name: `${p.name} — ${p.subtitle}`,
  techStack: p.badges.join(", "),
  bullets: [...p.highlights],
}));

export const resumeEducation = {
  degree: ABOUT_EDUCATION.degree,
  institution: ABOUT_EDUCATION.institution,
  years: ABOUT_EDUCATION.years,
};

/** Flat skill tags from portfolio core skills (optional exports). */
export const resumeCoreSkillGroups = ABOUT_CORE_SKILLS.map((g) => ({
  title: g.title,
  tags: [...g.tags],
}));
