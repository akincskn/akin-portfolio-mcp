export interface About {
  name: string;
  title: string;
  location: string;
  email: string;
  github: string;
  portfolio: string;
  linkedin: string;
  summary: string;
  bio: string;
  availability: string;
  languages: string[];
  certifications: string[];
  interests: string[];
  medium?: string;
  devto?: string;
}

export interface Skills {
  frontend: string[];
  backend: string[];
  database: string[];
  auth: string[];
  automation: string[];
  ai: string[];
  devops: string[];
  tools: string[];
}

export type SkillCategory = keyof Skills;

export interface Project {
  name: string;
  description: string;
  stack: string[];
  highlights: string[];
  url?: string;
  github?: string;
}

export interface Contact {
  email: string;
  github: string;
  portfolio: string;
  linkedin: string;
}

export interface ExperienceSummary {
  totalProjects: number;
  productionProjects: number;
  keyAreas: string[];
  highlight: string;
}
