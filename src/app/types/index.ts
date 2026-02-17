// types/index.ts
export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  tech: string[];
  link: string;
  size: string; // for Bento Grid layout
}

export interface Skill {
  name: string;
  icon?: string;
  category: 'Frontend' | 'Backend' | 'CS-Foundations';
}