import React from 'react'
import noresults from "./noresults.png";
const Noresults = () => {
  return (
    <div className="text-center flex justify-center my-10">
      <img src={noresults} className='text-violet-500'></img>
      <div className="text-center flex justify-center font-bold text-violet-500 mx-2">Sorry no search results available </div>
    </div>
  )
}

export default Noresults
