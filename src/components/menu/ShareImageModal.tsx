import { Dialog, Transition } from '@headlessui/react';
import React, { Fragment, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  InstapaperIcon,
  InstapaperShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from 'react-share';

const API_URL = 'https://api.unsplash.com/photos';

interface ImageData {
  id: string;
  urls: {
    full: string;
  };
}

const ShareImageModal = () => {
  const navigate = useNavigate();
  const { ImageId } = useParams();

  const [isOpen, setIsOpen] = useState(true);
  const [isCopied, setIsCopied] = useState(false);
  const [imageData, setImageData] = useState<ImageData>({
    id: '',
    urls: { full: '' },
  });

  const closeModal = () => {
    setIsOpen(false);
    navigate(-1);
  };

  const copyText = async (link: string) => {
    if ('clipboard' in navigator) {
      await navigator.clipboard.writeText(link);
      setIsCopied(true);
    }
    setTimeout(() => setIsCopied(false), 1000 * 10);
  };

  useEffect(() => {
    fetch(
      `${API_URL}/${ImageId}?client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => setImageData(data))
      .catch((err) => console.log(err));
  }, []);
  if (imageData) {
    return (
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as='div' className='relative z-10' onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black/25' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <Dialog.Panel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all dark:bg-gray-900'>
                  <Dialog.Title
                    as='h3'
                    className='text-3xl text-center font-bold leading-6 text-gray-900 dark:text-white'
                  >
                    <div>Share Image</div>
                  </Dialog.Title>
                  <button
                    onClick={closeModal}
                    className='absolute right-0 top-0 my-4 mx-8'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      height='1em'
                      viewBox='0 0 448 512'
                      className='text-3xl'
                    >
                      <path d='M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm79 143c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z' />
                    </svg>
                  </button>
                  <div className='mt-2 flex items-center flex-wrap'>
                    <button
                      className='w-12 h-12 rounded-full bg-black p-4 mx-2 cursor-pointer flex items-center justify-center outline-none dark:bg-white'
                      onClick={() => copyText(imageData?.urls?.full)}
                    >
                      {isCopied ? (
                        <i
                          title='Copy Link'
                          className='fa fa-solid fa-check fa-lg cursor-pointer text-white dark:text-black'
                        ></i>
                      ) : (
                        <i
                          title='Copied'
                          className='fa fa-sharp fa-solid fa-link fa-lg cursor-pointer text-white dark:text-black'
                        ></i>
                      )}
                    </button>
                    <FacebookShareButton url={imageData?.urls?.full}>
                      <FacebookIcon className='rounded-full p-2' />
                    </FacebookShareButton>
                    <TwitterShareButton url={imageData?.urls?.full}>
                      <TwitterIcon className='rounded-full p-2' />
                    </TwitterShareButton>
                    <WhatsappShareButton url={imageData?.urls?.full}>
                      <WhatsappIcon className='rounded-full p-2' />
                    </WhatsappShareButton>
                    <LinkedinShareButton url={imageData?.urls?.full}>
                      <LinkedinIcon className='rounded-full p-2' />
                    </LinkedinShareButton>
                    <TelegramShareButton url={imageData?.urls?.full}>
                      <TelegramIcon className='rounded-full p-2' />
                    </TelegramShareButton>
                    <InstapaperShareButton url={imageData?.urls?.full}>
                      <InstapaperIcon className='rounded-full p-2' />
                    </InstapaperShareButton>
                    <EmailShareButton url={imageData?.urls?.full}>
                      <EmailIcon className='rounded-full p-2' />
                    </EmailShareButton>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    );
  }
};

export default ShareImageModal;
