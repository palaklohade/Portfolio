import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/use-theme.tsx";
import { Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ThemeToggleProps {
  isMobile?: boolean;
}

export function ThemeToggle({ isMobile = false }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className={cn(
        "w-10 h-10 rounded-full",
        "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200",
        "hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
      )}
      id={isMobile ? "mobile-theme-toggle" : "theme-toggle"}
    >
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:rotate-90 dark:scale-0" />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
