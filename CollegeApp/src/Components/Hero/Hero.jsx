import React from 'react'
import CollegeGirl from "../../assets/Images/college girl.png"
import HeroBackground from "../../assets/Images/heroBackground.mp4"
import { Link, animateScroll as scroll } from 'react-scroll';

const Hero = () =>
{
  return (
    <>
      <div className="hero m-auto w-full sm:h-[90vh] h-[40vh] text-white relative overflow-hidden">
        <div className='sm:h-[90vh] w-full absolute z-[-99] h-[40vh]'>
          <video autoPlay loop muted playsInline>
            <source src={HeroBackground} />
          </video>
        </div>
        <div className='flex justify-around sm:pt-[50px] sm:px-[150px] z-[1] bg-[#000000d1] pt-[30px] px-[10px] sm:h-[90vh] h-[32vh] w-full'>
          <img src={CollegeGirl} alt="" className='sm:h-[490px] sm:w-[400px] w-[140px] h-[180px]' />
          <div className='sm:my-[50px] sm:w-[500px] w-[300px] mx-5'>
            <h1 className='sm:text-7xl text-xl font-bold sm:mx-[40px] sm:mb-[30px]'>Welcome to Our College</h1>
            <p className='sm:mx-[70px] mx-[10px] my-[10px] sm:mb-[30px] sm:text-[16px] sm:leading-[22px] sm:tracking-[1px] sm:font-semibold text-[10px]'>explore our diverse academc programs, vibrant campus life, and supportive community dedicated to your success.</p>
            <Link to='contactForm' smooth={true} duration={500}> <button className='sm:h-[50px] sm:w-[150px] sm:text-[20px] text-black bg-white font-bold capitalize rounded sm:mx-[50px] cursor-pointer h-[30px] w-[100px] '>apply now</button></Link>
          </div>
        </div>

      </div>
    </>
  )
}

export default Hero