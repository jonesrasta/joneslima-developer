import type { EngineeringItem, Project } from "../types/portfolio";

export const projects: Project[] = [
  {
    id: "project-01",
    number: "01",
    title: "Nodus DeFi",
    category: "DECENTRALIZED FINANCE",
    description:
      "A decentralized finance platform designed to provide transparent, non-custodial financial infrastructure through smart contracts, on-chain governance and automated asset management.",
    problem: "Traditional financial products often rely on centralized intermediaries, opaque processes and fragmented infrastructure.",
    solution:
      "Nodus DeFi combines smart contract infrastructure, permissioned access control, vault-based asset management and governance mechanisms into a modular on-chain financial system.",
    engineering: ["Solidity", "Smart Contract Architecture", "ERC-4626 Vaults", "Access Control"],
    result: "A modular DeFi infrastructure designed for transparency, security and scalable on-chain financial products.",
    technologies: ["Solidity", "Foundry", "OpenZeppelin", "React", "TypeScript"],
    image: "/projects/nodus.png",
    featured: true,
  },

  {
    id: "project-02",
    number: "02",
    title: "Livity Creative",
    category: "DIGITAL EXPERIENCE",
    description:
      "A premium digital studio focused on building distinctive brands, high-performance websites and digital experiences that connect strategy, design and technology.",
    problem:
      "Businesses needed a stronger digital presence that could communicate their positioning, differentiate their brand and turn attention into meaningful interactions.",
    solution:
      "Livity Creative combines strategic branding, UI/UX and modern web development to create cohesive digital experiences designed around identity, performance and conversion.",
    engineering: ["React", "TypeScript", "UI/UX", "Performance Optimization"],
    result: "A scalable digital experience that unifies brand identity, product thinking and high-performance web development.",
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion"],
    image: "/projects/livity.png",
    featured: false,
  },

  {
    id: "project-03",
    number: "03",
    title: "Glass Vision",
    category: "PRODUCT ENGINEERING",
    description:
      "A client-side financial and legal utility that helps users estimate potentially abusive health plan adjustments through a guided calculation experience.",
    problem:
      "Users often struggle to understand whether a health plan adjustment is disproportionate and what the financial impact of that increase represents.",
    solution:
      "A guided multi-step calculator was designed to transform complex adjustment calculations into a simple and accessible user experience, running the calculation directly in the browser.",
    engineering: ["React", "TypeScript", "Business Logic", "Client-side Architecture"],
    result: "A focused digital product that turns a complex legal and financial calculation into an accessible self-service experience.",
    technologies: ["React", "TypeScript", "Vite", "Firebase", "Tailwind CSS", "Postgresql"],
    image: "/projects/glass-dashboard.png",
    featured: false,
  },
    {
    id: "project-04",
    number: "04",
    title: "Fyah Store",
    category: "PRODUCT ENGINEERING",
    description:
      "A client-side financial and legal utility that helps users estimate potentially abusive health plan adjustments through a guided calculation experience.",
    problem:
      "Users often struggle to understand whether a health plan adjustment is disproportionate and what the financial impact of that increase represents.",
    solution:
      "A guided multi-step calculator was designed to transform complex adjustment calculations into a simple and accessible user experience, running the calculation directly in the browser.",
    engineering: ["React", "TypeScript", "Business Logic", "Client-side Architecture"],
    result: "A focused digital product that turns a complex legal and financial calculation into an accessible self-service experience.",
    technologies: ["Next", "TypeScript", "Postgresql", "Tailwind CSS"],
    image: "/projects/fyah-login.png",
    featured: false,
  },
];

export const engineeringItems: EngineeringItem[] = [
  {
    id: "architecture",
    number: "01",
    title: "Architecture",
    description: "Designing systems around clear responsibilities, reusable abstractions and long-term maintainability.",
    technologies: ["React", "Node.js", "TypeScript"],
  },

  {
    id: "performance",
    number: "02",
    title: "Performance",
    description: "Building interfaces that remain fast, responsive and efficient across different devices and network conditions.",
    technologies: ["Web Vitals", "Code Splitting", "Lazy Loading"],
  },

  {
    id: "delivery",
    number: "03",
    title: "Delivery",
    description: "Connecting development with reliable deployment workflows, automation and continuous improvement.",
    technologies: ["Git", "CI/CD", "Cloud"],
  },

  {
    id: "product",
    number: "04",
    title: "Product Thinking",
    description: "Technology decisions are made in relation to users, business objectives and the actual problem being solved.",
    technologies: ["UX", "Analytics", "Experimentation"],
  },
];
