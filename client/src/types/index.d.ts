export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: 'ai' | 'web' | 'mobile' | 'ml';
  technologies: string[];
  githubLink?: string;
  demoLink?: string;
  linkedinLink?:string;
  inProgress?: boolean;
  isHackathon?: boolean;
  researchPaper?: string;
  videoUrl?: string;
  screenshots?: string[];
  features?: string[];
  timeline?: {
    start: string;
    end: string;
    status: string;
  };
}

export interface Skill {
  name: string;
  description: string;
  color: string;
  icon: string;
}

export interface TechSkill {
  category: string;
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