"use client";

import { useState } from "react";
import {
  HOME_SHOWCASE_PROJECTS,
  SHOWCASE_FILTER_TABS,
  type HomeShowcaseProject,
  type ShowcaseFilterId,
} from "@/lib/home-content";
import { cn } from "@/lib/cn";
import { ShowcaseProjectCard } from "./ShowcaseProjectCard";

const tabBaseClassName =
  "inline-flex min-h-11 touch-manipulation cursor-pointer items-center justify-center rounded-full border border-purple-500/20 bg-zinc-900/80 px-5 py-2.5 text-xs font-medium text-zinc-300 transition-[color,border-color,box-shadow,transform] duration-300 hover:border-purple-500 hover:text-white active:scale-[0.98] motion-safe:hover:scale-105";

const tabActiveClassName =
  "border-purple-500/55 bg-purple-500/15 text-white shadow-[0_0_20px_rgba(168,85,247,0.2)]";

const PROJECTS_PER_PAGE = 3;

const navButtonClassName =
  "inline-flex min-h-11 touch-manipulation items-center justify-center rounded-full border border-purple-500/25 bg-zinc-900/80 px-6 py-2.5 text-sm font-semibold text-zinc-200 transition-[color,border-color,box-shadow,transform,opacity] duration-300 hover:border-purple-500 hover:text-white active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-purple-500/25 disabled:hover:text-zinc-200 motion-safe:hover:scale-[1.02]";

function matchesFilter(categories: HomeShowcaseProject["categories"], filter: ShowcaseFilterId) {
  if (filter === "all") return true;
  return categories.includes(filter);
}

export function FeaturedShowcaseFilters() {
  const [activeFilter, setActiveFilter] = useState<ShowcaseFilterId>("all");
  const [page, setPage] = useState(0);

  const visibleProjects = HOME_SHOWCASE_PROJECTS.filter((project) =>
    matchesFilter(project.categories, activeFilter)
  );

  const totalPages = Math.max(1, Math.ceil(visibleProjects.length / PROJECTS_PER_PAGE));
  const safePage = Math.min(page, totalPages - 1);
  const pageStart = safePage * PROJECTS_PER_PAGE;
  const pageProjects = visibleProjects.slice(pageStart, pageStart + PROJECTS_PER_PAGE);

  return (
    <>
      <div
        className="mt-6 mb-8 flex flex-wrap justify-center gap-2 px-1 sm:px-4"
        role="tablist"
        aria-label="Filter projects by category"
      >
        {SHOWCASE_FILTER_TABS.map((tab) => {
          const isActive = activeFilter === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => {
                setActiveFilter(tab.id);
                setPage(0);
              }}
              className={cn(tabBaseClassName, isActive && tabActiveClassName)}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <div
        className="grid grid-cols-1 items-stretch gap-5 sm:gap-6 md:grid-cols-3 md:gap-8"
        aria-live="polite"
        aria-label={`Featured projects, page ${safePage + 1} of ${totalPages}`}
      >
        {pageProjects.map((project) => (
          <div
            key={project.id}
            className={cn(
              "flex h-full min-h-0 w-full min-w-0",
              pageProjects.length === 1 && "md:col-start-2"
            )}
          >
            <ShowcaseProjectCard project={project} />
          </div>
        ))}
      </div>

      {totalPages > 1 ? (
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            className={navButtonClassName}
            disabled={safePage === 0}
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            aria-label="Show previous projects"
          >
            Previous
          </button>
          <span className="min-w-[4.5rem] text-center text-xs font-medium text-zinc-400">
            {safePage + 1} / {totalPages}
          </span>
          <button
            type="button"
            className={navButtonClassName}
            disabled={safePage >= totalPages - 1}
            onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
            aria-label="Show next projects"
          >
            Next
          </button>
        </div>
      ) : null}
    </>
  );
}
