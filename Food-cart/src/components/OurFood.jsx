import React from 'react'
import {mealData} from "./Data/data"
function OurFood() {
  return (
   <>
   <div className='w-[90%] mx-auto'>
    <div>
        <h2 className='text-center text-yellow-500 text-3xl font-bold py-5'>Our Food</h2>
    </div>

    <div className=' grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 py-6 gap-3'>
{mealData.map((item,i)=>(
<div className='flex justify-center flex-col items-center'>
    <div className=''>
        <img 
        src={item.image} 
        alt="" 
        className='w-[200px] object-cover h-[200px] rounded-lg' 
        />
        </div>
    <div className="flex justify-center py-2 px-4 flex-col items-center">
<p className='text-xl font-semibold uppercase'>{item.name}</p>
<p className='text-xl font-semibold uppercase'>{item.price.replace("$","₹")}</p>
<button className='bg-black w-[100px] text-white rounded-md my-6 py-[10px] text-[15px] font-semibold hover:text-yellow-500'>Add To Cart</button>
    </div>
</div>
))}
    </div>
   </div>
   </>
  )
}

export default OurFood