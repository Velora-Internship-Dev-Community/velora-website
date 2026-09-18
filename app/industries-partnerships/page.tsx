import type { Metadata } from "next";
import type { ReactNode } from "react";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Industries & Partnerships — Velora",
  description:
    "Technology built for the sectors that matter most to Africa's growth — developed alongside the organizations shaping it.",
};

interface Industry {
  titleLines: string[];
  description: string;
  highlight?: boolean;
}

const INDUSTRIES: Industry[] = [
  {
    titleLines: ["Agriculture &", "food systems"],
    description:
      "We build digital platforms, management systems, and intelligent educational tools supporting education and skills development.",
  },
  {
    titleLines: ["Education"],
    description:
      "We build digital platforms, management systems, and intelligent educational tools supporting education and skills development.",
  },
  {
    titleLines: ["Water &", "Infrastructure"],
    description:
      "We develop intelligent monitoring and data-driven systems supporting infrastructure management, resource monitoring, and sustainability.",
  },
  {
    titleLines: ["Business &", "Enterprise"],
    description:
      "We develop software and digital platforms that help organizations improve productivity, information management, and decision-making.",
  },
  {
    titleLines: ["Digital", "Transformation"],
    description:
      "We support organizations seeking to modernize manual processes and adopt digital systems.",
  },
  {
    titleLines: ["Artificial", "Intelligence"],
    description:
      "AI and machine learning technologies are integrated wherever intelligent analysis, prediction, or automation can add value.",
    highlight: true,
  },
  {
    titleLines: ["Smart &", "Connected Systems"],
    description:
      "We work with IoT, sensors, embedded systems, and intelligent monitoring platforms.",
  },
  {
    titleLines: ["Data & Analytics"],
    description:
      "We develop systems that transform raw data into useful information and actionable insight.",
  },
  {
    titleLines: ["Automation"],
    description:
      "We develop technology solutions that automate repetitive processes and improve operational efficiency.",
  },
];

interface Partner {
  name: string;
  description: string;
  mark: ReactNode;
}

const PARTNERS: Partner[] = [
  {
    name: "MINICT",
    description: "Engagement within Rwanda's national ICT and Innovation ecosystem.",
    mark: (
      <div className="flex items-center space-x-2">
        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-yellow-500/40 p-1">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-tr from-yellow-500 via-green-600 to-blue-500 text-[8px] font-bold text-white">
            RW
          </div>
        </div>
        <span className="text-lg font-extrabold tracking-wide text-slate-800">MINICT</span>
      </div>
    ),
  },
  {
    name: "RISA",
    description: "Collaboration across Rwanda's digital transformation initiatives.",
    mark: (
      <div className="flex items-center space-x-2">
        <div className="relative flex h-8 w-8 items-center justify-center">
          <span className="absolute inset-0 rounded-full border-2 border-dashed border-blue-600" />
          <span className="h-2.5 w-2.5 rounded-full bg-blue-600" />
        </div>
        <div className="text-left leading-none">
          <span className="text-xl font-black tracking-tight text-blue-700">
            R<span className="text-red-500">I</span>SA
          </span>
          <span className="mt-0.5 block text-[6.5px] font-semibold uppercase tracking-wider text-slate-500">
            Rwanda Information Society Authority
          </span>
        </div>
      </div>
    ),
  },
  {
    name: "ICT Chamber",
    description: "Industry-level collaboration and community engagement.",
    mark: (
      <div className="flex flex-col items-center">
        <div className="flex items-center">
          <span className="mr-0.5 text-lg leading-none text-amber-500">✶</span>
          <span className="text-2xl font-bold tracking-tight text-slate-800">ICT</span>
        </div>
        <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-slate-500">
          Chamber
        </span>
        <span className="text-[6.5px] text-slate-400">Connect . Grow . Expand</span>
      </div>
    ),
  },
  {
    name: "Technology & Infrastructure Partner",
    description: "Technology and infrastructure collaboration.",
    mark: (
      <div className="flex h-10 w-12 flex-col items-center justify-between py-1">
        <span className="h-2 w-11 skew-x-12 transform rounded-sm bg-indigo-600" />
        <span className="h-2 w-9 skew-x-12 transform rounded-sm bg-blue-600" />
        <span className="h-2 w-10 skew-x-12 transform rounded-sm bg-indigo-500" />
      </div>
    ),
  },
  {
    name: "Resilient Builders Initiative",
    description: "Innovation and capacity-building collaboration.",
    mark: (
      <div className="flex flex-col items-center">
        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-emerald-600/30 bg-emerald-50 text-emerald-600">
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7z" />
            <circle cx="12" cy="9" r="3" />
          </svg>
        </div>
        <span className="mt-1.5 text-[8px] font-semibold uppercase tracking-wider text-emerald-950">
          Resilient Builders
        </span>
        <span className="text-[6.5px] uppercase tracking-wider text-slate-500">Initiative</span>
      </div>
    ),
  },
  {
    name: "Agricultural Partner",
    description: "Applied technology work within agriculture and food systems.",
    mark: (
      <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-cyan-500/80 p-1 text-cyan-600">
        <svg
          className="h-7 w-7"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.75}
          viewBox="0 0 24 24"
        >
          <path d="M12 2v20M12 4c-3 2-4 5-4 8 0 4 4 8 4 8s4-4 4-8c0-3-1-6-4-8z" />
          <path d="M8 8l8 8M16 8l-8 8" />
        </svg>
      </div>
    ),
  },
  {
    name: "District Training Academy",
    description: "Technical mentorship and capacity-building engagement.",
    mark: (
      <div className="flex flex-col items-center">
        <div className="flex h-10 w-9 flex-col items-center justify-center rounded-b-lg border-2 border-slate-800 bg-slate-50 p-1">
          <span className="text-[9px] font-bold text-slate-800">DTA</span>
          <span className="mt-0.5 h-0.5 w-4 bg-slate-800" />
        </div>
        <span className="mt-1.5 text-[8px] font-semibold uppercase tracking-wider text-slate-700">
          District Training
        </span>
        <span className="text-[7px] uppercase tracking-wider text-slate-500">Academy</span>
      </div>
    ),
  },
  {
    name: "Rwanda Development Board",
    description: "Collaboration supporting Rwanda's development and innovation ecosystem.",
    mark: (
      <div className="flex items-center space-x-1.5">
        <div className="h-6 w-2.5 rounded-sm bg-emerald-500" />
        <div className="text-left">
          <span className="text-xl font-black tracking-wider text-slate-800">RDB</span>
          <span className="-mt-1 block text-[6px] font-semibold uppercase tracking-tighter text-slate-500">
            Rwanda Development Board
          </span>
        </div>
      </div>
    ),
  },
];

