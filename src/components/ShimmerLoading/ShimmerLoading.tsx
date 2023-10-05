const ShimmerLoading: React.FC = () => {
  return (
    <div className='animate-pulse dark:bg-black dark:h-screen'>
      <div className='relative'>
        <div className='bg-gradient-to-r from-gray-200 to-gray-300 h-96 animate-pulse'></div>
        <div className='absolute top-0 left-0 p-4 text-white max-w-2xl'></div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-5 mt-5'>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
          <div
            key={index}
            className='relative group w-full md:w-80 h-72 rounded-md overflow-hidden shadow-l'
          >
            <div className='bg-gradient-to-r from-gray-200 to-gray-300 animate-pulse h-full w-full'></div>
            <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 backdrop-blur-sm'></div>
          </div>
        ))}
      </div>
      xs
    </div>
  );
};

export default ShimmerLoading;
