
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skillBars, techStack, learning } from "@/data/skillsData";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";
import { Brain, Globe, Code, Binary, Smartphone, Cloud, GitBranch } from "lucide-react";

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
      className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300"
      ref={sectionRef}
    >
      <div className="container mx-auto px-6">
        <div className="mb-12" ref={el => registerElement(el)}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">Technical Expertise</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div ref={el => registerElement(el)}>
            <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-lg rounded-xl shadow-xl p-8 h-full border border-gray-200/50 dark:border-gray-700/50 hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-300">
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
                      "p-6 rounded-xl shadow-lg backdrop-blur-sm border transition-all duration-300 hover:scale-105 group",
                      skill.color === 'primary' ? "bg-primary/5 dark:bg-primary/5 border-primary/30 dark:border-primary/20 hover:bg-primary/10 dark:hover:bg-primary/10" :
                      skill.color === 'secondary' ? "bg-secondary/5 dark:bg-secondary/5 border-secondary/30 dark:border-secondary/20 hover:bg-secondary/10 dark:hover:bg-secondary/10" :
                      skill.color === 'accent' ? "bg-accent/5 dark:bg-accent/5 border-accent/30 dark:border-accent/20 hover:bg-accent/10 dark:hover:bg-accent/10" :
                      "bg-gray-100/50 dark:bg-gray-800/50 border-gray-300 dark:border-gray-700 hover:bg-gray-200/50 dark:hover:bg-gray-700/50"
                    )}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="flex items-center space-x-4">
                      <div className={cn(
                        "p-3 rounded-lg transition-colors duration-300 group-hover:scale-110",
                        skill.color === 'primary' ? "bg-primary/10 text-primary group-hover:bg-primary/20" :
                        skill.color === 'secondary' ? "bg-secondary/10 text-secondary group-hover:bg-secondary/20" :
                        skill.color === 'accent' ? "bg-accent/10 text-accent group-hover:bg-accent/20" :
                        `bg-${skill.color}/10 text-${skill.color} group-hover:bg-${skill.color}/20`
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
            <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-lg rounded-xl shadow-xl p-8 h-full border border-gray-200/50 dark:border-gray-700/50 hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-300">
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
                      "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 cursor-default",
                      tech.category === 'frontend' ? "bg-gradient-to-r from-blue-500/10 to-blue-600/10 text-blue-700 dark:text-blue-300 border border-blue-500/20" :
                      tech.category === 'backend' ? "bg-gradient-to-r from-green-500/10 to-green-600/10 text-green-700 dark:text-green-300 border border-green-500/20" :
                      tech.category === 'ai' ? "bg-gradient-to-r from-purple-500/10 to-purple-600/10 text-purple-700 dark:text-purple-300 border border-purple-500/20" :
                      tech.category === 'devops' ? "bg-gradient-to-r from-orange-500/10 to-orange-600/10 text-orange-700 dark:text-orange-300 border border-orange-500/20" :
                      "bg-gradient-to-r from-gray-500/10 to-gray-600/10 text-gray-700 dark:text-gray-300 border border-gray-500/20"
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
                    className="px-4 py-2 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 text-gray-800 dark:text-white rounded-full shadow-md text-sm font-medium border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 cursor-default"
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
