import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Briefcase, CheckCircle, Trophy } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export function ExperienceSection() {
  const { registerElement } = useScrollAnimation();
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section 
      id="experience" 
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
      ref={sectionRef}
    >
      <div className="container mx-auto px-6">
        <div 
          className="mb-12"
          ref={el => registerElement(el)}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Experience & Education</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            ref={el => registerElement(el)}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white flex items-center">
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mr-3">
                <GraduationCap className="text-primary dark:text-blue-400" />
              </div>
              Education
            </h3>
            
            <div className="space-y-8">
              <motion.div 
                className="relative pl-8 border-l-2 border-gray-300 dark:border-gray-700 pb-8"
                variants={itemVariants}
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-primary dark:bg-blue-500 rounded-full"></div>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-200 dark:border-gray-700">
                  <h4 className="text-xl font-bold text-gray-800 dark:text-white">B.Tech in Computer Science Engineering</h4>
                  <p className="text-primary dark:text-blue-400 font-medium">Parul University, Vadodara, Gujarat</p>
                  <p className="text-gray-600 dark:text-gray-300 mt-2">Expected Graduation: 2025</p>
                  <p className="text-gray-600 dark:text-gray-300 mt-4">
                    Currently in pre-final year, focusing on modern development technologies and AI/ML applications.
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                className="relative pl-8 border-l-2 border-gray-300 dark:border-gray-700"
                variants={itemVariants}
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-primary dark:bg-blue-500 rounded-full"></div>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-200 dark:border-gray-700">
                  <h4 className="text-xl font-bold text-gray-800 dark:text-white">Additional Certifications</h4>
                  <ul className="mt-4 space-y-3 text-gray-600 dark:text-gray-300">
                    <li className="flex items-start">
                      <CheckCircle className="text-primary dark:text-blue-400 mt-1 mr-2 h-4 w-4" />
                      <span>Web Development Bootcamp - Udemy</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-primary dark:text-blue-400 mt-1 mr-2 h-4 w-4" />
                      <span>Introduction to LLMs and Generative AI - DeepLearning.AI</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-primary dark:text-blue-400 mt-1 mr-2 h-4 w-4" />
                      <span>UI/UX Design Fundamentals - Google</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div
            ref={el => registerElement(el)}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white flex items-center">
              <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mr-3">
                <Briefcase className="text-accent dark:text-green-400" />
              </div>
              Experience
            </h3>
            
            <div className="space-y-8">
              <motion.div 
                className="relative pl-8 border-l-2 border-gray-300 dark:border-gray-700 pb-8"
                variants={itemVariants}
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-accent dark:bg-green-500 rounded-full"></div>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-200 dark:border-gray-700">
                  <h4 className="text-xl font-bold text-gray-800 dark:text-white">Student Ambassador</h4>
                  <p className="text-accent dark:text-green-400 font-medium">Technical Event Cell, Parul University</p>
                  <p className="text-gray-600 dark:text-gray-300 mt-2">2022 - Present</p>
                  <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-300">
                    <li className="flex items-start">
                      <CheckCircle className="text-accent dark:text-green-400 mt-1 mr-2 h-4 w-4" />
                      <span>Organized technical events, hackathons, and seminars for university students</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-accent dark:text-green-400 mt-1 mr-2 h-4 w-4" />
                      <span>Conducted workshops on web development and emerging technologies</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-accent dark:text-green-400 mt-1 mr-2 h-4 w-4" />
                      <span>Served as an anchor for technical events and conferences</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
              
              <motion.div 
                className="relative pl-8 border-l-2 border-gray-300 dark:border-gray-700"
                variants={itemVariants}
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-accent dark:bg-green-500 rounded-full"></div>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-200 dark:border-gray-700">
                  <h4 className="text-xl font-bold text-gray-800 dark:text-white">Hackathon Achievements</h4>
                  <p className="text-accent dark:text-green-400 font-medium">Various Events</p>
                  <ul className="mt-4 space-y-3 text-gray-600 dark:text-gray-300">
                    <li className="flex items-start">
                      <Trophy className="text-accent dark:text-green-400 mt-1 mr-2 h-4 w-4" />
                      <span>Semifinalist - All India Women's Hackathon</span>
                    </li>
                    <li className="flex items-start">
                      <Trophy className="text-accent dark:text-green-400 mt-1 mr-2 h-4 w-4" />
                      <span>Participant - HackVerse</span>
                    </li>
                    <li className="flex items-start">
                      <Trophy className="text-accent dark:text-green-400 mt-1 mr-2 h-4 w-4" />
                      <span>Participant - AI/ML Hackathon</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
