import type { ReactNode } from "react";
import Image from "next/image";

export interface Capability {
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  icon: ReactNode;
}

export const CAPABILITIES: Capability[] = [
  {
    slug: "software",
    title: "Real software",
    shortDescription: "Web, mobile, and backend systems built for how you work",
    longDescription:
      "We design and develop custom software solutions based on real organizational needs — from web applications and mobile apps to backend systems, REST APIs, and administrative dashboards. Our focus is on building software that's maintainable, secure, and built to scale alongside your organization.",
    icon: (
      <Image
        src="/images/capabilities/software.png"
        alt="Real software illustration"
        width={220}
        height={220}
        className="h-full w-full object-contain"
      />
    ),
  },
  {
    slug: "intelligence",
    title: "Real intelligence",
    shortDescription: "Machine learning and predictive systems that turn data into decisions",
    longDescription:
      "We develop and integrate AI-powered systems capable of analyzing data, identifying patterns, and supporting decision-making — from computer vision and predictive analytics to recommendation systems and intelligent automation, applied to real use cases in agriculture, water management, and business operations.",
    icon: (
      <Image
        src="/images/capabilities/intelligence.png"
        alt="Real intelligence illustration"
        width={220}
        height={220}
        className="h-full w-full object-contain"
      />
    ),
  },
  {
    slug: "platforms",
    title: "Real platforms",
    shortDescription: "Digital services that bring your operations online, simply",
    longDescription:
      "We build platforms that connect users, organizations, services, and information — designed to simplify processes, improve access to information, and automate workflows. This includes online service platforms, business platforms, and internal organizational systems.",
    icon: (
      <Image
        src="/images/capabilities/platforms.png"
        alt="Real platforms illustration"
        width={220}
        height={220}
        className="h-full w-full object-contain"
      />
    ),
  },
  {
    slug: "connectivity",
    title: "Real connectivity",
    shortDescription: "IoT and sensors that turn physical environments into real-time data",
    longDescription:
      "We develop technology that integrates hardware and software — sensors, embedded systems, microcontrollers, and communication technologies that let physical infrastructure collect and transmit real-world information for analysis and decision-making.",
    icon: (
      <Image
        src="/images/capabilities/connectivity.png"
        alt="Real connectivity illustration"
        width={220}
        height={220}
        className="h-full w-full object-contain"
      />
    ),
  },
  {
    slug: "data",
    title: "Real data",
    shortDescription: "Dashboards and pipelines that make information usable, not just stored",
    longDescription:
      "We build data-driven solutions that collect, process, analyze, and visualize information — from database systems and analytics dashboards to predictive analytics and performance monitoring, designed to support real decision-making.",
    icon: (
      <Image
        src="/images/capabilities/data.png"
        alt="Real data illustration"
        width={220}
        height={220}
        className="h-full w-full object-contain"
      />
    ),
  },
  {
    slug: "research",
    title: "Real research",
    shortDescription: "Prototyping and validation that turn ideas into working products",
    longDescription:
      "Research and innovation are core to how we work — we investigate emerging technologies, develop prototypes, test new approaches, and validate ideas before they become products. This includes system architecture research, technical testing, and user research.",
    icon: (
      <Image
        src="/images/capabilities/research.png"
        alt="Real research illustration"
        width={220}
        height={220}
        className="h-full w-full object-contain"
      />
    ),
  },
];
