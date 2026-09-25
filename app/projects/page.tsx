import type { Metadata } from "next";
import Link from "next/link";
import CtaBand from "@/components/CtaBand";
import Footer from "@/components/Footer";
import NewsCard from "@/components/NewsCard";
import ProjectsGrid from "@/components/ProjectsGrid";
import { getLatestNewsArticles } from "@/lib/data/news";
import { getProjects } from "@/lib/data/projects";

export const metadata: Metadata = {
  title: "Projects — Velora",
  description:
    "7 active technology projects across our core sectors — technology built for real challenges.",
};

const gridBg = {
  backgroundColor: "#f7f7f9",
  backgroundImage:
    "linear-gradient(to right, #E1E1E1 1px, transparent 1px), linear-gradient(to bottom, #E1E1E1 1px, transparent 1px)",
  backgroundSize: "72px 72px",
};

export default async function ProjectsPage() {
  const [projects, latestNews] = await Promise.all([getProjects(), getLatestNewsArticles(2)]);

  return (
    <div style={gridBg} className="min-h-screen">
      <section className="border-b border-[#E1E1E1] pb-32 pt-40">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl">
            <h1 className="mb-6 font-heading text-4xl font-normal leading-[1.25] tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
              Projects
            </h1>
            <p className="text-base font-normal leading-relaxed text-slate-500 sm:text-lg">
              {projects.length} active technology projects across our core sectors — technology
              built for real challenges.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <ProjectsGrid projects={projects} />
      </section>

      {/* Projects continue into News & Updates: same cards, same grid. */}
      <section className="border-t border-[#E1E1E1] pb-20 pt-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-xl">
              <h2 className="mb-3 font-heading text-3xl font-normal tracking-tight text-slate-900 sm:text-4xl">
                News &amp; Updates
              </h2>
              <p className="text-base leading-relaxed text-slate-500">
                Field notes, engineering write-ups, and announcements from behind the work.
              </p>
            </div>
            <Link href="/news" className="text-sm font-medium text-brand-blue hover:underline">
              All news →
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-y-8 md:grid-cols-2 md:gap-x-14 md:gap-y-12">
            {latestNews.map((article) => (
              <NewsCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
      <Footer />
    </div>
  );
}
