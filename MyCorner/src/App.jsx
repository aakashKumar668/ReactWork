import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Componets/Navbar/Navbar'
import Footer from './Componets/Footer/Footer'
import Home from './Componets/Home/Home'
import CreatePost from "./Componets/CreatePost/CreatePost"
import Login from "./Componets/Login/Login"
import Signup from "./Componets/Login/Signup"
function App() {


  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/create' element={<CreatePost/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<Signup/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    
    </>
  )
}

export default App
