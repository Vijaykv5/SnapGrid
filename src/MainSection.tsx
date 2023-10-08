import dotenv from 'dotenv';
import React, { useEffect, useRef, useState } from 'react';

import InputSelect from './components/InputSelect/InputSelect';
import NoImagesFound from './components/NoImagesFound/NoImagesFound';
import ShimmerLoading from './components/ShimmerLoading/ShimmerLoading';
import BackToTopButton from './components/menu/BackToTopButton';
import Header from './components/menu/Header';
import ImageCard from './components/menu/ImageCard/ImageCard';
import SelectionMenu from './components/menu/SelectionMenu';
import { links } from './utils/links';

type OptionsTypes = {
  value: string;
  label: string;
};

type InputType = {
  value: string;
  label: string;
} | null;

const API_URL = 'https://api.unsplash.com/search/photos';
const Image_count = 28;
dotenv.config();

const MainSection = () => {
  const searchInput = useRef<any>(null);
  const [images, setImages] = useState<any[]>([]);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [bannerImage, setBannerImage] = useState<string | null>(null);
  const [linkInfo, setlinkInfo] = useState<any>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [searchPerformed, setSearchPerformed] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<InputType | null>(null);
  const [activeSearch, setActiveSearch] = useState<string | null >(null);


  const fetchImages = async () => {
    try {
      setIsLoading(true);
      const data = await fetch(
        `${API_URL}?query=${inputValue?.value}&page=${page}&per_page=${Image_count}&client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}`
      );
      const json = await data.json();
      setImages(json?.results);
      setTotalPages(json?.total_pages);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = (e: any) => {
    e.preventDefault();
    const titleArray = links.map((obj) => obj.title);
    if (titleArray.indexOf(activeSearch || "") === -1) {
      setBannerImage(null);
    }
    images != null ? (
      fetchImages()
    ) : (
      <div className='font-bold text-black'>Error</div>
    );
    setPage(1);
  };
  const handleSelection = (selectionIndex: number) => {
    const selectedLink = links[selectionIndex];
    if (selectedLink) {
      // searchInput.current.value = selectedLink.title;
      setInputValue({
        value: selectedLink.title,
        label: selectedLink.title.toUpperCase(),
      });
      fetchImages();
      setPage(1);
      setBannerImage(selectedLink.url);
      setlinkInfo(selectedLink);
      setSearchPerformed(true);
    } else {
      setBannerImage(null);
    }
  };

  const handleSelectChange = (value: InputType): void => {
    setInputValue(value);
  };

  const navigationHandler = (page: number) => {
    setPage(page);
    document.querySelector('#image_1')?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    fetchImages();
  }, [page]);

  useEffect(() => {
    if (inputValue?.value) {
      setActiveSearch(inputValue.value);
    }
  }, [inputValue]);

  
  const options:OptionsTypes[] = links?.map((link) => {
    let option = {
      value: link.title.toLowerCase(),
      label: link.title.toLocaleLowerCase(),
    };
    return option;
  });

  return (
    <div className='dark:bg-black dark:h-screen '>
      <Header />
      <div className='flex flex-col justify-center items-center'>
        <div className='text-violet-500 dark:bg-black text-center font-bold text-5xl py-8 md:text-7xl w-full '>
          Snap Grid
        </div>
      </div>
      <div className='text-center m-0'>
        <form
          className=' dark:bg-black m-0 py-8 w-[100%] max-w-[400px] mx-auto'
          onSubmit={handleClick}
        >
          <InputSelect
            options={options}
            handleSelectChange={handleSelectChange}
          />
        </form>
      </div>
      <div className='dark:bg-black m-0'>
        <div className=' dark:bg-black py-5 m-0 mx-auto md:max-w-screen-lg'>
          <SelectionMenu links={links} handleSelection={handleSelection} />
        </div>
      </div>
      {isLoading && !bannerImage && searchPerformed ? (
        <ShimmerLoading />
      ) : (
        <div>
          {bannerImage && (
            <div className='flex justify-between dark:bg-black pr-5'>
              <div className='top-10 left-0 p-4 dark:text-white max-w-2xl'>
                <h1 className='top-15 font-bold text-left pt-20 px-20 text-5xl'>
                  {linkInfo?.title}
                </h1>
                <div
                  className='px-20 font-light dark:text-slate-200 pt-5'
                  dangerouslySetInnerHTML={{ __html: linkInfo?.description }}
                />
              </div>
              <img
                src={bannerImage}
                alt='Banner'
                className='w-3/6 h-90 shadow-md rounded-lg '
              />
            </div>
          )}

          {images.length > 0 ? (
            <div className='dark:bg-black grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-5'>
              {images.map((image, index) => (
                <ImageCard
                  key={image?.id}
                  url={image?.urls?.small}
                  download={image?.urls?.full}
                />
              ))}
            </div>
          ) : searchPerformed ? (
            <NoImagesFound />
          ) : null}
        </div>
      )}

      <div className='flex justify-center dark:bg-black py-4 '>
        {page > 1 && (
          <button
            onClick={() => setPage(page - 1)}
            className=' p-1 px-2 bg-violet-500 text-white w-fit rounded-md'
          >
            Previous
          </button>
        )}
        {page < totalPages && (
          <button
            onClick={() => setPage(page + 1)}
            className='p-1 px-2 mx-6 bg-violet-500 text-white w-fit rounded-md'
          >
            Next
          </button>
        )}
      </div>
      <BackToTopButton />
    </div>
  );
};

export default MainSection;
