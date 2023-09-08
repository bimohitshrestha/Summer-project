import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { saveTokenToLocalStorage } from '../auth';



const Login = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');


  const handleLogin = async (e) => {
    e.preventDefault();
   
  
    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, password }),
      });

      if (response.ok) {
        // Login successful
        alert('Login successful');
      } else {
        // Login failed
        alert('Login failed');
      }
    } catch (error) {
      alert('Error:', error);
    }
  };
 
 


  return (
    <>
 
    
   
    <main className="form-signin w-50 mx-auto my-5 shadow-lg p-5">
      
    <form onSubmit={handleLogin}>
      <img className="mb-4" src="https://play-lh.googleusercontent.com/im3B_cNgIonLeqzGccQWpkgjoG4YBCV04XY0ak2W7ZGzhK01CYJOzrx1i9Ko212TKw" alt="" width="100" height="60" />
      <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

      <div className="form-floating mb-3">
        <input type="text" name='text'   className="form-control" id="floatingInput" placeholder="username" value={name}
        onChange={(e) => setName(e.target.value)} />
        <label for="floatingInput">Username</label>
      </div>
      <div className="form-floating mb-3">
        <input type="password" name='password' className="form-control" id="floatingPassword" placeholder="Password" value={password}
        onChange={(e) => setPassword(e.target.value)}  />
        <label for="floatingPassword">Password</label>
      </div>

      <div className="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me" /> Remember me
        </label>
      </div>
      <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
      Do not have an account?<Link to='/signup'>Register</Link>
      <p className="mt-5 mb-3 text-body-secondary">&copy; 2017–2023</p>
    </form>
  </main>

  </>


  );
};

export default Login;
