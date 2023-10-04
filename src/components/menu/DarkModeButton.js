import React, { Link, useEffect, useRef, useState } from 'react';
import { MdDarkMode, MdOutlineLightMode } from 'react-icons/md';

const DarkModeButton = () => {
  //=======================================================
  // ================DARK MODE BEGINS======================
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: light)').matches) {
      setTheme('dark');
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
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };
  // =================DARK MODE ENDS========================
  //========================================================

  return (
    <>
      <button
        onClick={handleThemeSwitch}
        className=' shadow-black text-white bg-violet-500 rounded-3xl dark:text-black h-12 w-auto my-auto px-2 py-0'
      >
        {theme == 'dark' ? (
          <MdOutlineLightMode size={'2rem'} />
        ) : (
          <MdDarkMode size={'2rem'} />
        )}
      </button>
    </>
  );
};

export default DarkModeButton;
