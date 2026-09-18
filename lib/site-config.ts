import { RESUME_SOURCE_FILENAME } from "@/lib/resume-content";

/** Set `NEXT_PUBLIC_SITE_URL` in production (e.g. https://yoursite.com). */
function resolveSiteUrl(): string {
  const fromPublic = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (fromPublic) {
    return fromPublic.replace(/\/$/, "");
  }

  const vercelHost =
    process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim() ||
    process.env.VERCEL_URL?.trim();
  if (vercelHost) {
    const host = vercelHost.replace(/^https?:\/\//, "").replace(/\/$/, "");
    return `https://${host}`;
  }

  return "https://example.com";
}

export const SITE_URL = resolveSiteUrl();

export const CONTACT_EMAIL = "errajendra56@gmail.com";
export const UPWORK_PROFILE_URL: string | null =
  "https://www.upwork.com/freelancers/surendras36";
export const GITHUB_PROFILE_URL: string | null = "https://github.com/rajendrar786";
export const LINKEDIN_PROFILE_URL: string | null = null;

/** Served from `public/resume.pdf` (copied from `resume/` on build). */
export const RESUME_PDF_URL = "/resume.pdf";
export const RESUME_DOWNLOAD_FILENAME = RESUME_SOURCE_FILENAME;

export const siteConfig = {
  name: "Rajendra S",
  role: "Senior Full Stack Developer",
  tagline:
    "Senior Full Stack Developer with 8+ years of experience building scalable web applications, SaaS platforms, REST APIs, microservices, and cloud-based systems across Ruby on Rails, Python, React.js, PostgreSQL, and AWS.",
  description:
    "Portfolio of Rajendra S — Senior Full Stack Developer with 8+ years of experience in Ruby on Rails, Python (FastAPI, Flask), React.js, PostgreSQL, AWS, Docker, CI/CD, and AI/GenAI integrations.",
  nav: [
    { label: "About", href: "/about#about", sectionId: "about" },
    { label: "Projects", href: "/about#projects", sectionId: "projects" },
    { label: "Contact", href: "/about#contact", sectionId: "contact" },
  ],
  socials: {
    github: GITHUB_PROFILE_URL,
    linkedin: LINKEDIN_PROFILE_URL,
    upwork: UPWORK_PROFILE_URL,
  },
} as const;
