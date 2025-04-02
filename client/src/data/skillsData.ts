
import { Skill, TechSkill } from "../types";

export const skillBars: Skill[] = [
  {
    name: "Frontend Development",
    description: "Building responsive and interactive user interfaces",
    color: "primary",
    icon: "Code"
  },
  {
    name: "Web Development",
    description: "Creating full-stack web applications with modern technologies",
    color: "secondary",
    icon: "Globe"
  },
  {
    name: "Gen-AI Development",
    description: "Implementing LLM solutions and AI-powered applications",
    color: "accent",
    icon: "Brain"
  },
  {
    name: "Mobile Development",
    description: "Developing cross-platform mobile applications",
    color: "yellow-500",
    icon: "Smartphone"
  },
  {
    name: "AI/ML",
    description: "Building and deploying machine learning models",
    color: "red-500",
    icon: "Binary"
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
