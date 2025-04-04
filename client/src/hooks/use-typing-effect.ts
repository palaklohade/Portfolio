import { useState, useEffect, useCallback } from "react";

interface UseTypingEffectProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBeforeTyping?: number;
  delayBeforeDeleting?: number;
}

export function useTypingEffect({
  words,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBeforeTyping = 500,
  delayBeforeDeleting = 1000,
}: UseTypingEffectProps) {
  const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(typingSpeed);

  const typeEffect = useCallback(() => {
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
      setDisplayText(currentWord.substring(0, charIndex - 1));
      setCharIndex(prevCharIndex => prevCharIndex - 1);
      setSpeed(deletingSpeed);
    } else {
      setDisplayText(currentWord.substring(0, charIndex + 1));
      setCharIndex(prevCharIndex => prevCharIndex + 1);
      setSpeed(typingSpeed);
    }
    
    if (!isDeleting && charIndex === currentWord.length) {
      setIsDeleting(true);
      setSpeed(delayBeforeDeleting); 
    }
    
    if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setWordIndex(prevWordIndex => (prevWordIndex + 1) % words.length);
      setSpeed(delayBeforeTyping); 
    }
  }, [charIndex, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, delayBeforeTyping, delayBeforeDeleting]);

  useEffect(() => {
    const timer = setTimeout(typeEffect, speed);
    return () => clearTimeout(timer);
  }, [typeEffect, speed]);

  return { displayText };
}
