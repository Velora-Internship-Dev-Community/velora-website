import type { NewsArticle } from "@/lib/types";

/**
 * DEMO DATA — the only place news content lives in the frontend.
 *
 * The first entry summarises a real article published by Strettch Cloud (one
 * of Velora's technology and infrastructure partners). The other entries are
 * placeholder editorial content derived from work already shown on the site.
 *
 * When a backend exists, delete NEWS_ARTICLES and change the bodies of the
 * accessor functions below to fetch from the API. Pages and components only
 * depend on the accessors and on the NewsArticle type, so nothing else moves.
 */
const NEWS_ARTICLES: NewsArticle[] = [
  {
    id: "news-001",
    title: "Ship your fullstack app with Dokploy on Strettch Cloud",
    slug: "deploy-fullstack-app-dokploy",
    excerpt:
      "A practical guide to deploying a full-stack application with Dokploy on Strettch Cloud, covering the frontend, backend, domains, environment variables, MongoDB, and common deployment issues.",
    author: "Eve Umutoni",
    authorRole: "Technical Content Engineer Intern",
    date: "2026-08-07",
    category: "Technical / Cloud",
    coverImage: "/images/industries/industry-3.jpg",
    tags: ["Dokploy", "Docker", "Full-stack", "Deployment", "MongoDB"],
    externalUrl: "https://cloud.strettch.com/blog/deploy-fullstack-app-dokploy",
    externalSource: "Strettch Cloud",
    featured: true,
    content: [
      {
        heading: "What the guide covers",
        paragraphs: [
          "Dokploy is a self-hosted platform-as-a-service: it gives a single server the deploy-from-Git workflow teams usually pay a managed platform for. This guide from Strettch Cloud walks through putting a complete full-stack app live on one, using a Vue 3 frontend, an Express API, and MongoDB as the worked example.",
          "It is written as a follow-along tutorial, so every stage from an empty server to a live HTTPS site is covered in order.",
        ],
      },
      {
        heading: "How the pieces fit together",
        paragraphs: [
          "Traefik, the reverse proxy Dokploy runs, receives each browser request and routes it to either the frontend or the backend container based on the domain. The database sits outside the server on MongoDB Atlas, so the app data does not live on the machine that runs the containers.",
        ],
      },
      {
        heading: "Setting up the Compute and the domain",
        paragraphs: [
          "The setup starts by creating a Compute on Strettch Cloud from the Dokploy application image, then reaching it over SSH or the browser console. Domains come next: point DNS A records for the frontend and backend subdomains at the Compute's IP address so Dokploy can issue certificates for them.",
        ],
      },
      {
        heading: "Connecting GitHub and deploying the services",
        paragraphs: [
          "Installing the GitHub App gives Dokploy access to your repositories, and a Dokploy project then groups the services. The frontend is built from its Dockerfile with build-time environment variables, while the backend takes runtime variables such as the MongoDB connection string and port.",
          "An optional final step merges both services onto a single domain with path-based routing, so the API is served under the same address as the site.",
        ],
      },
      {
        heading: "When something goes wrong",
        paragraphs: [
          "The closing section is a troubleshooting checklist for the nine most common deployment failures, including SSH key policies, Node version mismatches, wrong port settings, database connectivity, and certificate problems. It is the part most worth bookmarking.",
        ],
      },
    ],
  },
  {
    id: "news-002",
    title: "Smart Garden pilot: what seven farms taught us about soil sensing",
    slug: "smart-garden-pilot-field-notes",
    excerpt:
      "Field notes from the first Smart Garden System deployment, from sensor placement and calibration to the irrigation savings the pilot farms measured.",
    author: "Velora Team",
    authorRole: "Editorial",
    date: "2026-07-22",
    category: "Projects / Field notes",
    coverImage: "/images/partners/backgrounds/partner-bg-1.jpg",
    tags: ["IoT", "Agriculture", "Smart Garden"],
    content: [
      {
        heading: "Why we ran a pilot first",
        paragraphs: [
          "Soil moisture sensors look simple on a workbench and behave very differently in a working field. Before scaling the Smart Garden System we deployed it on seven farms to learn how it copes with real soil, real weather, and real connectivity.",
        ],
      },
      {
        heading: "What we measured",
        paragraphs: [
          "Across the pilot, irrigation water use fell by about 30% once farmers followed the system's recommendations instead of watering on instinct. Just as useful were the lessons about sensor depth, calibration per soil type, and how often nodes need to report.",
        ],
      },
    ],
  },
  {
    id: "news-003",
    title: "Designing offline-first IoT nodes for low-connectivity farms",
    slug: "offline-first-iot-nodes",
    excerpt:
      "Why the Smart Garden hardware keeps working when the network does not, and the local-hub design behind it.",
    author: "Velora Team",
    authorRole: "Engineering",
    date: "2026-06-18",
    category: "Engineering",
    coverImage: "/images/partners/backgrounds/partner-bg-5.jpg",
    tags: ["IoT", "Embedded systems", "Architecture"],
    content: [
      {
        heading: "Start from the worst network",
        paragraphs: [
          "Rural deployments cannot assume a steady connection, so our sensor nodes talk to a local hub over a low-power mesh and keep working with no internet at all. Cloud sync is a bonus rather than a dependency.",
        ],
      },
      {
        heading: "Decisions at the edge",
        paragraphs: [
          "The hub runs a lightweight prediction model so irrigation decisions happen on site. Data is queued and sent upstream whenever a connection appears, which keeps dashboards useful without making the field wait on them.",
        ],
      },
    ],
  },
  {
    id: "news-004",
    title: "One team from prototype to deployment",
    slug: "prototype-to-deployment-one-team",
    excerpt:
      "Why Velora keeps software, AI, and connected-systems work under one roof, and what it changes for the organisations we build with.",
    author: "Velora Team",
    authorRole: "Editorial",
    date: "2026-05-12",
    category: "Company",
    coverImage: "/images/partners/backgrounds/partner-bg-6.jpg",
    tags: ["Capabilities", "Process"],
    content: [
      {
        heading: "Fewer hand-offs",
        paragraphs: [
          "A single project can need a web app, a machine-learning model, and a sensor network. Keeping those disciplines in one team means fewer hand-offs, fewer gaps between them, and one group accountable for the result.",
        ],
      },
      {
        heading: "Built around a real problem",
        paragraphs: [
          "Every engagement starts from a concrete challenge rather than a feature list. That shapes which capabilities we bring in, and it keeps the work measurable once it is deployed.",
        ],
      },
    ],
  },
];

function byNewestFirst(a: NewsArticle, b: NewsArticle): number {
  return b.date.localeCompare(a.date);
}

/** All articles, newest first. */
export async function getNewsArticles(): Promise<NewsArticle[]> {
  return [...NEWS_ARTICLES].sort(byNewestFirst);
}

export async function getNewsArticleBySlug(slug: string): Promise<NewsArticle | undefined> {
  return NEWS_ARTICLES.find((article) => article.slug === slug);
}

/** The article to lead the News page with: flagged as featured, else the newest. */
export async function getFeaturedNewsArticle(): Promise<NewsArticle | undefined> {
  const articles = await getNewsArticles();
  return articles.find((article) => article.featured) ?? articles[0];
}

export async function getLatestNewsArticles(count: number): Promise<NewsArticle[]> {
  return (await getNewsArticles()).slice(0, count);
}

/** Other articles to suggest after reading one. */
export async function getRelatedNewsArticles(slug: string, count: number): Promise<NewsArticle[]> {
  return (await getNewsArticles()).filter((article) => article.slug !== slug).slice(0, count);
}
