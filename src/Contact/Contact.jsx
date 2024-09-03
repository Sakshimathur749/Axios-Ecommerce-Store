import React from 'react'

const Contact = () => {
  return (
    <div className='contact'>
      <div className='left'>
          
        <div className="loginSignup-field">
          <textarea type="text" placeholder='Enter Text' ></textarea>
          <input type="text" placeholder='Enter Your Username' name="" id="" />
          <input type="email" placeholder='Email Address' name="" id="" />
          <input type="password" placeholder='Password' />
        </div>
        <button>Submit</button>
     
      </div>
      <div className="right">
        <div className=''></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default Contact