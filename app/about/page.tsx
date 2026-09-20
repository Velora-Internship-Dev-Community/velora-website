import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Velora",
  description:
    "We are a tech company based in Rwanda, proving that great technology has no fixed address.",
};

const STATS = [
  { value: "07", label: "active technology projects deployed" },
  { value: "09", label: "technology disciplines under one roof" },
  { value: "15+", label: "partners across Rwanda's tech ecosystem" },
];

const MISSION_POINTS = [
  "Solving practical problems through technology",
  "Developing reliable and scalable digital products",
  "Applying artificial intelligence to real-world challenges",
  "Supporting digital transformation",
  "Conducting technology research and experimentation",
  "Building intelligent and connected systems",
  "Working with organizations and technology partners",
  "Contributing to Rwanda's technology ecosystem",
  "Developing solutions with potential for regional and international scale",
];

const AVATAR_COLORS = [
  "bg-blue-400",
  "bg-indigo-400",
  "bg-sky-400",
  "bg-blue-500",
  "bg-cyan-400",
  "bg-indigo-500",
];

export default function AboutPage() {
  return (
    <>
      <section className="dot-grid-bg border-b border-slate-50 pb-16 pt-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="font-heading text-3xl font-bold leading-[1.25] tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            We are a tech company based in Rwanda, proving that great technology has no fixed
            address.
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-content px-6 py-10 sm:px-8">
        <div className="relative flex flex-col items-center justify-between gap-10 overflow-hidden rounded-2xl bg-brand-blue p-8 text-white shadow-lg sm:p-12 lg:flex-row lg:p-16">
          <div className="z-10 max-w-xl">
            <h2 className="mb-4 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              Vision
            </h2>
            <p className="text-sm font-light leading-relaxed text-blue-100 sm:text-base">
              To become a leading African technology company developing innovative, scalable,
              secure, and impactful solutions that solve real-world challenges and contribute to
              digital transformation.
            </p>
          </div>
          <div className="z-10 flex w-full items-center justify-center lg:w-1/2 lg:justify-end">
            <svg
              className="h-auto w-72 max-w-full text-white/90 sm:w-80"
              viewBox="0 0 300 260"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M220 70 L250 50"
                stroke="white"
                strokeDasharray="2 2"
                strokeLinecap="round"
                strokeOpacity="0.6"
                strokeWidth="1.2"
              />
              <path
                d="M220 70 L270 85"
                stroke="white"
                strokeLinecap="round"
                strokeOpacity="0.6"
                strokeWidth="1.2"
              />
              <path
                d="M220 70 L260 110"
                stroke="white"
                strokeLinecap="round"
                strokeOpacity="0.6"
                strokeWidth="1.2"
              />
              <path
                d="M220 70 L190 35"
                stroke="white"
                strokeLinecap="round"
                strokeOpacity="0.7"
                strokeWidth="1.2"
              />
              <path
                d="M200 110 L160 145"
                stroke="white"
                strokeLinecap="round"
                strokeOpacity="0.6"
                strokeWidth="1.2"
              />
              <path
                d="M200 110 L170 175"
                stroke="white"
                strokeLinecap="round"
                strokeOpacity="0.6"
                strokeWidth="1.2"
              />
              <path
                d="M200 110 L230 180"
                stroke="white"
                strokeDasharray="3 3"
                strokeLinecap="round"
                strokeOpacity="0.6"
                strokeWidth="1.2"
              />
              <path
                d="M200 110 L155 120"
                stroke="white"
                strokeLinecap="round"
                strokeOpacity="0.6"
                strokeWidth="1.2"
              />
              <circle cx="260" cy="50" fill="#FBBF24" r="3.5" />
              <circle cx="270" cy="85" fill="white" r="2.5" />
              <circle cx="260" cy="110" fill="white" r="3" />
              <circle cx="155" cy="120" fill="white" r="3.5" />
              <circle cx="160" cy="145" fill="white" r="2" />
              <circle cx="170" cy="175" fill="white" r="2.5" />
              <circle cx="230" cy="180" fill="white" r="3" />
              <circle cx="190" cy="35" fill="white" r="2.5" />
              <path
                d="M190 40 C205 38, 220 45, 235 50 C245 55, 250 65, 240 75 C235 80, 245 95, 240 105 C235 115, 225 125, 215 135 C210 145, 205 160, 200 175 C195 190, 185 200, 180 195 C175 190, 172 170, 170 155 C168 145, 155 130, 150 120 C145 110, 135 105, 140 90 C145 80, 155 70, 160 65 C165 58, 175 48, 190 40 Z"
                fill="none"
                stroke="white"
                strokeLinejoin="round"
                strokeWidth="1.8"
              />
              <circle cx="205" cy="108" fill="white" r="4" />
              <circle cx="205" cy="108" r="8" stroke="white" strokeOpacity="0.4" strokeWidth="1" />
            </svg>
          </div>
        </div>
      </section>

      <section className="w-full border-y border-slate-100 bg-white py-8">
        <div className="mx-auto grid max-w-content grid-cols-1 gap-8 divide-y divide-slate-100 px-6 sm:px-8 md:grid-cols-3 md:divide-x md:divide-y-0">
          {STATS.map((stat, index) => (
            <div
              key={stat.label}
              className={`flex items-center space-x-4 pt-4 md:pt-0 ${index > 0 ? "md:pl-8" : ""}`}
            >
              <span className="font-heading text-4xl font-extrabold tracking-tight text-slate-900 lg:text-5xl">
                {stat.value}
              </span>
              <span className="max-w-[170px] text-xs font-medium leading-tight text-slate-700 sm:text-sm">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-content px-6 py-20 sm:px-8">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <h2 className="mb-4 font-heading text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Mission
          </h2>
          <p className="text-xs leading-relaxed text-slate-600 sm:text-sm md:text-base">
            Our mission is to design, develop, deploy, and continuously improve practical technology
            solutions by combining software engineering, artificial intelligence, data, innovation,
            research, and emerging technologies.
          </p>
        </div>
        <div className="rounded-2xl bg-blue-100/70 p-4 sm:p-5">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {MISSION_POINTS.map((point) => (
              <div
                key={point}
                className="flex min-h-[200px] flex-col justify-end rounded-xl bg-white p-6 shadow-sm transition-shadow hover:shadow"
              >
                <p className="text-sm font-semibold leading-snug text-slate-900">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-12 text-center">
        <h2 className="font-heading text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Core values
        </h2>
      </section>

      <section className="bg-[#03236e] py-16 text-white sm:py-20">
        <div className="mx-auto grid max-w-content grid-cols-1 items-center gap-12 px-6 sm:px-8 lg:grid-cols-2">
          <div className="space-y-8">
            <h2 className="font-heading text-3xl font-extrabold leading-[1.15] tracking-tight sm:text-4xl lg:text-5xl">
              Built by people who solve real problems.
            </h2>
            <div className="flex items-center -space-x-2 py-2" aria-hidden="true">
              {AVATAR_COLORS.map((color, index) => (
                <span
                  key={index}
                  className={`flex h-12 w-12 items-center justify-center rounded-full ring-2 ring-blue-900 ${color}`}
                >
                  <svg className="h-6 w-6 text-white/90" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12a5 5 0 100-10 5 5 0 000 10Zm0 2c-4.42 0-8 2.24-8 5v1a1 1 0 001 1h14a1 1 0 001-1v-1c0-2.76-3.58-5-8-5Z" />
                  </svg>
                </span>
              ))}
            </div>
          </div>
          <div className="space-y-4 text-xs font-light leading-relaxed text-blue-100 sm:text-sm">
            <p>
              Velora Tech Labs was founded on a simple belief: technology should solve real
              problems, not just showcase what&apos;s possible. We bring together engineers,
              researchers, and designers who understand both the code and the context — from farms
              to classrooms to government systems.
            </p>
            <p>
              Every project we take on starts with a real challenge, not a feature list. That&apos;s
              what shapes how we build.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
