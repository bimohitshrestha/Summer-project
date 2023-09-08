import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios"
import {useNavigate} from "react-router-dom"

const Register = () => {
  const[fname,setFName] = useState("");
  const[desc,setDesc] = useState("");
  const[price,setPrice] = useState("");
  const[file,setFile] = useState("");

  const history = useNavigate();


  const setdata =(e)=>{
    const {value}= e.target;

    setFName(value);
   
}
const setValue =(e)=>{
  const {value} = e.target;
  setDesc(value);
}

 const setCost = (e) =>{
  const {value} = e.target;
  setPrice(value);
}
  const setimgfile = (e) =>{
   setFile(e.target.files[0])

  }
  // add userdata
  const addUserData = async(e)=>{
    e.preventDefault();

    var formData = new FormData();
    formData.append("photo",file);
    formData.append("fname",fname);
    formData.append("desc",desc);
    formData.append("price",price);


    const config = {
      headers:{
        "Content-Type":"multipart/form-data"
      }
    }

    const res = await axios.post("http://localhost:5000/reg",formData,config)

    if(res.data.status === 401 || !res.data){
      console.log("error")

    }else{
        history("/upload")
    }
  

  }


  return (
    <>
      <div className='container mt-3'>
        <h1>Upload Images Here</h1>


        <Form className='mt-5'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Product Name</Form.Label>
        <Form.Control type="text" name="fname" onChange={setdata} placeholder="" />
       
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" name="desc" onChange={setValue} placeholder="" />
       
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Price</Form.Label>
        <Form.Control type="text" name="price" onChange={setCost} placeholder="" />
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Select Your Images</Form.Label>
        <Form.Control type="file" name="photo" placeholder="" onChange={setimgfile}/>
      </Form.Group>
      
      <Button variant="primary" type="submit" onClick={addUserData}>
        Submit
      </Button>
    </Form>
      </div>

    </>
  )
}

export default Register