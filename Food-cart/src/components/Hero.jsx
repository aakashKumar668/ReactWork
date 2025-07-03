import React, { useEffect, useState } from 'react'
import { FaAnglesLeft,FaAnglesRight } from "react-icons/fa6";

function Hero() {
const ImgData = [
  {url: "https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672076/NetflixApp/burger_emxbtv.jpg",},
  {
    url: "https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672452/NetflixApp/pizza_osjb4f.jpg",
  },
  {
    url: "https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672612/NetflixApp/ric_a4ewxo.jpg",
  }
]

const [slider, setSlider] =useState(1)
const handlePlus =()=>{
  setSlider(slider ===ImgData.length-1? 0:slider+1)
}
const handleMinus =()=>{
  setSlider(slider ===0? ImgData.length-1:slider-1)
}

useEffect(()=>{
const sliderClear =setInterval(() => {
  handlePlus()
}, 2000);
return ()=> clearInterval(sliderClear)
},[slider])
  return (
   <div>
     <div className='w-[90%] mx-auto h-[80vh] my-5 relative z-[-1]'>
      {ImgData.map((item, i)=>(
        <div key={i} className={`${slider ===i?"block":"hidden"}`}>
          <img src={item.url} alt="" className='w-full h-[80vh] rounded-2xl object-cover'/>
        </div>
      ))}

    <div className='w-full mx-auto h-[80vh] bg-black opacity-50 top-0 left-0 rounded-2xl absolute'></div>
    <div className='absolute w-full  text-[20px] md:text-[40px] text-white font-semibold top-[50%] text-center flex justify-center'>
    <p className=' '>Hello! Welcome to the Food Cart</p>
    </div>
    <div className='flex justify-between w-full px-5 absolute top-[50%] text-white'>
    <FaAnglesLeft className='cursor-pointer' 
    size={35}
    onClick={handleMinus}/>
    <FaAnglesRight 
    className='cursor-pointer'
    size={35}   
    onClick={handlePlus}/>

    </div>
    </div>
   </div>
  )
}

export default Hero