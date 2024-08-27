import React from 'react'
import './CSS/Signup.css'

const loginSignup = () => {
  return (
    <div className='loginSignup'>
      <div className='loginSignup-container'>
        <h1>Sign up</h1>
        <div className="loginSignup-field">
          <input type="text" placeholder='Your Name' name="" id="" />
          <input type="email" placeholder='Email Address' name="" id="" />
          <input type="password" placeholder='Password' />
        </div>
        <button>Continue</button>
        <p className='loginSignup-login'> Already have an account? <span>login here</span></p>
        <div className="loginSignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default loginSignup