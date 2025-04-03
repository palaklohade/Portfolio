import { Project } from "../types";

export const projects: Project[] = [
  {
    id: 1,
    title: "Telegram PDF Summarizer Bot",
    description: "A Telegram bot that summarizes PDF documents and answers user queries, saving students time with quick document analysis.",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    category: "ai",
    technologies: ["Python", "LLM", "RAG", "Telegram API"],
    githubLink: "https://github.com/palaklohade/telegram-pdf-summarizer",
    demoLink: "https://t.me/pdfsummarizerbot"
  },
  {
    id: 2,
    title: "AI PowerPoint Generator",
    description: "An application that generates professional PowerPoint presentations using LLM models and RAG techniques.",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    category: "ai",
    technologies: ["Python", "LLM", "RAG", "React"],
    githubLink: "https://github.com/palaklohade/ai-ppt-generator",
    inProgress: true
  },
  {
    id: 3,
    title: "Background Remover",
    description: "A web application that removes backgrounds from images using external APIs for seamless image editing.",
    image: "https://images.unsplash.com/photo-1535303311164-664fc9ec6532?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    category: "web",
    technologies: ["React", "JavaScript", "API Integration", "CSS"],
    githubLink: "https://github.com/palaklohade/background-remover",
    demoLink: "https://background-remover-app.netlify.app"
  },
  {
    id: 4,
    title: "Healthcare Fake News Detector",
    description: "An ML-powered application that detects fake news in the healthcare domain, trained on verified data sources.",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    category: "ml",
    technologies: ["Python", "Machine Learning", "NLP", "Flask"],
    githubLink: "https://github.com/palaklohade/healthcare-fakenews-detector",
    researchPaper: "https://example.com/research-paper"
  },
  {
    id: 5,
    title: "Task Sorter",
    description: "A web application that helps users organize and prioritize tasks based on their input and preferences.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    category: "web",
    technologies: ["HTML", "CSS", "JavaScript", "Local Storage"],
    githubLink: "https://github.com/palaklohade/task-sorter",
    demoLink: "https://task-sorter-app.netlify.app"
  },
  {
    id: 6,
    title: "EcoTracer",
    description: "An Android application developed during a hackathon that helps users track and reduce their environmental impact.",
    image: "https://images.unsplash.com/photo-1473186578172-c141e6798cf4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    category: "mobile",
    technologies: ["Android", "Java", "UI/UX", "Firebase"],
    githubLink: "https://github.com/palaklohade/eco-tracer",
    isHackathon: true
  },
  {
    id: 7,
    title: "CityPlus Explorer",
    description: "A travel companion app that suggests interesting places to visit based on user preferences and location data.",
    image: "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    category: "web",
    technologies: ["Android", "Kotlin", "Google Maps API", "UI/UX"],
    githubLink: "https://github.com/palaklohade/cityplus-explorer",
    isHackathon: true
  }
];

export const projectCategories = [
  { id: "all", name: "All" },
  { id: "ai", name: "Gen AI" },
  { id: "web", name: "Web Dev" },
  { id: "mobile", name: "Mobile" },
  { id: "ml", name: "ML/AI" }
];