"use client";

import { useMemo, useState } from "react";
import FilterBar from "@/components/FilterBar";
import ProjectCard from "@/components/ProjectCard";
import type { Project } from "@/lib/types";

const ALL = "All";

export default function ProjectsGrid({ projects }: { projects: Project[] }) {
  const [sector, setSector] = useState(ALL);

  const sectors = useMemo(
    () => [ALL, ...Array.from(new Set(projects.flatMap((p) => p.sectors))).sort()],
    [projects]
  );
  const visible = sector === ALL ? projects : projects.filter((p) => p.sectors.includes(sector));

  return (
    <>
      <div className="mb-10">
        <FilterBar
          label="Filter projects by sector"
          options={sectors}
          active={sector}
          onChange={setSector}
        />
        <p className="mt-4 text-sm text-slate-500" role="status" aria-live="polite">
          Showing {visible.length} of {projects.length} projects
        </p>
      </div>
      <div className="grid grid-cols-1 gap-y-8 md:grid-cols-2 md:gap-x-14 md:gap-y-12">
        {visible.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </>
  );
}
