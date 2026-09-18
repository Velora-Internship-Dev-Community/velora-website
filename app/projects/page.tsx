import type { Metadata } from "next";
import MiniHero from "@/components/MiniHero";

export const metadata: Metadata = {
  title: "Projects — Velora",
};

export default function ProjectsPage() {
  return (
    <MiniHero
      title="Projects"
      description="This page is pending the approved Velora design and content for this route."
    />
  );
}
