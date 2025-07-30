import UserContextProvider from "./Context/UserContextProvider"
import './App.css'
import LogIn from "./Components/LogIn"
import Profile from "./Components/Profile"

function App() {

  return (
    <>
    <UserContextProvider>
     <h1>React with Chai</h1>
     <LogIn/>
     <Profile/>
     </UserContextProvider>
    </>
  )
}

export default App
