
import { useEffect, useState } from "react";
import { useRoute } from "wouter";
import { projects } from "@/data/projectsData";
import { Button } from "@/components/ui/button";
import { Github, ArrowLeft, ExternalLink } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export default function ProjectDetails() {
  const [, params] = useRoute("/project/:id");
  const [project, setProject] = useState(projects[0]);
  const { registerElement } = useScrollAnimation();

  useEffect(() => {
    if (params?.id) {
      const projectData = projects.find(p => p.id === parseInt(params.id));
      if (projectData) setProject(projectData);
    }
  }, [params]);

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-6 py-12">
        <Button 
          variant="ghost" 
          onClick={() => window.history.back()}
          className="mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4 mb-8">
              {project.githubLink && (
                <Button asChild>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" /> View Code
                  </a>
                </Button>
              )}
              {project.demoLink && (
                <Button variant="outline" asChild>
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                  </a>
                </Button>
              )}
            </div>
          </div>

          <div className="space-y-8">
            <Carousel className="w-full">
              <CarouselContent>
                <CarouselItem>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="rounded-xl w-full aspect-video object-cover"
                  />
                </CarouselItem>
                {project.screenshots?.map((screenshot, index) => (
                  <CarouselItem key={index}>
                    <img
                      src={screenshot}
                      alt={`${project.title} screenshot ${index + 1}`}
                      className="rounded-xl w-full aspect-video object-cover"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>

            {project.features && (
              <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4">Key Features</h2>
                <ul className="space-y-2">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 mr-2 mt-1 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
