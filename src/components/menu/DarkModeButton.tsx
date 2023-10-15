import React, { useEffect, useState } from 'react';
import { MdDarkMode, MdOutlineLightMode } from 'react-icons/md';

const DarkModeButton: React.FC = () => {
  const [theme, setTheme] = useState<string | null>(null);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setTheme(storedTheme);
    } else {
      setTheme('light');
    }
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme); 
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <>
      <button
        onClick={handleThemeSwitch}
        className='shadow-black text-white bg-violet-500 rounded-3xl dark:text-black h-12 w-auto my-auto px-2 py-0'
      >
        {theme === 'dark' ? (
          <MdOutlineLightMode size={'2rem'} />
        ) : (
          <MdDarkMode size={'2rem'} />
        )}
      </button>
    </>
  );
};

export default DarkModeButton;