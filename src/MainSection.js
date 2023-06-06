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
    
    <div className='text-violet-500 text-center font-bold text-5xl   justify-center  my-28 ' >Image Search</div>
   
    <div className='text-center -my-16'>
    <form onSubmit={handleClick}>
    <input className='w-96 h-9 border-spacing-1 border-violet-500 hover:border-violet-500 bg-gray-100 rounded-md p-2  ' placeholder=' Try Something Search here ...' ref={searchInput}/>
    </form>
    </div>
    <div className=' my-20 mx-[490]'>
        <button onClick={()=>handleSelection('Nature')} className='text-white bg-violet-500 p-1 px-2 rounded-md '>Nature</button>
        <button  onClick={()=>handleSelection('Shoes')} className='text-white bg-violet-500 p-1 px-2 rounded-md ml-3     '>Shoes</button>

        <button  onClick={()=>handleSelection('Camera')} className='text-white bg-violet-500 p-1 px-2 rounded-md ml-3'>Camera</button>
        <button  onClick={()=>handleSelection('Birds')} className='text-white bg-violet-500 p-1  px-2 rounded-md ml-3'>Birds</button>
        <button  onClick={()=>handleSelection('Phones')} className='text-white bg-violet-500 p-1 px-2 rounded-md ml-3'>Phones</button>



        
    </div>
    
    <div className='grid grid-cols-4 p-5 gap-4'>
        {
            
           images.map(image=>{
                return(
                    
                    <img key={image?.id} src={image?.urls?.small} className='w-80 h-72 rounded-md  hover:-translate-y-3 hover:scale-90 duration-200  shadow-2xl hover:shadow-md'/>
                )
            })
        }
    </div>
    <div className='button bg-violet-500 text-white w-fit rounded-md flex justify-center text-center '>
        { page >1 &&<button onClick={()=>setPage(page-1)} className=''> Previous</button>}
        {page < totalPages &&  <button  onClick={()=>setPage(page+1)} className=' p-1 px-2  '>Next</button>}
        
    </div>
    </>
  )
}

export default MainSection