import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Login from './btn/Login'
import Signup from './btn/Signup'
import Cart from './btn/Cart'


const Navbar = () => {

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid py-2">
    <NavLink className="navbar-brand ms-auto" to="#" style={{color:"red",fontSize:"30px",fontWeight:"bold"}}>DAKA'S SHOES STORE</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/product">Product</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact">Contact</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to="/upload">New Product</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to="/register">Register</NavLink>
        </li>

        
        
        
      </ul>
      
    </div>
    <div className='col-md-3 d-flex justify-content-evenly'>
            <Link to = '/signin'><i class="bi bi-box-arrow-in-right fs-4 fw-bold"></i></Link>
            <Link to = '/signup'><i class="bi bi-person-add fs-4 "></i></Link>
            <Link to = '/cart'><i class="bi bi-cart fs-4 fw-bold"></i></Link>
        </div>
   {/* <Login/>
    <Signup/>
  <Cart/>*/}
    
  </div>
</nav>


    </>
  )
}
    
  

export default Navbar