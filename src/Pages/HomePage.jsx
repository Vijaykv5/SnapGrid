import React from 'react';
import { Link } from 'react-router-dom';
import rocket from '../components/assets/RocketLaunch.png';
import bg from '../components/assets/bg.png';
import nft from '../components/assets/nft.png';
import rectangle from '../components/assets/rectangle.png';
import Navbar from './Navbar';

export default function HomePage() {
  return (
    <div
      style={{
        background:
          'linear-gradient(31.67deg, rgba(3, 14, 21, 0.96) -2.58%, #05121B 70.47%)',
      }}
      className='h-screen'
    >
      <Navbar />

      <div className='relative lg:flex-row pt-12 md:pt-20 space-y-14 lg:space-y-0  px-6 flex flex-col-reverse lg:px-20 py-8 justify-between'>
        <div className='hidden lg:block absolute top-0 right-0'>
          <img src={bg} className='h-48 w-80' />
        </div>
        {/* headline and subhead... */}
        <div className='flex flex-col space-y-10  '>
          <div>
            <h1 className='text-[#FFFFFF] text-4xl md:text-6xl lg:text-7xl font-semibold'>
              Discover.Explore.
            </h1>
            <p className='text-[#FFFFFF] text-4xl md:text-6xl lg:text-7xl font-semibold'>
              Share.
            </p>
          </div>
          <p className='text-[#FFFFFF] text-lg md:text-xl leading-8 max-w-2xl'>
            <span className='text-[#6F4FF2] font-normal '>SnapGrid</span> is a
            versatile web platform that simplifies image discovery and
            downloads. Users can effortlessly find and acquire high-quality
            images spanning various categories, from nature to architecture.
          </p>
          <div>
            <Link to={'/search'}>
              <button
                style={{
                  background:
                    'linear-gradient(270deg, #6F4FF2 0%, #6F4FF2 100%)',
                }}
                className='rounded-2xl px-10 py-3 flex items-center text-[#FFFFFF]'
              >
                <img className='pr-3' src={rocket} alt='' />
                Explore
              </button>
            </Link>
          </div>
        </div>

        {/* Image ... */}
        <div>
          <img
            src={nft}
            className='max-w-xs md:max-w-md lg:max-w-sm'
            alt='img.png'
          />
        </div>
      </div>
      <div className=''>
        <img src={rectangle} className='' />
      </div>
    </div>
  );
}
