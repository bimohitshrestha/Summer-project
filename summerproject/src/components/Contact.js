import React from 'react'

const Contact = () => {
  return (
    <>
      <div className='container py-3 my-3'>
        <div className='row'>
          <div className='col-md-6 d-flex justify-content-center '>
            <img  src='https://img.freepik.com/premium-photo/contact-us-icons-virtual-screen_218381-12526.jpg?size=626&ext=jpg&ga=GA1.2.1425479148.1687852153&semt=ais' alt='about us' style={{ height: "350px", width: "350px" }} />
          </div>
          <div className='col-md-6'>
            <form>
              <div class="mb-3">
                <label for="exampleForm" class="form-label">Full Name</label>
                <input type="email" class="form-control" id="exampleForm" placeholder="Marcus Rashford" />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
              <button className='btn btn-outline-primary'>Message Us</button>
            </form>

          </div>

        </div>
      </div>



    </>
  )
}

export default Contact