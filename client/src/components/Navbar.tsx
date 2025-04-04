import { useState, useEffect } from "react";
import { Link } from "wouter";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavLink {
  href: string;
  label: string;
}

const navLinks: NavLink[] = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" }
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-colors duration-300",
      scrolled ? "bg-white/90 dark:bg-gray-900/90 border-gray-200 dark:border-gray-800" : "bg-transparent border-transparent"
    )}>
      <nav className="container mx-auto px-6 py-3 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          <span className="text-gray-800 dark:text-white">Palak</span>
          <span className="text-primary">Lohade</span>
        </Link>
        
        <div className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link) => (
            <a 
              key={link.href}
              href={link.href}
              className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
          
          <ThemeToggle />
        </div>
        
        <button 
          className="md:hidden text-gray-600 dark:text-gray-300 focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
      
      <div 
        className={cn(
          "md:hidden bg-white dark:bg-gray-900 shadow-lg border-t border-gray-200 dark:border-gray-800 transition-all duration-300",
          mobileMenuOpen ? "block" : "hidden"
        )}
      >
        <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-white transition-colors py-2"
              onClick={closeMobileMenu}
            >
              {link.label}
            </a>
          ))}
          
          <div className="flex justify-between items-center py-2">
            <span className="text-gray-600 dark:text-gray-300">Theme</span>
            <ThemeToggle isMobile />
          </div>
        </div>
      </div>
    </header>
  );
}
