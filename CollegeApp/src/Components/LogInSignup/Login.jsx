import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const Login = () =>
{
    const [data, setData] = useState({ email: "", password: "" });
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => setData({ ...data, [e.target.name]: e.target.value });

    const handleSubmit = (e) =>
    {
        e.preventDefault();
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const matchedUser = users.find(
            (u) => u.email === data.email && u.password === data.password
        );

        if (matchedUser)
        {
            localStorage.setItem("user", JSON.stringify(matchedUser));
            navigate("/");
        } else
        {
            setError("User does not exist. Please signup first.");
        }
    };

    return (<>
        <div className="w-full inline-grid justify-center mt-5">
            {error && <p className="sm:text-xl text-red-500 font-bold my-[20px]">{error}</p>}
            <div className=" sm:min-h-[70vh] sm:w-[50vw] w-[80vw] border bg-gray-600 text-black py-[40px] px-[100px] inline-grid text-center justify-center m-auto rounded">
                {/* <h1>{user.username}You have registered, successfully</h1> */}

                <div className="text-center sm:my-[20px] my-[10px]">
                    <h2 className="text-2xl font-bold text-white">College<span className="text-3xl text-red-400">Wala</span></h2>
                </div>
                <form action="" className="inline-grid sm:gap-[20px]" onSubmit={handleSubmit}>

                    <div className="form-group sm:w-[320px] sm:h-[50px] bg-white text-black border-[2px] rounded w-[250px] h-8 m-auto my-[30px]">
                        <input type="text" placeholder='Email' className='w-full h-full sm:text-[20px] px-[5px] font-[500]' onChange={handleChange} value={data.email} name='email' />
                        <span style={{ color: "red" }}>{error.email}</span>
                    </div>
                    <div className="form-group sm:w-[320px] sm:h-[50px] bg-white text-black border-[2px] rounded w-[250px] h-8 m-auto">
                        <input type="password" placeholder='Password' className='w-full h-full sm:text-[20px] px-[5px] font-[500]' onChange={handleChange} value={data.password} name='password' />
                        <span style={{ color: "red" }}>{error.password}</span>
                    </div>
                    <p className='sm:text-xl text-white font-bold'>Already Member,<Link to="/signup"><span className='text-blue-400 cursor-pointer'>SignUp</span></Link></p>
                    <button type='submit' className='sm:w-[300px] w-[150px] h-[30px] sm:h-[50px] font-bold sm:text-xl text-white bg-blue-400 sm:my-[20px] m-auto my-[10px] rounded hover:border'>Login</button>
                </form>
            </div>
        </div>
    </>
        // <form onSubmit={handleSubmit}>
        //     <h2>Login</h2>
        //     {error && <p style={{ color: "red" }}>{error}</p>}
        //     <input name="email" onChange={handleChange} required placeholder="Email" />
        //     <input name="password" onChange={handleChange} required placeholder="Password" type="password" />
        //     <button type="submit">Login</button>
        // </form>
    );
};

export default Login;
