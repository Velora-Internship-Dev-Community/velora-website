import type { Project } from "@/lib/types";

/**
 * Demo projects. Illustrative placeholder content (names, figures, quotes) until
 * real case studies are supplied; replace the array or the accessor bodies with
 * an API/CMS call and nothing else needs to change.
 */
const PROJECTS: Project[] = [
  {
    id: "smart-garden-system",
    slug: "smart-garden-system",
    name: "Smart Garden System",
    summary: "AI-driven crop monitoring for better yields",
    outcome: "Cutting irrigation water use by 30% with real-time soil sensors",
    sectors: ["Agriculture", "AI", "IoT"],
    image: "/images/industries/industry-2.jpg",
    challenge: [
      "Smallholder farmers were losing part of their harvests to over- and under-irrigation. Without reliable soil data, decisions were made by guesswork, which wasted water and made yields unpredictable.",
      "The goal was a low-cost, offline-capable monitoring system that gives farmers real-time visibility into soil conditions and acts on that data automatically.",
    ],
    approach: [
      "We deployed a network of custom IoT sensor nodes that measure soil moisture, temperature and pH at depth. The nodes talk over a low-power mesh network to a local hub.",
      "The hub runs a lightweight ML model that predicts irrigation need and triggers valve control, trained on historical soil and weather data for the Rwandan highlands.",
    ],
    stats: [
      { value: "30%", label: "reduction in water use" },
      { value: "3 mo", label: "from prototype to deployment" },
      { value: "7", label: "farms in the pilot" },
    ],
    quote: {
      text: "Before this system, we were irrigating on instinct. Now we have data telling us exactly when and how much.",
      author: "Pilot farm coordinator, Musanze District",
    },
    stack: ["Python", "React", "Node.js", "PostgreSQL", "Docker", "TensorFlow", "C++"],
    timeline: "3 months",
    status: "Live — Pilot phase",
  },
  {
    id: "clean-water-monitor",
    slug: "clean-water-monitor",
    name: "Clean Water Monitor",
    summary: "Live water-quality tracking for rural supply points",
    outcome: "Flagging unsafe water within minutes instead of weeks",
    sectors: ["Water", "IoT"],
    image: "/images/industries/industry-3.jpg",
    challenge: [
      "Rural water points were tested a few times a year, so contamination often went unnoticed until people fell sick.",
      "Communities needed a cheap way to know, every day, whether their water was safe to drink.",
    ],
    approach: [
      "Solar-powered sensor units measure turbidity, pH and conductivity at each supply point and send readings over a low-power radio link.",
      "A simple dashboard and SMS alerts tell local caretakers when a reading leaves the safe range, so they can act the same day.",
    ],
    stats: [
      { value: "Minutes", label: "to flag a bad reading" },
      { value: "12", label: "supply points monitored" },
      { value: "24/7", label: "coverage on solar power" },
    ],
    stack: ["C++", "Python", "PostgreSQL", "React", "Docker"],
    timeline: "4 months",
    status: "Live — Pilot phase",
  },
  {
    id: "learnlink-classroom",
    slug: "learnlink-classroom",
    name: "LearnLink Classroom",
    summary: "Offline-first learning platform for schools",
    outcome: "Bringing digital lessons to classrooms without reliable internet",
    sectors: ["Education", "Software"],
    image: "/images/industries/industry-4.jpg",
    challenge: [
      "Many schools have devices but unreliable or expensive connectivity, so online learning tools simply do not work there.",
      "Teachers needed lessons, exercises and progress tracking that keep working offline and sync when a connection appears.",
    ],
    approach: [
      "A local school server hosts lessons and exercises over the school network, with a web app that works entirely offline.",
      "Progress syncs to the cloud whenever a connection is available, giving teachers and administrators a shared view across schools.",
    ],
    stats: [
      { value: "100%", label: "of lessons available offline" },
      { value: "5", label: "schools in the first rollout" },
      { value: "2 mo", label: "from design to first classroom" },
    ],
    stack: ["React", "Node.js", "PostgreSQL", "Docker"],
    timeline: "5 months",
    status: "Live — Rolling out",
  },
  {
    id: "farm-market-connect",
    slug: "farm-market-connect",
    name: "Farm Market Connect",
    summary: "Connecting farmers to buyers with live price data",
    outcome: "Helping farmers sell at fairer prices with shared market data",
    sectors: ["Agriculture", "Software"],
    image: "/images/partners/backgrounds/partner-bg-1.jpg",
    challenge: [
      "Farmers often sold to the first buyer who arrived because they had no view of current prices elsewhere.",
      "Buyers, in turn, struggled to find reliable supply in the quantities they needed.",
    ],
    approach: [
      "A mobile-friendly platform, also reachable by USSD, lets farmers list produce and see current prices in nearby markets.",
      "Buyers browse listings and place orders directly, and both sides get confirmations by SMS.",
    ],
    stats: [
      { value: "USSD", label: "and web access for every phone" },
      { value: "3", label: "markets connected in the pilot" },
      { value: "8 wks", label: "to launch the first version" },
    ],
    stack: ["React", "Node.js", "PostgreSQL", "Docker"],
    timeline: "2 months",
    status: "Live — Pilot phase",
  },
  {
    id: "grid-watch",
    slug: "grid-watch",
    name: "Grid Watch",
    summary: "Infrastructure monitoring for small power networks",
    outcome: "Spotting faults on local power networks before outages spread",
    sectors: ["Infrastructure", "IoT"],
    image: "/images/partners/backgrounds/partner-bg-2.jpg",
    challenge: [
      "Small local power networks were monitored by hand, so faults were found only after customers lost power.",
      "Operators needed continuous visibility without expensive industrial monitoring equipment.",
    ],
    approach: [
      "Compact meters measure load and voltage at key points and report over a low-power mesh network to a central control view.",
      "Simple rules flag abnormal readings and alert the on-call technician, with a history view to help find recurring problems.",
    ],
    stats: [
      { value: "Real-time", label: "load and voltage visibility" },
      { value: "9", label: "monitoring points installed" },
      { value: "4 mo", label: "from survey to go-live" },
    ],
    stack: ["C++", "Python", "PostgreSQL", "React", "Docker"],
    timeline: "4 months",
    status: "Live — Pilot phase",
  },
  {
    id: "crop-vision",
    slug: "crop-vision",
    name: "Crop Vision",
    summary: "Spotting plant disease early from a phone photo",
    outcome: "Identifying common crop diseases early from a single photo",
    sectors: ["Agriculture", "AI"],
    image: "/images/partners/backgrounds/partner-bg-5.jpg",
    challenge: [
      "By the time a plant disease is obvious, it has often already spread across a field.",
      "Extension officers cannot visit every farm, and farmers needed a first opinion they could get on the spot.",
    ],
    approach: [
      "A lightweight image-classification model, trained on locally collected leaf photos, runs on the farmer's phone.",
      "It suggests the likely problem and the recommended next step, and flags uncertain cases for an extension officer to review.",
    ],
    stats: [
      { value: "On-device", label: "works without a connection" },
      { value: "6", label: "common diseases recognised" },
      { value: "3 mo", label: "of local data collection" },
    ],
    stack: ["Python", "TensorFlow", "React", "Node.js"],
    timeline: "6 months",
    status: "In development",
  },
  {
    id: "community-connect-hub",
    slug: "community-connect-hub",
    name: "Community Connect Hub",
    summary: "Shared digital services for local communities",
    outcome: "Giving local communities one place for shared digital services",
    sectors: ["Infrastructure", "Education", "Software"],
    image: "/images/partners/backgrounds/partner-bg-6.jpg",
    challenge: [
      "Community centres offered internet and computers, but each service ran separately and was hard to manage.",
      "Volunteers needed a simple way to schedule equipment, run training and report usage.",
    ],
    approach: [
      "A single web app handles bookings, training sessions and equipment tracking, and works on the slow connections typical of community centres.",
      "Monthly usage reports are generated automatically, so centre managers can show their impact to funders.",
    ],
    stats: [
      { value: "1", label: "app for bookings, training and reports" },
      { value: "4", label: "community centres onboarded" },
      { value: "10 wks", label: "to build and launch" },
    ],
    stack: ["React", "Node.js", "PostgreSQL", "Docker"],
    timeline: "3 months",
    status: "Live — Rolling out",
  },
];

export async function getProjects(): Promise<Project[]> {
  return PROJECTS;
}

export async function getProjectBySlug(slug: string): Promise<Project | undefined> {
  return PROJECTS.find((project) => project.slug === slug);
}

/** Other projects, those sharing a sector first. */
export async function getRelatedProjects(slug: string, limit = 2): Promise<Project[]> {
  const current = PROJECTS.find((project) => project.slug === slug);
  const shared = (project: Project) =>
    current ? project.sectors.filter((s) => current.sectors.includes(s)).length : 0;
  return PROJECTS.filter((project) => project.slug !== slug)
    .sort((a, b) => shared(b) - shared(a))
    .slice(0, limit);
}
