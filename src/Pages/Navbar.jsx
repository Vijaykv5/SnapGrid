import React, { useState } from 'react';

import user from '../components/assets/User.png';
import cam from '../components/assets/cam.png';
import { Link } from 'react-router-dom';
import HamburgerMenu from '@/components/menu/HamburgerMenu';
import '../utils/drawer.css'
export default function Navbar() {

  const [visibility,setVisibility]=useState(false);

  const clickHandler=()=>{
    visibility ? setVisibility(false) : setVisibility(true)
  }

  return (
    <div className='flex flex-col'>
      <nav className='py-8 px-12 flex items-center justify-between'>
        <div className='flex items-center'>
        <Link to={'/'}><img src={cam} alt='cam.png' className='w-12 lg:w-[4.5rem] cursor-pointer' /></Link>
          <p className='text-2xl lg:text-[32px] text-[#FFFFFF] font-semibold'>
            SnapGrid
          </p>
        </div>
        <HamburgerMenu  onClick={clickHandler} visibility={visibility} />
        <div className='hidden md:block'>
          <ul className='flex space-x-10 text-[16px] text-[#FFFFFF] items-center'>
            <Link to={'/docs'}><li className='cursor-pointer font-semibold text-lg'>Docs</li></Link>
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

      <div className={`common  ${visibility ? "visible__navbar__drawer" : "hidden__navbar__drawer"} drawer__container ` }>
                <div className={`flex justify-evenly items-center flex-col ${visibility? "visible__drawer__container" : "hidden__drawer__container" } `}>
                    <a href='/docs' className=' font-bold text-white text-2xl m-2'>Docs</a>
                    <a href='https://github.com/Vijaykv5/SnapGrid' className='font-bold text-white text-2xl m-2 '>Github</a>
                    <button
                        className='rounded-[1.25rem] px-8 py-2 flex items-center font-semibold text-white m-2 '
                        style={{
                          background: 'linear-gradient(270deg, #6F4FF2 0%, #6F4FF2 100%)',
                        }}
                      >
                        <img src={user} className='pr-3 font-semibold text-lg' alt='user.png' />
                        Sign Up
                    </button>
                </div>
      </div>
              
    </div>
  );
}
