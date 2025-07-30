import React from 'react'
import TuneWaveLogo from "../../assets/Images/TuneWaveLogo.png"
import { Link } from 'react-router-dom'

const Navbar = () =>
{
  return (

    <>

      <nav className='md:flex justify-center gap-60 bg-[#182c66] py-3 font-[cursive]'>
        <div className='cursor-pointer'>
          <img src={TuneWaveLogo} alt="" className='md:w-50 drop-shadow-md/100 drop-shadow-red-400 '/>
        </div>

        <ul className='flex gap-7 font-bold text-2xl text-white '>
          <Link to="/"> <li className='cursor-pointer hover:text-orange-500 hover:scale-105 duration-300' >Home</li></Link>
          <Link to="/">  <li className='cursor-pointer hover:text-orange-500 hover:scale-105 duration-300'>All Songs</li></Link>
          <Link to="/favsong"> <li className='cursor-pointer hover:text-orange-500 hover:scale-105 duration-300'>Favourite</li></Link>
        </ul>

        <div>

          <button className=' text-xl text-white bg-blue-500 rounded cursor-pointer px-4 py-1 font-bold hover:bg-white hover:text-blue-500 ring-3 ring-gray-300 duration-500'>
            Signup
          </button>
        </div>
      </nav>
    </>
  )
}

export default Navbar