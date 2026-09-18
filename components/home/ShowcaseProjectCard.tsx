"use client";

import type { HomeShowcaseProject } from "@/lib/home-content";
import { ShowcaseProjectGallery } from "./ShowcaseProjectGallery";

const techPillClassName =
  "rounded-full border border-purple-500/30 bg-purple-950/40 px-3 py-1 text-xs text-purple-300 shadow-[0_0_15px_rgba(168,85,247,0.1)]";

const impactBadgeClassName =
  "mb-4 inline-block rounded-md border border-purple-500/30 bg-purple-500/10 px-3 py-1 font-mono text-[11px] text-purple-300";

export function ShowcaseProjectCard({ project }: { project: HomeShowcaseProject }) {
  return (
    <article
      className="group relative flex h-full w-full flex-col rounded-3xl border border-purple-500/15 bg-zinc-900/60 p-4 backdrop-blur-xl transition-all duration-500 sm:p-6 hover:-translate-y-2 hover:border-purple-500/60 hover:shadow-[0_0_50px_rgba(168,85,247,0.3)]"
    >
      <div className="flex h-full flex-col justify-between">
        <div>
          <ShowcaseProjectGallery
            slides={project.gallerySlides}
            projectName={project.name}
            projectId={project.id}
          />

          <div className="mt-5">
            <h3 className="text-xl font-semibold tracking-tight text-white transition-colors group-hover:text-purple-100">
              {project.name}
            </h3>
            <p className="mt-1 text-sm text-purple-300/90">{project.subtitle}</p>

            <span className={impactBadgeClassName}>{project.impactBadge}</span>

            <ul className="flex flex-wrap gap-2">
              {project.badges.map((badge) => (
                <li key={badge} className={techPillClassName}>
                  {badge}
                </li>
              ))}
            </ul>

            <ul className="mt-4 flex flex-col gap-2 text-sm leading-relaxed text-zinc-400">
              {project.highlights.map((item) => (
                <li key={item} className="flex gap-2">
                  <span
                    className="mt-2 h-1 w-1 shrink-0 rounded-full bg-purple-400 shadow-[0_0_6px_rgba(168,85,247,0.8)]"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-6 pt-4">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 w-full touch-manipulation items-center justify-center rounded-xl bg-purple-600 px-4 py-2.5 text-base font-medium text-white shadow-[0_0_20px_rgba(147,51,234,0.35)] transition-[transform,box-shadow] duration-300 active:scale-[0.98] motion-safe:hover:scale-[1.02] motion-safe:hover:bg-purple-500 motion-safe:hover:shadow-[0_0_28px_rgba(147,51,234,0.5)] sm:text-sm"
          >
            Live Demo
          </a>
        </div>
      </div>
    </article>
  );
}
