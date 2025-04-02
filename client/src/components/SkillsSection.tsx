import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skillBars, techStack, learning } from "@/data/skillsData";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";
import { Brain, Globe, Code, Binary, Smartphone } from "lucide-react";

const getIcon = (iconName: string) => {
  switch (iconName) {
    case "Code": return <Code className="w-5 h-5" />;
    case "Brain": return <Brain className="w-5 h-5" />;
    case "Cloud": return <Cloud className="w-5 h-5" />;
    case "GitBranch": return <GitBranch className="w-5 h-5" />;
    case "Smartphone": return <Smartphone className="w-5 h-5" />;
    default: return <Code className="w-5 h-5" />;
  }
};

export function SkillsSection() {
  const { registerElement } = useScrollAnimation();
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <section 
      id="skills" 
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
      ref={sectionRef}
    >
      <div className="container mx-auto px-6">
        <div className="mb-12" ref={el => registerElement(el)}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Technical Expertise</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div ref={el => registerElement(el)}>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg p-8 h-full border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Core Skills</h3>

              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                {skillBars.map((skill, index) => (
                  <motion.div 
                    key={index}
                    className={cn(
                      "p-6 rounded-xl shadow-lg backdrop-blur-sm border transition-all duration-300 hover:scale-105",
                      skill.color === 'primary' ? "bg-primary/5 border-primary/20 hover:bg-primary/10" :
                      skill.color === 'secondary' ? "bg-secondary/5 border-secondary/20 hover:bg-secondary/10" :
                      skill.color === 'accent' ? "bg-accent/5 border-accent/20 hover:bg-accent/10" :
                      "bg-gray-50/5 border-gray-200/20 hover:bg-gray-100/10"
                    )}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="flex items-center space-x-4">
                      <div className={cn(
                        "p-3 rounded-lg",
                        skill.color === 'primary' ? "bg-primary/10 text-primary" :
                        skill.color === 'secondary' ? "bg-secondary/10 text-secondary" :
                        skill.color === 'accent' ? "bg-accent/10 text-accent" :
                        `bg-${skill.color}/10 text-${skill.color}`
                      )}>
                        {getIcon(skill.icon)}
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{skill.name}</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">{skill.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>

          <div ref={el => registerElement(el)}>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg p-8 h-full border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Tech Stack</h3>

              <motion.div 
                className="flex flex-wrap gap-3"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                {techStack.map((tech, index) => (
                  <motion.span 
                    key={index}
                    className={cn(
                      "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                      tech.category === 'frontend' ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300" :
                      tech.category === 'backend' ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300" :
                      tech.category === 'ai' ? "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300" :
                      tech.category === 'devops' ? "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300" :
                      "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300"
                    )}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    {tech.name}
                  </motion.span>
                ))}
              </motion.div>

              <h3 className="text-2xl font-bold my-6 text-gray-800 dark:text-white">Currently Learning</h3>

              <motion.div 
                className="flex flex-wrap gap-3"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                {learning.map((item, index) => (
                  <motion.span 
                    key={index}
                    className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full shadow-md text-sm font-medium"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    {item.name}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}