
import { motion } from "framer-motion";

export function MatrixBackground({ opacity = 0.2 }: { opacity?: number }) {
  return (
    <div className="absolute inset-0" style={{ opacity }}>
      {Array.from({ length: 25 }).map((_, i) => (
        <div
          key={i}
          className="absolute text-primary animate-matrix-fall"
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
  );
}
