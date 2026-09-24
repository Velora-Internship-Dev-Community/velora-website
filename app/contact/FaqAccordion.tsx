"use client";

import { useState } from "react";

// TODO: real answers pending from the company — replace placeholder text below
const FAQS = [
  {
    question: "What industries does Velora Tech Labs work in?",
    answer:
      "Placeholder — Velora works across several sectors including agriculture, education, water and infrastructure, business and enterprise, and more. Full answer pending from the company.",
  },
  {
    question: "How do I start a project with Velora?",
    answer:
      "Placeholder — Starting a project typically begins with an initial conversation to understand your needs and context. Full answer pending from the company.",
  },
  {
    question: "Does Velora work with international clients and organizations?",
    answer:
      "Placeholder — Velora is based in Rwanda and works with both local and international clients and organizations. Full answer pending from the company.",
  },
  {
    question: "What does Velora's development process look like?",
    answer:
      "Placeholder — Velora follows a structured process from discovery and prototyping through to deployment and iteration. Full answer pending from the company.",
  },
  {
    question: "How can my organization become a partner or collaborator?",
    answer:
      "Placeholder — Partnership and collaboration inquiries can be submitted through this contact page. Full answer pending from the company.",
  },
];

export default function FaqAccordion() {
  // Multiple items can be open at once
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  function toggle(index: number) {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  }

  return (
    <div className="divide-y divide-[#E1E1E1] border-t border-[#E1E1E1]">
      {FAQS.map((faq, index) => {
        const isOpen = openItems.has(index);
        return (
          <div key={faq.question}>
            <button
              type="button"
              onClick={() => toggle(index)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-8 py-6 text-left"
            >
              <span className="font-heading text-base font-normal text-slate-900 sm:text-lg">
                {faq.question}
              </span>
              <span
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#E1E1E1] bg-white text-slate-500 transition-transform duration-200"
                style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
                aria-hidden="true"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
              </span>
            </button>
            {isOpen && (
              <div className="pb-6 pr-14">
                <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                  {faq.answer}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
