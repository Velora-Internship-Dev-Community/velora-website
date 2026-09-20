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
      <section className="dot-grid-bg border-b border-slate-100 pb-24 pt-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="font-heading text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl md:text-5xl">
            Full-stack technology capability
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-slate-500 sm:text-base">
            From first prototype to full deployment — software, AI, and connected systems, handled
            by one team.
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl space-y-28 px-6 sm:space-y-36">
          {CAPABILITIES.map((capability, index) => {
            const imageFirst = index % 2 === 1;
            return (
              <article
                key={capability.slug}
                className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-20"
              >
                <div
                  className={
                    imageFirst
                      ? "order-2 flex justify-center md:order-1 md:justify-start"
                      : "flex justify-center md:justify-end"
                  }
                >
                  <div className="capability-gradient aspect-square w-full max-w-[390px] rounded-2xl shadow-xl" />
                </div>
                <div
                  className={
                    imageFirst
                      ? "order-1 max-w-md space-y-5 md:order-2 md:ml-auto"
                      : "max-w-md space-y-5"
                  }
                >
                  <h2 className="font-heading text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                    {capability.title}
                  </h2>
                  <p className="text-[13.5px] leading-relaxed text-slate-600">
                    {capability.longDescription}
                  </p>
                  <div className="pt-2">
                    <Button href="/projects" size="sm">
                      View projects
                    </Button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
