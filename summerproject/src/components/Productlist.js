import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { NavLink } from 'react-router-dom';
import axios from "axios"
import { useEffect, useState } from 'react';
import moment from "moment"


const Productlist = () => {
  const [data,setData] = useState([]);
  //console.log(data)
  const getUserData = async()=>{
    const res = await axios.get("http://localhost:5000/getdata",{
      headers:{
        "Content-Type":"application/json"
      }
    });
    if(res.data.status === 401 || !res.data){
      console.log("error")

    }else{
       setData(res.data.getUser)
    }

  }

  const dltUser = async(id)=>{
    const res = await axios.delete(`http://localhost:5000/delete/${id}`,{
      headers:{
        "Content-Type":"application/json"
      }
    });
    if(res.data.status === 401 || !res.data){
      console.log("error")

    }else{
       console.log("User delete")
    }

  }

  

  

useEffect(() => {
  getUserData()

},[dltUser])

  
  
  return (
    <>

    <div className='container py-5'>
        <div className='row'>
            <div className='col-12 text-center'>
            <h1 className='text-center mt-2'>New Product Upload</h1>
        <div className='text-end'>
        <Button variant="primary"><NavLink to="/register" className="text-decoration-none text-light"> Add product</NavLink></Button>
        </div>
            </div>
        </div>

        <div className='container mt-4'>
            <div className='row justify-content-around' style={{boxShadow:"-moz-initial"}}>
            {
            data.length > 0 ? data.map((el,i)=>{
              return(
                <>
                <Card style={{ width: "18rem",height:"21rem" }} className='mb-3'>
                  
      <Card.Img style={{ width: "100px",textAlign:"center",margin:"auto"}} variant="top"  src={`/uploads/${el.imgpath}`}  className='mt-2 card-img-top' />
      <Card.Body className='text-center'>
        <Card.Title style={{fontFamily:"fantasy"}}>Product: {el.fname} </Card.Title>
        <Card.Title>Description: {el.desc} </Card.Title>
        <Card.Title>Rs.{el.price} </Card.Title>
        
        <Card.Text>
         Date Added: {moment(el.date).format("L")}
        </Card.Text>
        
        <Button variant="danger" className='col-lg-6 text-center' onClick={()=>dltUser(el._id)}>Delete</Button>
      </Card.Body>
    </Card>

                </>
              )
            }) : ""
          }
            </div>
        </div>
    </div>

    
    </>

  )
}

export default Productlist