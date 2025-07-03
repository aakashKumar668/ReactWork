import React from 'react'
import "../Css/LoginSignup.css"
const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Enter Your Name'/>
          <input type="email" placeholder='Enter Your Email'/>
          <input type="password" placeholder='Password'/>
        <button>Continue</button>
        </div>
      <p className="loginsignup-login">
        Already have an account ? <span>Login Here</span>
      </p>
      <div className="loginsignup-agree">
        <input type="checkbox" name='' id=''/>
        <p>By continuing, i agree to the terms & of use & privacy policy.</p>
      </div>
      </div>

    </div>
  )
}

export default LoginSignup