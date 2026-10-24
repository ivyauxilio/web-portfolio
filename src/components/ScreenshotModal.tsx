import { useEffect, useRef, useState } from "react";
import type { Project } from "../types";

interface Props {
  project: Project | null;
  onClose: () => void;
}

export default function ScreenshotModal({ project, onClose }: Props) {
  const [index, setIndex] = useState(0);
  const closeRef = useRef<HTMLButtonElement>(null);
  const shots = project?.screenshots ?? [];
  const total = shots.length;

  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);

  // start from the first image each time a project opens
  useEffect(() => setIndex(0), [project]);

  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && total > 1)
        setIndex((i) => (i - 1 + total) % total);
      if (e.key === "ArrowRight" && total > 1) setIndex((i) => (i + 1) % total);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, total, onClose]);

  if (!project || total === 0) return null;

  return (
    <div
      className="fixed inset-0 z-30 flex animate-rise items-center justify-center bg-midnight-950/70 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={`${project.title} screenshots`}
        className="w-full max-w-4xl overflow-hidden rounded-2xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-midnight-900/10 px-5 py-3">
          <h3 className="font-display text-lg font-bold text-midnight-900">
            {project.title}
            <span className="ml-3 text-sm font-normal text-midnight-800/70">
              {index + 1} of {total}
            </span>
          </h3>
          <button
            ref={closeRef}
            onClick={onClose}
            className="rounded-full px-3 py-1 text-sm font-medium text-midnight-800 hover:bg-lavender-200"
          >
            Close
          </button>
        </div>

        <div className="relative bg-lavender-100">
          <div className="max-h-[65vh] overflow-auto">
            <img
              key={shots[index]}
              src={shots[index]}
              alt={`${project.title} screenshot ${index + 1} of ${total}`}
              className="w-full animate-rise"
            />
          </div>
          {total > 1 && (
            <>
              <button
                onClick={prev}
                aria-label="Previous screenshot"
                className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 px-3 py-2 text-midnight-900 shadow hover:bg-white"
              >
                ‹
              </button>
              <button
                onClick={next}
                aria-label="Next screenshot"
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 px-3 py-2 text-midnight-900 shadow hover:bg-white"
              >
                ›
              </button>
            </>
          )}
        </div>

        {total > 1 && (
          <div className="flex gap-2 overflow-x-auto border-t border-midnight-900/10 p-3">
            {shots.map((src, i) => (
              <button
                key={src}
                onClick={() => setIndex(i)}
                aria-label={`Show screenshot ${i + 1}`}
                aria-current={i === index}
                className={`h-16 w-24 shrink-0 overflow-hidden rounded-md border-2 transition-colors ${
                  i === index
                    ? "border-midnight-600"
                    : "border-transparent opacity-70 hover:opacity-100"
                }`}
              >
                <img
                  src={src}
                  alt=""
                  className="h-full w-full object-cover object-top"
                />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
