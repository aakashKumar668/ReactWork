import React, { useState } from 'react'
import data from "./Data/Data"
const Products = () => {
    

      const [productItem, setProductItem] =useState(data)


      const handleFilter=()=>{
  const filterItem= productItem.filter((item)=>{
return(
    item.price>30
)
        })
        setProductItem(filterItem)
      }
  return (<>
    <p className='filter w-[150px] p-[5px] cursor-pointer bg-black text-white m-[20px]' onClick={handleFilter}>Filter By price</p>
    <div className=' flex flex-wrap w-full gap-[20px] m-auto justify-center py-[20px]'>
        {productItem.map((product)=>(


 <div className='w-[230px] bg-white-500 border-[1px] border-gray border-solid p-[10px] text-center rounded-lg' key={product.id}>
                 <div className='h-[200px]'>
                    <img src={product.thumbnail} className='w-full h-full rounded-lg object-contain'/>
                    </div>
                    <div className='mt-[10px]'>
                        <p className=' font-normal '>{product.title}</p>
                        <p className='text-lg mt-[5px] font-bold'>{product.price}</p>
                    </div>
                    <button className='inline-block py-[8px] px-[20px] text-xl text-center font-normal w-full bg-blue-400'>Add</button>



                      </div>
                 )
                
        )}
    </div>
    </>)
}

export default Products