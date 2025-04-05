
import { Skill, TechSkill } from "../types";

export const skillBars: Skill[] = [
  {
    name: "Frontend Development",
    description: "Building responsive and interactive user interfaces",
    color: "primary",
    icon: "Code"
  },
  {
    name: "Backend Development",
    description: "Creating robust server-side applications and APIs",
    color: "primary",
    icon: "Globe"
  },
  {
    name: "Data Structures & Algorithms",
    description: "Problem-solving and optimization techniques",
    color: "primary",
    icon: "Binary"
  },
  {
    name: "Database Management",
    description: "Working with MongoDB and Firebase",
    color: "primary",
    icon: "Database"
  },
  {
    name: "API Development",
    description: "Building and testing RESTful APIs",
    color: "primary",
    icon: "Api"
  }
];

export const techStack: TechSkill[] = [
  { name: "React", category: "frontend" },
  { name: "JavaScript", category: "frontend" },
  { name: "HTML", category: "frontend" },
  { name: "CSS", category: "frontend" },
  { name: "Node.js", category: "backend" },
  { name: "Express.js", category: "backend" },
  { name: "MongoDB", category: "backend" },
  { name: "Python", category: "backend" },
  { name: "Firebase", category: "backend" },
  { name: "Git", category: "devops" },
  { name: "GitHub", category: "devops" },
  { name: "Authentication", category: "security" },
  { name: "RESTful APIs", category: "backend" },
  { name: "Postman", category: "tools" },
  { name: "Render", category: "devops" },
  { name: "DSA", category: "core" },
  { name: "Competitive Programming", category: "core" }
];

export const learning: TechSkill[] = [
  { name: "LLMs", category: "ai" },
  { name: "RAG", category: "ai" },
  { name: "Neural Networks", category: "ai" },
  { name: "Hugging Face", category: "ai" },
  { name: "LangChain", category: "ai" },
  { name: "TensorFlow", category: "ai" },
  { name: "PyTorch", category: "ai" }
];
