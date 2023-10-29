import React, { useEffect, useRef, useState } from 'react'
import logo from '../assets/cam.png'
import githubStar from "../assets/github-star.webp"
import { Link } from "react-router-dom"

export default function Footer() {

  // Animation in footer
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);

  // Multiple Ref to animate multiple elements [II]
  useEffect(() => {
    if (isVisible) {
      ref.current.classList.add('slide__in');
      ref2.current.classList.add('slide__in2');
      ref3.current.classList.add('slide__in3');
      ref4.current.classList.add('slide__in4');
      ref5.current.classList.add('slide__in5');
    }
    else {
      ref.current.classList.remove('slide__in');
      ref2.current.classList.remove('slide__in2');
      ref3.current.classList.remove('slide__in3');
      ref4.current.classList.remove('slide__in4');
      ref5.current.classList.remove('slide__in5');
    }
  })

  // Intersection Observer [I]
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
      console.log(entry.isIntersecting);
    })
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <footer style={{ backgroundColor: "#0b161d" }} className="border-t border-gray-800 pt-10 overflow-hidden">
      <div className="text-white py-8 px-4 md:px-12">
        <div className="container mx-auto flex flex-wrap justify-center">
          <div ref={ref} className="w-full md:w-3/5 lg:w-2/5 px-4">
            <div className="mb-4">
              <div className="flex items-center">
              <img className="inline-block w-10 h-8" src={logo} alt="SnapGrid Logo" />
              <b className="font-bold text-2xl">SnapGrid</b>
              </div>
              <p className="mt-2">SnapGrid is a cool website where you can find and get really nice pictures of lots of different things, like nature and buildings!</p>
            </div>
          </div>

          <div ref={ref2} className="w-full md:w-2/5 lg:w-1/5 px-4">
            <div className="mb-4">
              <h2 className="text-lg font-semibold">Documentation</h2>
              <ul className="mt-2">
                <li className="cursor-pointer hover:font-bold"><Link to={'/docs'}>Docs</Link></li>
              </ul>
            </div>
          </div>

          <div ref={ref3} className="w-full md:w-3/5 lg:w-1/5 px-4">
            <div className="mb-4">
              <h2 className="text-lg font-semibold">License</h2>
              <ul className="mt-2 hover:font-bold">
                <li><a className="hover:font-bold" href="https://opensource.org/license/mit/">MIT License</a></li>
              </ul>
            </div>
          </div>

          <div ref={ref4} className="w-full md:w-2/5 lg:w-1/5 px-4">
            <div className="mb-4">
              <a href="https://github.com/Vijaykv5/SnapGrid">
                <img className="w-[115px] h-[40px]" src={githubStar} alt="Github Star Us" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div ref={ref5} className="text-center py-4 text-white">
        <p>&copy; SnapGrid 2023 All rights reserved</p>
      </div>

    </footer>
  )
}