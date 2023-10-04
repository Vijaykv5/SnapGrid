import React, { useEffect, useRef, useState, Link } from "react";
import dotenv from "dotenv";
import { useDispatch, useSelector } from 'react-redux';
import { insertElement } from './utils/action';
<link rel="stylesheet" href="index.css"></link>
import { links } from "./utils/links";
import SelectionMenu from "./components/menu/SelectionMenu";
import BackToTopButton from "./components/menu/BackToTopButton";
import ImageCard from "./components/menu/ImageCard/ImageCard";
import Header from "./components/menu/Header";
import ShimmerLoading from "./components/ShimmerLoading/ShimmerLoading";
const API_URL = "https://api.unsplash.com/search/photos";
const Image_count = 28;
dotenv.config();

const MainSection = () => {
  const searchInput = useRef(null);
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [bannerImage, setBannerImage] = useState(null);
  const [linkInfo, setlinkInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [searchPerformed, setSearchPerformed] = useState(false);

  const fetchImages = async () => {
    try {
      setIsLoading(true);
      const data = await fetch(
        `${API_URL}?query=${searchInput.current.value}&page=${page}&per_page=${Image_count}&client_id=${'Q0rd3GyW2Ps2N8RjcrVyuNO0riZpxUKaZeBI4mNTz7g'}`,
      );
      const json = await data.json();
      setImages(json?.results);
      setTotalPages(json?.total_pages);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    // console.log(searchInput.current.value);
    const titleArray = links.map((obj) => obj.title);
    if (titleArray.indexOf(searchInput.current.value) === -1) {
      setBannerImage(null);
    }
    images != null ? (
      fetchImages()
    ) : (
      <div className="font-bold text-black">Error</div>
    );
    setPage(1);
  };
  const handleSelection = (selectionIndex) => {
    const selectedLink = links[selectionIndex];
    if (selectedLink) {
      searchInput.current.value = selectedLink.title;
      fetchImages();
      setPage(1);
      setBannerImage(selectedLink.url);
      setlinkInfo(selectedLink);
      setSearchPerformed(true);
    } else {
      setBannerImage(null);
    }
  };

  const navigationHandler = (page) => {
    setPage(page);
    document.querySelector("#image_1").scrollIntoView({
      behavior: "smooth",
    });
  };

  const dispatch = useDispatch();
  const elements = useSelector((state) => state.elements);
  const like = (id) => {
    const newElement = id;
    dispatch(insertElement(newElement));
    // console.log(id);
  };

  


  useEffect(() => {
    fetchImages();
  }, [page]);

  return (
    <div className="dark:bg-black dark:h-screen ">
      <Header />
      <div className="flex flex-col justify-center items-center">
        <div className="text-violet-500 dark:bg-black text-center font-bold text-5xl py-16 md:text-7xl w-full ">
          Snap Grid
        </div>
      </div>
      <div className="text-center m-0">
        <form className=" dark:bg-black m-0 py-8" onSubmit={handleClick}>
          <input
            className="md:w-96 sm:w-50 h-15 border dark:bg-black dark:text-white border-violet-500 hover:border-violet-500 bg-gray-100 rounded-xl p-2 px-4  "
            placeholder="Search here ..."
            ref={searchInput}
          />
        </form>
      </div>
      <div className="dark:bg-black m-0">
        <div className=" dark:bg-black py-5 m-0 mx-auto md:max-w-screen-lg">
          <SelectionMenu links={links} handleSelection={handleSelection} />
        </div>
      </div>
      {isLoading && !bannerImage && searchPerformed ? (
        <ShimmerLoading />
      ) : (
        <div>
          {bannerImage && (
            <div className="flex justify-between dark:bg-black pr-5">
                <div className="top-10 left-0 p-4 dark:text-white max-w-2xl">
                  <h1 className="top-15 font-bold text-left pt-20 px-20 text-5xl">
                    {linkInfo?.title}
                  </h1>
                  <div
                    className="px-20 font-light dark:text-slate-200 pt-5"
                    dangerouslySetInnerHTML={{ __html: linkInfo?.description }}
                  />
                </div>
                <img
                  src={bannerImage}
                  alt="Banner"
                  className="w-3/6 h-90 shadow-md rounded-lg "
                />
            </div>
          )}

          <div className=" dark:bg-black grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-5">
            {images &&
              images.map((image, index) => {
                return (
                  <>
                  <ImageCard
                    key={image?.id}
                    url={image?.urls?.small}
                    download={image?.urls?.full}
                  
                  />
                  
                  </>
                );
              })}
          </div>
        </div>
      )}

      <div className="flex justify-center dark:bg-black py-4 ">
        {page > 1 && (
          <button
            onClick={() => setPage(page - 1)}
            className=" p-1 px-2 bg-violet-500 text-white w-fit rounded-md"
          >
            Previous
          </button>
        )}
        {page < totalPages && (
          <button
            onClick={() => setPage(page + 1)}
            className="p-1 px-2 mx-6 bg-violet-500 text-white w-fit rounded-md"
          >
            Next
          </button>
        )}
      </div>
        <h2>LIKED PHOTOS</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-5'>
        {elements.map((element, index) => (


          <img key={index} src={element} className='w-full md:w-80 h-72 rounded-md transform hover:scale-105 duration-200 shadow-lg hover:shadow-md object-cover' />
         ))}
     </div>
      <BackToTopButton />
    </div>
  );
};

export default MainSection;

