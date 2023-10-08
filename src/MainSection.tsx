import dotenv from 'dotenv';
import React, { useEffect, useRef, useState } from 'react';

import NoImagesFound from './components/NoImagesFound/NoImagesFound';
import ShimmerLoading from './components/ShimmerLoading/ShimmerLoading';
import BackToTopButton from './components/menu/BackToTopButton';
import Header from './components/menu/Header';
import ImageCard from './components/menu/ImageCard/ImageCard';
import SelectionMenu from './components/menu/SelectionMenu';
import { links } from './utils/links';
import Noresults from './components/Noresults';

const API_URL = 'https://api.unsplash.com/search/photos';
dotenv.config();

const MainSection = () => {
  const searchInput = useRef<any>(null);
  const [images, setImages] = useState<any[]>([]);
  const [imageCount, setImageCount] = useState<number>(28);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [bannerImage, setBannerImage] = useState<string | null>(null);
  const [linkInfo, setlinkInfo] = useState<any>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [searchPerformed, setSearchPerformed] = useState<boolean>(false);
  const [error, setError] = useState(false);
  const fetchImages = async () => {
    try {
      setIsLoading(true);
      const data = await fetch(
        `${API_URL}?query=${searchInput.current.value}&per_page=${imageCount}&client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}`
      );
      const json = await data.json();
      setImages(json?.results);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
    if (images.length == 0 && searchInput.current?.value.length!=0) {
      setError(true);
     } else {
      setError(false)
     }
  };

  const handleClick = (e: any) => {
    e.preventDefault();
    const titleArray = links.map((obj) => obj.title);
    if (titleArray.indexOf(searchInput.current?.value) === -1) {
      setBannerImage(null);
    }
    // images != null ? (
    //   fetchImages()
    // ) : (
    //   <div className='font-bold text-black'>Error</div>
    // );
    fetchImages();
  };
  const handleSelection = (selectionIndex: number) => {
    const selectedLink = links[selectionIndex];
    if (selectedLink) {
      searchInput.current.value = selectedLink.title;
      fetchImages();
      setBannerImage(selectedLink.url);
      setlinkInfo(selectedLink);
      setSearchPerformed(true);
    } else {
      setBannerImage(null);
    }
  };

  useEffect(() => {
    fetchImages();
  }, [imageCount]);
  const handelInfiniteScroll = async () => {
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        setIsLoading(true);
        setImageCount((prev) => prev + 12);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handelInfiniteScroll);
    return () => window.removeEventListener('scroll', handelInfiniteScroll);
  }, []);

  return (
    <div className='dark:bg-black dark:h-screen h-full'>
      <Header />
      <div className='flex flex-col justify-center items-center'>
        <div className='text-violet-500 dark:bg-black text-center font-bold text-5xl py-8 md:text-7xl w-full '>
          Snap Grid
        </div>
      </div>
      <div className='text-center m-0'>
        <form className=' dark:bg-black m-0 py-8' onSubmit={handleClick}>
          <input
            className='md:w-96 sm:w-50 h-15 dark:bg-black dark:text-white border-violet-500 hover:border-violet-500 bg-gray-100 rounded-xl p-2 px-4 border-2 focus:dark:drop-shadow-[0px_0px_16px_rgba(132,92,246,1)]'
            placeholder='Search here ...'
            ref={searchInput}
          />
        </form>
      </div>
      <div className='dark:bg-black m-0'>
        <div className=' dark:bg-black p-5 m-0 mx-auto md:max-w-screen-lg'>
          <SelectionMenu links={links} handleSelection={handleSelection} />
        </div>
      </div>
      {isLoading && !bannerImage && searchPerformed ? (
        <ShimmerLoading />
      ) : (
        <div>
          {bannerImage && (
            <div className='flex justify-between dark:bg-black pr-5 xs:px-5 xs:flex-col-reverse xs:mb-6'>
              <div className='top-10 left-0 p-4 dark:text-white max-w-2xl xs:p-0'>
                <h1 className='top-15 font-bold text-left pt-20 px-20 text-5xl xs:p-0'>
                  {linkInfo?.title}
                </h1>
                <div
                  className='px-20 font-light dark:text-slate-200 pt-5 xs:px-0'
                  dangerouslySetInnerHTML={{ __html: linkInfo?.description }}
                />
              </div>
              <img
                src={bannerImage}
                alt='Banner'
                className='w-3/6 h-90 shadow-md rounded-lg xs:w-full xs:mb-6'
              />
            </div>
          )}

          {error && <Noresults/>}
          <div className=" dark:bg-black grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-5">
            {!error && images &&
              images.map((image, index) => {
                return (
                  <ImageCard
                    key={image?.id}
                    url={image?.urls?.small}
                    download={image?.urls?.full}
                  />
                );
              })}
          </div>
        </div>
      )}
      <BackToTopButton />
    </div>
  );
};

export default MainSection;
