import React from 'react'
import "./Footer.css"
import logo from '../../assets/logo.gif'
import instagram_icon from "../../assets/instagram.png"
import facebook_icon from "../../assets/facebook.png"
import whatsapp_icon from "../../assets/whatsapp.png"
const Footer = () => {
  return (
    <>
    <div className="footer">
<div className="footer-logo">
    <img src={logo} alt="" />
    <p>E-Comm</p>
</div>
<ul className="footer-links">
    <li>About</li>
    <li>Products</li>
    <li>Offices</li>
    <li>Company</li>
    <li>Contact</li>
</ul>
<div className="footer-social-icon">
    <div className="footer-icon-container">
        <img src={instagram_icon} alt="" />
    </div>
    <div className="footer-icon-container">
        <img src={facebook_icon} alt="" />
    </div>
    <div className="footer-icon-container">
        <img src={whatsapp_icon} alt="" />
    </div>
</div>
<div className="footer-copyright">
    <hr />
    <p>Copyright @2025- All Rights Reserved</p>
</div>
    </div>
    </>
  )
}

export default Footer