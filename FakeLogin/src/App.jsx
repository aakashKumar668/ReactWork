import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";
import Dashboard from "./Dashboard";
import ProtectedRoute from "./ProtectedRoute";
import Navbar from "./Navbar";
import About from "./About";
import Contact from "./Contact";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<ProtectedRoute><About /></ProtectedRoute>} />
<Route path="/contact" element={<ProtectedRoute><Contact /></ProtectedRoute>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
