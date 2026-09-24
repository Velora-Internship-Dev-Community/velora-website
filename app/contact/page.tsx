import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Let's Talk — Velora",
  description:
    "Whether you're a potential client, partner, investor, or just curious about our work — we'd like to hear from you.",
};

const gridBg = {
  backgroundColor: "#f7f7f9",
  backgroundImage:
    "linear-gradient(to right, #E1E1E1 1px, transparent 1px), linear-gradient(to bottom, #E1E1E1 1px, transparent 1px)",
  backgroundSize: "72px 72px",
};

export default function ContactPage() {
  return (
    <>
      {/* ── 1. MINI-HERO ──────────────────────────────────────── */}
      <section className="border-b border-[#E1E1E1] pb-24 pt-40" style={gridBg}>
        <div className="mx-auto max-w-6xl px-6">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-brand-blue">
            Get in touch
          </p>
          <h1 className="mb-5 font-heading text-5xl font-normal leading-[1.15] tracking-tight text-slate-900 sm:text-6xl md:text-7xl">
            Let&apos;s Talk
          </h1>
          <p className="max-w-xl text-base font-normal leading-relaxed text-slate-500 sm:text-lg">
            Whether you&apos;re a potential client, partner, investor, or just curious about our
            work — we&apos;d like to hear from you.
          </p>
        </div>
      </section>

      {/* ── 2. MAP + CONTACT INFO + FORM ─────────────────────── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">

            {/* Left — map + info card */}
            <div className="flex flex-col gap-6">
              {/*
                OPEN DEPENDENCY: A maps provider API key is required to render
                a live interactive map. Options:
                  - Google Maps Embed API (needs NEXT_PUBLIC_GOOGLE_MAPS_KEY)
                  - Mapbox GL JS (needs NEXT_PUBLIC_MAPBOX_TOKEN)
                Until configured, a styled placeholder is shown below.
                Replace the placeholder div with the appropriate embed/component.
              */}
              <div
                className="relative w-full overflow-hidden bg-[#e8edf2]"
                style={{ borderRadius: "10px", height: "380px" }}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, #d0d8e4 1px, transparent 1px), linear-gradient(to bottom, #d0d8e4 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-brand-blue">
                      <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                      </svg>
                    </div>
                    <p className="text-xs font-medium text-slate-500">
                      Map embed requires API key
                    </p>
                    <p className="text-xs text-slate-400">Kicukiro, Kigali, Rwanda</p>
                  </div>
                </div>
              </div>

              {/* Info card */}
              <div
                className="border border-[#E1E1E1] bg-white p-6"
                style={{ borderRadius: "10px" }}
              >
                <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-brand-blue">
                  Velora Tech Labs — HQ
                </p>
                <ul className="space-y-3 text-sm text-slate-700">
                  <li className="flex items-start gap-3">
                    <svg className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                    <span>Kicukiro District, City of Kigali, Rwanda</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <svg className="h-4 w-4 shrink-0 text-brand-blue" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1C10.19 21 3 13.81 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.24 1.02l-2.21 2.2z" />
                    </svg>
                    <a href="tel:+250798963223" className="hover:underline">+250 798 963 223</a>
                  </li>
                  <li className="flex items-center gap-3">
                    <svg className="h-4 w-4 shrink-0 text-brand-blue" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                    <a href="mailto:info@veloratech.rw" className="hover:underline">info@veloratech.rw</a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right — contact form */}
            <div>
              <h2 className="mb-8 font-heading text-2xl font-normal tracking-tight text-slate-900 sm:text-3xl">
                Send us a message
              </h2>
              {/*
                OPEN DEPENDENCY: Form submission backend is not yet defined.
                The submit handler in ContactForm.tsx is stubbed with a
                // TODO comment. Wire it to your chosen email service
                (e.g. Resend, SendGrid, Loops) or CRM once decided.
              */}
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
