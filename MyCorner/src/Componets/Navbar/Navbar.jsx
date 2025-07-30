import React from 'react'
import { NavLink } from 'react-router-dom'
import { BsPostcardHeart } from "react-icons/bs";

const Navbar = () => {
  return (
    <>
    <nav className='w-full md:p-3 flex justify-around bg-gray-600 items-center'>
              <div className='md:text-2xl font-bold text-red-500 flex items-center gap-1'><BsPostcardHeart className='md:text-3xl text-blue-400'/><h1>My<span className='md:text-3xl text-white'>Corner</span></h1></div>
        <ul className='flex md:gap-10 md:text-xl font-bold '>
                  <NavLink to='/'><li className='duration-300 hover:text-red-500'>Home</li></NavLink> 
                  <NavLink to='/create'> <li className='duration-300 hover:text-red-500'>CreatePost</li></NavLink> 
            
        </ul>
              <div className='flex gap-7'> <h1 className='text-md font-semibold'>UserName</h1>
                  <NavLink to='/login'>  <button className='bg-black border-2 border-white rounded text-white font-bold text-xl md:px-4
                  md:py-1 cursor-pointer hover:text-black hover:border-black hover:bg-white duration-200 '>Login</button></NavLink> </div>
    </nav>
    </>
  )
}

export default Navbar