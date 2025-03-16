
import React, { createContext, useContext } from 'react';

type ThemeContextType = {
  isDarkMode: boolean;
  toggleDarkMode: () => void; // Added this property
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  // Always use dark mode - but we'll add a toggle function that doesn't change anything
  const isDarkMode = true;

  React.useEffect(() => {
    // Always set to dark mode
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }, []);

  // This function won't actually toggle the theme since we want to stay in dark mode
  // But we need to provide it to satisfy the TypeScript interface
  const toggleDarkMode = () => {
    // Do nothing - we're forcing dark mode only
    console.log("Dark mode toggle attempted, but we're keeping dark mode only");
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
