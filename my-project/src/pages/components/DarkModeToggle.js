import { useEffect, useState } from 'react';

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, []);

  useEffect(() => {
    const html = window.document.documentElement;
    const prevTheme = darkMode ? 'light' : 'dark';
    html.classList.remove(prevTheme);
    const nextTheme = darkMode ? 'dark' : 'light';
    html.classList.add(nextTheme);

    localStorage.setItem('theme', nextTheme);
  }, [darkMode]);

  return (
    <button onClick={() => setDarkMode(!darkMode)} className='bg-black dark:bg-white text-white py-2 px-3 rounded dark:text-black'>
      {darkMode ? 'Light Mode' : 'Dark mode '}
    </button>
  );
};

export default DarkModeToggle;
