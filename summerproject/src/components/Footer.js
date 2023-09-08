import { Facebook, GitHub, Instagram, Twitter } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <>
    
    <div className="container-fluid">
  <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <div className="col-md-4 d-flex align-items-center">
      <Link to="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
        
      </Link>
      <span className="mb-3 mb-md-0 text-body-secondary">&copy; 2023 Company, Inc</span>
      <div className=' text-center'>

      <h3>Payment Method</h3>
      <img src='./images/payment.jpg' style={{height:"90px"}} />
      </div>
     
    </div>
    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
     <div className='text-center ' style={{color:"red"}}>
      <h3 className=' '>Follow Me</h3>
      <div className='icon'>

        <a href='https://www.facebook.com/manchesterunited'>
      <Facebook/>
    </a>
    <a href='https://www.instagram.com/bimohitshrestha'>
      <Instagram/>
    </a>

    <a href='https://www.twitter.com/bimohitshrestha'>
      <Twitter/>
    </a>

    <a href='https://www.github.com/bimohitshrestha'>
      <GitHub/>
    </a>
      
      </div>
     </div>

    
    </ul>
  </footer>
</div>
    
    </>
  )
}
