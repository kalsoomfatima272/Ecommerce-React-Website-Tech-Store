import React, { useState } from 'react'
import { FaTruck } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { BsBagCheckFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import {Link} from 'react-router-dom';
import { IoLogInOutline } from "react-icons/io5";
import { BiLogOut } from "react-icons/bi";
import { useAuth0 } from "@auth0/auth0-react";

import './nav.css'

const Nav = ({searchbtn}) => {
  const[search,setSearch]= useState()
  const { loginWithRedirect , logout,  user, isAuthenticated, } = useAuth0();
  return (
    <>
    <div className= 'free'>
        <div className='icon'>
        <FaTruck/> 
        </div>
        <p>Free delivery for orders above 1000/-</p>
    </div>
    <div className='main_header'>
      <div className='container'>
        <div className='logo'>
          <img src ='./img/logo.png' alt='logo'></img>
        </div>
        <div className='search_box'>
          <input type='text' value={search} placeholder='Search Your Product...' autoComplete='off' onChange={(e)=> setSearch(e.target.value)}></input>
          <button onClick={()=> searchbtn (search)}>Search</button>
        </div>
        <div className='icon'>
          {
            isAuthenticated &&
            (
              <div className='account'>
              <div className='user_icon'>
              <FaUser/>
              </div>
              <p>Hello,{user.name}</p>
  
            </div>
            )
          }
          
          <div className='second_icon'>
          <Link to="/" className='link'><FaRegHeart/></Link>
         <Link to="/cart" className='link'><BsBagCheckFill/></Link>

          </div>
          
        </div>
      </div>
      </div>
      <div className='header'>
        <div className='container'>
          <div className='nav'>
          <ul>
            <li>
              <Link to='/' className='link'>Home</Link>
            </li>
            <li>
              <Link to='/product' className='link'> Product</Link>
            </li>
            <li>
              <Link to='/about' className='link'>About</Link>
            </li>
            <li>
              <Link to='/contact' className='link'>Contact</Link>
            </li>
          </ul>
          </div>
        <div className='auth'>
          {
            isAuthenticated ?
              <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}><BiLogOut /></button> :
              <button onClick={() => loginWithRedirect()}><IoLogInOutline /></button>
          }
        
        


        </div>
      </div>
    </div>
    </>
  )
}

export default Nav
