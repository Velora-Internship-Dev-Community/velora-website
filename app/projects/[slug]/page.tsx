import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/Button";
import CtaBand from "@/components/CtaBand";
import Footer from "@/components/Footer";

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: `${params.slug} — Velora Projects`,
    description: "A detailed case study of this Velora project.",
  };
}

// Placeholder project data — replace with CMS/MDX content per slug
const PROJECT = {
  sectors: ["Agriculture", "AI"],
  outcome:
    "Cutting irrigation water use by 30% with real-time soil sensors",
  name: "Smart Garden System",
  challenge: `Rwanda's smallholder farmers were losing significant portions of their harvests to over- and under-irrigation. Without reliable soil data, decisions were made by guesswork — leading to wasted water, degraded soil, and unpredictable yields. Existing solutions were either too expensive or required connectivity that wasn't available in the field.`,
  challengeP2: `The goal was to build a low-cost, offline-capable monitoring system that could give farmers and agronomists real-time visibility into soil conditions and act on that data automatically.`,
  approach: `We designed and deployed a network of custom IoT sensor nodes that measure soil moisture, temperature, and pH at depth. The nodes transmit over a low-power mesh network to a local hub, which aggregates data and runs a lightweight ML inference model to predict irrigation need and trigger automated valve control.

  The system draws on our Real connectivity capability for the sensor hardware and mesh networking layer, and our Real intelligence capability for the predictive model trained on historical soil and weather data specific to the Rwandan highland context.`,
  stats: [
    { value: "30%", label: "reduction in water use" },
    { value: "3 mo", label: "from prototype to deployment" },
    { value: "7", label: "farms in the pilot" },
  ],
  quote: {
    text: "Before this system, we were irrigating on instinct. Now we have data telling us exactly when and how much. The difference in our water bill alone paid for the deployment.",
    author: "Pilot farm coordinator, Musanze District",
  },
  stack: ["Python", "React", "Node.js", "PostgreSQL", "Docker", "TensorFlow", "C++"],
  quickFacts: [
    { label: "Sector", value: "Agriculture · AI" },
    { label: "Timeline", value: "3 months" },
    { label: "Technology", value: "IoT, Python, React" },
    { label: "Status", value: "Live — Pilot phase" },
  ],
  relatedSlugs: ["project-2", "project-3"],
};

const gridBg = {
  backgroundColor: "#f7f7f9",
  backgroundImage:
    "linear-gradient(to right, #E1E1E1 1px, transparent 1px), linear-gradient(to bottom, #E1E1E1 1px, transparent 1px)",
  backgroundSize: "72px 72px",
};

