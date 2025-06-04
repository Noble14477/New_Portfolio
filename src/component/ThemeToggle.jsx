import { useEffect, useState } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode, isMounted]);

  // Smooth transition for the toggle
  const toggleClasses = `
    relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300
    ${darkMode ? 'bg-tertiary' : 'bg-gray-300'}
  `;

  const dotClasses = `
    inline-block h-5 w-5 transform rounded-full bg-white shadow-lg transition-transform duration-300
    ${darkMode ? 'translate-x-6' : 'translate-x-1'}
  `;

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="flex items-center gap-2 focus:outline-none"
      aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <span className="sr-only">Toggle theme</span>
      
      <span className={toggleClasses}>
        <span className={dotClasses}>
          {darkMode ? (
            <FiMoon className="absolute inset-0 m-auto h-3 w-3 text-indigo-600" />
          ) : (
            <FiSun className="absolute inset-0 m-auto h-3 w-3 text-yellow-500" />
          )}
        </span>
      </span>
      
      {/* <span className="text-sm font-medium dark:text-white">
        {darkMode ? 'Dark' : 'Light'}
      </span> */}
    </button>
  );
}