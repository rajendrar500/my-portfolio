import {
  resumeEducation,
  resumeExperience,
  resumeProfile,
  resumeProjects,
  resumeSkillLines,
} from "../../lib/resume-content";

function esc(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

type ResumeData = {
  profile: typeof resumeProfile;
  skillLines: typeof resumeSkillLines;
  experience: typeof resumeExperience;
  projects: typeof resumeProjects;
  education: typeof resumeEducation;
};

export function renderResumeHtml(data: ResumeData) {
  const { profile, skillLines, experience, projects, education } = data;

  const skillsHtml = skillLines
    .map((row) => `<p class="skill-line"><strong>${esc(row.label)}:</strong> ${esc(row.items)}</p>`)
    .join("\n");

  const experienceHtml = experience
    .map((role) => {
      const meta = role.location ? `${esc(role.period)} | ${esc(role.location)}` : esc(role.period);
      const bullets = role.bullets.map((b) => `<p class="bullet">${esc(b)}</p>`).join("\n");
      return `
        <div class="job">
          <p class="job-title">${esc(role.company)} — ${esc(role.title)}</p>
          <p class="job-meta">${meta}</p>
          ${bullets}
        </div>`;
    })
    .join("\n");

  const projectsHtml = projects
    .map((p) => {
      const bullets = p.bullets.map((b) => `<p class="bullet">${esc(b)}</p>`).join("\n");
      return `
        <div class="project">
          <p class="project-name">${esc(p.name)}</p>
          <p class="tech-stack">Tech Stack: ${esc(p.techStack)}</p>
          ${bullets}
        </div>`;
    })
    .join("\n");

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>${esc(profile.name)} — Resume</title>
  <style>
    @page { size: A4; margin: 12mm 14mm; }
    * { box-sizing: border-box; }
    body {
      font-family: Arial, Helvetica, sans-serif;
      font-size: 9pt;
      line-height: 1.34;
      color: #111;
      margin: 0;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
    h1 {
      font-size: 20pt;
      font-weight: 700;
      margin: 0 0 4px;
      line-height: 1.12;
    }
    .headline { margin: 0 0 3px; font-size: 9pt; }
    .contact { margin: 0 0 10px; font-size: 8.5pt; color: #222; }
    h2 {
      font-size: 9.5pt;
      font-weight: 700;
      text-transform: uppercase;
      margin: 9px 0 4px;
      letter-spacing: 0.04em;
      border-bottom: 1px solid #ccc;
      padding-bottom: 2px;
    }
    .summary p { margin: 0; text-align: justify; }
    .skill-line { margin: 0 0 2px; font-size: 8.5pt; }
    .job, .project {
      margin-bottom: 5px;
      page-break-inside: avoid;
    }
    .job-title, .project-name { margin: 6px 0 1px; font-weight: 700; font-size: 9pt; }
    .job-meta, .tech-stack { margin: 0 0 3px; color: #333; font-size: 8.5pt; }
    .bullet { margin: 0 0 2px; text-align: justify; font-size: 8.5pt; }
    .education-block { page-break-inside: avoid; }
    .education-degree { font-weight: 700; margin: 0 0 2px; }
    .education-meta { margin: 0; color: #333; font-size: 8.5pt; }
  </style>
</head>
<body>
  <h1>${esc(profile.name)}</h1>
  <p class="headline">${esc(profile.headline)}</p>
  <p class="contact">${esc(profile.contactParts.join(" | "))}</p>

  <h2>Professional Summary</h2>
  <div class="summary"><p>${esc(profile.summary)}</p></div>

  <h2>Core Technical Skills</h2>
  ${skillsHtml}

  <h2>Professional Experience</h2>
  ${experienceHtml}

  <h2>Selected Projects</h2>
  ${projectsHtml}

  <h2>Education</h2>
  <div class="education-block">
    <p class="education-degree">${esc(education.degree)}</p>
    <p class="education-meta">${esc(education.institution)} | ${esc(education.years)}</p>
  </div>
</body>
</html>`;
}
