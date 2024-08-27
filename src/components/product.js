import React from 'react'
import { Link } from 'react-router-dom'
import Productdetail from './productdetail';
import { FaCartShopping } from "react-icons/fa6";
import { IoMdEye } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useAuth0 } from "@auth0/auth0-react";
import './product.css'


const Product = ({product, setProduct, detail, view,close, setClose, addtoCart}) => {
  
  const { loginWithRedirect , isAuthenticated, } = useAuth0();
  const filterproduct = (product) =>
  {
    const update = Productdetail.filter((x) =>
    {
      return x.Cat === product;
    })
    setProduct(update);
  }
  const AllProducts = () =>
  {
    setProduct(Productdetail)
  }
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
                <h3>${curElm.Price}</h3>
                <Link to="/cart">
      <button className="link">Add to Cart</button>
    </Link>
              </div>
            </div>

          )
})
        }
        <div className='productbox'></div>
      </div>
    </div> : null
    }
   
    
    <div className='products'>
          <h2>Products</h2>
          <p>Home . products</p>
            <div className='container'>
              <div className='filter'>
                <div className='categories'>
                   <h3>Categories</h3>
                      <ul>
                      <li onClick={()=> AllProducts ()}>All Products</li>
                        <li onClick={()=> filterproduct ("Tablet")}>Tablet</li>
                        <li onClick={()=> filterproduct ("Smart Watch")}>Smart Watch</li>
                        <li onClick={()=> filterproduct ("Mobile")}>Mobile</li>
                        <li onClick={()=> filterproduct ("HeadPhones")}>HeadPhones</li>
                        <li onClick={()=> filterproduct ("Laptops")}>Laptops</li>
                      </ul>
          </div>
        </div>
        <div className='productbox'>
          <div className='contant'>
            {
              product.map((curElm) =>
              {
                return(
                  <>
                  <div className='box' key={curElm.id}>
                <div className='img_box'>
                  <img src={curElm.Img} alt={curElm.Title}></img>
                  <div className='icon'>
                    {
                      isAuthenticated ?
                      <li onClick={()=> addtoCart(curElm)}><FaCartShopping /></li>
                      :
                      <li onClick={()=> loginWithRedirect()}><FaCartShopping /></li>

                    }
                   
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
                  
                  </>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Product
