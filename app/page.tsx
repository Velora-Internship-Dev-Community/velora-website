import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import OrbitField from "@/components/OrbitField";
import { CAPABILITIES } from "@/lib/capabilities";
import { TECH_BADGES } from "@/lib/techBadges";

export const metadata: Metadata = {
  title: "Velora — Innovation built for real-world problems",
  description:
    "We design, build, and secure software, AI, and IoT systems — powering agriculture, water, education, and infrastructure across communities that need it most.",
};

// The lg-2xl static columns have a fixed height, so they only show a curated
// subset — otherwise a long tech list would overlap itself when stacked in
// two columns. The 2xl+ animated orbit and the mobile row both use the full
// TECH_BADGES list, since neither has that constraint.
const FALLBACK_BADGES = TECH_BADGES.slice(0, 12);
const LEFT_BADGES = FALLBACK_BADGES.filter((_, i) => i % 2 === 0);
const RIGHT_BADGES = FALLBACK_BADGES.filter((_, i) => i % 2 === 1);

const PARTNER_LOGOS = [
  { name: "MINICT", src: "/images/partners/minict.svg", width: 80, height: 80 },
  { name: "RISA", src: "/images/partners/risa.png", width: 160, height: 54 },
  { name: "Rwanda Development Board", src: "/images/partners/rdb.jpg", width: 199, height: 42 },
  {
    name: "Resilient Builders Initiative",
    src: "/images/partners/resilient-builders.svg",
    width: 177,
    height: 40,
  },
];

const FEATURED_PROJECTS = [
  { gradient: "news-gradient-warm", size: "h-72 sm:h-80" },
  { gradient: "home-gradient-vibrant", size: "h-[390px] sm:h-[430px]" },
  { gradient: "home-gradient-indigo", size: "h-72 sm:h-80" },
] as const;

