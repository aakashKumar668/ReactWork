import { BrowserRouter,Routes,Route } from "react-router-dom";
import Login from "./Components/Login/Login";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import PhoneLogin from "./Components/Login/PhoneLogin";


function App ()
{
   return (
      <BrowserRouter>
         <Navbar />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/createpost" element={<CreatePost />} />
            <Route path="/phonelogin" element={<PhoneLogin />} />
         </Routes>
      </BrowserRouter>
   );
}

export default App;
