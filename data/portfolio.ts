// Edit portfolio content here. Leave unavailable links empty.
export const profile = {
  name: "Ashish S Jadhav",
  role: "Frontend Engineer",
  email: "ashishbox13@gmail.com",
  github: "https://github.com/Ashishjadhav-dev",
  linkedin: "https://www.linkedin.com/in/ashish-s-jadhav/",
  resume: "",
  available: true,
  careerStart: "2023-07-01",
};

export const navItems = [
  "Home",
  "About",
  "Projects",
  "Experience",
  "Blog",
  "Contact",
];

export type Project = {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  stack: string[];
  accent: string;
  description: string;
  liveUrl?: string;
  sourceUrl?: string;
};

export const projects: Project[] = [
  {
    id: "01",
    slug: "detectgrowth",
    name: "DetectGrowth",
    subtitle: "AI B2B Lead Intelligence Platform",
    stack: ["Next.js", "AI", "SaaS"],
    accent: "project-blue",
    description:
      "A lead discovery and enrichment workspace with search, scoring, saved lists and intelligent summaries.",
  },
  {
    id: "02",
    slug: "flowforge",
    name: "FlowForge",
    subtitle: "Visual Automation Builder",
    stack: ["React", "DnD", "WebSockets"],
    accent: "project-purple",
    description:
      "A node-based workflow editor with triggers, splits, validations, autosave and real-time analytics.",
  },
  {
    id: "03",
    slug: "pulse",
    name: "Pulse",
    subtitle: "Real-time Analytics Platform",
    stack: ["WebSockets", "Charts", "Performance"],
    accent: "project-cyan",
    description:
      "A live event console for throughput, latency and delivery analysis with reconnection and virtualization.",
  },
  {
    id: "04",
    slug: "nucleus-ui",
    name: "Nucleus UI",
    subtitle: "Production Design System",
    stack: ["Storybook", "A11y", "Components"],
    accent: "project-green",
    description:
      "A reusable component system with tokens, themes, accessibility and documentation for product teams.",
  },
];

export const experience = [
  {
    date: "Feb 2025 → Present",
    role: "Software Engineer",
    company: "Kasplo Private Limited",
    bullets: [
      "Owned frontend architecture across SSR, caching, state, API layering and real-time flows.",
      "Built AI-powered automation experiences and improved rendering performance by ~60%.",
    ],
  },
  {
    date: "Jun 2024 → Jan 2025",
    role: "Junior Software Engineer",
    company: "Kasplo Private Limited",
    bullets: [
      "Built admin platforms end-to-end.",
      "Contributed to Go services and reusable React interfaces.",
    ],
  },
  {
    date: "Dec 2023 → May 2024",
    role: "Software Intern",
    company: "Kasplo Private Limited",
    bullets: [
      "Built production dashboards and API integrations across core SaaS workflows.",
    ],
  },
  {
    date: "Jul 2023 → Nov 2023",
    role: "Software Intern",
    company: "Parinitha Technologies",
    bullets: [
      "Delivered full-stack React, PHP and Java features and optimized database-backed APIs.",
    ],
  },
];

export const skillGroups = [
  ["React", "Next.js", "TypeScript", "Redux", "TanStack Query", "Zustand"],
  ["Node.js", "Go", "MySQL", "ClickHouse", "MongoDB", "Redis"],
  ["AWS", "CI/CD", "WebSockets", "Storybook", "Jest", "Core Web Vitals"],
];

export const articles: { title: string; description: string; url?: string }[] =
  [
    {
      title: "Optimizing React Performance at Scale",
      description:
        "Notes on profiling, rendering and responsive React interfaces.",
    },
    {
      title: "Building an AI-Powered Workflow Builder",
      description:
        "Exploring the interaction patterns behind visual automation tools.",
    },
    {
      title: "Frontend Architecture for Complex SaaS",
      description:
        "Organizing interfaces, application state and API boundaries.",
    },
    {
      title: "Design Systems That Teams Actually Reuse",
      description:
        "Thoughts on reusable components, accessibility and documentation.",
    },
  ];

export const heroWords = [
  "Real Products",
  "Scalable Systems",
  "Fast Interfaces",
];
export const stats = [
  { value: "500+", label: "Customers Impacted" },
  { value: "50+", label: "UI Components" },
  { value: "10+", label: "Real-Time Flows" },
];
export const about = {
  description:
    "I enjoy solving complex product problems through scalable frontend architecture, reusable systems and thoughtful UX. My work spans workflow builders, real-time interfaces, design systems, AI-powered product features and performance optimization.",
  interests: [
    "Architecture",
    "Performance",
    "SaaS",
    "Real-time",
    "Design Systems",
    "AI",
  ],
  exploring: ["AI in Marketing", "Open Source", "Developer Tooling"],
};
