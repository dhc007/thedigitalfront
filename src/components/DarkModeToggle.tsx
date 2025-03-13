
import { useTheme } from '@/context/ThemeContext';
import { Moon, Sun } from 'lucide-react';
import { Toggle } from '@/components/ui/toggle';

const DarkModeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <Toggle 
      pressed={isDarkMode} 
      onPressedChange={toggleDarkMode}
      aria-label="Toggle dark mode"
      className="p-2 hover:bg-secondary transition-colors animate-fade-in"
    >
      {isDarkMode ? (
        <Moon className="h-5 w-5" />
      ) : (
        <Sun className="h-5 w-5" />
      )}
    </Toggle>
  );
};

export default DarkModeToggle;