const LATEST_UPDATES = [
  { slug: "update-1", category: "Product", date: "Mar 11, 2026", gradient: "news-gradient-warm" },
  {
    slug: "update-2",
    category: "Product",
    date: "Mar 11, 2026",
    gradient: "news-gradient-pastel",
  },
  {
    slug: "update-3",
    category: "Product",
    date: "Mar 11, 2026",
    gradient: "news-gradient-ethereal",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-blue-50/50 pb-20 pt-6">
        <div
          className="absolute inset-0 -z-10"
          style={{
            background: "radial-gradient(circle at 50% 38%, #dbeafe 0%, #eef5ff 45%, #ffffff 80%)",
          }}
          aria-hidden="true"
        />
        <div className="relative mx-auto flex min-h-[420px] max-w-5xl flex-col items-center justify-center px-6 pb-4 pt-24 text-center lg:min-h-[600px]">
          <div
            className="pointer-events-none absolute inset-0 z-0 hidden items-center justify-center lg:flex 2xl:hidden"
            aria-hidden="true"
          >
            <div className="absolute h-[440px] w-[440px] rounded-full border border-blue-300/60" />
            <div className="absolute h-[660px] w-[660px] rounded-full border border-blue-300/50" />
            <div className="absolute h-[880px] w-[880px] rounded-full border border-blue-300/40" />
          </div>

          {/* On very large screens there's enough clearance to safely animate the
              badges on true rotating orbits (see OrbitField) without ever reaching
              the centered text. Below that, these static columns are the fallback:
              confined to the outer edges so they never reach the centered text. */}
          <div
            className="pointer-events-none absolute inset-y-6 left-0 z-10 hidden w-24 flex-col items-center justify-between lg:flex 2xl:hidden"
            aria-hidden="true"
          >
            {LEFT_BADGES.map((tech) => (
              <span
                key={tech.label}
                title={tech.label}
                className="flex h-14 w-14 items-center justify-center rounded-full bg-white p-1 shadow-[0_4px_14px_-2px_rgba(54,111,229,0.15),0_2px_6px_-1px_rgba(0,0,0,0.05)]"
              >
                {tech.icon}
              </span>
            ))}
          </div>
          <div
            className="pointer-events-none absolute inset-y-6 right-0 z-10 hidden w-24 flex-col items-center justify-between lg:flex 2xl:hidden"
            aria-hidden="true"
          >
            {RIGHT_BADGES.map((tech) => (
              <span
                key={tech.label}
                title={tech.label}
                className="flex h-14 w-14 items-center justify-center rounded-full bg-white p-1 shadow-[0_4px_14px_-2px_rgba(54,111,229,0.15),0_2px_6px_-1px_rgba(0,0,0,0.05)]"
              >
                {tech.icon}
              </span>
            ))}
          </div>

          <OrbitField badges={TECH_BADGES} />

          <div className="relative z-20 max-w-3xl space-y-6">
            <h1 className="font-heading text-4xl font-extrabold leading-[1.15] tracking-tight text-slate-900 sm:text-6xl">
              Innovation built for
              <br />
              real-world <span className="text-brand-blue">problems.</span>
            </h1>
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
              We design, build, and secure software, AI, and IoT systems — powering agriculture,
              water, education, and infrastructure across communities that need it most
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Link
                href="/contact"
                className="rounded-lg border border-blue-200 bg-white px-7 py-3 text-sm font-semibold text-brand-blue transition-colors hover:bg-blue-50/60"
              >
                Chat with us
              </Link>
              <Button href="/projects" size="lg">
                Explore projects
              </Button>
            </div>
          </div>
        </div>

        {/* Same tech stack, shown as a safe static row below the hero on smaller screens where there's no room to float badges beside the text */}
        <div className="relative z-20 mx-auto mt-16 max-w-4xl px-6 lg:hidden">
          <p className="mb-4 text-center text-xs font-semibold uppercase tracking-wide text-slate-500">
            Our stack
          </p>
          <ul
            className="flex flex-wrap items-center justify-center gap-3"
            aria-label="Technologies we work with"
          >
            {TECH_BADGES.map((tech) => (
              <li
                key={tech.label}
                title={tech.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-blue-100 bg-white shadow-sm"
              >
                {tech.icon}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-label="Trusted Partners" className="border-b border-slate-100 bg-white py-14">
        <div className="mx-auto max-w-content px-6 sm:px-8">
          <h2 className="mb-10 font-heading text-base font-bold tracking-tight text-slate-800">
            Trusted by government agencies and industry leaders
          </h2>
          <div className="rounded-xl border border-slate-100 bg-white/70 p-8 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.03)]">
            <div className="grid grid-cols-2 items-center justify-items-center gap-x-8 gap-y-10 opacity-90 sm:grid-cols-4">
              {PARTNER_LOGOS.map((logo) => (
                <Image
                  key={logo.name}
                  src={logo.src}
                  alt={logo.name}
                  width={logo.width}
                  height={logo.height}
                  className="h-10 w-auto object-contain"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="blueprint-grid relative bg-slate-50/50 py-24">
        <div className="mx-auto max-w-content px-6 sm:px-8">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-brand-blue sm:text-sm">
              From first prototype to full deployment
            </p>
            <h2 className="font-heading text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              We build real technology,
              <br />
              end to <span className="text-brand-blue">end.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {CAPABILITIES.map((capability) => (
              <article
                key={capability.slug}
                className="flex flex-col items-center rounded-2xl border border-blue-100 bg-gradient-to-b from-blue-50/60 to-white p-8 text-center shadow-sm transition-shadow duration-200 hover:shadow-md"
              >
                <h3 className="mb-2 font-heading text-xl font-bold text-slate-900">
                  {capability.title}
                </h3>
                <p className="mb-8 min-h-[40px] text-sm text-slate-600">
                  {capability.shortDescription}
                </p>
                <div className="flex h-48 w-full items-center justify-center">
                  <div className="h-36 w-44">{capability.icon}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-content px-6 sm:px-8">
          <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <h2 className="font-heading text-3xl font-extrabold tracking-tight text-slate-900">
              Featured projects
            </h2>
            <Button href="/projects">Explore projects</Button>
          </div>
          <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-12">
            {FEATURED_PROJECTS.map((project, index) => (
              <div key={index} className="md:col-span-4">
                <div
                  className={`${project.gradient} ${project.size} relative flex w-full flex-col justify-end overflow-hidden rounded-2xl p-6 shadow-sm`}
                >
                  <div className="absolute inset-0 bg-black/10" aria-hidden="true" />
                  <p className="relative z-10 text-base font-medium text-white drop-shadow-sm sm:text-lg">
                    Introducing a new feature
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-100 bg-slate-50 py-20">
        <div className="mx-auto max-w-content px-6 sm:px-8">
          <div className="mb-10 flex items-center justify-between">
            <h2 className="font-heading text-3xl font-extrabold tracking-tight text-slate-900">
              Latest updates
            </h2>
            <Link
              href="/news"
              className="inline-flex items-center justify-center rounded-lg border border-blue-300 px-6 py-2 text-sm font-semibold text-brand-blue transition-colors hover:bg-blue-50"
            >
              All posts
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {LATEST_UPDATES.map((update) => (
              <Link
                key={update.slug}
                href={`/news/${update.slug}`}
                className="group flex flex-col rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className={`${update.gradient} mb-5 h-56 w-full rounded-xl`} />
                <h3 className="mb-3 font-heading text-xl font-bold text-slate-900 transition-colors group-hover:text-brand-blue">
                  Introducing feature
                </h3>
                <div className="mt-auto flex items-center justify-between pt-2 text-xs font-medium text-slate-500 sm:text-sm">
                  <div className="flex items-center gap-3">
                    <span className="font-semibold text-slate-800">{update.category}</span>
                    <span className="text-slate-300">•</span>
                    <span>{update.date}</span>
                  </div>
                  <span className="text-brand-blue transition-transform group-hover:translate-x-0.5">
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative flex items-center justify-center overflow-hidden bg-white py-28 text-center">
        <div
          className="watermark-text pointer-events-none absolute inset-0 flex select-none items-center justify-center font-heading font-black text-slate-100"
          aria-hidden="true"
        >
          Connect
        </div>
        <div className="relative z-10 mx-auto max-w-2xl space-y-4 px-6">
          <h2 className="font-heading text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Got a challenge? We speak tech.
          </h2>
          <p className="mx-auto max-w-xl text-sm text-slate-600 sm:text-base">
            Tell us what&apos;s broken, slow, or missing — we&apos;ll turn it into something that
            runs.
          </p>
          <div className="pt-4">
            <Button href="/contact" size="lg">
              Start building
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
