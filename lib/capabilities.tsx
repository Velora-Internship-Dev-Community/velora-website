import type { ReactNode } from "react";

export interface Capability {
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  icon: ReactNode;
}

const iconProps = {
  viewBox: "0 0 176 144",
  fill: "none",
  stroke: "#1e293b",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  strokeWidth: 1.8,
  "aria-hidden": true,
};

export const CAPABILITIES: Capability[] = [
  {
    slug: "software",
    title: "Real software",
    shortDescription: "Web, mobile, and backend systems built for how you work",
    longDescription:
      "We design and develop custom software solutions based on real organizational needs — from web applications and mobile apps to backend systems, REST APIs, and administrative dashboards. Our focus is on building software that's maintainable, secure, and built to scale alongside your organization.",
    icon: (
      <svg {...iconProps}>
        <rect x="20" y="24" width="136" height="96" rx="4" fill="#fff" />
        <line x1="20" y1="44" x2="156" y2="44" />
        <circle cx="28" cy="34" r="1.5" fill="#1e293b" />
        <circle cx="34" cy="34" r="1.5" fill="#1e293b" />
        <circle cx="40" cy="34" r="1.5" fill="#1e293b" />
        <path d="M12 70l-6 6 6 6" />
        <path d="M16 66l-4 20" />
        <rect x="30" y="56" width="30" height="48" fill="#f8fafc" />
        <rect x="68" y="56" width="76" height="16" fill="#f8fafc" />
        <rect x="106" y="80" width="38" height="24" rx="2" fill="#366FE5" stroke="#366FE5" />
        <path d="M132 94l6 6-2 1" fill="#fff" stroke="#fff" />
      </svg>
    ),
  },
  {
    slug: "intelligence",
    title: "Real intelligence",
    shortDescription: "Machine learning and predictive systems that turn data into decisions",
    longDescription:
      "We develop and integrate AI-powered systems capable of analyzing data, identifying patterns, and supporting decision-making — from computer vision and predictive analytics to recommendation systems and intelligent automation, applied to real use cases in agriculture, water management, and business operations.",
    icon: (
      <svg {...iconProps}>
        <line x1="56" y1="46" x2="88" y2="34" stroke="#94a3b8" />
        <line x1="56" y1="46" x2="88" y2="72" stroke="#94a3b8" />
        <line x1="56" y1="78" x2="88" y2="72" stroke="#94a3b8" />
        <line x1="56" y1="110" x2="88" y2="72" stroke="#94a3b8" />
        <line x1="56" y1="110" x2="88" y2="110" stroke="#94a3b8" />
        <line x1="88" y1="72" x2="120" y2="46" stroke="#94a3b8" />
        <line x1="88" y1="72" x2="120" y2="78" stroke="#94a3b8" />
        <line x1="88" y1="72" x2="120" y2="110" stroke="#94a3b8" />
        <line x1="88" y1="34" x2="120" y2="46" stroke="#94a3b8" />
        <circle cx="56" cy="46" r="6" fill="#fff" />
        <circle cx="56" cy="78" r="6" fill="#fff" />
        <circle cx="56" cy="110" r="6" fill="#fff" />
        <circle cx="88" cy="34" r="6" fill="#fff" />
        <circle cx="88" cy="72" r="8" fill="#366FE5" stroke="#366FE5" />
        <circle cx="88" cy="110" r="6" fill="#fff" />
        <circle cx="120" cy="46" r="6" fill="#fff" />
        <circle cx="120" cy="78" r="6" fill="#fff" />
        <circle cx="120" cy="110" r="6" fill="#fff" />
      </svg>
    ),
  },
  {
    slug: "platforms",
    title: "Real platforms",
    shortDescription: "Digital services that bring your operations online, simply",
    longDescription:
      "We build platforms that connect users, organizations, services, and information — designed to simplify processes, improve access to information, and automate workflows. This includes online service platforms, business platforms, and internal organizational systems.",
    icon: (
      <svg {...iconProps}>
        <rect x="56" y="44" width="64" height="42" rx="6" fill="#fff" />
        <circle cx="58" cy="28" r="10" fill="#fff" />
        <rect x="53" y="24" width="10" height="8" rx="1" fill="#f1f5f9" stroke="#1e293b" />
        <circle cx="34" cy="72" r="10" fill="#fff" />
        <path d="M30 70h8v4h-6l-2 2v-6" />
        <circle cx="94" cy="114" r="10" fill="#fff" />
        <rect x="90" y="110" width="8" height="9" fill="#f1f5f9" />
        <circle cx="120" cy="44" r="6" fill="#366FE5" stroke="#366FE5" />
        <path d="M118 44l1.5 1.5 3-3" stroke="#fff" strokeWidth={1.4} />
        <circle cx="120" cy="86" r="6" fill="#366FE5" stroke="#366FE5" />
        <path d="M118 86l1.5 1.5 3-3" stroke="#fff" strokeWidth={1.4} />
      </svg>
    ),
  },
  {
    slug: "connectivity",
    title: "Real connectivity",
    shortDescription: "IoT and sensors that turn physical environments into real-time data",
    longDescription:
      "We develop technology that integrates hardware and software — sensors, embedded systems, microcontrollers, and communication technologies that let physical infrastructure collect and transmit real-world information for analysis and decision-making.",
    icon: (
      <svg {...iconProps}>
        <rect x="68" y="24" width="40" height="28" rx="2" fill="#fff" />
        <line x1="88" y1="52" x2="88" y2="60" />
        <line x1="78" y1="60" x2="98" y2="60" />
        <path
          d="M74 88a8 8 0 0115-3 10 10 0 0113 10h-28a6 6 0 010-7z"
          fill="#366FE5"
          stroke="#366FE5"
        />
        <rect x="42" y="86" width="22" height="36" rx="3" fill="#fff" />
        <line x1="42" y1="112" x2="64" y2="112" />
        <rect x="112" y="90" width="22" height="34" rx="3" fill="#fff" />
        <line x1="88" y1="64" x2="88" y2="76" strokeDasharray="3 3" />
        <line x1="64" y1="94" x2="74" y2="94" strokeDasharray="3 3" />
        <line x1="102" y1="94" x2="112" y2="94" strokeDasharray="3 3" />
      </svg>
    ),
  },
  {
    slug: "data",
    title: "Real data",
    shortDescription: "Dashboards and pipelines that make information usable, not just stored",
    longDescription:
      "We build data-driven solutions that collect, process, analyze, and visualize information — from database systems and analytics dashboards to predictive analytics and performance monitoring, designed to support real decision-making.",
    icon: (
      <svg {...iconProps}>
        <line x1="38" y1="118" x2="138" y2="118" />
        <rect x="44" y="82" width="10" height="36" fill="#fff" />
        <rect x="58" y="62" width="10" height="56" fill="#fff" />
        <rect x="72" y="44" width="10" height="74" fill="#366FE5" stroke="#366FE5" />
        <path d="M102 66a26 26 0 1026 26h-26V66z" fill="#fff" />
        <path d="M106 62a26 26 0 0124 24h-24V62z" fill="#f8fafc" />
        <path d="M42 66l22-14 20 8 18-20" />
        <path d="M96 40h8v8" />
      </svg>
    ),
  },
  {
    slug: "research",
    title: "Real research",
    shortDescription: "Prototyping and validation that turn ideas into working products",
    longDescription:
      "Research and innovation are core to how we work — we investigate emerging technologies, develop prototypes, test new approaches, and validate ideas before they become products. This includes system architecture research, technical testing, and user research.",
    icon: (
      <svg {...iconProps}>
        <circle cx="56" cy="74" r="14" fill="#366FE5" stroke="#366FE5" />
        <path d="M52 88h8v4h-8z" fill="#fff" />
        <line x1="72" y1="74" x2="112" y2="74" strokeWidth={2.5} />
        <circle cx="86" cy="56" r="6" fill="#fff" stroke="#1e293b" />
        <path d="M86 48v2m0 12v2m-8-8h2m12 0h2" />
        <path d="M124 60h8v16l14 28a4 4 0 01-3.5 5.5h-29a4 4 0 01-3.5-5.5l14-28V60z" fill="#fff" />
        <line x1="117" y1="94" x2="139" y2="94" stroke="#94a3b8" />
      </svg>
    ),
  },
];
