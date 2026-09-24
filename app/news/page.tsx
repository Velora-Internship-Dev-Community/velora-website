import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import NewsCard from "@/components/NewsCard";
import { formatDate } from "@/lib/format";
import { getFeaturedNewsArticle, getNewsArticles } from "@/lib/data/news";

export const metadata: Metadata = {
  title: "News & Updates — Velora",
  description: "Announcements, milestones, and activity from across Velora's technology work.",
};

const gridBg = {
  backgroundColor: "#f7f7f9",
  backgroundImage:
    "linear-gradient(to right, #E1E1E1 1px, transparent 1px), linear-gradient(to bottom, #E1E1E1 1px, transparent 1px)",
  backgroundSize: "72px 72px",
};

export default async function NewsPage() {
  const [featured, articles] = await Promise.all([getFeaturedNewsArticle(), getNewsArticles()]);
  const moreArticles = articles.filter((article) => article.id !== featured?.id);

  return (
    <>
      <section
        className="flex min-h-screen flex-col justify-center border-b border-[#E1E1E1] pb-20 pt-40"
        style={gridBg}
      >
        {/* Title — same container as projects page */}
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="mb-10 max-w-2xl">
            <h1 className="mb-4 font-heading text-4xl font-normal tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
              News &amp; Updates.
            </h1>
            <p className="text-base font-normal leading-relaxed text-slate-500 sm:text-lg">
              Announcements, milestones, and activity from across Velora&apos;s technology work
            </p>
          </div>
        </div>

        {/* Featured card — same width as title */}
        {featured && (
          <div className="mx-auto w-full max-w-6xl px-6">
            <article
              className="flex flex-col items-stretch justify-between overflow-hidden border border-[#E1E1E1] bg-white md:flex-row"
              style={{ borderRadius: "10px" }}
            >
              <div className="flex flex-col justify-between p-8 sm:p-10 md:w-7/12 lg:p-12">
                <div>
                  <div className="mb-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-slate-500">
                    <span className="rounded-full border border-brand-blue/30 bg-white px-3 py-1 font-medium text-brand-blue">
                      {featured.category}
                    </span>
                    <span>Featured</span>
                  </div>
                  <h2 className="mb-4 font-heading text-2xl font-normal tracking-tight text-slate-900 sm:text-3xl">
                    {featured.title}
                  </h2>
                  <p className="mb-6 max-w-xl text-sm leading-relaxed text-slate-500">
                    {featured.excerpt}
                  </p>
                  <p className="text-xs text-slate-400">
                    {featured.author} · {featured.authorRole}
                  </p>
                </div>
                <div className="mt-8 flex items-center justify-between gap-4 pt-4 text-xs font-medium text-slate-400">
                  <time dateTime={featured.date}>{formatDate(featured.date)}</time>
                  <Link
                    href={`/news/${featured.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-blue hover:underline"
                  >
                    Read article →
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center p-3 sm:p-4 md:w-5/12">
                <div
                  className="relative h-56 min-h-[220px] w-full overflow-hidden md:h-full"
                  style={{ borderRadius: "8px" }}
                >
                  <Image
                    src={featured.coverImage}
                    alt=""
                    fill
                    priority
                    sizes="(min-width: 768px) 40vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </article>
          </div>
        )}
      </section>

      {moreArticles.length > 0 && (
        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="mb-10 font-heading text-3xl font-normal tracking-tight text-slate-900 sm:text-4xl">
              All news
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-x-14 md:gap-y-12 lg:grid-cols-3 lg:gap-x-8">
              {moreArticles.map((article) => (
                <NewsCard key={article.id} article={article} />
              ))}
            </div>
          </div>
        </section>
      )}
      <Footer />
    </>
  );
}
