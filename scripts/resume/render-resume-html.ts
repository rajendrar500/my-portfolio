import type * as Resume from "../../lib/resume-content";

function esc(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function ul(items: string[], listClass = "list") {
  return `<ul class="${listClass}">${items.map((item) => `<li>${esc(item)}</li>`).join("")}</ul>`;
}

function sectionDivider() {
  return `<div class="section-divider" aria-hidden="true"></div>`;
}

type ResumeData = {
  header: typeof Resume.resumeHeader;
  summary: typeof Resume.resumeSummary;
  skillGroups: typeof Resume.resumeSkillGroups;
  experience: typeof Resume.resumeExperience;
  projects: typeof Resume.resumeProjects;
  achievements: typeof Resume.resumeAchievements;
  aiDevOps: typeof Resume.resumeAiDevOps;
  education: typeof Resume.resumeEducation;
};

function experienceBlock(job: ResumeData["experience"][number], isLast: boolean) {
  const loc = `${job.company} | ${job.location}`;
  const divider = isLast ? "" : sectionDivider();
  return `
    <article class="record">
      <div class="record-top">
        <p class="record-title">${esc(job.title)}</p>
        <p class="record-dates">${esc(job.period)}</p>
      </div>
      <p class="record-sub">${esc(loc)}</p>
      ${ul(job.bullets)}
    </article>${divider}`;
}

function projectBlock(p: ResumeData["projects"][number], isLast: boolean) {
  const divider = isLast ? "" : sectionDivider();
  const liveUrl = esc(p.url);
  const liveLabel = esc(p.url.replace(/^https?:\/\/(www\.)?/i, "").replace(/\/$/, ""));
  return `
    <article class="record">
      <p class="record-title project-title">${esc(p.name)}</p>
      <p class="record-sub project-meta">
        <span class="meta-item"><span class="meta-label">Live</span>
        <a class="text-link" href="${liveUrl}">${liveLabel}</a></span>
        <span class="meta-sep">|</span>
        <span class="meta-item"><span class="meta-label">Technologies</span> ${esc(p.technologies)}</span>
      </p>
      ${ul(p.bullets)}
    </article>${divider}`;
}

export function renderResumeHtml(data: ResumeData) {
  const { header, summary, skillGroups, experience, projects, achievements, aiDevOps, education } =
    data;

  const skillsHtml = skillGroups
    .map(
      (g) =>
        `<div class="skill-row"><span class="skill-label">${esc(g.label)}</span><span class="skill-dash">—</span><span class="skill-items">${esc(g.items)}</span></div>`
    )
    .join("");

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>${esc(header.name)} — Resume</title>
  <style>
    @page { size: A4; margin: 0.48in 0.52in; }
    * { box-sizing: border-box; }
    body {
      font-family: Calibri, Arial, "Segoe UI", Helvetica, sans-serif;
      font-size: 10.25pt;
      line-height: 1.36;
      color: #1a1a1a;
      margin: 0;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }

    .masthead {
      text-align: center;
      margin-bottom: 4px;
      padding-bottom: 10px;
      border-bottom: 2px solid #1e3a5f;
    }
    h1 {
      font-size: 21pt;
      font-weight: 700;
      margin: 0 0 7px;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: #0f172a;
    }
    .tagline {
      margin: 0 auto 8px;
      max-width: 100%;
      font-size: 8.75pt;
      font-weight: 700;
      line-height: 1.38;
      text-transform: uppercase;
      letter-spacing: 0.025em;
      color: #334155;
    }
    .contact {
      margin: 0;
      font-size: 10pt;
      color: #404040;
      letter-spacing: 0.01em;
    }

    .resume-section {
      margin-top: 11px;
    }
    .resume-section:first-of-type {
      margin-top: 8px;
    }
    h2 {
      font-size: 10.75pt;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: #1e3a5f;
      margin: 0 0 7px;
      padding: 0 0 4px;
      border-bottom: 1.5px solid #1e3a5f;
    }

    .summary {
      margin: 0;
      padding: 7px 10px;
      background: #f8fafc;
      border-radius: 3px;
      border-left: 3px solid #1e3a5f;
      font-size: 10.25pt;
      line-height: 1.4;
      color: #262626;
    }

    .skills-block {
      margin-top: 1px;
    }
    .skill-row {
      display: flex;
      align-items: baseline;
      gap: 6px;
      margin-bottom: 3px;
      font-size: 10pt;
      line-height: 1.34;
    }
    .skill-label {
      flex: 0 0 108px;
      font-weight: 700;
      color: #0f172a;
    }
    .skill-dash {
      flex: 0 0 auto;
      color: #64748b;
      font-weight: 400;
    }
    .skill-items {
      flex: 1;
      color: #333;
    }

    .record {
      margin-bottom: 2px;
    }
    .section-divider {
      height: 0;
      border: none;
      border-top: 1px solid #c4c4c4;
      margin: 9px 0 10px;
      position: relative;
    }
    .section-divider::before {
      content: "";
      position: absolute;
      top: -1px;
      left: 0;
      width: 56px;
      height: 2px;
      background: #1e3a5f;
    }

    .record-top {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      gap: 12px;
    }
    .record-title {
      margin: 0;
      font-size: 10.5pt;
      font-weight: 700;
      line-height: 1.28;
      color: #0f172a;
      flex: 1;
    }
    .project-title {
      font-size: 10.35pt;
    }
    .record-dates {
      margin: 0;
      font-size: 10pt;
      font-weight: 600;
      white-space: nowrap;
      color: #475569;
    }
    .record-sub {
      margin: 2px 0 4px;
      font-size: 10pt;
      font-weight: 600;
      color: #374151;
    }
    .project-meta {
      font-weight: 400;
      line-height: 1.38;
    }
    .meta-label {
      font-weight: 700;
      color: #0f172a;
      margin-right: 4px;
    }
    .meta-sep {
      margin: 0 7px;
      color: #9ca3af;
      font-weight: 400;
    }
    a.text-link {
      color: #1d4ed8;
      text-decoration: underline;
      font-weight: 600;
    }

    ul.list {
      margin: 0;
      padding-left: 1.15em;
    }
    ul.list li {
      margin-bottom: 2px;
      font-size: 10pt;
      line-height: 1.35;
      color: #262626;
    }
    ul.list li::marker {
      color: #1e3a5f;
    }

    .highlight-list li {
      margin-bottom: 3px;
    }

    .ai-block {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }
    .ai-line {
      margin: 0;
      font-size: 10pt;
      line-height: 1.38;
      padding-left: 8px;
      border-left: 2px solid #e2e8f0;
    }
    .ai-line strong {
      color: #0f172a;
    }

    .education {
      margin: 0;
      font-size: 10.25pt;
      color: #262626;
    }
    .education strong {
      color: #0f172a;
    }
  </style>
</head>
<body>
  <header class="masthead">
    <h1>${esc(header.name)}</h1>
    <p class="tagline">${esc(header.headline)}</p>
    <p class="contact">${esc(header.contact)}</p>
  </header>

  <section class="resume-section">
    <h2>Professional Summary</h2>
    <p class="summary">${esc(summary)}</p>
  </section>

  <section class="resume-section">
    <h2>Technical Skills</h2>
    <div class="skills-block">${skillsHtml}</div>
  </section>

  <section class="resume-section">
    <h2>Professional Experience</h2>
    ${experience.map((job, i) => experienceBlock(job, i === experience.length - 1)).join("")}
  </section>

  <section class="resume-section">
    <h2>Selected Projects</h2>
    ${projects.map((p, i) => projectBlock(p, i === projects.length - 1)).join("")}
  </section>

  <section class="resume-section">
    <h2>Key Achievements</h2>
    ${ul(achievements, "list highlight-list")}
  </section>

  <section class="resume-section">
    <h2>AI / GenAI &amp; DevOps</h2>
    <div class="ai-block">
      <p class="ai-line"><strong>AI / GenAI</strong> — ${esc(aiDevOps.aiSummary)}</p>
      <p class="ai-line"><strong>Cloud &amp; DevOps</strong> — ${esc(aiDevOps.devopsSummary)}</p>
    </div>
  </section>

  <section class="resume-section">
    <h2>Education</h2>
    <p class="education"><strong>${esc(education.institution)}</strong> | ${esc(education.years)}</p>
  </section>
</body>
</html>`;
}
