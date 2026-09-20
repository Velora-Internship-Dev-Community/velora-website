import type { Metadata } from "next";
import Link from "next/link";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Projects — Velora",
  description:
    "7 active technology projects across our core sectors — technology built for real challenges.",
};

const PROJECTS = Array.from({ length: 7 }, (_, index) => ({
  slug: `project-${index + 1}`,
  title: "Smart Garden System",
  description: "AI-driven crop monitoring for better yields",
}));

export default function ProjectsPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pb-12 pt-16">
        <div className="max-w-2xl">
          <h1 className="mb-4 font-heading text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
            Projects
          </h1>
          <p className="text-base leading-relaxed text-slate-600 md:text-lg">
            7 active technology projects across our core sectors — technology built for real
            challenges.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-10">
          {PROJECTS.map((project) => (
            <article
              key={project.slug}
              className="flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
            >
              <div>
                <div className="project-gradient mb-6 aspect-[4/3] w-full overflow-hidden rounded-xl shadow-inner" />
                <h2 className="mb-2 font-heading text-2xl font-bold tracking-tight text-slate-900">
                  {project.title}
                </h2>
                <p className="text-sm leading-normal text-slate-500 md:text-base">
                  {project.description}
                </p>
              </div>
              <div className="mt-6 pt-2">
                <Link
                  href={`/projects/${project.slug}`}
                  className="group inline-flex items-center text-sm font-medium text-brand-blue hover:text-brand-dark"
                >
                  View project
                  <span className="ml-1.5 transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
