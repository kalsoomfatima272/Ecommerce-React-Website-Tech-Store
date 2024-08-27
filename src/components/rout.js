import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './home'
import Product from './product'
import Cart from './cart'
import Contact from './contact'
import About from './about'

const Rout = ({product, setProduct, detail,view,close ,setClose, cart, setCart,addtoCart}) => {
  return (
   <>
   <Routes>
    <Route path ='/' element={<Home detail={detail} view={view}  close={close} setClose={setClose} addtoCart={addtoCart}/>}/>
    <Route path='/product' element={<Product  product={product} setProduct={setProduct} detail={detail} view={view}  close={close} setClose={setClose} addtoCart={addtoCart}/>}/>
    <Route path='/cart' element={<Cart cart={cart} setCart={setCart}/>}/>
    <Route path= '/contact' element={<Contact/>}></Route>
    <Route path= '/about' element={<About/>}></Route>
   </Routes>
   </>
  )
}

export default Rout
