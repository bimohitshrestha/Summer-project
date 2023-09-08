import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar'

import Home from './components/Home'
import Product from './components/Product'
import About from './components/About'
import Contact from './components/Contact'
import Productdetail from './components/Productdetail'
import Card from './components/Card'
import Checkout from './components/Checkout'
import Login from './components/btn/Login'
import Signup from './components/btn/Signup'
import Cart from './components/Card'
import ProductList from './components/Productlist'
import Register from './components/Register'

 



const MyRoutes = () => {
  return (
    <>
    <Router>
    <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/signin' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/product' element={<Product/>}/>


            <Route path='/upload' element={<ProductList/>}/>
            <Route path='/register' element={<Register/>}/>
            

            <Route path='/products/:id' element={<Productdetail/>}/>
           <Route path='/checkout' element={<Checkout/>}/>
           
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/card' element={<Card/>}/>
        </Routes>
    </Router>
  
    
    </>
  )
}

export default MyRoutes