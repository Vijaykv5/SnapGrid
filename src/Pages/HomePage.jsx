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
  // Animation in home Page
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  // Multiple Ref to animate multiple elements [II]
  useEffect(() => {
    if (isVisible) {
      ref2.current.classList.add('slide__in2');
      ref.current.classList.add('slide__in');
      ref3.current.classList.add('slide__in3');
    } else {
      ref.current.classList.remove('slide__in');
      ref2.current.classList.remove('slide__in2');
      ref3.current.classList.remove('slide__in3');
    }
  });

  // Intersection Observer [I]
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
      console.log(entry.isIntersecting);
    });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className='flex flex-col max-h-screen min-h-screen overflow-auto bg-gradient-to-r from-slate-950 to-gray-900'>
      <Navbar />

      <div className='relative px-6 py-8 pt-12 grow'>
        {/* headline and subhead... */}
        <div className='flex flex-col items-center space-y-6 grow'>
          <div className='flex flex-col items-center justify-center w-full'>
            <h1
              ref={ref}
              className='inline-block font-medium text-center text-transparent md:text-7xl text-5xl lg:text-8xl balance bg-gradient-to-r from-white to-neutral-400 bg-clip-text lg:max-w-[900px] md:max-w-[700px] w-4/5 sm:max-w-full m-0'
            >
              Discover
            </h1>
            <h1
              ref={ref}
              className='inline-block font-medium text-center text-transparent md:text-7xl text-5xl lg:text-8xl balance bg-gradient-to-r from-white to-neutral-400 bg-clip-text lg:max-w-[900px] md:max-w-[700px] w-4/5 sm:max-w-full m-0'
            >
              Explore & Share
            </h1>
          </div>

          <p
            ref={ref2}
            className='w-4/5 max-w-2xl leading-8 text-center text-md text-neutral-400 md:text-xl'
          >
            Used by some of the world's largest companies,{' '}
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

          <Link to={'/search'} ref={ref3}>
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
