import React, { useContext, useState } from 'react'
import "./navbar.css"
import logo from "../../assets/logo.gif"
import { FaCartArrowDown } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { ShopContext } from '../../context/ShopContext';

const Navbar = () => {
const [menu, setMenu] =useState("home")
const {getTotalcartItems} = useContext(ShopContext)

  return (
    <div className='nanvbar'>
        <div className="nav-logo">
            <img src={logo} alt=""/>
            <p>E-Comm</p>
        </div>
        <ul className='nav-menu'>
            <Link to="/"><li onClick={()=>{setMenu("home")}} >Home{menu==="home"?<hm  r/>:<></>}</li></Link>
           <Link to="/mens"> <li onClick={()=>{setMenu("mens")}}>Mens{menu==="mens"?<hr/>:<></>}</li></Link>
           <Link to="/womens"> <li onClick={()=>{setMenu("womens")}}>Womens{menu==="womens"?<hr/>:<></>}</li></Link>
           <Link to="/kids"> <li onClick={()=>{setMenu("kids")}}>Kids{menu==="kids"?<hr/>:<></>}</li></Link>
        </ul>
        <div className="nav-login-cart">
           <Link to="/login"> <button>Login</button></Link>
           <Link  to="/cart"> <FaCartArrowDown className='cart-logo'/></Link>
            <div className="nav-cart-count">{getTotalcartItems()}</div>
        </div>
    </div>
  )
}

export default Navbar