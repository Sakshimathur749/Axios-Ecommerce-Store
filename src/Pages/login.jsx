import React from 'react'
import './CSS/login.css'
import SignUp from './Signup';

const login = () => {
    return (
        <div className='login'>
            <div className='login-container'>
                <h1>Login In</h1>
                <div className='loginfield'>
                    <span class="input-group-number">+91</span>
                    <input type="tel" placeholder="" pattern="[789][0-9]{9}" />
                </div>
                <button>Send One Time Otp</button>
            <div><h2>Or</h2></div>
            <div className='other'><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="black" class="bi bi-envelope" viewBox="0 0 16 16">
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
            </svg><span>Continue With Email</span></div>
            <div className='other'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" class="bi bi-google" viewBox="0 0 16 16">
                <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z" />
            </svg><span>Sign in With google</span></div>
            </div>
        </div>
    )
}

export default login