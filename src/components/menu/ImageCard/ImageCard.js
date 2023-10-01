const ImageCard = ({ url, download, id }) => {
  // Function to Download Image
  const downloadImage = async () => {
    try {
      const response = await fetch(download);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const blob = await response.blob();
      const img = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = img;
      link.download = generateDownloadString();
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error downloading image:", error);
    }
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
    <div className="relative group w-full md:w-80 h-72 rounded-md overflow-hidden shadow-lg hover:shadow-md transform transition-transform hover:scale-105">
      <img
        src={url}
        id={id}
        alt="Image"
        className="w-full h-full object-cover transform hover:scale-105 duration-200"
      />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 backdrop-blur-sm">
        <button
          className="cursor-pointer bg-violet-500 text-white font-bold py-2 px-4 rounded-md"
          onClick={() => {
            downloadImage();
          }}
        >
          <i class="fa fa-download fa-beat-fade fa-lg"></i>
        </button>
      </div>
    </div>
  );
};

export default ImageCard;
