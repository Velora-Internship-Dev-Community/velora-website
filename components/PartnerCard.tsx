"use client";

import { useState, type ReactNode } from "react";

interface Props {
  mark: ReactNode;
  description: string;
  bgImage: string;
}

export default function PartnerCard({ mark, description, bgImage }: Props) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative flex aspect-square flex-col items-center overflow-hidden rounded-xl border border-slate-200 p-8 text-center transition-colors duration-300"
      style={{ backgroundColor: hovered ? "#03236e" : "#ffffff" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Background image on hover */}
      <img
        src={bgImage}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
        style={{ opacity: hovered ? 1 : 0, transition: "opacity 300ms" }}
      />

      {/* Dark overlay for readability */}
      <div
        className="absolute inset-0 bg-black/20"
        style={{ opacity: hovered ? 1 : 0, transition: "opacity 300ms" }}
        aria-hidden="true"
      />

      {/* Logo — filtered to white on hover */}
      <div className="relative z-10 flex-1" />
      <div
        className="relative z-10 flex items-center justify-center transition-all duration-300"
        style={{ filter: hovered ? "brightness(0) invert(1)" : "none" }}
      >
        {mark}
      </div>
      <div className="relative z-10 flex-1" />

      {/* Description */}
      <p
        className="relative z-10 w-full text-left text-sm leading-relaxed transition-colors duration-300"
        style={{ color: hovered ? "rgba(255,255,255,0.85)" : "#475569" }}
      >
        {description}
      </p>
    </div>
  );
}
