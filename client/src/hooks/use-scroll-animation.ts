import { useEffect, useRef } from "react";

export function useScrollAnimation() {
  const elementsRef = useRef<HTMLElement[]>([]);

  const registerElement = (element: HTMLElement | null) => {
    if (element && !elementsRef.current.includes(element)) {
      elementsRef.current.push(element);
    }
  };

  const animateOnScroll = () => {
    elementsRef.current.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (elementPosition < windowHeight - 50) {
        element.classList.add("animate-visible");
      }
    });
  };

  useEffect(() => {
    setTimeout(animateOnScroll, 100);
    
    window.addEventListener("scroll", animateOnScroll);
    
    return () => {
      window.removeEventListener("scroll", animateOnScroll);
    };
  }, []);

  return { registerElement };
}
