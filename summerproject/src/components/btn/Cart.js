import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { addItem } from '../../redux/actions'

const Cart = () => {
 
  return (
    <>
   
   <NavLink to="/card" className='btn btn-outline-primary ms-2'>
   <i class="bi bi-cart"></i> Cart()
   </NavLink>
        
    </>
  )
}

export default Cart