import React, { useState } from 'react';

interface ImageCardProps {
  url: string | undefined;
  download: string | undefined;
  ImageId?: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ url, download, ImageId }) => {
  // State that Track The Favourite List
  const [favouriteList, setFavouriteList] = useState<string[]>(
    JSON.parse(localStorage.getItem('UserFavourite') ?? '[]')
  );

  // Function to Download Image
  const downloadImage = async () => {
    try {
      if (download) {
        const response = await fetch(download);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const blob = await response.blob();
        const img = URL.createObjectURL(blob);

        const link = document.createElement('a');
        link.href = img;
        link.download = generateDownloadString();
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    } catch (error) {
      console.error('Error downloading image:', error);
    }
  };

  // Function to Toggle Image ID from Favourite List
  const ToggleFavList = (id: string) => {
    let FavList = JSON.parse(localStorage.getItem('UserFavourite') ?? '[]');
    if (FavList.includes(id)) {
      FavList = FavList.filter((imageId: string) => imageId != id);
    } else {
      FavList.push(id);
    }
    localStorage.setItem('UserFavourite', JSON.stringify(FavList));
    setFavouriteList(JSON.parse(localStorage.getItem('UserFavourite') ?? '[]'));
  };

  // Function to generate random 8-digit number
  const generateRandomNumber = () => {
    const randomNumber = Math.floor(10000000 + Math.random() * 90000000);
    return randomNumber.toString();
  };

  // Function for generating download string
  const generateDownloadString = () => {
    const randomNumber = generateRandomNumber();
    return `Image-Searcher-${randomNumber}.png`;
  };

  return (
    <div className='relative group w-full md:w-80 h-72 rounded-md overflow-hidden shadow-lg hover:shadow-md transform transition-transform hover:scale-105'>
      <img
        src={url}
        id={ImageId}
        alt='Image'
        className='w-full h-full object-cover transform hover:scale-105 duration-200'
      />
      <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 backdrop-blur-sm'>
        <button
          className='cursor-pointer bg-violet-500 text-white font-bold py-2 px-4 rounded-md'
          onClick={() => {
            downloadImage();
          }}
        >
          <i className='fa fa-download fa-beat-fade fa-lg'></i>
        </button>
        <button
          title={`${
            favouriteList.includes(ImageId ?? '')
              ? 'Unlike Image'
              : 'Like Image'
          }`}
          className='cursor-pointer bg-violet-500 text-white font-bold py-2 px-4 mx-2 rounded-md'
          onClick={() => ToggleFavList(ImageId ?? '')}
        >
          <i
            className={`fa fa-regular fa-heart fa-beat-fade fa-lg 
            ${favouriteList.includes(ImageId ?? '') ? 'text-rose-500' : ' '}`}
          ></i>
        </button>
      </div>
      <div className='absolute inset-0 flex items-end justify-end group-hover:hidden'>
        <i
          className={`fa fa-regular fa-heart fa-lg m-4 
            ${
              favouriteList.includes(ImageId ?? '')
                ? 'text-rose-500'
                : 'opacity-0'
            }`}
        ></i>
      </div>
    </div>
  );
};

export default ImageCard;
