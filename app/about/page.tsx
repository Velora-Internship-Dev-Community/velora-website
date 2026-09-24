import type { Metadata } from "next";
import Image from "next/image";
import Footer from "@/components/Footer";
import ValueCard from "@/components/ValueCard";

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
      <section
        className="border-b border-slate-50 pb-32 pt-40"
        style={{
          backgroundColor: "#f7f7f9",
          backgroundImage: "radial-gradient(#e7e7e7 2.5px, transparent 2.5px)",
          backgroundSize: "40px 40px",
        }}
      >
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="font-heading text-4xl font-normal leading-[1.25] tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
            We are a tech company based in Rwanda, proving that great technology has no fixed
            address.
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-10 sm:px-8">
        <div
          className="relative flex flex-col items-center justify-between gap-10 overflow-hidden bg-brand-blue p-8 text-white sm:p-12 lg:flex-row lg:p-16"
          style={{ borderRadius: "10px" }}
        >
          <div className="z-10 max-w-xl">
            <h2 className="mb-4 font-heading text-4xl font-normal tracking-tight sm:text-5xl">
              Vision
            </h2>
            <p className="text-base font-light leading-relaxed text-blue-100 sm:text-lg">
              To become a leading African technology company developing innovative, scalable,
              secure, and impactful solutions that solve real-world challenges and contribute to
              digital transformation.
            </p>
          </div>
          <div className="z-10 flex w-full items-center justify-center lg:w-1/2 lg:justify-end">
            <Image
              src="/images/about/vision.png"
              alt="Vision illustration"
              width={480}
              height={380}
              className="h-auto w-96 max-w-full sm:w-[440px] object-contain"
            />
          </div>
        </div>
      </section>

      <section className="relative w-full bg-white py-10">
        {/* Full-width horizontal lines top and bottom */}
        <div className="absolute inset-x-0 top-0 h-px bg-[#D8E1F1]" aria-hidden="true" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-[#D8E1F1]" aria-hidden="true" />
        <div className="mx-auto max-w-content px-6 sm:px-8">
          <div className="relative">
            <div className="absolute -inset-y-10 left-0 w-px bg-[#D8E1F1]" aria-hidden="true" />
            <div className="absolute -inset-y-10 right-0 w-px bg-[#D8E1F1]" aria-hidden="true" />
            <div className="grid grid-cols-1 gap-8 px-6 md:grid-cols-3 sm:px-8">
              {STATS.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`flex items-center space-x-5 py-6 md:py-8 ${index > 0 ? "md:pl-8" : ""}`}
                >
                  <span className="font-heading text-5xl font-normal tracking-tight text-slate-900 lg:text-6xl">
                    {stat.value}
                  </span>
                  <span className="max-w-[170px] text-sm font-normal leading-tight text-slate-700">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-20 sm:px-8">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <h2 className="mb-4 font-heading text-4xl font-normal tracking-tight text-slate-900 sm:text-5xl">
            Mission
          </h2>
          <p className="text-sm leading-relaxed text-slate-600 sm:text-base md:text-lg">
            Our mission is to design, develop, deploy, and continuously improve practical technology
            solutions by combining software engineering, artificial intelligence, data, innovation,
            research, and emerging technologies.
          </p>
        </div>
        <div className="p-[20px]" style={{ backgroundColor: "#c4d9ff", borderRadius: "10px" }}>
          {/* Row 1 — col widths: 35% / 1fr / 35% */}
          <div className="mb-[20px] hidden gap-[20px] md:grid" style={{ gridTemplateColumns: "35% 1fr 35%" }}>
            {[1, 2, 3].map((n) => (
              <div key={n} className="flex h-[380px] flex-col bg-white p-6" style={{ borderRadius: "10px" }}>
                <div className="flex flex-1 items-center justify-center overflow-hidden">
                  <Image src={`/images/about/mission${n}.png`} alt="" width={240} height={200} className="max-h-full w-auto max-w-full object-contain" />
                </div>
                <p className="flex-shrink-0 pt-4 text-base font-normal leading-snug text-slate-900">{MISSION_POINTS[n - 1]}</p>
              </div>
            ))}
          </div>
          {/* Row 2 — col widths: 30% / 1fr / 30% */}
          <div className="mb-[20px] hidden gap-[20px] md:grid" style={{ gridTemplateColumns: "30% 1fr 30%" }}>
            {[4, 5, 6].map((n) => (
              <div key={n} className="flex h-[380px] flex-col bg-white p-6" style={{ borderRadius: "10px" }}>
                <div className="flex flex-1 items-center justify-center overflow-hidden">
                  <Image src={`/images/about/mission${n}.png`} alt="" width={240} height={200} className="max-h-full w-auto max-w-full object-contain" />
                </div>
                <p className="flex-shrink-0 pt-4 text-base font-normal leading-snug text-slate-900">{MISSION_POINTS[n - 1]}</p>
              </div>
            ))}
          </div>
          {/* Row 3 — col widths: 28% / 32% / 1fr */}
          <div className="hidden gap-[20px] md:grid" style={{ gridTemplateColumns: "28% 32% 1fr" }}>
            {[7, 8, 9].map((n) => (
              <div key={n} className="flex h-[380px] flex-col bg-white p-6" style={{ borderRadius: "10px" }}>
                <div className="flex flex-1 items-center justify-center overflow-hidden">
                  <Image src={`/images/about/mission${n}.png`} alt="" width={240} height={200} className="max-h-full w-auto max-w-full object-contain" />
                </div>
                <p className="flex-shrink-0 pt-4 text-base font-normal leading-snug text-slate-900">{MISSION_POINTS[n - 1]}</p>
              </div>
            ))}
          </div>
          {/* Mobile fallback — single column */}
          <div className="flex flex-col gap-[20px] md:hidden">
            {MISSION_POINTS.map((point, i) => (
              <div key={point} className="flex min-h-[220px] flex-col bg-white p-6" style={{ borderRadius: "10px" }}>
                <div className="flex flex-1 items-center justify-center overflow-hidden">
                  <Image src={`/images/about/mission${i + 1}.png`} alt="" width={200} height={160} className="max-h-full w-auto max-w-full object-contain" />
                </div>
                <p className="flex-shrink-0 pt-4 text-base font-normal leading-snug text-slate-900">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white pb-20 pt-16">
        <div className="mx-auto max-w-content px-6">
          <h2 className="mb-14 text-center font-heading text-3xl font-normal tracking-tight text-slate-900 sm:text-4xl">
            Core values
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            <ValueCard
              icon={
                <svg className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2z" />
                </svg>
              }
              name="Innovation"
              description="Constantly exploring new approaches and technologies to solve problems in better ways."
            />
            <ValueCard
              icon={
                <svg className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2h-2M9 3h6v4H9V3z" />
                </svg>
              }
              name="Practical Problem-Solving"
              description="Every solution starts with a real challenge — not a feature list or a trend."
            />
            <ValueCard
              icon={
                <svg className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              }
              name="Excellence"
              description="We hold our work to a high standard — in code quality, system reliability, and user experience."
            />
            <ValueCard
              icon={
                <svg className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
              }
              name="Collaboration"
              description="We work closely with clients, partners, and communities — technology built together works better."
            />
            <ValueCard
              icon={
                <svg className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75l2.25 2.25L15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              }
              name="Security"
              description="Security is designed in from the start — not patched in at the end."
            />
            <ValueCard
              icon={
                <svg className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 7l9-4 9 4v10l-9 4-9-4V7zM12 3v18M3 7l9 4 9-4" />
                </svg>
              }
              name="Scalability"
              description="We build systems that grow with the organizations that use them — without being rebuilt."
            />
            <ValueCard
              icon={
                <svg className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              }
              name="Continuous Learning"
              description="Technology evolves fast — we stay current so our clients don't have to."
            />
            <ValueCard
              icon={
                <svg className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              }
              name="Impact"
              description="Success means measurable change in real-world outcomes — not just shipped features."
            />
          </div>
        </div>
      </section>

      <section className="bg-[#03236e] py-16 text-white sm:py-20">
        <div className="mx-auto grid max-w-content grid-cols-1 items-center gap-12 px-6 sm:px-8 lg:grid-cols-2">
          <div className="space-y-8">
            <h2 className="font-heading text-4xl font-normal leading-[1.15] tracking-tight sm:text-5xl lg:text-6xl">
              Built by people who solve real problems.
            </h2>
            <div className="flex items-end py-2">
              {AVATAR_COLORS.map((color, index) => (
                <div
                  key={index}
                  className={`h-14 w-14 flex-shrink-0 ring-[3px] ring-white transition-transform duration-200 hover:-translate-y-2 ${color}`}
                  style={{ borderRadius: "10px", marginLeft: index === 0 ? "0" : "-10px", zIndex: index }}
                  aria-hidden="true"
                />
              ))}
            </div>
          </div>
          <div className="space-y-4 text-sm font-light leading-relaxed text-blue-100 sm:text-base">
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
      <Footer />
    </>
  );
}
