
import { Skill, TechSkill } from "../types";

export const skillBars: Skill[] = [
  {
    name: "Full Stack Development",
    description: "Building scalable web applications with modern frameworks",
    color: "primary",
    icon: "Code"
  },
  {
    name: "Artificial Intelligence",
    description: "Developing AI solutions and implementing ML models",
    color: "secondary",
    icon: "Brain"
  },
  {
    name: "Cloud Architecture",
    description: "Designing and implementing cloud-native solutions",
    color: "accent",
    icon: "Cloud"
  },
  {
    name: "DevOps & CI/CD",
    description: "Automating deployment and maintaining infrastructure",
    color: "yellow-500",
    icon: "GitBranch"
  },
  {
    name: "Mobile Development",
    description: "Creating cross-platform mobile applications",
    color: "red-500",
    icon: "Smartphone"
  }
];

export const techStack: TechSkill[] = [
  { name: "React", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "Node.js", category: "backend" },
  { name: "Python", category: "backend" },
  { name: "PostgreSQL", category: "backend" },
  { name: "TensorFlow", category: "ai" },
  { name: "PyTorch", category: "ai" },
  { name: "Docker", category: "devops" },
  { name: "AWS", category: "devops" },
  { name: "Git", category: "devops" },
  { name: "React Native", category: "mobile" }
];

export const learning: TechSkill[] = [
  { name: "Web3", category: "emerging" },
  { name: "Rust", category: "emerging" },
  { name: "Kubernetes", category: "devops" }
];
