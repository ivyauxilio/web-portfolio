import type { Project } from "../types";
import Tag from "./Tag";

interface Props {
  project: Project;
  onPreview: (project: Project) => void;
}

export default function ProjectCard({ project, onPreview }: Props) {
  const { title, summary, role, year, stack, liveUrl, repoUrl, screenshots } =
    project;
  const hasShots = !!screenshots?.length;
  return (
    <article className="flex h-full flex-col rounded-2xl border border-midnight-900/10 bg-white p-6 transition-transform duration-300 hover:-translate-y-1 hover:border-midnight-600/40">
      <p className="text-sm text-midnight-800/70">
        {role}, {year}
      </p>
      <h3 className="mt-2 font-display text-xl font-bold text-midnight-900">
        {title}
      </h3>
      <p className="mt-3 flex-1 leading-relaxed text-midnight-800/85">
        {summary}
      </p>
      <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
        {stack.map((s) => (
          <li key={s}>
            <Tag>{s}</Tag>
          </li>
        ))}
      </ul>
      {(liveUrl || repoUrl || hasShots) && (
        <div className="mt-5 flex gap-5 text-sm font-medium text-midnight-600">
          {hasShots && (
            <button
              onClick={() => onPreview(project)}
              className="underline-offset-4 hover:underline"
            >
              Preview
            </button>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noreferrer"
              className="underline-offset-4 hover:underline"
            >
              View live site
            </a>
          )}
          {repoUrl && (
            <a
              href={repoUrl}
              target="_blank"
              rel="noreferrer"
              className="underline-offset-4 hover:underline"
            >
              View code
            </a>
          )}
        </div>
      )}
    </article>
  );
}
