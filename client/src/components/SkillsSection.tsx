import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skillBars, techStack, learning } from "@/data/skillsData";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";

export function SkillsSection() {
  const { registerElement } = useScrollAnimation();
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5
      }
    }
  };
  
  const techItemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <section 
      id="skills" 
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
      ref={sectionRef}
    >
      <div className="container mx-auto px-6">
        <div 
          className="mb-12"
          ref={el => registerElement(el)}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">My Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div ref={el => registerElement(el)}>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg p-8 h-full border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Technical Skills</h3>
              
              <motion.div 
                className="space-y-6"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                {skillBars.map((skill, index) => (
                  <motion.div key={index} variants={itemVariants}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
                      <span className={`text-${skill.color} dark:text-${skill.color === 'primary' ? 'blue-400' : skill.color === 'secondary' ? 'purple-400' : skill.color === 'accent' ? 'green-400' : skill.color}`}>
                        {skill.percentage}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div 
                        className={cn(
                          "h-2 rounded-full",
                          skill.color === 'primary' ? "bg-primary dark:bg-blue-500" :
                          skill.color === 'secondary' ? "bg-secondary dark:bg-purple-500" :
                          skill.color === 'accent' ? "bg-accent dark:bg-green-500" :
                          `bg-${skill.color} dark:bg-${skill.color}`
                        )} 
                        style={{ width: `${skill.percentage}%` }}
                      ></div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
          
          <div ref={el => registerElement(el)}>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg p-8 h-full border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Technology Stack</h3>
              
              <motion.div 
                className="flex flex-wrap gap-3"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                {techStack.map((tech, index) => (
                  <motion.span 
                    key={index}
                    className="px-4 py-2 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 rounded-full shadow-md border border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-blue-500 transition-colors"
                    variants={techItemVariants}
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
                transition={{ delayChildren: 0.5 }}
              >
                {learning.map((item, index) => (
                  <motion.span 
                    key={index}
                    className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full shadow-md"
                    variants={techItemVariants}
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
