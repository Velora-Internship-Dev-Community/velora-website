import type { MetadataRoute } from "next";
import { getNewsArticles } from "@/lib/data/news";

// Set NEXT_PUBLIC_SITE_URL once the production domain is known.
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

const ROUTES = [
  "",
  "/about",
  "/what-we-do",
  "/projects",
  "/industries-partnerships",
  "/news",
  "/contact",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const articles = await getNewsArticles();

  return [
    ...ROUTES.map((route) => ({
      url: `${SITE_URL}${route}`,
      lastModified: new Date(),
    })),
    ...articles.map((article) => ({
      url: `${SITE_URL}/news/${article.slug}`,
      lastModified: new Date(article.date),
    })),
  ];
}
