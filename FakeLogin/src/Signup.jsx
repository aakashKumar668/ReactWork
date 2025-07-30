import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("user", JSON.stringify(user)); // login after signup
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Signup</h2>
      <input name="email" onChange={handleChange} required placeholder="Email" />
      <input name="password" onChange={handleChange} required placeholder="Password" type="password" />
      <button type="submit">Signup</button>
    </form>
  );
};

export default Signup;
