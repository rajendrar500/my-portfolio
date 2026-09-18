/**
 * ATS-friendly résumé content — source of truth for PDF generation.
 */
export const RESUME_SOURCE_FILENAME = "Rajendra_S_Senior_Full_Stack_Engineer_Resume.pdf";

export const resumeHeader = {
  name: "RAJENDRA S",
  headline:
    "SENIOR FULL STACK DEVELOPER | RUBY ON RAILS | PYTHON | FASTAPI | FLASK | REACT.JS | POSTGRESQL | AWS",
  contact: "India | errajendra56@gmail.com | GitHub: github.com/rajendrar500",
};

export const resumeSummary =
  "Senior Full Stack Developer with 8+ years of experience building scalable web applications, SaaS platforms, REST APIs, microservices, and cloud-based systems. Strong across Ruby on Rails, Python (FastAPI, Flask), React.js, PostgreSQL, AWS, Docker, and CI/CD. Experienced in API design, database optimization, authentication, multi-tenant systems, payment integrations, background processing, and production support.";

export const resumeSkillGroups: { label: string; items: string }[] = [
  { label: "Languages", items: "Ruby, Python, JavaScript, TypeScript, SQL" },
  {
    label: "Backend",
    items:
      "Ruby on Rails, FastAPI, Flask, Node.js, REST APIs, GraphQL, Microservices, API Design, Pydantic",
  },
  { label: "Frontend", items: "React.js, JavaScript, TypeScript, HTML5, CSS3" },
  {
    label: "Databases",
    items: "PostgreSQL, MySQL, MongoDB, Redis, SQLAlchemy, ActiveRecord",
  },
  {
    label: "Security",
    items:
      "JWT, OAuth2, RBAC, Authentication, Authorization, API Security, Multi-Tenant Access Control",
  },
  { label: "Async Processing", items: "Sidekiq, Celery, Redis, RabbitMQ" },
  {
    label: "Cloud & DevOps",
    items:
      "AWS, Docker, Kubernetes, ECS, Lambda, S3, RDS, GitHub Actions, GitLab CI, Linux, CI/CD",
  },
  {
    label: "Testing",
    items: "RSpec, Pytest, Unit Testing, Integration Testing, API Testing, TDD",
  },
  {
    label: "Integrations",
    items: "Stripe, Payment APIs, Webhooks, OAuth, SMS APIs, IoT APIs, Third-Party APIs",
  },
  {
    label: "AI / GenAI",
    items:
      "LLMs, RAG, AI Agents, LangGraph, LangChain, MCP, Embeddings, Vector Databases, OpenAI APIs",
  },
];

export const resumeExperience = [
  {
    title: "Full Stack Developer | Full-Time Freelancer",
    company: "Upwork",
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
    title: "Senior Full Stack Developer | Contract",
    company: "Everbee",
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
    title: "Senior Software Developer",
    company: "Natureglobal",
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
    title: "Software Developer",
    company: "Kangaroo Software",
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

export const resumeProjects = [
  {
    name: "Sales Engagement SaaS — Salesloft",
    url: "https://www.salesloft.com/",
    technologies: "Ruby on Rails, React, JavaScript, REST APIs",
    bullets: [
      "Developed Rails features and REST APIs on a large production SaaS platform.",
      "Built React.js components for sales workflows; contributed tests, reviews, and stability fixes.",
    ],
  },
  {
    name: "Multi-Tenant Fintech API — Prodigy Finance",
    url: "https://prodigyfinance.com/",
    technologies: "Python, FastAPI, Flask, PostgreSQL, MongoDB",
    bullets: [
      "Built production APIs with FastAPI and Flask for fintech workflows.",
      "Implemented multi-tenant architecture with tenant-level API and database isolation.",
      "Delivered backend features and production fixes across PostgreSQL and MongoDB.",
    ],
  },
  {
    name: "Payment Gateway with Stripe — AcceptPay Global",
    url: "https://acceptpayglobal.com/",
    technologies: "Ruby on Rails, React, PostgreSQL, Stripe",
    bullets: [
      "Integrated Stripe into a Ruby on Rails application with state-machine payment lifecycles.",
      "Built React.js screens and backend APIs for payment creation, tracking, and review.",
    ],
  },
  {
    name: "Ruby on Rails 8 Upgrade — Bynder",
    url: "https://www.bynder.com/en/",
    technologies: "Ruby on Rails, Rails 8, React, JavaScript, Python, PostgreSQL",
    bullets: [
      "Upgraded production from Rails 7.1 to Rails 8 using zero-downtime deployment.",
      "Fixed security and dependency issues across Rails, Python, and Go repositories.",
      "Supported staged rollout, rollback planning, and post-upgrade validation.",
    ],
  },
];

export const resumeAchievements = [
  "Improved API response performance by up to 40% through backend and database optimization.",
  "Increased RSpec test coverage from 0% to 85% on critical application workflows.",
  "Built production REST APIs with Ruby on Rails, FastAPI, and Flask.",
  "Delivered secure multi-tenant SaaS/fintech systems and Stripe integrations; completed Rails 7.1 → 8 upgrade with zero downtime.",
];

export const resumeAiDevOps = {
  aiSummary:
    "LLMs, RAG, AI Agents, LangGraph, LangChain, MCP, OpenAI APIs, Embeddings, Vector Databases — built LLM/RAG workflows and FastAPI services with secure OpenAI integration.",
  devopsSummary:
    "AWS, Docker, Kubernetes, ECS, Lambda, S3, RDS, CI/CD, GitHub Actions, Linux — containerization, deployments, monitoring, logging, and production troubleshooting.",
};

export const resumeEducation = {
  institution: "RGPV University, Bhopal",
  years: "2014 – 2018",
};
