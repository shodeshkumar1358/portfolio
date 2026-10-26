"use client";

import { useState } from "react";
import { portfolio, projects } from "@/data/portfolio";
import ProjectCard from "@/components/projects/ProjectCard";
import SectionLabel from "@/components/ui/SectionLabel";

const filters = [
  "All",
  ...new Set(projects.map((project) => project.filterCategory)),
];

export default function WorkSection() {
  const [activeFilter, setActiveFilter] = useState("All");
  const visibleProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.filterCategory === activeFilter);

  return (
    <section className="work-section page-wrap" id="work">
      <div className="section-heading">
        <SectionLabel number="01">My projects</SectionLabel>
        <p>{portfolio.projectIntroduction}</p>
      </div>
      <div className="project-filters" role="group" aria-label="Filter projects">
        {filters.map((filter) => (
          <button
            aria-pressed={activeFilter === filter}
            className="project-filter"
            key={filter}
            onClick={() => setActiveFilter(filter)}
            type="button"
          >
            {filter}
          </button>
        ))}
      </div>
      <div className="project-grid">
        {visibleProjects.map((project) => (
          <ProjectCard key={project.number} project={project} />
        ))}
      </div>
    </section>
  );
}
