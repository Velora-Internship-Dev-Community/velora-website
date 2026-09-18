import type { Metadata } from "next";
import MiniHero from "@/components/MiniHero";

export const metadata: Metadata = {
  title: "About — Velora",
};

export default function AboutPage() {
  return (
    <MiniHero
      title="About"
      description="This page is pending the approved Velora design and content for this route."
    />
  );
}
