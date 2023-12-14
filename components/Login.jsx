import React from 'react';
import { useStateContext } from '@/context/StateContext';
import { TiDelete } from "react-icons/ti";


const Login = () => {
  const { setShowLogin } = useStateContext();

  return (

    <div className="login-wrapper">
      <div className="login-container">
        <div className="login-heading">
          <h3>Login</h3>
          <TiDelete onClick={() => setShowLogin(false)} className='exit' />
        </div>
        <span className="seperator"></span>

        <div className="login-details">
          <form className="login-form">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" placeholder="Enter your email" required />

            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" placeholder="Enter your password" required />

            <button type="submit">Login</button>
          </form>

          <div className="login-options">
            <p>Don't have an account? <a href="#">Sign up</a></p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Login