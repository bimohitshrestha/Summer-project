import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { saveTokenToLocalStorage } from '../auth';

const Signup = () => {
  const [name, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 

  const handleRegistration = async (e) => {
    e.preventDefault();
  

    try {
      const response = await fetch('http://localhost:5000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, password, email }),
      });

      if (response.ok) {
        // Registration successful
        alert('User registered successfully');
      } else {
        // Registration failed
        alert('Failed to register user');
      }
    } catch (error) {
      alert('Error:', error);
    }
  };

  return (
    
   


    <main className="form-signin w-50 mx-auto my-5 shadow-lg p-5">
         <form onSubmit={handleRegistration}>
           <img className="mb-4 " src="https://play-lh.googleusercontent.com/im3B_cNgIonLeqzGccQWpkgjoG4YBCV04XY0ak2W7ZGzhK01CYJOzrx1i9Ko212TKw" alt="" width="100" height="70" />
           <h1 className="h3 mb-3 fw-normal">Register</h1>
 
           <div className="form-floating mb-2">
             <input type="text" name='name'className="form-control" id="username" placeholder="Username " value={name}
        onChange={(e) => setUsername(e.target.value)}></input>
             <label for="username">Username</label>
           </div>
 
           <div className="form-floating mb-2">
              <input type="email" name="email" className="form-control" id="floatingInput" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <label htmlFor="floatingInput">Email address</label>
          </div>
           
           <div className="form-floating mb-2">
             <input type="password" name='password' className="form-control" id="floatingPassword" placeholder="Password" value={password}
        onChange={(e) => setPassword(e.target.value)} />
             <label for="floatingPassword">Password</label>
           </div>
          
 
           <div className="checkbox mb-3">
             <label>
               <input type="checkbox" value="remember-me" /> I agree to the terms and conditions.
             </label>
           </div>
           <button className="w-100 btn btn-lg btn-primary" type="submit" >Register</button>
           Already have an account.<Link to='/signin'> Sign in</Link>
           <p className="mt-5 mb-3 text-body-secondary">&copy; 2017–2023</p>
         </form>
       </main>
     
  );
};

export default Signup;
