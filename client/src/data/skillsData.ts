import { Skill, TechSkill } from "../types";

export const skillBars: Skill[] = [
  {
    name: "Frontend Development",
    percentage: 90,
    color: "primary"
  },
  {
    name: "Generative AI Development",
    percentage: 75,
    color: "secondary"
  },
  {
    name: "UI/UX Design",
    percentage: 80,
    color: "accent"
  },
  {
    name: "Android Development",
    percentage: 70,
    color: "yellow-500"
  },
  {
    name: "Backend Development",
    percentage: 60,
    color: "red-500"
  }
];

export const techStack: TechSkill[] = [
  { name: "React" },
  { name: "JavaScript" },
  { name: "HTML" },
  { name: "CSS" },
  { name: "LLM Models" },
  { name: "RAG" },
  { name: "MongoDB" },
  { name: "Git" },
  { name: "GitHub" },
  { name: "UI/UX" },
  { name: "Android Development" },
  { name: "Python" },
  { name: "Node.js" },
  { name: "Express" }
];

export const learning: TechSkill[] = [
  { name: "Data Structures & Algorithms" },
  { name: "Advanced LLM Techniques" },
  { name: "System Design" }
];
