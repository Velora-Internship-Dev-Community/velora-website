"use client";

import { useState } from "react";

const selectChevron =
  "bg-[url('data:image/svg+xml,%3csvg_xmlns=%27http://www.w3.org/2000/svg%27_fill=%27none%27_viewBox=%270_0_20_20%27%3e%3cpath_stroke=%27%2364748b%27_stroke-linecap=%27round%27_stroke-linejoin=%27round%27_stroke-width=%271.5%27_d=%27M6_8l4_4_4-4%27/%3e%3c/svg%3e')] bg-no-repeat bg-[right_0.75rem_center] bg-[length:1.25em_1.25em] pr-10";

const inputStyles =
  "h-12 w-full rounded-lg border border-gray-300 bg-white px-4 text-sm text-slate-900 outline-none transition focus:border-brand-blue focus:ring-1 focus:ring-brand-blue";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="rounded-2xl border border-gray-200/90 bg-white p-8 text-center shadow-[0_4px_25px_-4px_rgba(0,0,0,0.04)] sm:p-10">
        <h2 className="mb-2 text-xl font-bold text-slate-900">Thanks for reaching out</h2>
        <p className="text-sm text-slate-600">
          We&apos;ve received your details and will be in touch shortly.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-gray-200/90 bg-white p-8 shadow-[0_4px_25px_-4px_rgba(0,0,0,0.04)] sm:p-10">
      <form
        className="space-y-6"
        onSubmit={(event) => {
          event.preventDefault();
          setSubmitted(true);
        }}
      >
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="first-name" className="mb-2 block text-sm font-medium text-slate-800">
              First name*
            </label>
            <input id="first-name" name="first-name" type="text" required className={inputStyles} />
          </div>
          <div>
            <label htmlFor="last-name" className="mb-2 block text-sm font-medium text-slate-800">
              Last name *
            </label>
            <input id="last-name" name="last-name" type="text" required className={inputStyles} />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label
              htmlFor="service-needed"
              className="mb-2 block text-sm font-medium text-slate-800"
            >
              Service needed*
            </label>
            <select
              id="service-needed"
              name="service-needed"
              required
              defaultValue=""
              className={`${inputStyles} appearance-none text-slate-700 ${selectChevron}`}
            >
              <option value="" disabled hidden />
              <option value="artificial-intelligence">Artificial Intelligence</option>
              <option value="digital-transformation">Digital Transformation</option>
              <option value="data-analytics">Data &amp; Analytics</option>
              <option value="automation">Automation</option>
              <option value="custom-development">Custom Software Development</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="estimated-budget"
              className="mb-2 block text-sm font-medium text-slate-800"
            >
              Estimated budget *
            </label>
            <select
              id="estimated-budget"
              name="estimated-budget"
              required
              defaultValue=""
              className={`${inputStyles} appearance-none text-slate-700 ${selectChevron}`}
            >
              <option value="" disabled hidden />
              <option value="10k-25k">$10,000 – $25,000</option>
              <option value="25k-50k">$25,000 – $50,000</option>
              <option value="50k-100k">$50,000 – $100,000</option>
              <option value="100k+">$100,000+</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="phone-number" className="mb-2 block text-sm font-medium text-slate-800">
            Phone number *
          </label>
          <input
            id="phone-number"
            name="phone-number"
            type="tel"
            required
            className={inputStyles}
          />
        </div>

        <div className="pt-2">
          <button
            type="submit"
            className="flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-brand-blue text-base font-medium text-white shadow-sm transition-all duration-150 hover:bg-brand-dark"
          >
            <span>Next</span>
            <span className="text-lg" aria-hidden="true">
              →
            </span>
          </button>
        </div>
      </form>
    </div>
  );
}
