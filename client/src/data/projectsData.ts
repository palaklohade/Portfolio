import { Project } from "../types";

export const projects: Project[] = [
 {
  id: 1,
  title: "Telegram PDF Summarizer Bot",
  description: "A Telegram bot that quickly summarizes PDFs and answers queries, making learning effortless. With AI-powered insights, it saves time and effort. The project went viral, hitting 20K+ views on LinkedIn, with users loving it. More upgrades are on the way!",
  image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
  category: "ai",
  screenshots: [
      "/ppt.png",
      "/ppt2.png",
      "/ppt3.png",
    ],
  technologies: ["Python", "LLM", "RAG", "Telegram API"],
  features: [
    "Instant PDF summarization for quick insights",
    "AI-powered answers to document-related queries",
    "Supports multiple languages for wider accessibility",
    "User-friendly Telegram integration for easy access",
    "Ongoing improvements based on user feedback"
  ],
  githubLink: "https://github.com/palaklohade/pdf_Sumarizer_telegram_bo",
  linkedinLink: "https://www.linkedin.com/feed/update/urn:li:activity:7307454582098464768/"
},

  {
    id: 2,
    title: "AI PowerPoint Generator",
    description: "An application that generates professional PowerPoint presentations using LLM models and RAG techniques.",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    category: "ai",
    technologies: ["Python", "LLM", "RAG", "React"],
    githubLink: "https://github.com/palaklohade?tab=repositories",
    inProgress: true
  },
  {
    id: 3,
    title: "Background Remover",
    description: "An AI-powered web application that removes backgrounds from images with precision, leveraging external APIs to deliver high-quality, professional-grade cutouts for seamless editing",
    image: "/bgfront.png",
    category: "web",
    screenshots: [
      "/bg1.png",
      "/bg2.png",
      "/bg3.png",
      "/bg4.png",
      "/bg5.png"
    ],
    technologies: ["React", "JavaScript", "API Integration", "CSS"],
    features: [
        " Instant Background Removal - Upload an image and get a clear cutout in seconds.",
        " High-Quality Precision - Maintains fine details like hair and edges with smooth processing.",
        " Multiple Output Options - Choose transparency, solid colors, or custom background replacements.",
        " Drag & Drop Simplicity - Upload images effortlessly with an intuitive interface.",
        " Supports Various Formats - Works with PNG, JPG, and more for seamless compatibility.",
        " One-Click Download - Get high-resolution images ready for use instantly.",
        " Optimized for Speed - Lightning-fast processing without compromising quality.",
        " Web & API Integration - Easily integrate into websites or applications for automated use"
    ],
    githubLink: "https://github.com/palaklohade/background-remover"
  },
  
    {
  id: 4,
  title: "Healthcare Fake News Detector",
  description: "An ML-powered application that detects fake news in the healthcare domain, trained on verified data sources.",
  image: "/fakes.png",
  category: "ml",
  screenshots: [
    "/fake1.png",
    "/fake2.png",
    "/fake3.png",
    "/fake4.png"
  ],
  technologies: ["Python", "Machine Learning", "NLP", "Flask"],
  features: [
    "Detects fake news in the healthcare domain with high accuracy",
    "Uses Natural Language Processing (NLP) for text analysis",
    "Trained on verified medical and news datasets",
    "Provides real-time news verification",
    "Simple and interactive web interface"
  ],
  githubLink: "https://github.com/palaklohade/minor_project"
},

  {
    id: 5,
    title: "Task Sorter",
    description: "A web application that helps users organize and prioritize tasks based on their input and preferences.",
    image: "/taskk.png",
    category: "web",
    technologies: ["HTML", "CSS", "JavaScript", "Local Storage"],
    githubLink: "https://github.com/palaklohade/work_wizard",
  },
  {
  id: 6,
  title: "EcoTracer",
  description: "An Android app that helps users track and reduce their environmental impact. Highly appreciated for its UI/UX, it gained 2K+ views on LinkedIn.",
  image: "/eco1.png?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
  screenshots: [
    "/eco1.png",
    "/eco2.png",
    "/eco3.png",
    "/eco4.png"
  ],
  category: "mobile",
  technologies: ["Android", "Java", "UI/UX"],
  features: [
    "Real-time environmental impact tracking",
    "Gamified approach to encourage eco-friendly habits",
    "Interactive dashboard with personalized insights",
    "Seamless Firebase integration for secure data storage",
    "Sleek UI/UX, highly praised by users"
  ],
  linkedinLink: "https://www.linkedin.com/feed/update/urn:li:activity:7281578535033466880/",
  isHackathon: true
}
,
  {
  id: 7,
  title: "CityPlus Explorer",
  description: "Your ultimate travel companion! CityPlus Explorer helps you uncover hidden gems, cultural hotspots, and the best dining spots with AI-powered personalized recommendations based on your preferences and location.",
  image: "/city.png",
  screenshots: [
    "/city1.png",
    "/city2.png",
    "/city3.png"
  ],
  
  category: "web",
  technologies: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
  features: [
    "Smart exploration - Find top attractions across categories like Art, Museums, Food, and Architecture",
    "AI-powered personalization - Get recommendations tailored to your taste",
    "Location-based search - Discover must-visit places near you",
    "Save & curate - Build collections of your favorite spots",
    "Detailed insights - View ratings, reviews, and essential details"
  ],
  githubLink: "https://github.com/palaklohade?tab=repositories"
}

];

export const projectCategories = [
  { id: "all", name: "All" },
  { id: "ai", name: "Gen AI" },
  { id: "web", name: "Web" },
  { id: "mobile", name: "Mobile" },
  { id: "ml", name: "ML/AI" }
];