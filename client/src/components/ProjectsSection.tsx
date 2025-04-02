import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { projects, projectCategories } from "@/data/projectsData";
import { Github, ExternalLink, Trophy, FileText, GitBranch } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function ProjectsSection() {
  const [filter, setFilter] = useState("all");
  const { registerElement } = useScrollAnimation();
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  
  const handleFilterChange = (category: string) => {
    setFilter(category);
  };
  
  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section 
      id="projects" 
      className="py-20 bg-black relative overflow-hidden"
      ref={sectionRef}
    >
      <MatrixBackground opacity={0.1} />
      <div className="container mx-auto px-6">
        <div 
          className="mb-12"
          ref={el => registerElement(el)}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">My Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {projectCategories.map((category) => (
              <Button
                key={category.id}
                onClick={() => handleFilterChange(category.id)}
                variant={filter === category.id ? "default" : "outline"}
                className="rounded-full"
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                ref={el => registerElement(el)}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.5
                    }
                  }
                }}
                exit={{ opacity: 0, y: 20 }}
                layout
                className="project-card"
                data-category={project.category}
              >
                <div className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 h-full transition-transform hover:-translate-y-2 hover:shadow-xl">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className={cn(
                      "absolute top-3 right-3 text-white text-xs font-bold px-2 py-1 rounded",
                      project.category === "ai" ? "bg-blue-500" :
                      project.category === "web" ? "bg-green-500" :
                      project.category === "mobile" ? "bg-orange-500" :
                      "bg-purple-500"
                    )}>
                      {project.category === "ai" ? "Gen AI" :
                      project.category === "web" ? "Web" :
                      project.category === "mobile" ? "Mobile" :
                      "ML/AI"}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, index) => (
                        <span 
                          key={index}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex justify-between mt-auto">
                      {project.githubLink && (
                        <a 
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300 transition-colors font-medium flex items-center"
                        >
                          <Github size={16} className="mr-2" /> View Code
                        </a>
                      )}
                      
                      {project.demoLink && (
                        <a 
                          href={project.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300 transition-colors font-medium flex items-center"
                        >
                          <ExternalLink size={16} className="mr-2" /> Live Demo
                        </a>
                      )}
                      
                      {project.researchPaper && (
                        <a 
                          href={project.researchPaper}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300 transition-colors font-medium flex items-center"
                        >
                          <FileText size={16} className="mr-2" /> Research Paper
                        </a>
                      )}
                      
                      {project.inProgress && (
                        <span className="text-gray-500 dark:text-gray-400 flex items-center">
                          <GitBranch size={16} className="mr-2" /> In Progress
                        </span>
                      )}
                      
                      {project.isHackathon && (
                        <span className="text-gray-500 dark:text-gray-400 flex items-center">
                          <Trophy size={16} className="mr-2" /> Hackathon Project
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="inline-flex items-center shadow-md" asChild>
            <a 
              href="https://github.com/palaklohade"
              target="_blank"
              rel="noopener noreferrer"
            >
              View All Projects on GitHub <Github className="ml-2" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
