import React from 'react';

import user from '../components/assets/User.png';
import cam from '../components/assets/cam.png';

export default function Navbar() {
  return (
    <nav className='py-8 px-12 flex items-center justify-between'>
      <div className='flex items-center'>
        <img src={cam} alt='cam.png' className='w-12 lg:w-[4.5rem]' />
        <p className='text-2xl lg:text-[32px] text-[#FFFFFF] font-semibold'>
          SnapGrid
        </p>
      </div>
      <div className='hidden md:block'>
        <ul className='flex space-x-10 text-[16px] text-[#FFFFFF] items-center'>
          <li className='cursor-pointer font-semibold text-lg'>Docs</li>
          <a href='https://github.com/Vijaykv5/SnapGrid' target='_blank'><li className='cursor-pointer font-semibold text-lg'>Github</li></a>
          <li>
            <button
              className='rounded-[1.25rem] px-8 py-2 flex items-center font-semibold'
              style={{
                background: 'linear-gradient(270deg, #6F4FF2 0%, #6F4FF2 100%)',
              }}
            >
              <img src={user} className='pr-3 font-semibold text-lg' alt='user.png' />
              Sign Up
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
