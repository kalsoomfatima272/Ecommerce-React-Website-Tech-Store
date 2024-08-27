import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaRegSmile } from "react-icons/fa";
import './footer.css'


const Footer = () => {
  return (
    <>
    <div className='footer'>
        <div className='container'>
            <div className='about'>
                <div className='logo'>
                    <img src ='/img/logo.png' alt='logo'></img>
                </div>
                <div className='detail'>
                    <p>TechStore is dedicated to driving innovation through cutting-edge technology solutions. We empower businesses with the tools they need to thrive in a digital world.</p>
                    <div className='icon'>
                        <li><FaFacebook/></li>
                        <li><LuInstagram/></li>
                        <li><FaTwitter/></li>
                        <li><FaYoutube/></li>
                    </div>
                </div>
            </div>
            <div className='account'>
                <h3> My Account</h3>
                <ul>
                    <li>Account</li>
                    <li>Order</li>
                    <li>Cart</li>
                    <li>Shipping</li>
                    <li>Return</li>
                </ul>
            </div>
            <div className='page'>
                <h3>Pages</h3>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Terms & Conditions</li>
                </ul>
            </div>
            
        </div>
        <h5><center>Designed by Kalsoom Fatima <FaRegSmile /></center></h5>
    </div>
    
    </>
  )
}

export default Footer
