export type Stack = {
  name: string;
  icon: string;
};

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  description: string;
  logo: string;
  stack: Stack[];
  current?: boolean;
};

export const experiences: ExperienceItem[] = [
  {
    company: "Acqua Vero",
    role: "Full Stack Developer",
    period: "2022",
    description:
      "Building and maintaining digital products across frontend, backend and deployment infrastructure, with a focus on scalable interfaces, performance and reliable delivery.",
    logo: "/companies/acqua.svg",
    current: true,
    stack: [
      {
        name: "Vue.js",
        icon: "https://cdn.simpleicons.org/vue.js",
      },
      {
        name: "Laravel",
        icon: "https://cdn.simpleicons.org/laravel",
      },
      {
        name: "PHP",
        icon: "https://cdn.simpleicons.org/php",
      },
      {
        name: "JavaScript",
        icon: "https://cdn.simpleicons.org/javascript",
      },
      {
        name: "GitHub Actions",
        icon: "https://cdn.simpleicons.org/githubactions",
      },
    ],
  },

  {
    company: "Livity Creative",
    role: "Full Stack Developer",
    period: "2023",
    description:
      "Designed and developed digital experiences combining frontend engineering, interface design and modern web technologies for brands and businesses.",
    logo: "/companies/livity.svg",
    stack: [
      {
        name: "React",
        icon: "https://cdn.simpleicons.org/react",
      },
      // {
      //   name: "Next.js",
      //   icon: "https://cdn.simpleicons.org/nextdotjs",
      // },
      {
        name: "Node.js",
        icon: "https://cdn.simpleicons.org/nodedotjs",
      },
      {
        name: "TypeScript",
        icon: "https://cdn.simpleicons.org/typescript",
      },
      {
        name: "Tailwind CSS",
        icon: "https://cdn.simpleicons.org/tailwindcss",
      },
    ],
  },

  {
    company: "Miranda Advocacia",
    role: "Full Stack Developer",
    period: "2023 — 2024",
    description:
      "Developed responsive web applications and custom digital tools, integrating frontend interfaces with APIs, databases and third-party services.",
    logo: "/companies/miranda.svg",
    stack: [
      {
        name: "Vue.js",
        icon: "https://cdn.simpleicons.org/vue.js",
      },
      {
        name: "Vite",
        icon: "https://cdn.simpleicons.org/vite",
      },
      {
        name: "Tailwind CSS",
        icon: "https://cdn.simpleicons.org/tailwindcss",
      },
      {
        name: "Firebase",
        icon: "https://cdn.simpleicons.org/firebase",
      },
      {
        name: "MySQL",
        icon: "https://cdn.simpleicons.org/mysql",
      },
    ],
  },

{
  company: "Fyah Store",
  role: "Full Stack Developer",
  period: "2023 — 2024",
  description:
    "Developed a full-stack e-commerce platform with modern web technologies, integrating authentication, database services, payments and responsive interfaces.",
  logo: "/companies/fyah.svg",
  stack: [
    {
      name: "Next.js",
      icon: "https://cdn.simpleicons.org/nextdotjs/white",
    },
    {
      name: "React",
      icon: "https://cdn.simpleicons.org/react",
    },
    {
      name: "TypeScript",
      icon: "https://cdn.simpleicons.org/typescript",
    },
    {
      name: "Prisma",
      icon: "https://cdn.simpleicons.org/prisma",
    },
    {
      name: "PostgreSQL",
      icon: "https://cdn.simpleicons.org/postgresql",
    },
    {
      name: "Firebase",
      icon: "https://cdn.simpleicons.org/firebase",
    },
  ],
},

{
  company: "Glass Vision",
  role: "Full Stack Developer",
  period: "2023 — 2024",
  description:
    "Built responsive web interfaces and custom digital solutions, connecting frontend applications with APIs, business logic and external services.",
  logo: "/companies/glass.svg",
  stack: [
    {
      name: "React",
      icon: "https://cdn.simpleicons.org/react",
    },
    {
      name: "TypeScript",
      icon: "https://cdn.simpleicons.org/typescript",
    },
    {
      name: "Vite",
      icon: "https://cdn.simpleicons.org/vite",
    },
    {
      name: "Tailwind CSS",
      icon: "https://cdn.simpleicons.org/tailwindcss",
    },
    {
      name: "Node.js",
      icon: "https://cdn.simpleicons.org/nodedotjs",
    },
    {
      name: "Express",
      icon: "/icons/express.svg"
    },
  ],
},

{
  company: "Nodus DeFi",
  role: "Full Stack Developer",
  period: "2023 — 2024",
  description:
    "Developed decentralized web applications integrating modern frontend architecture with blockchain protocols, smart contracts and Web3 infrastructure.",
  logo: "/companies/nodus.svg",
  stack: [
    {
      name: "React",
      icon: "https://cdn.simpleicons.org/react",
    },
    {
      name: "TypeScript",
      icon: "https://cdn.simpleicons.org/typescript",
    },
    {
      name: "Solidity",
      icon: "https://cdn.simpleicons.org/solidity",
    },
    {
      name: "Ethers.js",
      icon: "https://cdn.simpleicons.org/ethers",
    },
    {
      name: "Web3.js",
      icon: "https://cdn.simpleicons.org/web3dotjs",
    },
    {
      name: "Node.js",
      icon: "https://cdn.simpleicons.org/nodedotjs",
    },
  ],
},
];