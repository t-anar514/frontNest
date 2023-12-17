// components/DarkModeToggle.js
import { useState } from "react";

export default function DarkModeToggle() {
    const [darkMode, setDarkMode] = useState(false);
  
    const toggleDarkMode = () => {
      setDarkMode(!darkMode);
      if (!darkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    };
  
    return (
      <button onClick={toggleDarkMode} className="p-2 bg-white dark:bg-black rounded font-bold text-black dark:text-white">
        {darkMode ? 'Light Mode' : 'Dark Mode'} 
      </button>
    );
  }
  