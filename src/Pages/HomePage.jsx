import React from 'react';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import rocket from '../components/assets/RocketLaunch.png';
import a from '../images/a.png';
import b from '../images/b.png';
import c from '../images/c.png';
import d from '../images/d.png';
import '../utils/style.css';
import Navbar from './Navbar';

export default function HomePage() {
  const [loaded, setLoaded] = useState(false);
  const containerRef = useRef();
  const handleLoad = () => {
    setLoaded(true);
  };

  useEffect(() => {
    window.addEventListener('load', handleLoad);
    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <div className='flex flex-col max-h-screen min-h-screen overflow-auto bg-gradient-to-r from-slate-950 to-gray-900'>
      <Navbar />

      <div
        ref={containerRef}
        className={`${
          loaded ? 'opacity-100' : 'opacity-0'
        } fade-in relative px-6 py-8 pt-12 grow`}
      >
        {/* headline and subhead... */}
        <div className='flex flex-col items-center space-y-6 grow'>
          <div className='flex flex-col items-center justify-center w-full'>
            <h1 className='inline-block w-4/5 m-0 text-5xl font-medium text-center text-transparent sm:text-6xl md:text-7xl lg:text-8xl bg-gradient-to-r from-white to-neutral-400 bg-clip-text'>
              <span className='inline'>Discover </span>
              <span className='inline'> Explore </span>
              <span className='block'>& Share</span>
            </h1>
          </div>

          <p className='w-4/5 max-w-2xl leading-8 text-center text-md text-neutral-400 md:text-xl'>
            <span className='font-normal text-center text-white'>
              SnapGrid simplifies image discovery and downloads
            </span>
            . Users can easily find and acquire high-quality images spanning
            various categories.
          </p>

          <div className='grid grid-cols-2 md:grid-cols-4 overflow-hidden rounded-lg max-w-[800px] sm:max-w-4/5'>
            <img
              src={a}
              alt='random image'
              className='object-cover w-full h-32 md:h-40'
            />
            <img
              src={b}
              alt='random image'
              className='object-cover w-full h-32 md:h-40'
            />
            <img
              src={c}
              alt='random image'
              className='object-cover w-full h-32 md:h-40'
            />
            <img
              src={d}
              alt='random image'
              className='object-cover w-full h-32 md:h-40'
            />
          </div>

          <Link to={'/search'}>
            <button className='flex items-center px-10 py-3 transition duration-300 bg-violet-800 text-neutral-200 hover:text-neutral-100 hover:bg-violet-600 rounded-2xl '>
              <img className='pr-3 ' src={rocket} alt='' />
              Explore Now!
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
