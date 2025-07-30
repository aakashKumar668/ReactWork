import React, { useState } from 'react'
import { BsPostcardHeart } from "react-icons/bs";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { IoMdLogIn } from "react-icons/io";
import { signInWithPopup } from 'firebase/auth';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth,provider } from '../../firebase';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () =>
{
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showpassword, setshowPassword] = useState(false)
  const navigate = useNavigate();



  const handleSignup = async () =>
  {
    const userCredential = await createUserWithEmailAndPassword(auth,name, email, password);
    await updateProfile(userCredential.user, { displayName: name });
    navigate('/');
  };




  
    const handleGoogle = async () =>{
      await signInWithPopup(auth, provider);
      navigate('/');
    };
  return (




    <div className='w-full md:my-10'>
      <div className='w-2/5 bg-gray-600 rounded m-auto text-center grid justify-center py-10'>
        <div className='md:text-4xl font-bold text-red-500 flex my-5 justify-center gap-1'><BsPostcardHeart className='md:text-4xl mt-3 text-blue-400' /><h1>My<span className='md:text-5xl text-white'>Corner</span></h1></div>
        <h2 className='text-4xl text-white font-bold text-shadow-red-300 text-shadow-lg tracking-wider'>Signup</h2>
        <div className=' grid text-start gap-4 my-7'>
          <div className='grid gap-3 mb-3 w-90 '>
            <label htmlFor="name" className='text-xl font-semibold text-white'>Name...</label>
            <input placeholder="Name" type='text' name='name' className='text-md font-medium px-1 py-1 border-2 border-black outline-none  rounded  text-gray-100 hover:shadow-sm duration-600 shadow-sky-100' id='name' onChange={(e) => setName(e.target.value)} />
          </div>
          <div className='grid gap-3 mb-3 w-90 '>
            <label htmlFor="email" className='text-xl font-semibold text-white'>Email...</label>
            <input placeholder="Email" name='email' type='email' className='text-md font-medium px-1 py-1 border-2 border-black outline-none  rounded  text-gray-100 hover:shadow-sm duration-600 shadow-sky-100' id='email' onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className='grid gap-3 mb-3 w-90'>
            <label htmlFor="password" className='text-xl font-semibold text-white'>Password...</label>
            <div className='flex w-full border-2 border-black rounded justify-between items-center px-1 hover:shadow-sm duration-600 shadow-sky-100'><input placeholder="Password" id='password' type={showpassword ? "text" : "password"} name='password' onChange={(e) => setPassword(e.target.value)}
              className='text-md font-medium  py-1 outline-none  rounded shadow text-gray-100 w-full' />
              {showpassword ?
                <VscEyeClosed className='text-xl mx-1 cursor-pointer text-white ' onClick={() => setshowPassword(!showpassword)} /> : <VscEye className='text-xl mx-1 cursor-pointer text-white' onClick={() => setshowPassword(!showpassword)} />}
            </div>
          </div>
          <button onClick={handleSignup} className='bg-gray-700 border-3 border-black rounded text-white text-2xl font-bold flex text-center items-center gap-2 justify-center p-1 tracking-wide hover:shadow shadow-white duration-500 hover:border-blue-300 hover:bg-blue-700'>Signup<IoMdLogIn /></button>
          <div className='flex w-full font-semibold text-white'>
            <p>If you have a google account, </p>
            <button onClick={handleGoogle} className='text-sky-400 cursor-pointer'>Login with Google</button>
          </div>
          <button className='text-red-400 font-bold text-md'>You have an account, <Link to='/login' className='text-sky-400'>Login</Link></button>
        </div>
      </div>

    </div>
  )
}

export default Signup