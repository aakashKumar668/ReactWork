import React from 'react'
import { NavLink } from 'react-router-dom'
import { BsPostcardHeart } from "react-icons/bs";
import { BsInstagram, BsYoutube } from "react-icons/bs";
import { FaGithub } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";


const Footer = () => {
  return (
    <>
    <footer className='bg-gray-900 w-full '>
              <div className='flex gap-20 bg-red justify-center p-5'>
            <div>  <div className='md:text-4xl font-bold text-red-500 flex items-center gap-1'><BsPostcardHeart className='md:text-4xl text-blue-400'/><h1>My<span className='md:text-6xl text-white'>Corner</span></h1></div></div>
            <div>
                      <ul className='grid md:gap-6 md:text-md font-bold text-white'>
                          <NavLink to='/'><li className='duration-300 hover:text-red-500'>Home</li></NavLink>
                          <NavLink to='/create'> <li className='duration-300 hover:text-red-500'>CreatePost</li></NavLink>
                          <NavLink to='/login'> <li className='duration-300 hover:text-red-500'>Login</li></NavLink>
                          <NavLink to='/signup'> <li className='duration-300 hover:text-red-500'>Signup</li></NavLink>

                      </ul>
            </div>
            <div>
                      <ul className='flex md:gap-6 md:text-xl font-bold text-white mt-35'>
                          <li className='duration-300 hover:text-red-500'><BsInstagram /></li>
                          <li className='duration-300 hover:text-red-500'><FaGithub /></li>
                          <li className='duration-300 hover:text-red-500'><FaFacebookSquare /></li>
                          <li className='duration-300 hover:text-red-500'><BsYoutube /></li>

                      </ul>
            </div>
        </div>
              <div className='w-full text-center bg-gray-600 p-4 text-xl font-bold text-gray-900'> <h1>MyCorner copyright &copy; All right reaserved 2025</h1></div>
    </footer>
    </>
  )
}

export default Footer