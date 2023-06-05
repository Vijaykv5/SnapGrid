import React, { useEffect, useRef, useState } from 'react'
import dotenv from 'dotenv';

const API_URL= 'https://api.unsplash.com/search/photos';
const Image_count=20;
dotenv.config();
console.log(process.env.PARCEL_API_KEY);

const MainSection = () => {
    const searchInput=useRef(null);

    const [images,setImages]=useState([]);
    const[totalPages,setTotalPages]=useState(0)
    



    const fetchImages= async()=>{
        try{
            const data=await fetch(`${API_URL}?query='nature'&page=1&per_page=${Image_count}&client_id=${process.env.PARCEL_API_KEY}`);
            const json = await data.json();;
            console.log(json.results[0].urls.small);
            setImages(data?.results);
            setTotalPages(json?.total_Pages)
           }
           catch(error){
            console.log(error);
           }
    }

    const handleClick=(e)=>{
        e.preventDefault();
        console.log(searchInput.current.value);
        fetchImages();       
    }
    const handleSelection=(selection)=>{
        searchInput.current.value=selection;
        fetchImages();
    }

    

  

  return (
    <>
    <div className='text-violet-500 text-center font-bold text-5xl   justify-center  my-28 '>Image Search</div>
    <div className='text-center -my-16'>
    <form onSubmit={handleClick}>
    <input className='w-96 h-9 border-spacing-1 border-violet-500 hover:border-violet-500 bg-gray-100 rounded-md p-2  ' placeholder=' Try Something Search here ...' ref={searchInput}/>
    </form>
    </div>
    <div className=' my-20 mx-[520]'>
        <button onClick={()=>handleSelection('Nature')} className='text-white bg-violet-500 p-1 rounded-md '>Nature</button>
        <button  onClick={()=>handleSelection('Shoes')} className='text-white bg-violet-500 p-1 rounded-md ml-3     '>Shoes</button>

        <button  onClick={()=>handleSelection('Camera')} className='text-white bg-violet-500 p-1 rounded-md ml-3'>Camera</button>
        <button  onClick={()=>handleSelection('Birds')} className='text-white bg-violet-500 p-1 rounded-md ml-3'>Birds</button>
        <button  onClick={()=>handleSelection('Phones')} className='text-white bg-violet-500 p-1 rounded-md ml-3'>Phones</button>



        
    </div>
    {console.log('image-',images)}
    <div className='images'>
        {
            
           images.map(image=>{
                return(
                    
                    <img key={image?.id} src={image?.urls?.small}/>
                )
            })
        }
    </div>
    </>
  )
}

export default MainSection