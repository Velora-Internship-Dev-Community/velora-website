"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Button from "@/components/Button";

const NAV_LINKS = [
  { href: "/about", label: "About" },
  { href: "/what-we-do", label: "What we do" },
  { href: "/projects", label: "Projects" },
  { href: "/industries-partnerships", label: "Industries & partnerships" },
  { href: "/news", label: "News" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex h-20 max-w-content items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2.5" onClick={() => setIsOpen(false)}>
          <span className="flex items-center gap-1" aria-hidden="true">
            <span className="h-6 w-1.5 -skew-x-12 rounded-full bg-brand-blue" />
            <span className="h-7 w-2 -skew-x-12 rounded-full bg-brand-blue" />
          </span>
          <span className="text-xl font-bold tracking-tight text-slate-950">velora</span>
        </Link>

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-8 text-[15px] font-medium text-slate-600 lg:flex"
        >
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors hover:text-brand-blue ${
                  isActive ? "text-brand-blue" : ""
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Button href="/contact">Let&apos;s talk</Button>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-700 hover:bg-slate-100 lg:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsOpen((open) => !open)}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.75}
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {isOpen && (
        <nav
          id="mobile-menu"
          aria-label="Mobile navigation"
          className="flex flex-col gap-1 border-t border-slate-100 bg-white px-6 py-4 lg:hidden"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-2 py-2.5 text-[15px] font-medium text-slate-700 hover:bg-slate-50 hover:text-brand-blue"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Button href="/contact" className="mt-3 w-full">
            Let&apos;s talk
          </Button>
        </nav>
      )}
    </header>
  );
}
