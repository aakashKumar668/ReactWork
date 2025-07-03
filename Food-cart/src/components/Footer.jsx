import React from 'react'

function Footer() {
  return (
    <div className='w-full bg-black text-white'>
        <div className='grid grid-cols-2 md:grid-cols-4 py-10 pl-6'> 
            <div>
                <h2 className='font-bold  mb-3  text-[20px]  md:text-[25px]'>Food<span className='text-yellow-600'>Cart</span></h2>
                <p className='text-[15px] md:text-[20px] text-[gray]'>@Food Cart Examples Tech World</p>
            </div>
            <div>
               <ul>
                <h2 className='font-bold mb-3 text-[20px]  md:text-[25px]'>Company</h2>
                <li className='text-[15px] md:text-[20px] text-[gray] hover:text-red-400'>About</li>
                <li className='text-[15px] md:text-[20px] text-[gray] hover:text-red-400'>Careers</li>
                <li className='text-[15px] md:text-[20px] text-[gray] hover:text-red-400'>Teams</li>
                <li className='text-[15px] md:text-[20px] text-[gray] hover:text-red-400'>Swiggy</li>
               </ul>
            </div>
            <div>
               <ul>
                <h2 className='font-bold mb-3 text-[20px]  md:text-[25px]'>Help & Support</h2>
                <li className='text-[15px] md:text-[20px] text-[gray] hover:text-red-400'>Company</li>
                <li className='text-[15px] md:text-[20px] text-[gray] hover:text-red-400'>Partners with us</li>
               </ul>
            </div>
            <div>
               <ul>
               <h2 className='font-bold mb-3 text-[20px]  md:text-[25px]'>We deliver to:</h2>
                <li className='text-[15px] md:text-[20px] text-[gray] hover:text-red-400'>Banglore</li>
                <li className='text-[15px] md:text-[20px] text-[gray] hover:text-red-400'>Delhi</li>
                <li className='text-[15px] md:text-[20px] text-[gray] hover:text-red-400'>Noida</li>
                <li className='text-[15px] md:text-[20px] text-[gray] hover:text-red-400'>Ghaziabad</li>
                <li className='text-[15px] md:text-[20px] text-[gray] hover:text-red-400'>Gurugram</li>
               </ul>
            </div>
           

        </div>
    </div>
  )
}

export default Footer