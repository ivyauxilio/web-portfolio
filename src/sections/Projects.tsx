import { useState } from "react";
import Section from "../components/Section";
// import Reveal from "../components/Reveal";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";
import ScreenshotModal from "../components/ScreenshotModal";
import ProjectFilter, { type Filter } from "../components/ProjectFilter";
import type { Project } from "../types";

export default function Projects() {
  const [active, setActive] = useState<Project | null>(null);
  const [filter, setFilter] = useState<Filter>("all");

  const counts = projects.reduce(
    (acc, p) => {
      acc[p.category]++;
      return acc;
    },
    {
      all: projects.length,
      landing: 0,
      "web-app": 0,
      mobile: 0,
      blog: 0,
      other: 0,
    } as Record<Filter, number>,
  );

  const visible =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <Section
      id="projects"
      title="Selected projects"
      intro="A few things I've built recently."
      tinted
    >
      <ProjectFilter active={filter} counts={counts} onChange={setFilter} />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {visible.map((p, i) => (
          <div
            key={`${filter}-${p.id}`}
            className="h-full animate-rise"
            style={{ animationDelay: `${i * 70}ms` }}
          >
            <ProjectCard project={p} onPreview={setActive} />
          </div>
        ))}
      </div>
      <ScreenshotModal project={active} onClose={() => setActive(null)} />
    </Section>
  );
}
