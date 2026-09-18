import type { Metadata } from "next";
import MiniHero from "@/components/MiniHero";

export const metadata: Metadata = {
  title: "What We Do — Velora",
};

export default function WhatWeDoPage() {
  return (
    <MiniHero
      title="What we do"
      description="This page is pending the approved Velora design and content for this route."
    />
  );
}
