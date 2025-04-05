import { useState, useEffect } from "react";
import { Link } from "wouter";
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
          
          
        </div>
        
        
      </nav>
      
      
    </header>
  );
}
