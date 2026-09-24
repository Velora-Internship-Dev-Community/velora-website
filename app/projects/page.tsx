import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import CtaBand from "@/components/CtaBand";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Projects — Velora",
  description:
    "7 active technology projects across our core sectors — technology built for real challenges.",
};

const PROJECT_IMAGES = [
  "/images/industries/industry-2.jpg",
  "/images/industries/industry-3.jpg",
  "/images/industries/industry-4.jpg",
  "/images/partners/backgrounds/partner-bg-1.jpg",
  "/images/partners/backgrounds/partner-bg-2.jpg",
  "/images/partners/backgrounds/partner-bg-5.jpg",
  "/images/partners/backgrounds/partner-bg-6.jpg",
];

const PROJECTS = Array.from({ length: 7 }, (_, index) => ({
  slug: `project-${index + 1}`,
  title: "Smart Garden System",
  description: "AI-driven crop monitoring for better yields",
  image: PROJECT_IMAGES[index],
}));

const gridBg = {
  backgroundColor: "#f7f7f9",
  backgroundImage:
    "linear-gradient(to right, #E1E1E1 1px, transparent 1px), linear-gradient(to bottom, #E1E1E1 1px, transparent 1px)",
  backgroundSize: "72px 72px",
};

export default function ProjectsPage() {
  return (
    <div style={gridBg} className="min-h-screen">
      <section className="border-b border-[#E1E1E1] pb-32 pt-40">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl">
            <h1 className="mb-6 font-heading text-4xl font-normal leading-[1.25] tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
              Projects
            </h1>
            <p className="text-base font-normal leading-relaxed text-slate-500 sm:text-lg">
              7 active technology projects across our core sectors — technology built for real
              challenges.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid grid-cols-1 gap-y-8 md:grid-cols-2 md:gap-x-14 md:gap-y-12">
          {PROJECTS.map((project) => (
            <article
              key={project.slug}
              className="flex flex-col justify-between border border-[#E1E1E1] bg-white p-5"
              style={{ borderRadius: "10px" }}
            >
              <div>
                <div className="relative mb-6 aspect-[4/3] w-full overflow-hidden" style={{ borderRadius: "8px" }}>
                  <Image src={project.image} alt="" fill className="object-cover" />
                </div>
                <h2 className="mb-2 font-heading text-2xl font-normal tracking-tight text-slate-900">
                  {project.title}
                </h2>
                <p className="text-sm leading-normal text-slate-500 md:text-base">
                  {project.description}
                </p>
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
          ))}
        </div>
      </section>

      <CtaBand />
      <Footer />
    </div>
  );
}
