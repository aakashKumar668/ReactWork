import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const isLoggedIn = !!localStorage.getItem("user");
  const navigate = useNavigate();

  const handleProtectedClick = (e) => {
    if (!isLoggedIn) {
      e.preventDefault();
      alert("Please login first to access this page.");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav style={{ display: "flex", gap: "20px", padding: "10px" }}>
      {/* These links are visible always, but only work if logged in */}
      <Link to="/" onClick={handleProtectedClick}>Home</Link>
      <Link to="/about" onClick={handleProtectedClick}>About</Link>
      <Link to="/contact" onClick={handleProtectedClick}>Contact</Link>

      {!isLoggedIn ? (
        <>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </>
      ) : (
        <button onClick={handleLogout}>Logout</button>
      )}
    </nav>
  );
};

export default Navbar;
