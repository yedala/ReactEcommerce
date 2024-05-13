import React, { useEffect, useState } from 'react'
import data from "../dummy_backend/mcc-data.json"
import { GoArrowRight, GoArrowLeft } from "react-icons/go";
const MCCHomeCards = () => {
  const [mccData, setmccData] = useState([]);
  const [current,setCurrent] = useState(0);
  useEffect(() => {
    setmccData(data.mccData);
  }, []);

  const prevSlide = ()=>{
    if(current == 0) setCurrent(mccData.length -1);
    else setCurrent(current-1);
  }
  const nextSlide = ()=>{
    if(current == mccData.length -1) setCurrent(0);
    else setCurrent(current +1);
  }
  return (
    <div className='overflow-hidden '>
      <div className='flex transition ease-out duration-40 ' style={{transform: `translateX(-${current *100}%)`,}}>
        {
          mccData?.map((banner) => {
            return (
              <img key={banner.url} className="p-2  w-screen h-screen" src={banner?.url} alt="img" />
            );

          })
        }</div>
      <div className='flex justify-between h-full w-full absolute top-10 text-white items-center '>
        <button className="text-3xl " onClick={prevSlide}>
          <GoArrowLeft />

        </button>
        <button className='text-3xl'onClick={nextSlide}>
          <GoArrowRight />
        </button>

      </div>
    </div>
  )
}

export default MCCHomeCards