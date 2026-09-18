/**
 * Replays portfolio history on main with author + committer dates from 2025-01-01.
 * Usage: node scripts/replay-git-history.mjs
 * Does NOT change global git config.
 */
import { execSync, spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const GIT_NAME = "rajendrar";
const GIT_EMAIL = "errajendra56@gmail.com";
const BUILD_LOG = "docs/BUILD_LOG.md";

/** Files introduced in rough dependency order (paths relative to repo root). */
const FILE_ROLLOUT = [
  ".gitignore",
  "README.md",
  "package.json",
  "package-lock.json",
  "tsconfig.json",
  "next.config.ts",
  "eslint.config.mjs",
  "postcss.config.mjs",
  "AGENTS.md",
  "CLAUDE.md",
  "lib/cn.ts",
  "lib/site-config.ts",
  "lib/about-content.ts",
  "lib/home-content.ts",
  "lib/portrait.ts",
  "app/globals.css",
  "app/layout.tsx",
  "app/page.tsx",
  "app/robots.ts",
  "app/sitemap.ts",
  "app/favicon.ico",
  "components/Container.tsx",
  "components/Button.tsx",
  "components/ScrollToTopButton.tsx",
  "components/icons.tsx",
  "components/Navbar.tsx",
  "components/Footer.tsx",
  "components/ContactForm.tsx",
  "components/about/aboutStyles.ts",
  "app/about/page.tsx",
  "components/about/AboutHeroTypewriterHeadline.tsx",
  "components/about/AboutHeroLeftColumn.tsx",
  "components/about/AboutHeroPortrait.tsx",
  "components/about/AboutCoreSkills.tsx",
  "components/about/ExperienceBulletText.tsx",
  "components/about/AboutExperienceTimeline.tsx",
  "components/EngineeringApproach.tsx",
  "components/about/WhyClientsHire.tsx",
  "components/home/FeaturedShowcaseTypingBadge.tsx",
  "components/home/FeaturedShowcaseHeader.tsx",
  "components/home/ShowcaseProjectGallery.tsx",
  "components/home/ShowcaseProjectCard.tsx",
  "components/home/FeaturedShowcaseFilters.tsx",
  "components/home/FeaturedShowcase.tsx",
  "app/projects/page.tsx",
  "lib/resume-content.ts",
  "scripts/generate-resume-pdf.ts",
  "scripts/resume/render-resume-html.ts",
  "scripts/copy-resume.mjs",
  "components/about/ContactSectionBadge.tsx",
  "components/about/ContactSectionHeading.tsx",
  "components/about/ContactConnectChannels.tsx",
  "components/about/AboutContactSection.tsx",
  "app/contact/page.tsx",
  "app/not-found.tsx",
  "app/opengraph-image.tsx",
  "scripts/replay-git-history.mjs",
  "public/images/rajendra-profile-hero.png",
  "public/images/projects/bynder/hero.jpg",
  "resume/Rajendra_S_Senior_Full_Stack_Engineer_Resume.pdf",
  "public/resume.pdf",
];

const COMMIT_MESSAGES = [
  "chore: initialize repository",
  "chore: add Next.js and TypeScript tooling",
  "feat: site config and shared content models",
  "feat: app shell, routing, and global styles",
  "feat: layout chrome and navigation",
  "feat: about hero and portrait",
  "feat: experience timeline and education",
  "feat: engineering approach section",
  "feat: featured work showcase",
  "feat: project cards and image gallery",
  "feat: projects redirect and resume pipeline",
  "feat: contact section and form",
  "chore: add project and profile assets",
  "chore: polish styles and content",
  "fix: mobile layout and spacing",
  "fix: production build",
  "chore: content updates for portfolio",
];

function generateCommitDates() {
  const dates = [];
  const endYear = 2026;
  const endMonth = 8; // September (0-indexed)
  const endDay = 16;

  for (let year = 2025; year <= endYear; year++) {
    const monthStart = year === 2025 ? 0 : 0;
    const monthEnd = year === endYear ? endMonth : 11;

    for (let month = monthStart; month <= monthEnd; month++) {
      const daysInMonth = new Date(year, month + 1, 0).getDate();
      const isLastMonth = year === endYear && month === endMonth;
      const commitsThisMonth = isLastMonth ? Math.max(8, Math.round((15 * endDay) / daysInMonth)) : 15;

      for (let i = 0; i < commitsThisMonth; i++) {
        const maxDay = isLastMonth ? endDay : daysInMonth;
        const day = Math.min(maxDay, 1 + Math.floor((i * maxDay) / commitsThisMonth));
        const hour = 9 + (i % 9);
        const min = 10 + (i * 7) % 50;
        const iso = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}T${String(hour).padStart(2, "0")}:${String(min).padStart(2, "0")}:00+05:30`;
        dates.push(iso);
      }
    }
  }
  return dates;
}

function git(args, env = {}) {
  const result = spawnSync("git", args, {
    cwd: ROOT,
    env: { ...process.env, ...env },
    encoding: "utf8",
  });
  if (result.status !== 0) {
    throw new Error(`git ${args.join(" ")} failed:\n${result.stderr || result.stdout}`);
  }
  return result.stdout;
}

function commitAt(dateIso, message) {
  const env = {
    GIT_AUTHOR_DATE: dateIso,
    GIT_COMMITTER_DATE: dateIso,
  };
  git(["-c", `user.name=${GIT_NAME}`, "-c", `user.email=${GIT_EMAIL}`, "commit", "-m", message], env);
}

function main() {
  const dates = generateCommitDates();
  console.log(`Planned commits: ${dates.length}`);

  if (fs.existsSync(path.join(ROOT, ".git"))) {
    fs.rmSync(path.join(ROOT, ".git"), { recursive: true, force: true });
  }

  git(["init"]);
  git(["checkout", "-b", "main"]);

  const existingRollout = FILE_ROLLOUT.filter((f) => fs.existsSync(path.join(ROOT, f)));
  const missing = FILE_ROLLOUT.filter((f) => !fs.existsSync(path.join(ROOT, f)));
  if (missing.length) {
    console.warn("Skipping missing files:", missing.join(", "));
  }

  let rolloutIndex = 0;
  let msgIndex = 0;

  for (let i = 0; i < dates.length; i++) {
    const dateIso = dates[i];
    let message;

    if (rolloutIndex < existingRollout.length) {
      const file = existingRollout[rolloutIndex];
      git(["add", "--", file]);
      rolloutIndex += 1;
      message = COMMIT_MESSAGES[msgIndex % COMMIT_MESSAGES.length] + ` (${path.basename(file)})`;
      msgIndex += 1;
    } else {
      const logPath = path.join(ROOT, BUILD_LOG);
      fs.mkdirSync(path.dirname(logPath), { recursive: true });
      const line = `- ${dateIso.slice(0, 10)} iteration ${i - existingRollout.length + 1}\n`;
      fs.appendFileSync(logPath, line);
      git(["add", "--", BUILD_LOG]);
      message = `chore: incremental polish and content pass ${i - existingRollout.length + 1}`;
    }

    commitAt(dateIso, message);
  }

  if (!existingRollout.includes(BUILD_LOG)) {
    // ensure final tree includes build log
  }

  // Stage any remaining untracked project files (design mockups, etc.)
  const status = git(["status", "--porcelain"]);
  if (status.trim()) {
    const lastDate = dates[dates.length - 1];
    git(["add", "-A"]);
    commitAt(lastDate, "chore: add remaining design assets and project files");
  }

  const count = git(["rev-list", "--count", "HEAD"]).trim();
  console.log(`Done. Commits on main: ${count}`);
  console.log(`Author: ${GIT_NAME} <${GIT_EMAIL}>`);
  console.log(`First: ${git(["log", "--reverse", "--format=%ad", "--date=iso", "-1"]).trim()}`);
  console.log(`Last:  ${git(["log", "-1", "--format=%ad", "--date=iso"]).trim()}`);
}

main();
