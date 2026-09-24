import type { CollaborationActivity } from "@/lib/types";

/**
 * DEMO DATA — placeholder collaboration activities.
 *
 * Titles, dates, and participants are illustrative and should be replaced with
 * real records. To move to a backend, delete COLLABORATION_ACTIVITIES and make
 * getCollaborationActivities() fetch from the API; the UI depends only on the
 * accessor and the CollaborationActivity type.
 */
const COLLABORATION_ACTIVITIES: CollaborationActivity[] = [
  {
    id: "activity-001",
    title: "Technical mentorship for young developers",
    description:
      "Velora engineers run regular code reviews and project clinics with student teams, turning classroom projects into deployable software.",
    date: "2026-03-02",
    category: "Mentorship",
    participants: "Rwanda Coding Academy students",
    status: "ongoing",
    coverImage: "/images/partners/backgrounds/partner-bg-2.jpg",
    cta: { label: "Get involved", href: "/contact" },
  },
  {
    id: "activity-002",
    title: "Land-restoration monitoring pilot",
    description:
      "Testing low-cost sensors that track soil moisture at tree-planting sites, so restoration teams can see which areas need attention.",
    date: "2026-04-15",
    category: "Field pilot",
    participants: "Resilient Builders Initiative",
    status: "ongoing",
    coverImage: "/images/partners/backgrounds/partner-bg-5.jpg",
    cta: { label: "Get involved", href: "/contact" },
  },
  {
    id: "activity-003",
    title: "Open innovation roundtable: technology for agriculture and water",
    description:
      "A working session bringing developers, farmers' representatives, and infrastructure teams together to name the problems worth building for.",
    date: "2026-10-09",
    category: "Roundtable",
    participants: "ICT Chamber members and community partners",
    status: "upcoming",
    coverImage: "/images/industries/industry-3.jpg",
    cta: { label: "Register interest", href: "/contact" },
  },
  {
    id: "activity-004",
    title: "Cloud deployment workshop for local developers",
    description:
      "A hands-on session deploying a full-stack app end to end, following the Dokploy on Strettch Cloud guide from server to live domain.",
    date: "2026-08-20",
    category: "Workshop",
    participants: "Local developers and Strettch Cloud",
    status: "completed",
    coverImage: "/images/partners/backgrounds/partner-bg-6.jpg",
  },
  {
    id: "activity-005",
    title: "Research sprint: predictive irrigation models",
    description:
      "A short research sprint testing how well soil and weather data can predict irrigation need across different farm conditions.",
    date: "2026-06-08",
    category: "Research",
    participants: "Velora research team and pilot farms",
    status: "completed",
    coverImage: "/images/partners/backgrounds/partner-bg-1.jpg",
  },
  {
    id: "activity-006",
    title: "Community tech clinic",
    description:
      "Open office hours where residents and small organisations bring a problem and leave with a clear next step, technical or not.",
    date: "2026-11-14",
    category: "Community",
    participants: "Open to the public",
    status: "upcoming",
    coverImage: "/images/industries/industry-4.jpg",
    cta: { label: "Register interest", href: "/contact" },
  },
];

/** Upcoming and ongoing activities first, then completed; soonest date first within each. */
export async function getCollaborationActivities(): Promise<CollaborationActivity[]> {
  const order = { upcoming: 0, ongoing: 1, completed: 2 } as const;
  return [...COLLABORATION_ACTIVITIES].sort(
    (a, b) => order[a.status] - order[b.status] || a.date.localeCompare(b.date),
  );
}
