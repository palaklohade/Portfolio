import { motion } from "framer-motion";
import { useTypingEffect } from "@/hooks/use-typing-effect";
import { Button } from "@/components/ui/button";
import { ChevronDown, Github, Linkedin, Twitter, FileText } from "lucide-react";
import { FaMedium } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { Link } from "wouter";


export function HeroSection() {
  const professions = ["Frontend Developer", "Web Developer", "Gen-AI Developer","Android Developer"];
  const { displayText } = useTypingEffect({ words: professions });

  return (
    <section id="home" className="min-h-screen pt-28 pb-16 flex flex-col justify-center bg-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        {Array.from({ length: 25 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-primary animate-matrix-fall "
            style={{
              left: `${(i / 25) * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              fontSize: '1.2rem'
            }}
          >
            {Array.from({ length: 30 }).map((_, j) => (
              <div
                key={j}
                style={{ animationDelay: `${Math.random() * 5}s` }}
              >
                {Math.random() > 0.5 ? '1' : '0'}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div 
            className="order-2 lg:order-1 z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-primary font-medium mb-4 z-10">Hi there, I'm</p>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white z-10">Palak Lohade</h1>

            <div className="flex flex-wrap my-4">
              <div className="flex items-center mr-5 mb-3">
                <div className="w-1 h-10 bg-primary mr-3"></div>
                <div id="profession-text" className="text-lg md:text-xl font-medium">{displayText}</div>
              </div>
            </div>

            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              A pre-final year Computer Science Engineering student passionate about crafting 
              engaging web experiences and exploring the potential of generative AI.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="shadow-md hover:shadow-lg" asChild>
                <a href="#contact">Get in Touch</a>
              </Button>
              <Button size="lg" variant="outline" className="shadow-sm hover:shadow-md" asChild>
                <a href="#projects">View Projects</a>
              </Button>
            </div>

            <div className="flex space-x-5 mt-8">
              <a 
                href="https://github.com/palaklohade" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-blue-400 transition-colors" 
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/palak-lohade/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-primary transition-colors text-glow" 
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="https://x.com/palak_codes" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-primary transition-colors text-glow" 
                aria-label="Twitter"
              >
                <Twitter size={24} />
              </a>
              <a 
              href="https://medium.com/@palaklohade04" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-blue-400 transition-colors" 
              aria-label="Medium"
            >
              <FaMedium size={20} />
            </a>
            </div>
          </motion.div>

          <motion.div 
            className="order-1 lg:order-2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
<div className="absolute -inset-1 bg-gradient-to-br from-[#0d0d0d] via-[#1a1a2e] to-[#252b48] rounded-full blur-2xl opacity-60"></div>

             <img src="/no-bg (2).png" alt="Palak Lohade" className="w-full max-w-md mx-auto rounded-full shadow-2xl z-10 relative aspect-square object-cover" />

            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <a 
          href="#about" 
          className="text-gray-400 dark:text-gray-500 hover:text-primary dark:hover:text-blue-400 transition-colors"
          aria-label="Scroll down"
        >
          <ChevronDown size={24} />
        </a>
      </div>
    </section>
  );
}