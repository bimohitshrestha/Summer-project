import React, { useState } from 'react'
import { NavLink, useParams } from 'react-router-dom';
import { PRODUCTS } from '../Item';
import { useDispatch } from 'react-redux';
import { addItem, delItem } from '../redux/actions/index';


const Productdetail = () => {
    const proid = useParams()
    const proDetail = PRODUCTS.filter(x=>x.id == proid.id)
    const item = proDetail[0];
    console.log(item);

    const[cartbtn, setcartbtn] = useState("Add to Cart")

    const dispatch = useDispatch()

    const handlecart = (item) =>{
        if(cartbtn === "Add to Cart"){
            dispatch(addItem(item))
            setcartbtn("Remove from Cart")
        }
        else{
            dispatch(delItem(item))
            setcartbtn("Add to Cart")
        }

    }


  return (
    <>
    <div className='container my-5 py-3'>
        <div className='row'>
            <div className='col-md-6 d-flex justify-content-center mx-auto product'>
                <img src={item.Image} alt={item.Name} style={{height:"400px"}}/>
            </div>
            <div className='col-md-6 d-flex flex-column justify-content-center' >
                <h1 style={{color:"red",fontFamily:"fantasy",fontWeight:"bold"}}>{item.Name}</h1>
                <h2 className='my-3'>RS.{item.price}</h2>
                <p className='lead fw-bold' style={{color:"blue",fontFamily:"monospace"}}>{item.Description}</p>
                <button className='btn btn-outline-danger' onClick={()=>handlecart(item)}>{cartbtn}
                </button>
            </div>
        </div>
        </div>
    </>
  )
}

export default Productdetail