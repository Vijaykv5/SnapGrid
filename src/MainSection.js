import React, { useEffect, useRef, useState , Link } from 'react'
import dotenv from 'dotenv';


const API_URL= 'https://api.unsplash.com/search/photos';
const Image_count=28;
dotenv.config();


const MainSection = () => {
    const searchInput=useRef(null);

    const [images,setImages]=useState([]);
    const [page,setPage]=useState(1)
    const[totalPages,setTotalPages]=useState(0)
    



    const fetchImages =async()=>{
        try{
            const data=await fetch(`${API_URL}?query=${searchInput.current.value}&page=${page}&per_page=${Image_count}&client_id=${process.env.PARCEL_API_KEY}`);
            const json = await data.json();
            setImages(json?.results)
            setTotalPages(json?.total_pages)
           }
           catch(error){
            console.log(error);
           }
    }

    const handleClick=(e)=>{
        e.preventDefault();
        // console.log(searchInput.current.value);
        (images!=null?fetchImages():<div className='font-bold text-black'>Error</div>);   
        setPage(1);    
    }
    const handleSelection=(selection)=>{
        searchInput.current.value=selection;
        (images!=null?fetchImages():<div className='font-bold text-black'>Error</div>); 
        setPage(1);
    }

    


    useEffect(()=>{
        fetchImages();
    },[page]);

  

  return (
    <>
    
    <div className='text-violet-500 text-center font-bold text-5xl my-8 md:my-28 ' >Image Search</div>
   
    <div className='text-center md:-my-16  -my-4'>
    <form onSubmit={handleClick}>
    <input className='w-96 h-9 border border-violet-500 hover:border-violet-500 bg-gray-100 rounded-md p-2' placeholder=' Try Something Search here ...' ref={searchInput}/>
    </form>
    </div>
    <div className='my-8 md:my-20 mx-auto md:max-w-screen-lg flex flex-wrap justify-center'>
        <button onClick={()=>handleSelection('Nature')} className='text-white bg-violet-500 p-1 px-2 rounded-md '>Nature</button>
        <button  onClick={()=>handleSelection('Shoes')} className='text-white bg-violet-500 p-1 px-2 rounded-md ml-3     '>Shoes</button>

        <button  onClick={()=>handleSelection('Camera')} className='text-white bg-violet-500 p-1 px-2 rounded-md ml-3'>Camera</button>
        <button  onClick={()=>handleSelection('Birds')} className='text-white bg-violet-500 p-1  px-2 rounded-md ml-3'>Birds</button>
        <button  onClick={()=>handleSelection('Phones')} className='text-white bg-violet-500 p-1 px-2 rounded-md ml-3'>Phones</button>



        
    </div>
    
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-5'>
        {
            
           images.map(image=>{
                return(
                    
                    <img key={image?.id} src={image?.urls?.small} className='w-full md:w-80 h-72 rounded-md transform hover:scale-105 duration-200 shadow-lg hover:shadow-md'/>
                )
            })
        }
    </div>
    <div className='flex justify-center mt-8'>
    {page > 1 && <button onClick={() => setPage(page - 1)} className=' p-1 px-2 bg-violet-500 text-white w-fit rounded-md'>Previous</button>}
    {page < totalPages && <button onClick={() => setPage(page + 1)} className='p-1 px-2 mx-6  bg-violet-500 text-white w-fit rounded-md' >Next</button>}
</div>

    </>
  )
}

export default MainSection