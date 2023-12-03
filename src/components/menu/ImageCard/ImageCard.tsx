import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ShareImageModal from '../ShareImagesModal';


interface ImageCardProps {
  url: string | undefined;
  download: string | undefined;
  ImageId?: string;
}

interface AuthorData {
  username: string;
  name: string;
  portfolio_url: string | null;
}

const ImageCard: React.FC<ImageCardProps> = ({ url, download, ImageId }) => {
  const [favouriteList, setFavouriteList] = useState<string[]>(
    JSON.parse(localStorage.getItem('UserFavourite') ?? '[]')
  );

  const [authorData, setAuthorData] = useState<AuthorData>({
    username: '',
    name: '',
    portfolio_url: null,
  });

  const [isShareModalOpen, setShareModalOpen] = useState(false);

  const toggleFavList = (id: string) => {
    let favList = JSON.parse(localStorage.getItem('UserFavourite') ?? '[]');
    if (favList.includes(id)) {
      favList = favList.filter((imageId: string) => imageId !== id);
    } else {
      favList.push(id);
    }
    localStorage.setItem('UserFavourite', JSON.stringify(favList));
    setFavouriteList(JSON.parse(localStorage.getItem('UserFavourite') ?? '[]'));
  };

  const generateRandomNumber = () => {
    const randomNumber = Math.floor(10000000 + Math.random() * 90000000);
    return randomNumber.toString();
  };

  const generateDownloadString = () => {
    const randomNumber = generateRandomNumber();
    return `Image-Searcher-${randomNumber}.png`;
  };

  const fetchAuthorData = async () => {
    try {
      const response = await fetch(
        `https://api.unsplash.com/photos/${ImageId}/?client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}`
      );
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setAuthorData({
        username: data.user.username,
        name: data.user.name,
        portfolio_url: data.user.portfolio_url,
      });
    } catch (error) {
      console.error('Error fetching author data:', error);
    }
  };

  useEffect(() => {
    fetchAuthorData();
  }, [ImageId]);

  function downloadImage() {
    throw new Error('Function not implemented.');
  }

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
            // Function to Download Image
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
          onClick={() => toggleFavList(ImageId ?? '')}
        >
          <i
            className={`fa fa-regular fa-heart fa-beat-fade fa-lg ${
              favouriteList.includes(ImageId ?? '') ? 'text-rose-500' : ''
            }`}
          ></i>
        </button>
        <button
          title='Share Image'
          className='cursor-pointer bg-violet-500 text-white font-bold py-2 px-4 mx-2 rounded-md'
          onClick={() => setShareModalOpen(true)}
        >
          <i className='fa fa-solid fa-share fa-lg'></i>
        </button>
      </div>
      <div className='absolute inset-0 flex items-end justify-end group-hover:hidden'>
        <i
          className={`fa fa-regular fa-heart fa-lg m-4 ${
            favouriteList.includes(ImageId ?? '') ? 'text-rose-500' : 'opacity-0'
          }`}
        ></i>
      </div>

      {isShareModalOpen && (
        <ShareImageModal
          // isOpen={isShareModalOpen}
          // closeModal={() => setShareModalOpen(false)}
          // imageId={ImageId}
        />
      )}

      {/* Display author information */}
      <div className='absolute inset-0 flex items-start justify-start p-4 text-left'>
        <p className='text-md text-black'>
          Photo by{' '}
          <a
            href={authorData.portfolio_url || '#'}
            target='_blank'
            rel='noopener noreferrer'
            className='text-black  underline'
          >
            {authorData.name || authorData.username}
          </a>{' '}
          on Unsplash
        </p>
        <button
          className='mt-2 text-bold-500 text-blue-900 underline hover:text-blue-700 cursor-pointer'
          onClick={() => {
            if (authorData.portfolio_url) {
              window.open(authorData.portfolio_url, '_blank');
            }
          }}
        >
          View Profile
        </button>
      </div>
    </div>
  );
};

export default ImageCard;
