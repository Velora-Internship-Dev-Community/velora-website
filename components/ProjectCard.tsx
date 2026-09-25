import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/types";

interface ProjectCardProps {
  project: Project;
  headingLevel?: 2 | 3;
}

export default function ProjectCard({ project, headingLevel = 2 }: ProjectCardProps) {
  const Heading = headingLevel === 2 ? "h2" : "h3";

  return (
    <article
      className="flex flex-col justify-between border border-[#E1E1E1] bg-white p-5"
      style={{ borderRadius: "10px" }}
    >
      <div>
        <div
          className="relative mb-6 aspect-[4/3] w-full overflow-hidden"
          style={{ borderRadius: "8px" }}
        >
          <Image
            src={project.image}
            alt=""
            fill
            sizes="(min-width: 1152px) 528px, (min-width: 768px) 45vw, 100vw"
            className="object-cover"
          />
        </div>
        <ul className="mb-3 flex flex-wrap gap-2" aria-label="Sectors">
          {project.sectors.map((sector) => (
            <li
              key={sector}
              className="rounded-full border border-brand-blue/30 bg-white px-3 py-1 text-xs font-medium text-brand-blue"
            >
              {sector}
            </li>
          ))}
        </ul>
        <Heading className="mb-2 font-heading text-2xl font-normal tracking-tight text-slate-900">
          {project.name}
        </Heading>
        <p className="text-sm leading-normal text-slate-500 md:text-base">{project.summary}</p>
      </div>
      <div className="mt-6 pt-2">
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center text-sm font-medium text-brand-blue hover:underline"
        >
          View project →
        </Link>
      </div>
    </article>
  );
}
