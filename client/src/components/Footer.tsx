import { Link } from "wouter";
import { Github, Linkedin, Twitter } from "lucide-react";
import { FaMedium } from "react-icons/fa";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-10 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="text-xl font-bold">
              <span className="text-gray-800 dark:text-white">Palak</span>
              <span className="text-primary">Lohade</span>
            </Link>
            <p className="text-gray-600 dark:text-gray-300 mt-2">Frontend Developer | Gen-AI Developer</p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://github.com/palaklohade" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-blue-400 transition-colors" 
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com/in/palaklohade" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-blue-400 transition-colors" 
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://twitter.com/palaklohade" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-blue-400 transition-colors" 
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
            <a 
              href="https://medium.com/@palaklohade" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-blue-400 transition-colors" 
              aria-label="Medium"
            >
              <FaMedium size={20} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-600 dark:text-gray-300">&copy; {currentYear} Palak Lohade. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
