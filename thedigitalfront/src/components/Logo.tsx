
import { useTheme } from '@/context/ThemeContext';

const Logo = ({ className }: { className?: string }) => {
  const { isDarkMode } = useTheme();
  
  return (
    <div className={`flex items-center ${className}`}>
      <div className="relative h-8 w-8 mr-2">
        <div className="absolute inset-0 bg-primary rounded-md rotate-45 transform-gpu transition-transform duration-300 hover:rotate-[135deg]"></div>
        <div className={`absolute inset-1 ${isDarkMode ? 'bg-background' : 'bg-white'} rounded-sm`}></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-4 w-0.5 bg-primary"></div>
          <div className="h-0.5 w-4 bg-primary"></div>
        </div>
      </div>
      <span className="font-display text-2xl font-bold">
        <span>The</span><span className="text-primary">Digital</span><span>Front</span>
      </span>
    </div>
  );
};

export default Logo;
