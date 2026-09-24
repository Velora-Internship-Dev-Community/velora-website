import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Button from "@/components/Button";
import CtaBand from "@/components/CtaBand";
import Footer from "@/components/Footer";
import NewsCard from "@/components/NewsCard";
import { formatDate } from "@/lib/format";
import {
  getNewsArticleBySlug,
  getNewsArticles,
  getRelatedNewsArticles,
} from "@/lib/data/news";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const articles = await getNewsArticles();
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = await getNewsArticleBySlug(params.slug);
  if (!article) return { title: "Article not found — Velora" };
  return {
    title: `${article.title} — Velora News`,
    description: article.excerpt,
  };
}

const gridBg = {
  backgroundColor: "#f7f7f9",
  backgroundImage:
    "linear-gradient(to right, #E1E1E1 1px, transparent 1px), linear-gradient(to bottom, #E1E1E1 1px, transparent 1px)",
  backgroundSize: "72px 72px",
};

export default async function NewsArticlePage({ params }: Props) {
  const article = await getNewsArticleBySlug(params.slug);
  if (!article) notFound();

  const related = await getRelatedNewsArticles(article.slug, 2);

  return (
    <>
      {/* ── 1. HERO ─────────────────────────────────────────────── */}
      <section className="border-b border-[#E1E1E1] pb-20 pt-32" style={gridBg}>
        <div className="mx-auto max-w-5xl px-6">
          <Link
            href="/news"
            className="mb-10 inline-flex items-center gap-1.5 text-sm font-medium text-brand-blue hover:underline"
          >
            ← Back to News &amp; Updates
          </Link>

          <div className="mb-6 flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-brand-blue/30 bg-white px-3 py-1 text-xs font-medium text-brand-blue">
              {article.category}
            </span>
          </div>

          <h1 className="max-w-4xl font-heading text-4xl font-normal leading-[1.2] tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
            {article.title}
          </h1>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-500">
            <p>
              <span className="font-medium text-slate-900">{article.author}</span>
              <span className="text-slate-400"> · {article.authorRole}</span>
            </p>
            <time dateTime={article.date}>{formatDate(article.date)}</time>
          </div>
        </div>
      </section>

      {/* ── 2. COVER + BODY ─────────────────────────────────────── */}
      <article className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div
            className="relative mb-16 aspect-[16/9] w-full overflow-hidden sm:aspect-[21/9]"
            style={{ borderRadius: "10px" }}
          >
            <Image
              src={article.coverImage}
              alt=""
              fill
              priority
              sizes="(min-width: 1024px) 1024px, 100vw"
              className="object-cover"
            />
          </div>

          <div className="mx-auto max-w-3xl">
            <p className="mb-12 text-xl font-normal leading-relaxed text-slate-700">
              {article.excerpt}
            </p>

            <div className="space-y-12">
              {article.content.map((section) => (
                <section key={section.heading}>
                  <h2 className="mb-5 font-heading text-2xl font-normal tracking-tight text-slate-900 sm:text-3xl">
                    {section.heading}
                  </h2>
                  <div className="space-y-5 text-base leading-relaxed text-slate-600 sm:text-lg">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            {article.externalUrl && (
              <aside
                className="mt-16 bg-[#f7f7f9] px-8 py-8"
                style={{ borderRadius: "10px" }}
                aria-label="Original article"
              >
                <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-brand-blue">
                  Original article
                </p>
                <p className="mb-6 text-base leading-relaxed text-slate-600">
                  This is a summary of a guide written by {article.author} and published on{" "}
                  {article.externalSource ?? "another site"}. The full step-by-step walkthrough,
                  with every command and setting, is there.
                </p>
                <Button href={article.externalUrl} external>
                  Read the full guide
                  {article.externalSource ? ` on ${article.externalSource}` : ""} ↗
                </Button>
              </aside>
            )}

            {article.tags.length > 0 && (
              <ul className="mt-12 flex flex-wrap gap-3" aria-label="Topics">
                {article.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm font-normal text-slate-700"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            )}

            <div className="mt-12 border-t border-[#E1E1E1] pt-8">
              <Link
                href="/news"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-blue hover:underline"
              >
                ← Back to News &amp; Updates
              </Link>
            </div>
          </div>
        </div>
      </article>

      {/* ── 3. MORE NEWS ────────────────────────────────────────── */}
      {related.length > 0 && (
        <section className="border-t border-[#E1E1E1] py-20" style={gridBg}>
          <div className="mx-auto max-w-5xl px-6">
            <div className="mb-10 flex items-center justify-between gap-4">
              <h2 className="font-heading text-2xl font-normal tracking-tight text-slate-900 sm:text-3xl">
                More news
              </h2>
              <Link href="/news" className="text-sm font-medium text-brand-blue hover:underline">
                All news →
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-x-14 gap-y-8 md:grid-cols-2">
              {related.map((item) => (
                <NewsCard key={item.id} article={item} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand />
      <Footer />
    </>
  );
}
