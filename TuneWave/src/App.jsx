import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from "./Components/Navbar/Navbar"
import Footer from "./Components/Footer/Footer"
import Home from './Components/Pages/Home'
import { SongProvider } from './Context/Context'


function App ()
{


  return (
    <>
      <BrowserRouter>
        <Navbar />
        <SongProvider>
          <Routes>
            <Route path='/' element={<Home name="allsong" />} />
            <Route path='/favsong' element={<Home name="favSong" />} />
          </Routes>
          <Footer />
        </SongProvider >
      </BrowserRouter>

    </>
  )
}

export default App
