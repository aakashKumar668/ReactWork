import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';



function Signup ()
{
    const navigate = useNavigate();
    const userData = { username: "", email: "", mobile: "", password: "", confirmPassword: "" };
    const [user, setUser] = useState(userData)
    const [error, setError] = useState({})
    // const [flag, setFlag] = useState(false)
    const handleChange = (e) =>
    {
        setUser({ ...user, [e.target.name]: e.target.value })

    }
    const handleSubmit = (e) =>
    {
        e.preventDefault()
        const newError = {}
        if (user.username === "")
        {
            // setError({username:"please enter username"})
            newError.username = "please enter username"
        } else if (user.username.length < 2 || user.username.length > 15)
        {
            newError.username = "Username must be between 2 and 15 characters"
        }
        if (user.email === "")
        {
            // setError({email:"please enter email"})
            newError.email = "please enter username"
        } else if (user.email.indexOf("@") <= 0)
        {
            newError.email = "'@'  invailid position"
        } else if (user.email.charAt(user.email.length - 4) != "." && user.email.charAt(user.email.length - 3) != ".")
        {
            newError.email = "Please enter valid email"
        }
        if (user.mobile === "")
        {
            // setError({mobile:"please enter email"})
            newError.mobile = "please enter mobile"
        } else if (isNaN(user.mobile))
        {
            newError.mobile = "Please enter digit only"
        }
        if (user.password === "")
        {
            // setError({password:"please enter email"})
            newError.password = "please enter username"
        } else if (user.password.length < 5 || user.password.length > 15)
        {
            newError.password = "Password must be between 5 and 15 characters"
        }
        if (user.confirmPassword === "")
        {
            // setError({confirmPassword:"please enter email"})
            newError.confirmPassword = "please enter username"
        } else if (user.password != user.confirmPassword)
        {
            newError.confirmPassword = "Confirm password does not match"
        } else
        {
            e.preventDefault();
            const users = JSON.parse(localStorage.getItem("users")) || [];
            users.push(user);
            localStorage.setItem("users", JSON.stringify(users));
            localStorage.setItem("user", JSON.stringify(user));
            alert("You are registred successfully, Please Login")
            navigate("/login");
            // setFlag(true)

        }
        setError(newError)

    }
    return (
        <>

            <div className='w-full inline-grid justify-center mt-5'>
                {/* <h1 className='text-3xl font-bold text-white my-[50px] mx-[250px]'>{flag ? `${user.username},You have registered, successfully,Please Login` : ""}</h1> */}
                <div className="sm:min-h-[70vh] sm:w-[50vw] w-[80vw] border bg-gray-600 text-black py-[40px] px-[100px] inline-grid text-center justify-center m-auto rounded">
                    {/* <h1>{user.username}You have registered, successfully</h1> */}

                    <div className="text-center sm:my-[20px] my-[10px]">
                        <h2 className="text-2xl font-bold text-white">College<span className="text-3xl text-red-400">Wala</span></h2>
                    </div>
                    <form action="" className="inline-grid sm:gap-[20px]" onSubmit={handleSubmit}>
                        <div className="form-group sm:w-[320px] sm:h-[50px] bg-white text-black border-[2px] rounded w-[250px] h-8 m-auto my-[10px]">
                            <input type="text" placeholder='Username' className='w-full h-full sm:text-[20px] px-[5px] font-[500]' onChange={handleChange} value={user.username} name='username' autoComplete='off' />
                            <span style={{ color: "red" }}>{error.username}</span>
                        </div>
                        <div className="form-group sm:w-[320px] sm:h-[50px] bg-white text-black border-[2px] rounded w-[250px] h-8 m-auto my-[10px]">
                            <input type="text" placeholder='Email' className='w-full h-full sm:text-[20px] px-[5px] font-[500]' onChange={handleChange} value={user.email} name='email' />
                            <span style={{ color: "red" }}>{error.email}</span>
                        </div>
                        <div className="form-group sm:w-[320px] sm:h-[50px] bg-white text-black border-[2px] rounded w-[250px] h-8 m-auto my-[10px]">
                            <input type="text" placeholder='Mobile Number' className='w-full h-full sm:text-[20px] px-[5px] font-[500]' onChange={handleChange} value={user.mobile} name='mobile' />
                            <span style={{ color: "red" }}>{error.mobile}</span>
                        </div>
                        <div className="form-group sm:w-[320px] sm:h-[50px] bg-white text-black border-[2px] rounded w-[250px] h-8 m-auto my-[10px]">
                            <input type="password" placeholder='Password' className='w-full h-full sm:text-[20px] px-[5px] font-[500]' onChange={handleChange} value={user.password} name='password' />
                            <span style={{ color: "red" }}>{error.password}</span>
                        </div>
                        <div className="form-group sm:w-[320px] sm:h-[50px] bg-white text-black border-[2px] rounded w-[250px] h-8 m-auto my-[10px]">
                            <input type="password" placeholder='Confirm Password' className='w-full h-full sm:text-[20px] px-[5px] font-[500]' onChange={handleChange} value={user.confirmPassword} name='confirmPassword' />
                            <span style={{ color: "red" }}>{error.confirmPassword}</span>
                        </div>
                        <p className='text-xl text-white font-bold'>Already Member, <Link to='/login'><span className='text-blue-400 cursor-pointer'>LogIn</span></Link></p>
                        <button type='submit' className='sm:w-[300px] w-[150px] h-[30px] sm:h-[50px] font-bold sm:text-xl text-white bg-blue-400 sm:my-[20px] m-auto my-[10px] rounded hover:border'>Sign Up</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Signup;