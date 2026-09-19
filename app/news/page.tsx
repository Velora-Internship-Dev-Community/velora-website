import type { Metadata } from "next";
import Link from "next/link";

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

export default function NewsPage() {
  return (
    <>
      <section className="border-b border-gray-100 bg-gray-50/70 pb-16 pt-12">
        <div className="mx-auto max-w-content px-6">
          <div className="mb-10 max-w-2xl">
            <h1 className="mb-3 font-heading text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              News &amp; Updates.
            </h1>
            <p className="text-sm font-normal leading-relaxed text-gray-500 sm:text-base">
              Announcements, milestones, and activity from across Velora&apos;s technology work
            </p>
          </div>

          <article className="flex flex-col items-stretch justify-between overflow-hidden rounded-2xl border border-gray-200/80 bg-white shadow-sm transition-shadow hover:shadow-md md:flex-row">
            <div className="flex flex-col justify-between p-8 sm:p-10 md:w-7/12 lg:p-12">
              <div>
                <h2 className="mb-4 font-heading text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                  Introducing a new feature
                </h2>
                <p className="mb-8 max-w-xl text-xs leading-relaxed text-gray-500 sm:text-sm">
                  Velora Tech Labs develops digital platforms, management systems, intelligent
                  educational tools, and technology solutions supporting education and skills
                  development.
                </p>
              </div>
              <div className="flex items-center justify-between pt-4 text-xs font-medium text-gray-400">
                <time dateTime="2028-09-13">13 September, 2028</time>
                <Link
                  href="/news/introducing-a-new-feature"
                  className="group inline-flex items-center gap-1.5 font-semibold text-brand-blue transition-colors hover:text-brand-dark"
                >
                  <span>READ MORE</span>
                  <span
                    className="transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center p-3 sm:p-4 md:w-5/12">
              <div className="news-gradient-featured h-56 min-h-[220px] w-full rounded-xl shadow-inner md:h-full" />
            </div>
          </article>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-content px-6">
          <h2 className="mb-10 font-heading text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            All news
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-3">
            {ARTICLES.map((article, index) => (
              <Link
                key={article.slug}
                href={`/news/${article.slug}`}
                className="group flex flex-col"
              >
                <div
                  className={`mb-5 aspect-square w-full rounded-2xl shadow-sm transition-transform duration-300 group-hover:scale-[1.01] ${GRADIENTS[index % GRADIENTS.length]}`}
                />
                <h3 className="mb-2 font-heading text-lg font-bold text-gray-900 transition-colors group-hover:text-brand-blue">
                  Introducing feature
                </h3>
                <div className="flex items-center justify-between text-xs font-medium text-gray-400">
                  <div className="flex items-center space-x-3">
                    <span className="font-semibold text-gray-900">{article.category}</span>
                    <span>{article.date}</span>
                  </div>
                  <span
                    className="text-sm font-bold text-brand-blue transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
