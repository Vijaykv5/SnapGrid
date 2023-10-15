import React from 'react';

import DarkModeButton from './DarkModeButton';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <div className='dark:z-10 dark:shadow-gray-500 dark:shadow-sm dark:bg-slate-950 shadow-md px-10 h-13 justify-between dark:text-white flex w-full sticky top-0'>
      <Link to={"/"}>
      <img
        src='https://i.ibb.co/gSSxMS4/Image-1-removebg-preview.png'
        alt='logo'
        className='w-[90px] cursor-pointer'
      />
      </Link>
      <ul className='flex gap-5 my-auto '>
        <li className='h-full '>
          <a href='https://github.com/Vijaykv5/Image-Searcher' target='_blank'>
            <i className='fa fa-github fa-3x text-violet-500'></i>
          </a>
        </li>
        <li className='h-full my-auto '>
          {/* Importing Dark Mode Button */}
          <DarkModeButton />
        </li>
      </ul>
    </div>
  );
};

export default Header;
