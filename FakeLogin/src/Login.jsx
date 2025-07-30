import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
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

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <input name="email" onChange={handleChange} required placeholder="Email" />
      <input name="password" onChange={handleChange} required placeholder="Password" type="password" />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
