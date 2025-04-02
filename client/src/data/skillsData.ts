
import { Skill, TechSkill } from "../types";

export const skillBars: Skill[] = [
  {
    name: "Full Stack Development",
    percentage: 90,
    color: "primary",
    icon: "Code"
  },
  {
    name: "Artificial Intelligence",
    percentage: 85,
    color: "secondary",
    icon: "Brain"
  },
  {
    name: "Cloud Architecture",
    percentage: 80,
    color: "accent",
    icon: "Cloud"
  },
  {
    name: "DevOps & CI/CD",
    percentage: 75,
    color: "yellow-500",
    icon: "GitBranch"
  },
  {
    name: "Mobile Development",
    percentage: 70,
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
