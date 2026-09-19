import type { MetadataRoute } from "next";

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

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
  }));
}
