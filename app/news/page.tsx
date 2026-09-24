import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "News & Updates — Velora",
  description: "Announcements, milestones, and activity from across Velora's technology work.",
};

const GRADIENTS = ["news-gradient-warm", "news-gradient-pastel", "news-gradient-ethereal"] as const;

const ARTICLES = [
  { slug: "update-1", category: "Product", date: "Mar 11, 2026" },
  { slug: "update-2", category: "Product", date: "Mar 11, 2026" },
  { slug: "update-3", category: "Product", date: "Mar 11, 2026" },
  { slug: "update-4", category: "Product", date: "Mar 11, 2026" },
  { slug: "update-5", category: "Product", date: "Mar 11, 2026" },
  { slug: "update-6", category: "Product", date: "Mar 11, 2026" },
];

const gridBg = {
  backgroundColor: "#f7f7f9",
  backgroundImage:
    "linear-gradient(to right, #E1E1E1 1px, transparent 1px), linear-gradient(to bottom, #E1E1E1 1px, transparent 1px)",
  backgroundSize: "72px 72px",
};

export default function NewsPage() {
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
        <div className="mx-auto w-full max-w-6xl px-6">
          <article
            className="flex flex-col items-stretch justify-between overflow-hidden border border-[#E1E1E1] bg-white md:flex-row"
            style={{ borderRadius: "10px" }}
          >
            <div className="flex flex-col justify-between p-8 sm:p-10 md:w-7/12 lg:p-12">
              <div>
                <h2 className="mb-4 font-heading text-2xl font-normal tracking-tight text-slate-900 sm:text-3xl">
                  Introducing a new feature
                </h2>
                <p className="mb-8 max-w-xl text-sm leading-relaxed text-slate-500">
                  Velora Tech Labs develops digital platforms, management systems, intelligent
                  educational tools, and technology solutions supporting education and skills
                  development.
                </p>
              </div>
              <div className="flex items-center justify-between pt-4 text-xs font-medium text-slate-400">
                <time dateTime="2028-09-13">13 September, 2028</time>
                <Link
                  href="/news/introducing-a-new-feature"
                  className="inline-flex items-center gap-1.5 font-semibold text-brand-blue hover:underline"
                >
                  READ MORE →
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center p-3 sm:p-4 md:w-5/12">
              <div
                className="news-gradient-featured h-56 min-h-[220px] w-full md:h-full"
                style={{ borderRadius: "8px" }}
              />
            </div>
          </article>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-10 font-heading text-3xl font-normal tracking-tight text-slate-900 sm:text-4xl">
            All news
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-y-16">
            {ARTICLES.map((article, index) => (
              <div key={article.slug} className="flex flex-col">
                <div
                  className={`mb-5 aspect-square w-full border border-slate-200/80 ${GRADIENTS[index % GRADIENTS.length]}`}
                  style={{ borderRadius: "10px" }}
                />
                <h3 className="mb-2 font-heading text-lg font-normal text-slate-900">
                  Introducing feature
                </h3>
                <div className="flex items-center justify-between text-xs font-medium text-slate-400">
                  <div className="flex items-center space-x-3">
                    <span className="font-semibold text-slate-900">{article.category}</span>
                    <span>{article.date}</span>
                  </div>
                  <Link
                    href={`/news/${article.slug}`}
                    className="font-semibold text-brand-blue hover:underline"
                  >
                    READ MORE →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
