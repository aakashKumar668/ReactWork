import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { auth } from "../../firebase";

const Navbar = () => {

  const logout = () =>
  {
    auth.signOut();
    alert("Logged out");
  };
  return (
    <>
    <nav className='w-full bg-amber-700 text-white p-3 flex justify-around'>  <div><h1>SnapNotes</h1></div>
    <ul className='flex gap-5 text-xl'>
          <NavLink to='/'> <li>Home</li></NavLink> 
          <NavLink to='/createpost'>   <li>CreatePost</li></NavLink> 
          <NavLink to='/login'> <li>Login</li></NavLink>
          <li><button className='bg-red-500 size-20 ' onClick={logout}>Logout</button></li>
    </ul>


    </nav>
    </>
  )
}

export default Navbar