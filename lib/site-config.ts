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

// TODO: replace with a real inbox once configured.
export const CONTACT_EMAIL = "surendrar7000@gmail.com";
export const UPWORK_PROFILE_URL: string | null =
  "https://www.upwork.com/freelancers/surendras36";
export const GITHUB_PROFILE_URL: string | null = "https://github.com/rajendrar56";
export const LINKEDIN_PROFILE_URL: string | null =
  "https://www.linkedin.com/in/surendraa-s-986715428/";
/** Served from `public/resume.pdf` (copied from `resume/` on build). */
export const RESUME_PDF_URL = "/resume.pdf";
export const RESUME_DOWNLOAD_FILENAME =
  "Rajendra_R_Senior_Full_Stack_Engineer_Resume.pdf";

export const siteConfig = {
  name: "Rajendra R.",
  role: "Senior Full-Stack & AI Engineer",
  tagline:
    "I'm Rajendra, a Senior Full-Stack & AI Engineer with 8+ years of experience building production web applications, backend systems, SaaS products and AI-powered solutions.",
  description:
    "Portfolio of Rajendra R., a Senior Full-Stack & AI Engineer with 8+ years of experience across Python, FastAPI, Ruby on Rails, React, PostgreSQL, AWS and AI/LLM integrations.",
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
