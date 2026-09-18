import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Let's talk — Velora",
  description:
    "Trusted by the world's leading AI-first teams, discover how Velora can help solve your most urgent business challenges.",
};

const KEY_POINTS = [
  "The key automations and workflows you need right now",
  "Governance and controls for safe, secure deployment",
  "How to drive AI adoption and see real results",
];

export default function ContactPage() {
  return (
    <section className="py-12 md:py-20">
      <div className="mx-auto max-w-content px-6">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="flex flex-col justify-start pt-2 lg:col-span-6">
            <span className="mb-5 text-xs font-bold uppercase tracking-wider text-slate-700">
              Talk to the sales
            </span>
            <h1 className="mb-8 text-4xl font-extrabold leading-[1.18] tracking-tight text-slate-900 sm:text-5xl">
              Every great project starts with one{" "}
              <span className="inline-block whitespace-nowrap rounded-lg bg-brand-blue px-3 py-0.5 text-white">
                conversation.
              </span>
            </h1>
            <div className="max-w-xl space-y-4 text-[15px] leading-relaxed text-slate-700">
              <p>
                Trusted by the world&apos;s leading AI-first teams, discover how Velora can help
                solve your most urgent business challenges — without slowing you down.
              </p>
              <p>
                We&apos;ll work with you to identify your biggest operational risks and how to fix
                them, including:
              </p>
              <ul className="space-y-2.5 pt-1 text-slate-800">
                {KEY_POINTS.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <span className="mt-0.5 font-bold text-slate-400" aria-hidden="true">
                      •
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <hr className="mb-6 mt-10 max-w-xl border-t border-gray-200" />
            <div className="flex max-w-xl items-center gap-3">
              <input
                id="consent-checkbox"
                type="checkbox"
                className="h-4 w-4 cursor-pointer rounded border-gray-300 text-brand-blue transition focus:ring-brand-blue"
              />
              <label
                htmlFor="consent-checkbox"
                className="cursor-pointer select-none text-xs text-slate-600"
              >
                By clicking next you agree to the terms and policy of Velora company
              </label>
            </div>
          </div>

          <div className="mx-auto w-full max-w-xl lg:col-span-6 lg:max-w-none">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
