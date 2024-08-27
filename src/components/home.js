import React from 'react'
import { FaTruck } from "react-icons/fa6";
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa";
import { BsCurrencyDollar } from "react-icons/bs";
import { HiOutlineReceiptPercent } from "react-icons/hi2";
import { BsHeadphones } from "react-icons/bs";
import { FaCartShopping } from "react-icons/fa6";
import Homeproduct from './homeproduct';
import { IoMdEye } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { IoIosCloseCircleOutline } from "react-icons/io";

import './home.css'

const Home = ({detail, view,close, setClose, addtoCart}) => {
  return (
    <>
       {
      close ? 
      <div className='product_detail'>
      <div className='container'>
        <button onClick ={() => setClose(false)} className='closebtn'><IoIosCloseCircleOutline /></button>

        {
          detail.map((curElm) =>
          {
           return(
            <div className='productbox'>
              <div className='img_box'>
                <img src={curElm.Img} alt={curElm.Title}></img>

              </div>
              <div className='detail'>
                <h4>{curElm.Cat}</h4>
                <h2>{curElm.Title}</h2>
                <p>Experience the perfect combination of quality and innovation with this product. Designed to cater to your needs, it features top-notch functionality and style. Whether you're looking to enhance your daily routine or achieve your goals, this product delivers exceptional performance and reliability. Elevate your experience and enjoy the excellence that comes with every use.</p>
                <h3>{curElm.Price}</h3>
                <button>Add to Cart</button>
              </div>
            </div>

          )
})
        }
        <div className='productbox'></div>
      </div>
    </div> : null
    }
   
      <div className='top_banner'>
        <div className='container'>
          <div className='detail'>
            <h2>The Best Laptops Collections 2024</h2>
            <Link to='/product' className='link'>Shop Now <FaArrowRight /></Link>
          </div>
          <div className='img_box'>
            <img src='./img/slider.png' alt='sliderimg' />
          </div>
        </div>
      </div>

      <div className='product_type'>
        <div className='container'>
          <div className='box'>
            <div className='img_box'>
              <img src='./img/mobile.png' alt='mobile' />
            </div>
            <div className='detail'> <br></br>
              <h4>Mobiles</h4>
              <p>23 products</p>
            </div>
          </div>

          <div className='box'>
            <div className='img_box'>
              <img src='./img/headphones.png' alt='headphones' />
            </div>
            <div className='detail'><br></br>
            <h4>Headphones</h4>
              <p>47 products</p>
            </div>
          </div>

          <div className='box'>
            <div className='img_box'>
              <img src='./img/slider.png' alt='Laptop' />
            </div>
            <div className='detail'><br></br>
            <h4>Laptops</h4>
              <p>31 products</p>
            </div>
          </div>

          <div className='box'>
            <div className='img_box'>
              <img src='./img/smartwatch.png' alt='smartwatch' />
            </div>
            <div className='detail'><br></br>
            <h4>Smartwatch</h4>
              <p>12 products</p>
            </div>
          </div>
        </div>
      </div>

      <div className='about'>
        <div className='container'>
          <div className='box'>
            <div className='icon'>
              <FaTruck />
            </div>
            <div className='detail'>
              <h3>Free Shipping</h3>
              <p>Order above $1000</p>
            </div>
          </div>

          <div className='box'>
            <div className='icon'>
              <BsCurrencyDollar />
            </div>
            <div className='detail'>
              <h3>Return & Refund</h3>
              <p>Money back guarantee</p>
            </div>
          </div>

          <div className='box'>
            <div className='icon'>
              <HiOutlineReceiptPercent />
            </div>
            <div className='detail'>
              <h3>Member Discount</h3>
              <p>On every Order</p>
            </div>
          </div>

          <div className='box'>
            <div className='icon'>
              <BsHeadphones />
            </div>
            <div className='detail'>
              <h3>Customer Service</h3>
              <p>Available 24/7</p>
            </div>
          </div>
        </div>
      </div>

      <div className='product'>
        <h2>Top Products</h2>
        <div className='container'>
          {Homeproduct.map((curElm) => {
            return (
              <div className='box' key={curElm.id}>
                <div className='img_box'>
                  <img src={curElm.Img} alt={curElm.Title}></img>
                  <div className='icon'>
                    <li onClick={() => addtoCart(curElm)}><FaCartShopping /></li>
                    <li onClick={() => view (curElm)}> <IoMdEye /></li>
                    <li><FaRegHeart /></li>
                  </div>
                </div>
                <div className='detail'>
                  <p>{curElm.Cat}</p>
                  <h3>{curElm.Title}</h3>
                  <h4>${curElm.Price}</h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className='banner'>
        <div className='container'>
        <div className='detail'>
          <h4>LATEST TECHNOLOGY ADDED</h4>
          <h3>Apple ipad 10.2 9th Generation -2021</h3>
          <p>Rs.80,000</p>
          <Link to='/product' className='link'>Shop Now <FaArrowRight /></Link>
        </div>
        <div className='img_box'>
          <img src='./img/ipadd.png' alt='ipad'></img>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;
