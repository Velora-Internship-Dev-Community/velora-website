/**
 * Content types shared by the data layer (lib/data/*) and the UI.
 *
 * These mirror the shape a backend/CMS would return. UI components only ever
 * consume these types, never raw literals, so swapping the demo data for an
 * API response later does not touch any presentation code.
 */

export interface NewsArticleSection {
  heading: string;
  paragraphs: string[];
}

export interface NewsArticle {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  author: string;
  authorRole: string;
  /** ISO date (YYYY-MM-DD). Formatted at render time via lib/format. */
  date: string;
  category: string;
  /** Path under /public (or an absolute URL once media is served remotely). */
  coverImage: string;
  content: NewsArticleSection[];
  tags: string[];
  /** Where the full original piece lives, when the article is syndicated. */
  externalUrl?: string;
  /** Name of the publication behind externalUrl, e.g. "Strettch Cloud". */
  externalSource?: string;
  featured?: boolean;
}

export type ActivityStatus = "upcoming" | "ongoing" | "completed";

export interface CollaborationActivity {
  id: string;
  title: string;
  description: string;
  /** ISO date (YYYY-MM-DD) of the activity, or its start date if ongoing. */
  date: string;
  category: string;
  /** Who takes part: partner organisation, community, or audience. */
  participants: string;
  status: ActivityStatus;
  coverImage: string;
  /** Optional call to action; omitted for completed activities. */
  cta?: { label: string; href: string };
}

export interface CoreValue {
  id: string;
  name: string;
  description: string;
  /** Gradient artwork drawn from the same set used by the Projects section. */
  image: string;
}
