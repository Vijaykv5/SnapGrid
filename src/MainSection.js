import React, { useEffect, useRef, useState, Link } from "react";
import dotenv from "dotenv";
import { links } from "./utils/links";
import SelectionMenu from "./components/menu/SelectionMenu";
import BackToTopButton from "./components/menu/BackToTopButton";
import ImageCard from "./components/menu/ImageCard/ImageCard";
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
        `${API_URL}?query=${searchInput.current.value}&page=${page}&per_page=${Image_count}&client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}`,
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

  useEffect(() => {
    fetchImages();
  }, [page]);

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <img
          src="https://i.ibb.co/gSSxMS4/Image-1-removebg-preview.png"
          alt="logo"
          className="w-[120px]"
        />
        <a
          className="fixed top-10 right-10"
          href="https://github.com/Vijaykv5/Image-Searcher"
          target="_blank"
        >
          <i class="fa fa-github fa-2x text-violet-500"></i>
        </a>
        <div className="text-violet-500 text-center font-bold text-5xl my-8 md:mb-28">
          Image Search
        </div>
      </div>
      <div className="text-center md:-my-16  -my-4">
        <form onSubmit={handleClick}>
          <input
            className="w-96 h-9 border border-violet-500 hover:border-violet-500 bg-gray-100 rounded-md p-2"
            placeholder=" Try Something Search here ..."
            ref={searchInput}
          />
        </form>
      </div>
      <div className="my-8 md:mt-20 mb-5 mx-auto md:max-w-screen-lg">
        <SelectionMenu links={links} handleSelection={handleSelection} />
      </div>

      {isLoading && !bannerImage && searchPerformed ? (
        <ShimmerLoading />
      ) : (
        <div>
          {bannerImage && (
            <div className="relative">
              <div
                className="bg-cover bg-center h-96"
                style={{ backgroundImage: `url(${bannerImage})` }}
              ></div>
              <div className="absolute top-0 left-0 p-4 text-white max-w-2xl">
                <h1 className="top-15 font-bold text-left pt-20 px-20 text-5xl">
                  {linkInfo?.title}
                </h1>
                <div
                  className="px-20 font-light text-slate-200 pt-5"
                  dangerouslySetInnerHTML={{ __html: linkInfo?.description }}
                />
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-5 mt-5">
            {images &&
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

      <div className="flex justify-center mt-8">
        {page > 1 && (
          <button
            onClick={() => navigationHandler(page - 1)}
            className=" p-1 px-2 bg-violet-500 text-white w-fit rounded-md"
          >
            Previous
          </button>
        )}
        {page < totalPages && (
          <button
            onClick={() => navigationHandler(page + 1)}
            className="p-1 px-2 mx-6  bg-violet-500 text-white w-fit rounded-md"
          >
            Next
          </button>
        )}
      </div>
      <BackToTopButton />
    </>
  );
};

export default MainSection;