export default function IndustriesPartnershipsPage() {
  return (
    <>
      <section className="px-6 pb-16 pt-20 text-center md:pb-24 md:pt-28">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-5 text-4xl font-bold leading-tight tracking-tight text-slate-950 md:text-5xl">
            Industries &amp; Partnerships
          </h1>
          <p className="mx-auto mb-8 max-w-xl text-sm font-normal leading-relaxed text-slate-600 md:text-base">
            Technology built for the sectors that matter most to Africa&apos;s growth — developed
            alongside the organizations shaping it.
          </p>
          <div className="flex justify-center">
            <Button href="/contact" size="lg">
              Become a partner
            </Button>
          </div>
        </div>
      </section>

      <section className="px-6 py-12 md:py-16">
        <div className="mx-auto max-w-content">
          <h2 className="mb-14 text-center text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
            Industries we serve
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {INDUSTRIES.map((industry) => (
              <article
                key={industry.titleLines.join(" ")}
                className={
                  industry.highlight
                    ? "flex min-h-[260px] flex-col justify-center rounded-xl p-8 text-center text-white shadow-md"
                    : "flex min-h-[260px] flex-col justify-center rounded-xl border border-slate-200 p-8 text-center transition-all duration-200 ease-in-out hover:-translate-y-0.5 hover:border-slate-300"
                }
                style={
                  industry.highlight
                    ? {
                        background:
                          "radial-gradient(circle at 80% 20%, #3B82F6 0%, #1D4ED8 35%, #0B1953 85%, #030B2E 100%)",
                      }
                    : undefined
                }
              >
                <h3
                  className={
                    industry.highlight
                      ? "mb-4 text-xl font-bold tracking-tight text-white"
                      : "mb-4 text-xl font-bold tracking-tight text-slate-900"
                  }
                >
                  {industry.titleLines.map((line, index) => (
                    <span key={line}>
                      {line}
                      {index < industry.titleLines.length - 1 && <br />}
                    </span>
                  ))}
                </h3>
                <p
                  className={
                    industry.highlight
                      ? "text-[13.5px] font-light leading-relaxed text-blue-100/90"
                      : "text-[13.5px] leading-relaxed text-slate-600"
                  }
                >
                  {industry.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-100/80 px-6 py-20 md:py-24">
        <div className="mx-auto max-w-content">
          <h2 className="mb-14 text-center text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
            Our collaboration ecosystem
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {PARTNERS.map((partner) => (
              <div
                key={partner.name}
                className="flex min-h-[260px] flex-col items-center justify-between rounded-xl border border-slate-200 p-8 text-center transition-all duration-200 ease-in-out hover:-translate-y-0.5 hover:border-slate-300"
              >
                <div className="flex flex-1 items-center justify-center pt-2">{partner.mark}</div>
                <p className="max-w-[240px] text-[13px] leading-relaxed text-slate-600">
                  {partner.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-24 text-center md:py-32">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight text-slate-950 md:text-5xl">
            Collaboration activities
          </h2>
        </div>
      </section>
    </>
  );
}
