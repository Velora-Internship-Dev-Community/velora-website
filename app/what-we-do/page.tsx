import type { Metadata } from "next";
import Button from "@/components/Button";
import CtaBand from "@/components/CtaBand";
import { CAPABILITIES } from "@/lib/capabilities";

export const metadata: Metadata = {
  title: "What We Do — Velora",
  description:
    "From first prototype to full deployment — software, AI, and connected systems, handled by one team.",
};

export default function WhatWeDoPage() {
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
            Full-stack technology capability
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base font-normal leading-relaxed text-slate-500 sm:text-lg">
            From first prototype to full deployment — software, AI, and connected systems, handled
            by one team.
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-[1400px] px-16">
          <div className="space-y-0">
            {CAPABILITIES.map((capability, index) => {
              const squareRight = index % 2 === 0;
              return (
                <article
                  key={capability.slug}
                  className="grid min-h-screen grid-cols-1 items-stretch gap-16 py-12 md:grid-cols-2 md:gap-24"
                >
                  {/* Text + button block */}
                  <div
                    className={`flex flex-col ${
                      squareRight
                        ? "items-start text-left md:order-1"
                        : "items-end text-right md:order-2"
                    }`}
                  >
                    {/* Push text to roughly 40% down */}
                    <div className="flex-[2]" />
                    <div className="flex flex-col">
                      <h2 className="font-heading text-4xl font-normal tracking-tight text-slate-950 sm:text-5xl">
                        {capability.title}
                      </h2>
                      <p className="mt-8 max-w-lg text-lg leading-relaxed text-slate-600">
                        {capability.longDescription}
                      </p>
                      <div className="mt-10">
                        <Button href="/projects" size="sm">
                          View projects
                        </Button>
                      </div>
                    </div>
                    <div className="flex-[3]" />
                  </div>
                  {/* Square gradient */}
                  <div
                    className={`flex items-center ${
                      squareRight ? "justify-end md:order-2" : "justify-start md:order-1"
                    }`}
                  >
                    <div
                      className="capability-gradient aspect-square w-full"
                      style={{ borderRadius: "10px" }}
                    />
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
