import type { ProjectCategory } from "../types";
import { categoryLabels } from "../data/projects";

export type Filter = "all" | ProjectCategory;

interface Props {
  active: Filter;
  counts: Record<Filter, number>;
  onChange: (filter: Filter) => void;
}

const order: Filter[] = [
  "all",
  "landing",
  "web-app",
  "mobile",
  "blog",
  "other",
];

export default function ProjectFilter({ active, counts, onChange }: Props) {
  return (
    <div
      className="mb-8 flex flex-wrap gap-2"
      role="group"
      aria-label="Filter projects"
    >
      {order
        .filter((f) => f === "all" || counts[f] > 0)
        .map((f) => {
          const selected = f === active;
          return (
            <button
              key={f}
              onClick={() => onChange(f)}
              aria-pressed={selected}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                selected
                  ? "bg-midnight-900 text-lavender-50"
                  : "bg-white text-midnight-800 hover:bg-lavender-200"
              }`}
            >
              {f === "all" ? "All" : categoryLabels[f]}
              <span className="ml-2 opacity-60">{counts[f]}</span>
            </button>
          );
        })}
    </div>
  );
}
