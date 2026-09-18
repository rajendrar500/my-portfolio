/**
 * Generates ATS-friendly résumé PDF (HTML + headless Chrome).
 * Run: npm run generate:resume
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import puppeteer from "puppeteer";
import {
  RESUME_SOURCE_FILENAME,
  resumeAchievements,
  resumeAiDevOps,
  resumeEducation,
  resumeExperience,
  resumeHeader,
  resumeProjects,
  resumeSkillGroups,
  resumeSummary,
} from "../lib/resume-content";
import { renderResumeHtml } from "./resume/render-resume-html";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");

async function main() {
  const html = renderResumeHtml({
    header: resumeHeader,
    summary: resumeSummary,
    skillGroups: resumeSkillGroups,
    experience: resumeExperience,
    projects: resumeProjects,
    achievements: resumeAchievements,
    aiDevOps: resumeAiDevOps,
    education: resumeEducation,
  });

  const tmpHtml = path.join(root, "scripts", ".resume-preview.html");
  fs.writeFileSync(tmpHtml, html, "utf8");

  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.setContent(html, { waitUntil: "networkidle0" });
  const pdfBuffer = await page.pdf({
    format: "A4",
    printBackground: true,
    margin: { top: "0.48in", right: "0.52in", bottom: "0.48in", left: "0.52in" },
  });
  await browser.close();

  const resumeDir = path.join(root, "resume");
  fs.mkdirSync(resumeDir, { recursive: true });
  const sourcePath = path.join(resumeDir, RESUME_SOURCE_FILENAME);
  fs.writeFileSync(sourcePath, pdfBuffer);

  const publicPath = path.join(root, "public", "resume.pdf");
  fs.writeFileSync(publicPath, pdfBuffer);

  console.log(`Wrote ${sourcePath} (${pdfBuffer.length} bytes)`);
  console.log(`Wrote ${publicPath}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
