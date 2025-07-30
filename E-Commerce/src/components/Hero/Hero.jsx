import React from 'react'
import "./hero.css"
import  handIcon  from "../../assets/handIcon.png";
import { FaArrowRight } from "react-icons/fa";
import men from "../../assets/manLogo.png"
import backgroundVideo from "../../assets/heroBackgroundVideo.mp4"
export const Hero = () => {
  return (
    <>
<div className="hero-container">
<video autoPlay muted loop id="bg-video">
      <source src={backgroundVideo} type="video/mp4" />
      Your browser does not support HTML5 video.
    </video>

    <div className='hero'>
 <div className="hero-left">
    <h2>Best Deals ! Best Prices</h2> 

<div className="hero-hand-icon">
    <p>New</p>
    <img src={handIcon} alt="" />
</div>
<p>Collection </p>
<p>For Everyone</p>
<div className="hero-latest-btn">
    <p>Latest Collection</p>
    <FaArrowRight />
</div>
</div>

<div className="hero-right">

<img src={men} alt="" />

</div>
    </div>
    </div>
    </>
  )
}
