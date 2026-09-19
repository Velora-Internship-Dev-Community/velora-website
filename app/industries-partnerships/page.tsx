import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
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
      <div className="flex items-center gap-3">
        <Image
          src="/images/partners/minict.svg"
          alt="Ministry of ICT and Innovation, Rwanda"
          width={48}
          height={48}
          className="h-12 w-12 object-contain"
        />
        <span className="text-lg font-extrabold tracking-wide text-slate-800">MINICT</span>
      </div>
    ),
  },
  {
    name: "RISA",
    description: "Collaboration across Rwanda's digital transformation initiatives.",
    mark: (
      <Image
        src="/images/partners/risa.png"
        alt="Rwanda Information Society Authority"
        width={160}
        height={54}
        className="h-9 w-auto object-contain"
      />
    ),
  },
  {
    name: "ICT Chamber",
    description: "Industry-level collaboration and community engagement.",
    mark: (
      <div className="flex h-16 w-40 items-center justify-center rounded-lg bg-slate-900 p-3">
        <Image
          src="/images/partners/ict-chamber.png"
          alt="Rwanda ICT Chamber"
          width={143}
          height={117}
          className="h-full w-auto object-contain"
        />
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
      <Image
        src="/images/partners/resilient-builders.svg"
        alt="Resilient Builders Initiative"
        width={177}
        height={40}
        className="h-9 w-auto object-contain"
      />
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
          aria-hidden="true"
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
      <Image
        src="/images/partners/rdb.jpg"
        alt="Rwanda Development Board"
        width={199}
        height={42}
        className="h-9 w-auto object-contain"
      />
    ),
  },
];

export default function IndustriesPartnershipsPage() {
  return (
    <>
      <section className="px-6 pb-16 pt-20 text-center md:pb-24 md:pt-28">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-5 font-heading text-4xl font-bold leading-tight tracking-tight text-slate-950 md:text-5xl">
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
          <h2 className="mb-14 text-center font-heading text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
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
                      ? "mb-4 font-heading text-xl font-bold tracking-tight text-white"
                      : "mb-4 font-heading text-xl font-bold tracking-tight text-slate-900"
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
          <h2 className="mb-14 text-center font-heading text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
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
          <h2 className="font-heading text-3xl font-bold tracking-tight text-slate-950 md:text-5xl">
            Collaboration activities
          </h2>
        </div>
      </section>
    </>
  );
}
