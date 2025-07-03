import React from 'react'
import EventImages from "../assets/DataList/EventImage"
import VideoData from "../assets/DataList/EventVideo"
const Media = () =>
{
  return (
    <>
      <div className='w-full bg-white '>
        <div className='w-full bg-[#03031cd6] px-[50px] sm:py-[20px] py-[10px]'><h1 className='text-white sm:text-6xl text-2xl font-bold'>All Media Here...</h1></div>
        <div className='flex w-full flex-wrap flex-1 justify-around'>

          {
            EventImages.map((item, i) =>
            {
              return (
                <div className='sm:w-[30%] inline-grid justify-items-center sm:py-[50px] py-[20px]' key={i}>
                  <img src={item.image} alt="" className='w-full rounded h-[250px]' />
                  <div className='flex w-[95%] my-[20px] justify-start px-[10px]'>
                    <h2 className='text-4xl font-bold  text-green-400 w-[50px] inline-grid'>{item.date.split(" ")[0]}<span className='text-gray-400 text-[20px]  border-b-[4px] border-green-400 text-center'>{item.date.split(" ")[1]}</span></h2>
                    <p className='text-center text-[20px] font-bold mx-[10px] text-green-400'>{item.event}</p>
                  </div>
                </div>
              )
            })
          }
          {
            VideoData.map((item, i) =>
            {
              return (
                <div className=' sm:w-[30%] inline-grid justify-items-center sm:py-[50px] py-[20px]' key={i}>
                  <video src={item.video} autoPlay muted></video>
                  <div className='flex w-[95%] my-[20px] justify-start px-[10px]'>
                    <h2 className='text-4xl font-bold  text-green-400 w-[50px] inline-grid'>{item.date.split(" ")[0]}<span className='text-gray-400 text-[20px]  border-b-[4px] border-green-400 text-center'>{item.date.split(" ")[1]}</span></h2>
                    <p className='text-center text-[20px] font-bold mx-[10px] text-green-400'>{item.event}</p>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default Media