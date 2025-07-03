import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { MdMail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import { FaSquareInstagram } from "react-icons/fa6";
const Footer = () =>
{
    return (
        <>

            <footer className='w-full bg-[#141414] sm:p-[10px] mt-8'>
                <div className='sm:flex sm:justify-center sm:py-[20px] py-[10px] px-[40px] sm:gap-[90px] block w-full'>
                    <div className='sm:w-[25%] sm:px-[10px] w-full'>
                        <div className='cursor-pointer my-[10px]'>
                            <h2 className="sm:text-5xl text-2xl font-bold text-white">College<span className="sm:text-6xl text-3xl text-red-400">Wala</span></h2>
                        </div>
                        <address className=' text-gray-400 my-[30px]'>
                            <h2 className='font-bold text-xl my-[10px]'>CollegeWala Educational Group</h2>
                            <p className='text-[16px] mx-[20px]'>Sector-63, Noida, Gautambuddhnagar,Uttar Pradesh</p>
                        </address>
                        <ul className='text-gray-400 text-[16px] font-[500] mx-[30px] text-start grid gap-[10px] tracking-[1px] cursor-pointer'>
                            <li className='flex gap-[5px] my-[5px] font-bold text-[18px]'><FaLocationDot className='text-red-500' /> Google Map</li>
                            <li>Contact: <span>1234567890</span></li>
                            <li>Admission: <span>1234567890</span></li>
                            <li>E-mail: <span>collegewala@123.com</span></li>
                        </ul>
                        <div className='my-[25px]'>
                            <h2 className='text-2xl font-bold text-white border-b-[3px] border-green-400'>Follow us on</h2>
                            <ul className='flex gap-[15px] text-gray-500 text-[25px] my-[50px] '>

                                <li className='hover:text-white duration-[300ms]'><MdMail /></li>
                                <li className='hover:text-white duration-[300ms]'><FaFacebook /> </li>
                                <li className='hover:text-white duration-[300ms]'><FaLinkedin /></li>
                                <li className='hover:text-white duration-[300ms]'><IoLogoYoutube /></li>
                                <li className='hover:text-white duration-[300ms]'><FaSquareInstagram /></li>
                            </ul>
                        </div>
                    </div>


                    <div className=' sm:w-[25%] px-[10px]'>
                        <h1 className='text-2xl font-bold text-white border-b-[3px] border-green-400 py-[10px]'>Programs</h1>
                        <ul className='grid gap-[10px] text-gray-500 text-[15px] font-[500] cursor-pointer my-[20px] px-[10px]'>
                            <li className='hover:text-white duration-[300ms]'>B.tech - CSE</li>
                            <li className='hover:text-white duration-[300ms]'>B.tech - CS</li>
                            <li className='hover:text-white duration-[300ms]'>B.tech - CS (Data Science) </li>
                            <li className='hover:text-white duration-[300ms]'>B.tech - ME</li>
                            <li className='hover:text-white duration-[300ms]'>B.tech - Civil</li>
                            <li className='hover:text-white duration-[300ms]'>B.Pharm</li>
                            <li className='hover:text-white duration-[300ms]'>D.Pharm</li>
                            <li className='hover:text-white duration-[300ms]'>M.Pharm</li>
                            <li className='hover:text-white duration-[300ms]'>B.Arch</li>
                            <li className='hover:text-white duration-[300ms]'>BFD</li>
                            <li className='hover:text-white duration-[300ms]'>BBA</li>
                            <li className='hover:text-white duration-[300ms]'>Diploma ME</li>
                            <li className='hover:text-white duration-[300ms]'>Diploma SE</li>
                            <li className='hover:text-white duration-[300ms]'>BCA</li>
                        </ul>
                    </div>
                    <div className='sm:w-[25%] px-[10px]'>
                        <h1 className='text-2xl font-bold text-white border-b-[3px] border-green-400 py-[10px]'>Important Links</h1>
                        <ul className='grid gap-[10px] text-gray-500 text-[15px] font-[500] cursor-pointer my-[20px] px-[10px]'>
                            <li className='hover:text-white duration-[300ms]'>About SEG</li>
                            <li className='hover:text-white duration-[300ms]'>Admissions</li>
                            <li className='hover:text-white duration-[300ms]'>SEG Alumni</li>
                            <li className='hover:text-white duration-[300ms]'>Careers</li>
                            <li className='hover:text-white duration-[300ms]'>Contact Us</li>
                        </ul>
                        <button className='sm:w-full w-50 py-4 px-1  sm:mx-[15px] text-white sm:text-[18px] text-[15px] sm:text-center bg-green-400 sm:my-[15px] sm:mt-[100px] cursor-pointer sm:py-[10px] rounded font-bold'>Information Brochure</button>
                        <button className='sm:w-full w-50 py-4 px-1  sm:mx-[15px] text-white sm:text-[18px] text-[15px] sm:text-center bg-green-400 my-[15px] sm:mt-[100px] cursor-pointer sm:py-[10px] rounded font-bold'>Placement Report 2024</button>
                    </div>
                </div>
                <div className='bg-[#9cd2e4] sm:py-[10px] py-2.5 w-full px-3.5
        sm:px-[50px]'>
                    <h1 className='text-gray-500 sm:text-xl font-bold text-[10px]'>Copyright&copy; All Rights Resereved 2025, CollegeWala Educational Group</h1>
                </div>

            </footer>
        </>
    )
}

export default Footer