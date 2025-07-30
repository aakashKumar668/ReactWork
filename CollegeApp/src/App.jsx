import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home'
import Photos from "./Gallery/Photos"
import Video from "./Gallery/Video"
import Media from './Gallery/Media'
import Introduction from './Components/Introduction/Introduction'
import MissionAndVision from "./Components/Introduction/MissionAndVision"
import History from "./Components/Introduction/History"
import Administrations from './Pages/Administrations'
import Academics from './Pages/Academics'
import Signup from "./Components/LogInSignup/Signup"
import Login from './Components/LogInSignup/Login'
import ProtectedRoute from "./Pages/ProtectedRoute"
function App ()
{

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/photos' element={<ProtectedRoute><Photos /></ProtectedRoute>} />
          <Route path='/video' element={<ProtectedRoute><Video /></ProtectedRoute>} />
          <Route path='/media' element={<ProtectedRoute><Media /></ProtectedRoute>} />
          <Route path='/introduction' element={<ProtectedRoute><Introduction /></ProtectedRoute>} />
          <Route path='/missionandvision' element={<ProtectedRoute><MissionAndVision /></ProtectedRoute>} />
          <Route path='/history' element={<ProtectedRoute><History /></ProtectedRoute>} />
          <Route path='/admissions' element={<ProtectedRoute><Administrations name="admissions" /></ProtectedRoute>} />
          <Route path='/supremecouncil' element={<ProtectedRoute><Administrations name="supremecouncil" /></ProtectedRoute>} />
          <Route path='/goveringbody' element={<ProtectedRoute><Administrations name="goveringbody" /></ProtectedRoute>} />
          <Route path='/chairmain' element={<ProtectedRoute><Administrations name="chairmain" /></ProtectedRoute>} />
          <Route path='/principal' element={<ProtectedRoute><Administrations name="principal" /></ProtectedRoute>} />
          <Route path='/viceprincipal' element={<ProtectedRoute><Administrations name="viceprincipal" /></ProtectedRoute>} />
          <Route path='/department' element={<ProtectedRoute><Academics name="department" /></ProtectedRoute>} />
          <Route path='/programmes' element={<ProtectedRoute><Academics name="programmes" /></ProtectedRoute>} />
          <Route path='/timetable' element={<ProtectedRoute><Academics name="timetable" /></ProtectedRoute>} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
