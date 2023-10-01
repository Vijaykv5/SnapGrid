import React, { useState, useRef } from 'react';

function DragAndDrop({ updateSearchInputRef }) {
  const [draggedImage, setDraggedImage] = useState(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef(null);

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);

    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleImageSelection(files[0]);
    }
  };

  const handleImageSelection = (file) => {
    const reader = new FileReader();
    reader.onload = function (event) {
      const image = new Image();
      image.src = event.target.result;

      image.onload = function () {
        const canvas = document.createElement('canvas');
        const maxWidth = 800;

        let width = image.width;
        let height = image.height;

        if (width > maxWidth) {
          height *= maxWidth / width;
          width = maxWidth;
        }

        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext('2d');
        ctx.drawImage(image, 0, 0, width, height);

        const compressedBase64 = canvas.toDataURL('image/jpeg', 0.8);
        setDraggedImage(compressedBase64);
      };
    };
    reader.readAsDataURL(file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleRemove = () => {
    setDraggedImage(null);
  };

  const handleUpload = () => {
    if (draggedImage) {
      setIsLoading(true); // Set loading state while uploading
  
      const PAT = process.env.REACT_APP_CLARIFAI_PAT;
      const USER_ID = process.env.REACT_APP_CLARIFAI_USER_ID;
      const APP_ID = process.env.REACT_APP_CLARIFAI_APP_ID;
      const MODEL_ID = 'general-image-recognition';
      const MODEL_VERSION_ID = 'aa7f35c01e0642fda5cf400f543e7c40';
  
      const raw = JSON.stringify({
        "user_app_id": {
          "user_id": USER_ID,
          "app_id": APP_ID
        },
        "inputs": [
          {
            "data": {
              "image": {
                "base64": draggedImage.replace(/^data:image\/[a-z]+;base64,/, '')
              }
            }
          }
        ]
      });
  
      const requestOptions = {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Authorization': 'Key ' + PAT
        },
        body: raw
      };
  
      // Make the Clarifai API request
      fetch(`https://api.clarifai.com/v2/models/${MODEL_ID}/versions/${MODEL_VERSION_ID}/outputs`, requestOptions)
        .then(response => {
          if (!response.ok) {
            throw new Error(`API request failed with status ${response.status}`);
          }
          return response.json();
        })
        .then(result => {
          // Extract the names of the first four concepts and combine them into a string
          const firstFourConcepts = result.outputs[0].data.concepts.slice(0, 2).map(concept => concept.name).join(' ');
          console.log(firstFourConcepts)
          // Pass the combined string to the updateSearchInputRef function
          updateSearchInputRef(firstFourConcepts);
          
          console.log(result);
        })
        .catch(error => {
          console.error('Error:', error);
        })
        .finally(() => {
          setIsLoading(false); // Reset loading state
        });
    }
  };
  
  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      handleImageSelection(file);
    }
  };

  return (
    <>
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        className={`border-dashed border-2 border-gray-400 p-4 rounded-lg w-96 ${
          isDragOver ? 'bg-purple-600 border-transparent text-white' : ''
        }`}
      >
        {draggedImage ? (
          <>
            <div className="relative mt-4">
              <img src={draggedImage} alt="Dropped" className="max-w-full rounded-md" />
              <button onClick={handleRemove} className="absolute top-0 right-0 m-2 bg-purple-600 text-white rounded-sm px-1 pb-[2px]">
                X
              </button>
            </div>
            <button
              onClick={handleUpload}
              className={`mt-4 bg-violet-500 text-white p-2 rounded-md ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={isLoading}
            >
              {isLoading ? 'Uploading...' : 'Upload'}
            </button>
          </>
        ) : (
            <div>

            <div className={` text-xl font-medium text-gray-400 ${isDragOver ? 'text-white' : ''}`}>
                Drag & Drop an image here
            </div>
            <div className="text-gray-400 text-base">
                OR
            </div>
            <div className="mt-2">
                <label htmlFor="fileInput" className="text-white bg-violet-500 p-1 px-2 rounded-md cursor-pointer">
                Select File
                </label>
                <input
                id="fileInput"
                ref={fileInputRef}
                type="file"
                accept="image/*"
                style={{ display: 'none' }}
                onChange={handleFileSelect}
                />
            </div>
            </div>
          
        )}
      </div>
      
    </>
  );
}

export default DragAndDrop;