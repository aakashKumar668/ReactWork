import React, { useState } from 'react'
import { FaCartShopping } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { Link } from 'react-router-dom';
function Header ({ count })
{
     const [sideNav, setSideNav] = useState(false)

     //   const handleChange =()=>{
     //     setSideNav(!sideNav)
     //    console.log(sideNav)
     // }
     return (
          <div className=''>
               <div className=' flex justify-between py-7 px-20 text-base font-semibold drop-shadow-lg border border-gray-300 relative'>
                    <div>
                         <Link to='/'> <p className='font-bold text-2xl cursor-pointer '>Food<span className='text-yellow-600'>Cart</span></p></Link>
                    </div>
                    <div>
                         <ul className=' sm:flex gap-4 hidden cursor-pointer first'>
                              <Link to="/">
                                   <li className='hover:text-red-400'>Home</li>
                              </Link >
                              <Link to="/aboutus">
                                   <li className='hover:text-red-400'>About us</li>
                              </Link >
                              <Link to="/ourfood">
                                   <li className='hover:text-red-400'>Our Food</li>
                              </Link >
                              <Link to="/SignIn">
                                   <li className='hover:text-red-400'>Sign In</li>
                              </Link >
                              {/* <li className='hover:text-red-400'>About Us</li>
          <li className='hover:text-red-400'>Our Food</li>
          <li className='hover:text-red-400'>Sign In</li> */}
                         </ul>
                    </div>

                    {sideNav ? (<div className='w-[300px] bg-gray-300 absolute top-0 right-0 text-center h-[100vh] flex justify-center items-center z-10'>
                         <ImCross size={25} onClick={() => setSideNav(!sideNav)} className='absolute top-3 cursor-pointer right-3' />
                         <ul className='flex cursor-pointer  flex-col gap-12 '>
                              <Link to="/">
                                   <li className='hover:text-red-400' onClick={() => setSideNav(!sideNav)}>Home</li>
                              </Link >
                              <Link to="/aboutus">
                                   <li className='hover:text-red-400' onClick={() => setSideNav(!sideNav)}>About us</li>
                              </Link >
                              <Link to="/ourfood">
                                   <li className='hover:text-red-400' onClick={() => setSideNav(!sideNav)}>Our Food</li>
                              </Link >
                              <Link to="/SignIn">
                                   <li className='hover:text-red-400' onClick={() => setSideNav(!sideNav)}>Sign In</li>
                              </Link >
                         </ul>

                    </div>) : ("")}
                    <div className='flex gap-5'>
                         <div>  <GiHamburgerMenu onClick={() => setSideNav(!sideNav)} size={30} className='cursor-pointer block sm:hidden' /></div>
                         <p>{count}
                              <FaCartShopping size={30} /></p>
                    </div>
               </div>
          </div>
     )
}

export default Header



{/*  */ }