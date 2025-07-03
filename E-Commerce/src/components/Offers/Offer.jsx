import React from 'react'
import "./offer.css"
import exclusive from "../../assets/exclu.webp"

const Offer = () => {
  return (
    <>
    <div className="offers">
        <div className="offers-left">
<h1>Exclusive</h1>
<h1>Offers For You</h1>
<p>Only on best sellers products</p>
<button>Check Now</button>
        </div>
        <div className="offers-right">
<img src={exclusive} alt="" />

        </div>
    </div>
    </>
  )
}

export default Offer