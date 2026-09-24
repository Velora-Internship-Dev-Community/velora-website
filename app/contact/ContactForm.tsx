"use client";

import { useState } from "react";

const inputStyles =
  "h-12 w-full border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none transition focus:border-brand-blue focus:ring-1 focus:ring-brand-blue";

const labelStyles = "mb-2 block text-sm font-normal text-slate-700";

type FormState = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate(data: FormData): Record<string, string> {
    const errs: Record<string, string> = {};
    if (!data.get("name")) errs.name = "Name is required.";
    const email = data.get("email") as string;
    if (!email) {
      errs.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = "Enter a valid email address.";
    }
    if (!data.get("purpose")) errs.purpose = "Please select an option.";
    const message = data.get("message") as string;
    if (!message) {
      errs.message = "Message is required.";
    } else if (message.length > 2000) {
      errs.message = "Message must be under 2000 characters.";
    }
    return errs;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const errs = validate(data);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setFormState("submitting");

    // TODO: connect to email/CRM endpoint once backend is decided
    // e.g. await fetch("/api/contact", { method: "POST", body: data });
    await new Promise((r) => setTimeout(r, 600)); // stub delay
    setFormState("success");
  }

  if (formState === "success") {
    return (
      <div className="flex flex-col items-start justify-center rounded-xl border border-slate-200 bg-white p-10" style={{ borderRadius: "10px" }}>
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-brand-blue">
          Message sent
        </p>
        <h3 className="font-heading text-2xl font-normal text-slate-900">
          Thanks — we&apos;ll be in touch soon.
        </h3>
        <p className="mt-3 text-sm text-slate-500">
          We typically respond within 1–2 business days.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="space-y-6"
    >
      {/* Name */}
      <div>
        <label htmlFor="name" className={labelStyles}>
          Name <span className="text-brand-blue">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className={inputStyles}
          style={{ borderRadius: "6px" }}
        />
        {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className={labelStyles}>
          Email <span className="text-brand-blue">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className={inputStyles}
          style={{ borderRadius: "6px" }}
        />
        {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
      </div>

      {/* Organisation / Purpose */}
      <div>
        <label htmlFor="purpose" className={labelStyles}>
          Organisation / Purpose <span className="text-brand-blue">*</span>
        </label>
        <select
          id="purpose"
          name="purpose"
          required
          defaultValue=""
          className={`${inputStyles} form-select appearance-none text-slate-700`}
          style={{ borderRadius: "6px" }}
        >
          <option value="" disabled hidden>Select one…</option>
          <option value="client">Client</option>
          <option value="partner">Partner</option>
          <option value="investor">Investor</option>
          <option value="government">Government</option>
          <option value="researcher">Researcher</option>
          <option value="job-seeker">Job Seeker</option>
          <option value="other">Other</option>
        </select>
        {errors.purpose && <p className="mt-1 text-xs text-red-500">{errors.purpose}</p>}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className={labelStyles}>
          Message <span className="text-brand-blue">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          maxLength={2000}
          className={`${inputStyles} h-auto resize-none py-3`}
          style={{ borderRadius: "6px" }}
        />
        {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={formState === "submitting"}
        className="flex h-12 w-full items-center justify-center rounded-lg bg-brand-blue text-sm font-semibold text-white transition-colors hover:bg-brand-dark disabled:opacity-60"
        style={{ borderRadius: "6px" }}
      >
        {formState === "submitting" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
