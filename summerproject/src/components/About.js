import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

const About = () => {
  
 
  
  
  return (
    <>
      <div className='container py-3 my-3'>
      
        
        <div className='row'>
          <div className='col-md-6'>
            <h1 className='text-secondary fw-bold mb-4 about'>About Us</h1>
            <p className='lead mb-4'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

            </p>
            
            <NavLink to='/contact' className='btn btn-outline-primary px-3'>Contact Us</NavLink>
          </div>
          <div className='col-md-6 d-flex justify-content-center'>
            <img src='https://img.freepik.com/premium-vector/meeting-room-concept-flat-cartoon-design-employees-discuss-work-tasks-while-sitting-table_9209-7747.jpg?size=626&ext=jpg&ga=GA1.1.1425479148.1687852153' alt='about us' style={{height:"400px",width:"400px"}}/>
          </div>
        </div>
      </div>
      
    
    
    </>
  )
}

export default About