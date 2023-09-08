import React from 'react'
import {PRODUCTS } from '../Item'
import { NavLink } from 'react-router-dom';

const Product = () => {

    const cardItem = (item) =>{
        return(
            <div class="card my-4 py-3" key={item.id} style={{width:"18rem"}}>
  <img src={item.Image} class="card-img-top" alt={item.Name} style={{height:"350px"}}/>
  <div class="card-body text-center">
    <h5 class="card-title">{item.Name}</h5>
    <p class="lead">RS.{item.price}</p>
    <NavLink to={`/products/${item.id}`} className='btn btn-outline-primary'>SHOP NOW</NavLink>
  </div>
</div>

        );
    }
  return (
    <>
    <div className='container py-5'>
        <div className='row'>
            <div className='col-12 text-center'>
                <h1>New product</h1>
            </div>
        </div>
        <div className='container'>
            <div className='row justify-content-around'>
                {PRODUCTS.map(cardItem)}
                
            </div>
        </div>
    </div>

    </>
  )
}

export default Product