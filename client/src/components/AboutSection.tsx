import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Code, Cpu, Palette, Smartphone } from "lucide-react";
import { cn } from "@/lib/utils";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export function AboutSection() {
  const { registerElement } = useScrollAnimation();
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section 
      id="about" 
      className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
      ref={sectionRef}
    >
      <div className="container mx-auto px-6">
        <div 
          className="mb-12"
          ref={el => registerElement(el)}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={el => registerElement(el)}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Who I Am</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                I'm a pre-final year Computer Science Engineering student at Parul University, Vadodara, Gujarat, with a passion for web development and generative AI.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                My journey in tech started with frontend development, and I've since expanded into exploring generative AI, creating solutions that solve real-world problems.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                When I'm not coding, I'm actively participating in hackathons, organizing tech events as a Student Ambassador, or sharing my learning journey on Twitter and LinkedIn.
              </p>
            </div>
          </motion.div>
          
          <div ref={el => registerElement(el)}>
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <motion.div 
                className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700"
                variants={itemVariants}
              >
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                  <Code className="text-primary dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">Web Development</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Building responsive and interactive web applications with React, JavaScript, and modern frontend technologies.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700"
                variants={itemVariants}
              >
                <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-4">
                  <Cpu className="text-secondary dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">Gen-AI Development</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Exploring and implementing LLM models and RAG techniques to create innovative AI-powered solutions.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700"
                variants={itemVariants}
              >
                <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-4">
                  <Palette className="text-accent dark:text-green-400" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">UI/UX Design</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Creating intuitive and visually appealing user interfaces with a focus on exceptional user experience.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700"
                variants={itemVariants}
              >
                <div className="w-12 h-12 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center mb-4">
                  <Smartphone className="text-red-500 dark:text-red-400" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">Android Development</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Building functional and user-friendly Android applications for various purposes.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
