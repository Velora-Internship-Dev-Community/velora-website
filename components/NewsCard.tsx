import Image from "next/image";
import Link from "next/link";
import { formatDate } from "@/lib/format";
import type { NewsArticle } from "@/lib/types";

interface NewsCardProps {
  article: NewsArticle;
  /** Heading level, so the card nests correctly under whatever section heading it sits in. */
  headingLevel?: 2 | 3;
}

/** Same card structure as the Projects cards, with article metadata added. */
export default function NewsCard({ article, headingLevel = 3 }: NewsCardProps) {
  const Heading = headingLevel === 2 ? "h2" : "h3";

  return (
    <article
      className="flex flex-col justify-between border border-[#E1E1E1] bg-white p-5"
      style={{ borderRadius: "10px" }}
    >
      <div>
        <div className="relative mb-6 aspect-[4/3] w-full overflow-hidden" style={{ borderRadius: "8px" }}>
          <Image
            src={article.coverImage}
            alt=""
            fill
            sizes="(min-width: 1024px) 384px, (min-width: 768px) 45vw, 100vw"
            className="object-cover"
          />
        </div>

        <div className="mb-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-slate-500">
          <span className="rounded-full border border-brand-blue/30 bg-white px-3 py-1 font-medium text-brand-blue">
            {article.category}
          </span>
          <time dateTime={article.date}>{formatDate(article.date)}</time>
        </div>

        <Heading className="mb-2 font-heading text-2xl font-normal tracking-tight text-slate-900">
          {article.title}
        </Heading>
        <p className="line-clamp-3 text-sm leading-normal text-slate-500 md:text-base">
          {article.excerpt}
        </p>
        <p className="mt-4 text-xs text-slate-400">
          {article.author} · {article.authorRole}
        </p>
      </div>

      <div className="mt-6 pt-2">
        <Link
          href={`/news/${article.slug}`}
          className="inline-flex items-center text-sm font-medium text-brand-blue hover:underline"
        >
          Read article →
        </Link>
      </div>
    </article>
  );
}