export default function ProjectPage({ params }: Props) {
  return (
    <>
      {/* ── 1. HERO ─────────────────────────────────────────────── */}
      <section className="border-b border-[#E1E1E1] pb-24 pt-32" style={gridBg}>
        <div className="mx-auto max-w-5xl px-6">
          <Link
            href="/projects"
            className="mb-10 inline-flex items-center gap-1.5 text-sm font-medium text-brand-blue hover:underline"
          >
            ← Back to Projects
          </Link>

          <div className="flex flex-wrap gap-2 mb-6">
            {PROJECT.sectors.map((s) => (
              <span
                key={s}
                className="rounded-full border border-brand-blue/30 bg-white px-3 py-1 text-xs font-medium text-brand-blue"
              >
                {s}
              </span>
            ))}
          </div>

          <h1 className="font-heading text-4xl font-normal leading-[1.2] tracking-tight text-slate-900 sm:text-5xl md:text-6xl max-w-4xl">
            {PROJECT.outcome}
          </h1>
          <p className="mt-5 text-lg font-normal text-slate-500">{PROJECT.name}</p>
        </div>
      </section>

      {/* ── 2. QUICK-FACTS BAR ──────────────────────────────────── */}
      <section className="bg-white border-b border-[#E1E1E1]">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid grid-cols-2 divide-x divide-[#E1E1E1] md:grid-cols-4">
            {PROJECT.quickFacts.map((fact) => (
              <div key={fact.label} className="px-6 py-8 first:pl-0 last:pr-0">
                <p className="mb-1 text-xs font-medium uppercase tracking-widest text-slate-400">
                  {fact.label}
                </p>
                <p className="text-base font-normal text-slate-900">{fact.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. THE CHALLENGE ────────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-6">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-brand-blue">
            The Challenge
          </p>
          <h2 className="mb-8 font-heading text-3xl font-normal tracking-tight text-slate-900 sm:text-4xl">
            What wasn&apos;t working
          </h2>
          <div className="space-y-5 text-base leading-relaxed text-slate-600 sm:text-lg">
            <p>{PROJECT.challenge}</p>
            <p>{PROJECT.challengeP2}</p>
          </div>
        </div>
      </section>

      {/* ── 4. THE APPROACH ─────────────────────────────────────── */}
      <section className="border-t border-[#E1E1E1] py-20" style={gridBg}>
        <div className="mx-auto max-w-5xl px-6">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-brand-blue">
            The Approach
          </p>
          <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:items-start">
            {/* Image / diagram placeholder */}
            <div
              className="aspect-square w-full bg-gradient-to-br from-brand-blue/20 to-brand-blue/5"
              style={{ borderRadius: "10px" }}
            />
            <div>
              <h2 className="mb-8 font-heading text-3xl font-normal tracking-tight text-slate-900 sm:text-4xl">
                How we built it
              </h2>
              <div className="space-y-5 text-base leading-relaxed text-slate-600 sm:text-lg">
                {PROJECT.approach.trim().split("\n\n").map((para, i) => (
                  <p key={i}>{para.trim()}</p>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/what-we-do#connectivity"
                  className="text-sm font-medium text-brand-blue hover:underline"
                >
                  Real connectivity →
                </Link>
                <Link
                  href="/what-we-do#intelligence"
                  className="text-sm font-medium text-brand-blue hover:underline"
                >
                  Real intelligence →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. THE OUTCOME ──────────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-6">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-brand-blue">
            The Outcome
          </p>
          <h2 className="mb-14 font-heading text-3xl font-normal tracking-tight text-slate-900 sm:text-4xl">
            What changed
          </h2>

          {/* Stat callouts */}
          <div className="mb-16 grid grid-cols-1 gap-px border border-[#E1E1E1] sm:grid-cols-3" style={{ borderRadius: "10px", overflow: "hidden" }}>
            {PROJECT.stats.map((stat) => (
              <div key={stat.label} className="bg-white px-8 py-10">
                <p className="font-heading text-5xl font-normal tracking-tight text-slate-900 sm:text-6xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-slate-500">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Pull quote */}
          <blockquote
            className="relative bg-[#f7f7f9] px-8 py-8"
            style={{ borderRadius: "10px" }}
          >
            <p className="text-lg font-normal leading-relaxed text-slate-700 sm:text-xl">
              &ldquo;{PROJECT.quote.text}&rdquo;
            </p>
            <footer className="mt-4 text-sm font-medium text-slate-500">
              — {PROJECT.quote.author}
            </footer>
          </blockquote>
        </div>
      </section>

      {/* ── 6. TECHNOLOGY STACK ─────────────────────────────────── */}
      <section className="border-t border-[#E1E1E1] py-16">
        <div className="mx-auto max-w-5xl px-6">
          <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-brand-blue">
            Technology Stack
          </p>
          <div className="flex flex-wrap gap-3">
            {PROJECT.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm font-normal text-slate-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. RELATED PROJECTS ─────────────────────────────────── */}
      <section className="border-t border-[#E1E1E1] py-20" style={gridBg}>
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-10 flex items-center justify-between">
            <h2 className="font-heading text-2xl font-normal tracking-tight text-slate-900 sm:text-3xl">
              Related projects
            </h2>
            <Link href="/projects" className="text-sm font-medium text-brand-blue hover:underline">
              All projects →
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-x-14 gap-y-8 md:grid-cols-2">
            {PROJECT.relatedSlugs.map((slug, i) => (
              <article
                key={slug}
                className="flex flex-col border border-[#E1E1E1] bg-white p-5"
                style={{ borderRadius: "10px" }}
              >
                <div
                  className="relative mb-6 aspect-[4/3] w-full overflow-hidden"
                  style={{ borderRadius: "8px" }}
                >
                  <Image
                    src={i === 0 ? "/images/partners/backgrounds/partner-bg-7.jpg" : "/images/partners/backgrounds/partner-bg-8.jpg"}
                    alt="" fill className="object-cover"
                  />
                </div>
                <h3 className="mb-2 font-heading text-xl font-normal tracking-tight text-slate-900">
                  Smart Garden System
                </h3>
                <p className="mb-6 text-sm leading-normal text-slate-500">
                  AI-driven crop monitoring for better yields
                </p>
                <Link
                  href={`/projects/${slug}`}
                  className="mt-auto text-sm font-medium text-brand-blue hover:underline"
                >
                  View project →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. CTA + FOOTER ─────────────────────────────────────── */}
      <CtaBand />
      <Footer />
    </>
  );
}
