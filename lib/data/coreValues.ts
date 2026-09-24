import type { CoreValue } from "@/lib/types";

/**
 * Core values shown on the About page. Titles and descriptions are the
 * existing site copy, moved out of the JSX. Artwork reuses the gradient set
 * already used by the Projects section (nothing new introduced).
 */
const CORE_VALUES: CoreValue[] = [
  {
    id: "innovation",
    name: "Innovation",
    description:
      "Constantly exploring new approaches and technologies to solve problems in better ways.",
    image: "/images/industries/industry-2.jpg",
  },
  {
    id: "practical-problem-solving",
    name: "Practical Problem-Solving",
    description: "Every solution starts with a real challenge — not a feature list or a trend.",
    image: "/images/partners/backgrounds/partner-bg-1.jpg",
  },
  {
    id: "excellence",
    name: "Excellence",
    description:
      "We hold our work to a high standard — in code quality, system reliability, and user experience.",
    image: "/images/industries/industry-3.jpg",
  },
  {
    id: "collaboration",
    name: "Collaboration",
    description:
      "We work closely with clients, partners, and communities — technology built together works better.",
    image: "/images/partners/backgrounds/partner-bg-3.jpg",
  },
  {
    id: "security",
    name: "Security",
    description: "Security is designed in from the start — not patched in at the end.",
    image: "/images/partners/backgrounds/partner-bg-2.jpg",
  },
  {
    id: "scalability",
    name: "Scalability",
    description:
      "We build systems that grow with the organizations that use them — without being rebuilt.",
    image: "/images/partners/backgrounds/partner-bg-6.jpg",
  },
  {
    id: "continuous-learning",
    name: "Continuous Learning",
    description: "Technology evolves fast — we stay current so our clients don't have to.",
    image: "/images/partners/backgrounds/partner-bg-5.jpg",
  },
  {
    id: "impact",
    name: "Impact",
    description:
      "Success means measurable change in real-world outcomes — not just shipped features.",
    image: "/images/industries/industry-4.jpg",
  },
];

export async function getCoreValues(): Promise<CoreValue[]> {
  return CORE_VALUES;
}
