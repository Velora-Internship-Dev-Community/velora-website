import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import CtaBand from "@/components/CtaBand";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import { getProjectBySlug, getProjects, getRelatedProjects } from "@/lib/data/projects";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = await getProjectBySlug(params.slug);
  if (!project) return { title: "Project not found — Velora" };
  return {
    title: `${project.name} — Velora Projects`,
    description: project.summary,
  };
}

const gridBg = {
  backgroundColor: "#f7f7f9",
  backgroundImage:
    "linear-gradient(to right, #E1E1E1 1px, transparent 1px), linear-gradient(to bottom, #E1E1E1 1px, transparent 1px)",
  backgroundSize: "72px 72px",
};

export default async function ProjectPage({ params }: Props) {
  const project = await getProjectBySlug(params.slug);
  if (!project) notFound();

  const related = await getRelatedProjects(project.slug, 2);
  const quickFacts = [
    { label: "Sector", value: project.sectors.join(" · ") },
    { label: "Timeline", value: project.timeline },
    { label: "Technology", value: project.stack.slice(0, 3).join(", ") },
    { label: "Status", value: project.status },
  ];

  return (
    <>
      {/* ── 1. HERO ─────────────────────────────────────────────── */}
      <section className="border-b border-[#E1E1E1] pb-24 pt-32" style={gridBg}>
        <div className="mx-auto max-w-5xl px-6">
          <Link
            href="/projects"
            className="mb-10 inline-flex items-center gap-1.5 text-sm font-medium text-brand-blue hover:underline"
          >
            ← Back to Projects
          </Link>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.sectors.map((s) => (
              <span
                key={s}
                className="rounded-full border border-brand-blue/30 bg-white px-3 py-1 text-xs font-medium text-brand-blue"
              >
                {s}
              </span>
            ))}
          </div>

          <h1 className="font-heading text-4xl font-normal leading-[1.2] tracking-tight text-slate-900 sm:text-5xl md:text-6xl max-w-4xl">
            {project.outcome}
          </h1>
          <p className="mt-5 text-lg font-normal text-slate-500">{project.name}</p>
        </div>
      </section>

      {/* ── 2. QUICK-FACTS BAR ──────────────────────────────────── */}
      <section className="bg-white border-b border-[#E1E1E1]">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid grid-cols-2 divide-x divide-[#E1E1E1] md:grid-cols-4">
            {quickFacts.map((fact) => (
              <div key={fact.label} className="px-6 py-8 first:pl-0 last:pr-0">
                <p className="mb-1 text-xs font-medium uppercase tracking-widest text-slate-400">
                  {fact.label}
                </p>
                <p className="text-base font-normal text-slate-900">{fact.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. THE CHALLENGE ────────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-6">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-brand-blue">
            The Challenge
          </p>
          <h2 className="mb-8 font-heading text-3xl font-normal tracking-tight text-slate-900 sm:text-4xl">
            What wasn&apos;t working
          </h2>
          <div className="space-y-5 text-base leading-relaxed text-slate-600 sm:text-lg">
            {project.challenge.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. THE APPROACH ─────────────────────────────────────── */}
      <section className="border-t border-[#E1E1E1] py-20" style={gridBg}>
        <div className="mx-auto max-w-5xl px-6">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-brand-blue">
            The Approach
          </p>
          <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:items-start">
            {/* Image / diagram placeholder */}
            <div
              className="relative aspect-square w-full overflow-hidden"
              style={{ borderRadius: "10px" }}
            >
              <Image
                src={project.image}
                alt=""
                fill
                sizes="(min-width: 768px) 480px, 100vw"
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="mb-8 font-heading text-3xl font-normal tracking-tight text-slate-900 sm:text-4xl">
                How we built it
              </h2>
              <div className="space-y-5 text-base leading-relaxed text-slate-600 sm:text-lg">
                {project.approach.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/what-we-do#connectivity"
                  className="text-sm font-medium text-brand-blue hover:underline"
                >
                  Real connectivity →
                </Link>
                <Link
                  href="/what-we-do#intelligence"
                  className="text-sm font-medium text-brand-blue hover:underline"
                >
                  Real intelligence →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. THE OUTCOME ──────────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-6">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-brand-blue">
            The Outcome
          </p>
          <h2 className="mb-14 font-heading text-3xl font-normal tracking-tight text-slate-900 sm:text-4xl">
            What changed
          </h2>

          {/* Stat callouts */}
          <div
            className="mb-16 grid grid-cols-1 gap-px border border-[#E1E1E1] sm:grid-cols-3"
            style={{ borderRadius: "10px", overflow: "hidden" }}
          >
            {project.stats.map((stat) => (
              <div key={stat.label} className="bg-white px-8 py-10">
                <p className="font-heading text-5xl font-normal tracking-tight text-slate-900 sm:text-6xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-slate-500">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Pull quote */}
          {project.quote && (
            <blockquote
              className="relative bg-[#f7f7f9] px-8 py-8"
              style={{ borderRadius: "10px" }}
            >
              <p className="text-lg font-normal leading-relaxed text-slate-700 sm:text-xl">
                &ldquo;{project.quote.text}&rdquo;
              </p>
              <footer className="mt-4 text-sm font-medium text-slate-500">
                — {project.quote.author}
              </footer>
            </blockquote>
          )}
        </div>
      </section>

      {/* ── 6. TECHNOLOGY STACK ─────────────────────────────────── */}
      <section className="border-t border-[#E1E1E1] py-16">
        <div className="mx-auto max-w-5xl px-6">
          <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-brand-blue">
            Technology Stack
          </p>
          <div className="flex flex-wrap gap-3">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm font-normal text-slate-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. RELATED PROJECTS ─────────────────────────────────── */}
      <section className="border-t border-[#E1E1E1] py-20" style={gridBg}>
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-10 flex items-center justify-between">
            <h2 className="font-heading text-2xl font-normal tracking-tight text-slate-900 sm:text-3xl">
              Related projects
            </h2>
            <Link href="/projects" className="text-sm font-medium text-brand-blue hover:underline">
              All projects →
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-x-14 gap-y-8 md:grid-cols-2">
            {related.map((item) => (
              <ProjectCard key={item.id} project={item} headingLevel={3} />
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. CTA + FOOTER ─────────────────────────────────────── */}
      <CtaBand />
      <Footer />
    </>
  );
}
