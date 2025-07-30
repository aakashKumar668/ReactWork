import React, { useEffect, useState } from 'react'
import "./Slider.css"
import image1 from "../assets/image1.jpg"
import image2 from "../assets/image2.jpeg"
import image3 from "../assets/image3.jpeg"
const Slider = () => {
let data = [image1,image2,image3]
    
const [count, setCount] = useState(0)

const handleMinus=()=>{
    setCount(count ===0?data.length-1:count-1)
}
const handlePlus=()=>{
setCount(count ===data.length-1?0:count+1)
}

useEffect(() => {
let sliderClear =setInterval(() => {
    handlePlus()
}, 2000);
return ()=> clearInterval(sliderClear)
}, [count])


  return (
   <>
   <div className="slider">
    {data.map((image,i)=>(
            <div className={`slider-image ${count===i?"block":"hidden"}`} key={i} >
            <img src={image} alt=""/>
                <div className='btn'>
                   <button onClick={handleMinus}>-</button>
                   <button onClick={handlePlus}>+</button>
                </div>
                </div>
    ))}
        <p>{count}</p>

   </div>
   </>
  )
}

export default Slider