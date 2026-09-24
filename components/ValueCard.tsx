"use client";

import { useState, type ReactNode } from "react";

interface Props {
  icon: ReactNode;
  name: string;
  description: string;
}

export default function ValueCard({ icon, name, description }: Props) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative flex aspect-square flex-col overflow-hidden border border-slate-200 p-6 transition-colors duration-300"
      style={{
        borderRadius: "10px",
        backgroundColor: hovered ? "#366FE5" : "#ffffff",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Icon — centered vertically in the upper portion */}
      <div className="flex-1" />
      <div
        className="flex items-center justify-center transition-colors duration-300"
        style={{ color: hovered ? "#ffffff" : "#0f172a" }}
      >
        {icon}
      </div>
      <p
        className="mt-4 text-center text-lg font-medium transition-colors duration-300"
        style={{ color: hovered ? "#ffffff" : "#0f172a" }}
      >
        {name}
      </p>
      <div className="flex-1" />

      {/* Description — fades in at bottom on hover */}
      <p
        className="text-left text-sm leading-relaxed transition-all duration-300"
        style={{
          color: "rgba(255,255,255,0.85)",
          opacity: hovered ? 1 : 0,
          transform: hovered ? "translateY(0)" : "translateY(6px)",
        }}
      >
        {description}
      </p>
    </div>
  );
}
