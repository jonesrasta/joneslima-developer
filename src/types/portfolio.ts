export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  problem: string;
  solution: string;
  engineering: string[];
  result: string;
  technologies: string[];
  image?: string;
  href?: string;
  featured?: boolean;
}

export interface EngineeringItem {
  id: string;
  number: string;
  title: string;
  description: string;
  technologies: string[];
}
