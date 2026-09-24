"use client";

import { useState } from "react";

const HOVER_BACKGROUNDS = [
  "/images/industries/industry-1.jpg",
  "/images/industries/industry-2.jpg",
  "/images/industries/industry-3.jpg",
  "/images/industries/industry-4.jpg",
];

const FALLBACK_GRADIENTS = [
  "linear-gradient(135deg, #1e40af 0%, #1d4ed8 50%, #1e3a8a 100%)",
  "linear-gradient(135deg, #065f46 0%, #047857 50%, #064e3b 100%)",
  "linear-gradient(135deg, #1e3a5f 0%, #1d4ed8 50%, #0b1953 100%)",
  "linear-gradient(135deg, #3b0764 0%, #6d28d9 50%, #4c1d95 100%)",
];

interface Props {
  titleLines: string[];
  description: string;
  index: number;
}

export default function IndustryCard({ titleLines, description, index }: Props) {
  const [hovered, setHovered] = useState(false);
  const [imgFailed, setImgFailed] = useState(false);
  const bgIndex = index % 4;
  const imgSrc = HOVER_BACKGROUNDS[bgIndex];
  const fallback = FALLBACK_GRADIENTS[bgIndex];

  return (
    <article
      className="relative flex aspect-square flex-col items-center overflow-hidden rounded-xl border border-slate-200 p-8 text-center"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Fallback gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: fallback,
          opacity: hovered && imgFailed ? 1 : 0,
          transition: "opacity 300ms",
        }}
        aria-hidden="true"
      />

      {/* Background image */}
      {!imgFailed && (
        <img
          src={imgSrc}
          alt=""
          onError={() => setImgFailed(true)}
          className="absolute inset-0 h-full w-full object-cover"
          style={{ opacity: hovered ? 1 : 0, transition: "opacity 300ms" }}
          aria-hidden="true"
        />
      )}

      {/* Content */}
      <div className="relative z-10 flex h-full w-full flex-col items-center">
        <div className="flex-1" />
        <h3
          className="mb-0 font-heading text-2xl font-normal tracking-tight transition-colors duration-300"
          style={{ color: hovered ? "#ffffff" : "#0f172a" }}
        >
          {titleLines.map((line, i) => (
            <span key={line}>
              {line}
              {i < titleLines.length - 1 && <br />}
            </span>
          ))}
        </h3>
        <div className="flex-1" />
        <p
          className="w-full text-left text-sm leading-relaxed transition-colors duration-300"
          style={{ color: hovered ? "rgba(255,255,255,0.85)" : "#475569" }}
        >
          {description}
        </p>
      </div>
    </article>
  );
}
