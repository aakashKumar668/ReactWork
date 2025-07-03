import { BrowserRouter, Routes,Route } from 'react-router-dom'
import './App.css'
import Header from "./components/Header"
import Footer from './components/Footer'
import OurFood from './components/OurFood'
import Home from './components/Home'
import AboutUs from './components/AboutUs'
import SignIn from './components/SignIn'
import { useState } from 'react'

function App() {
const [count,setCount]=useState(0)
const handleAdd=()=>{
  setCount(count+1)
}
  return (
    <>
      <BrowserRouter>
      <Header count={count}/>
     <Routes>
      <Route path='/' element={<Home handleAdd={handleAdd}/>}/>
      <Route path='/aboutus' element={<AboutUs/>}/>
      <Route path='/ourfood' element={<OurFood/>}/>
      <Route path='/SignIn' element={<SignIn/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  
    </>
  )
}

export default App
