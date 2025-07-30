import React, { useState } from 'react'
import "./form.css"
function Form() {
    const userData = {username:"",email:"",mobile:"",password:"",confirmPassword:""};
    const [user, setUser] = useState(userData)
const [error,setError] = useState({})
const [flag, setFlag]=useState(false)
const handleChange=(e)=>{
setUser({...user,[e.target.name]:e.target.value})
}

const handleSubmit=(e)=>{
    e.preventDefault()
    const newError = {}
    if(user.username===""){
        // setError({username:"please enter username"})
        newError.username= "please enter username"
    }else if(user.username.length<2 || user.username.length>10){
        newError.username="Username must be between 2 and 10 characters"
    }
    if(user.email===""){
        // setError({email:"please enter email"})
        newError.email= "please enter username"
    }else if(user.email.indexOf("@")<=0){
        newError.email="'@'  invailid position"
    }else if(user.email.charAt(user.email.length-4)!="." && user.email.charAt(user.email.length-3)!="."){
newError.email="Please enter valid email"
    }
    if(user.mobile===""){
        // setError({mobile:"please enter email"})
        newError.mobile= "please enter mobile"
    }else if(isNaN(user.mobile)){
        newError.mobile="Please enter digit only"
    }
    if(user.password===""){
        // setError({password:"please enter email"})
        newError.password= "please enter username"
    }else if(user.password.length<5 || user.password.length>15){
         newError.password= "Password must be between 5 and 15 characters"
    }
    if(user.confirmPassword===""){
        // setError({confirmPassword:"please enter email"})
        newError.confirmPassword= "please enter username"
    }else if(user.password != user.confirmPassword){
        newError.confirmPassword= "Confirm password does not match"
    }
    else{
       setFlag(true)
    }
    setError(newError)

}
  return (
   <>
   
        <h1>{flag?`${user.username},You have registered, successfully`:""}</h1>
    <div className="form-container">
        {/* <h1>{user.username}You have registered, successfully</h1> */}
      <div className="logo">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_6tSDI9x1dHHJBI8PEzUvloNIblX-k-j7lnBMo979Bz0jSAQKoe16Y7s&s" alt="" style={{width:"70px",padding:"10px 0px"}} />
      </div>
      <form action="" className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input type="text" placeholder='username' onChange={handleChange} value={user.username} name='username' autoComplete='off'/>
          <span style={{color:"red"}}>{error.username}</span>
        </div>
        <div className="form-group">
          <input type="text" placeholder='Email' onChange={handleChange} value={user.email} name='email'/>
          <span style={{color:"red"}}>{error.email}</span>
        </div>
        <div className="form-group">
          <input type="text" placeholder='Mobile Number' onChange={handleChange} value={user.mobile} name='mobile'/>
          <span style={{color:"red"}}>{error.mobile}</span>
        </div>
        <div className="form-group">
          <input type="password" placeholder='Password' onChange={handleChange} value={user.password} name='password'/>
          <span style={{color:"red"}}>{error.password}</span>
        </div>
        <div className="form-group">
          <input type="password" placeholder='Confirm Password' onChange={handleChange} value={user.confirmPassword} name='confirmPassword'/>
          <span style={{color:"red"}}>{error.confirmPassword}</span>
        </div>
        <button type='submit'>Sign Up</button>
      </form>
    </div>
   </>
  )
}

export default Form