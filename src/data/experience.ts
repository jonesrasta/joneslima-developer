export interface ExperienceItem {
  year: string;
  role: string;
  company?: string;
  description: string;
  skills: string[];
}

export const experiences: ExperienceItem[] = [
  {
    year: "2026",
    role: "Full Stack Developer",
    company: "Jones Lima",
    description: "Development from prototype to deployment. Figma, Node.js, Vue.js, JavaScript and MySQL.",
    skills: ["Figma", "Node.js", "Vue.js", "JavaScript", "MySQL"],
  },
  {
    year: "2025",
    role: "Front-End Developer",
    description: "Development of modern websites using React, TypeScript, Next.js and Tailwind CSS.",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
  },
  {
    year: "2022",
    role: "Full Stack Developer",
    description: "Financial market projects built with Vue.js, Node.js, Tailwind CSS and MySQL.",
    skills: ["Vue.js", "Node.js", "Tailwind CSS", "MySQL"],
  },
  {
    year: "2022",
    role: "Graphic & Motion Designer",
    description: "Visual identity, motion design and content production using Adobe Creative Suite.",
    skills: ["Visual Identity", "Motion Design", "Adobe Suite"],
  },
  {
    year: "2019",
    role: "IT Support Analyst",
    description: "Technical support, systems administration, software customization and hardware maintenance.",
    skills: ["Tech Support", "Systems Admin", "Hardware"],
  },
];
