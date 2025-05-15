/**
 * Generates resume PDF via HTML + headless Chrome (same pipeline as the reference résumé).
 * Run: npm run generate:resume
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import puppeteer from "puppeteer";
import {
  RESUME_SOURCE_FILENAME,
  resumeEducation,
  resumeExperience,
  resumeProfile,
  resumeProjects,
  resumeSkillLines,
} from "../lib/resume-content";
import { renderResumeHtml } from "./resume/render-resume-html";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

async function main() {
  const html = renderResumeHtml({
    profile: resumeProfile,
    skillLines: resumeSkillLines,
    experience: resumeExperience,
    projects: resumeProjects,
    education: resumeEducation,
  });

  const tmpHtml = path.join(root, "scripts", ".resume-preview.html");
  fs.writeFileSync(tmpHtml, html);

  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  try {
    const page = await browser.newPage();
    await page.setContent(html, { waitUntil: "networkidle0" });
    const pdfBuffer = await page.pdf({
      format: "A4",
      printBackground: true,
      margin: { top: "14mm", right: "16mm", bottom: "14mm", left: "16mm" },
    });

    const publicPath = path.join(root, "public", "resume.pdf");
    const sourcePath = path.join(root, "resume", RESUME_SOURCE_FILENAME);
    fs.mkdirSync(path.dirname(publicPath), { recursive: true });
    fs.mkdirSync(path.dirname(sourcePath), { recursive: true });
    fs.writeFileSync(publicPath, pdfBuffer);
    fs.writeFileSync(sourcePath, pdfBuffer);
    console.log(`Wrote ${publicPath} (${pdfBuffer.length} bytes)`);
    console.log(`Wrote ${sourcePath}`);
  } finally {
    await browser.close();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
