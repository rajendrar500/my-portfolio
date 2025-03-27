"use client";

import Image from "next/image";
import type { ShowcaseGallerySlide } from "@/lib/home-content";

const THUMB_HEIGHT = "h-44 sm:h-48";

export function ShowcaseProjectGallery({
  slides,
  projectName,
}: {
  slides: ShowcaseGallerySlide[];
  projectName: string;
}) {
  if (slides.length === 0) return null;

  if (slides.length === 1) {
    const slide = slides[0];
    return (
      <div
        className={`relative overflow-hidden rounded-2xl border border-purple-500/10 bg-zinc-950/50 ${THUMB_HEIGHT}`}
      >
        <Image
          src={slide.src}
          alt={slide.alt}
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
          className="object-cover object-top"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-transparent to-purple-500/10"
          aria-hidden="true"
        />
      </div>
    );
  }

  return (
    <div
      className="scrollbar-hide -mx-1 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2"
      aria-label={`${projectName} product screenshots`}
    >
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`relative w-[min(88vw,340px)] shrink-0 snap-center overflow-hidden rounded-2xl border border-purple-500/10 bg-zinc-950/50 ${THUMB_HEIGHT}`}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            sizes="340px"
            className="object-cover object-top"
          />
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-zinc-950/90 to-transparent px-3 py-2"
            aria-hidden="true"
          >
            <span className="font-mono text-[10px] uppercase tracking-widest text-purple-300/90">
              {index + 1} / {slides.length}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
