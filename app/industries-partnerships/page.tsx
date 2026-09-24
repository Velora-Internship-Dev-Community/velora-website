import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Button from "@/components/Button";
import IndustryCard from "@/components/IndustryCard";
import Footer from "@/components/Footer";
import PartnerCard from "@/components/PartnerCard";

export const metadata: Metadata = {
  title: "Industries & Partnerships — Velora",
  description:
    "Technology built for the sectors that matter most to Africa's growth — developed alongside the organizations shaping it.",
};

interface Industry {
  titleLines: string[];
  description: string;
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
      <Image src="/images/partners/minict.svg" alt="Ministry of ICT and Innovation, Rwanda" width={80} height={80} className="h-16 w-auto object-contain" />
    ),
  },
  {
    name: "RISA",
    description: "Collaboration across Rwanda's digital transformation initiatives.",
    mark: (
      <Image src="/images/partners/risa.png" alt="Rwanda Information Society Authority" width={160} height={54} className="h-12 w-auto object-contain" />
    ),
  },
  {
    name: "ICT Chamber",
    description: "Industry-level collaboration and community engagement.",
    mark: (
      <Image src="/images/partners/ict-chamber.png" alt="Rwanda ICT Chamber" width={160} height={54} className="h-20 w-auto object-contain" />
    ),
  },
  {
    name: "Strettch",
    description: "Technology and infrastructure collaboration.",
    mark: (
      <Image src="/images/partners/strettch.png" alt="Strettch" width={160} height={54} className="h-7 w-auto object-contain" />
    ),
  },
  {
    name: "Resilient Builders Initiative",
    description: "Innovation and capacity-building collaboration.",
    mark: (
      <Image src="/images/partners/resilient-builders.svg" alt="Resilient Builders Initiative" width={177} height={40} className="h-12 w-auto object-contain" />
    ),
  },
  {
    name: "FAO",
    description: "Applied technology work within agriculture and food systems.",
    mark: (
      <Image src="/images/partners/fao.png" alt="Food and Agriculture Organization" width={160} height={54} className="h-12 w-auto object-contain" />
    ),
  },
  {
    name: "RCA",
    description: "Technical mentorship and capacity-building engagement.",
    mark: (
      <Image src="/images/partners/rca.png" alt="Rwanda Coding Academy" width={160} height={54} className="h-20 w-auto object-contain" />
    ),
  },
  {
    name: "Rwanda Development Board",
    description: "Collaboration supporting Rwanda's development and innovation ecosystem.",
    mark: (
      <Image src="/images/partners/rdb.png" alt="Rwanda Development Board" width={199} height={42} className="h-12 w-auto object-contain" />
    ),
  },
];

export default function IndustriesPartnershipsPage() {
  return (
    <>
      <section className="border-b border-slate-100 pb-32 pt-40" style={{ backgroundColor: "#f7f7f9" }}>
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="mb-6 font-heading text-4xl font-normal leading-[1.25] tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
            Industries &amp; Partnerships
          </h1>
          <p className="mx-auto mb-10 max-w-xl text-base font-normal leading-relaxed text-slate-500 sm:text-lg">
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
            {INDUSTRIES.map((industry, index) => (
              <IndustryCard
                key={industry.titleLines.join(" ")}
                titleLines={industry.titleLines}
                description={industry.description}
                index={index}
              />
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
            {PARTNERS.map((partner, index) => (
              <PartnerCard
                key={partner.name}
                mark={partner.mark}
                description={partner.description}
                bgImage={`/images/partners/backgrounds/partner-bg-${index + 1}.jpg`}
              />
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
      <Footer />
    </>
  );
}
