import React from 'react';
import { useEffect,useState,useRef } from 'react';
import { Link } from 'react-router-dom';
import rocket from '../components/assets/RocketLaunch.png';
import bg from '../components/assets/bg.png';
import nft from '../components/assets/nft.png';
import rectangle from '../components/assets/rectangle.png';
import Navbar from './Navbar';
import '../utils/style.css';


export default function HomePage() {

  // Animation in home Page
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);


  // Multiple Ref to animate multiple elements [II]
  useEffect(() => {
    if(isVisible){
      ref2.current.classList.add('slide__in2');
      ref.current.classList.add('slide__in');
      ref3.current.classList.add('slide__in3');
      ref4.current.classList.add('slide__in');
    }
    else{
      ref.current.classList.remove('slide__in');
      ref2.current.classList.remove('slide__in2');
      ref3.current.classList.remove('slide__in3');
      ref4.current.classList.remove('slide__in');
    }
  })


  // Intersection Observer [I]
  useEffect(() => {
    const observer= new IntersectionObserver(([entry])=>{
      setIsVisible(entry.isIntersecting);
      console.log(entry.isIntersecting);
    })
    observer.observe(ref.current);
    return ()=> observer.disconnect();
},[]);

  return (
    <div
      style={{
        background:
          'linear-gradient(31.67deg, rgba(3, 14, 21, 0.96) -2.58%, #05121B 70.47%)',
      }}
      className='h-screen'
    >
      <Navbar />

      <div  className=' relative lg:flex-row pt-12 md:pt-20 space-y-14 lg:space-y-0  px-6 flex flex-col-reverse lg:px-20 py-8 justify-between'>
        <div className='hidden lg:block absolute top-0 right-0'>
          <img src={bg} className='h-48 w-80' />
        </div>
        {/* headline and subhead... */}
        <div  className='flex flex-col space-y-10  '>
          <div className='home__image' ref={ref}>
            <h1 className='text-[#FFFFFF] text-4xl md:text-6xl lg:text-7xl font-semibold'>
              Discover.Explore.
            </h1>
            <p className='text-[#FFFFFF] text-4xl md:text-6xl lg:text-7xl font-semibold'>
              Share.
            </p>
          </div>
          <p  ref={ref2} className='home__image text-[#FFFFFF]  text-lg md:text-xl leading-8 max-w-2xl'>
            <span className='text-[#6F4FF2] font-normal '>SnapGrid</span> is a
            versatile web platform that simplifies image discovery and
            downloads. Users can effortlessly find and acquire high-quality
            images spanning various categories, from nature to architecture.
          </p>
          <div ref={ref3} className='home__image'>
            <Link to={'/search'}>
              <button
                style={{
                  background:
                    'linear-gradient(270deg, #6F4FF2 0%, #6F4FF2 100%)',
                }}
                className='rounded-2xl px-10 py-3 flex items-center text-[#FFFFFF]'
              >
                <img  className='pr-3 ' src={rocket} alt='' />
                Explore
              </button>
            </Link>
          </div>
        </div>

        {/* Image ... */}
        <div className='home__image' ref={ref4}>
          <img
            
            src={nft}
            className=' max-w-xs md:max-w-md lg:max-w-sm'
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
