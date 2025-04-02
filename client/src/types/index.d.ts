export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: 'ai' | 'web' | 'mobile' | 'ml';
  technologies: string[];
  githubLink?: string;
  demoLink?: string;
  inProgress?: boolean;
  isHackathon?: boolean;
  researchPaper?: string;
}

export interface Skill {
  name: string;
  description: string;
  color: string;
  icon: string;
}

export interface TechSkill {
  name: string;
}

export interface FormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactSubmissionData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
