import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [min, setMin] = useState(0)
  const [second, setSecond] = useState(0)
  const [hour, setHour] = useState(0)
const [running,setRunning] =useState(false)


useEffect(()=>{
  let sec = null
if(running){
 sec = setInterval(() => {
  setSecond((prevSecond)=>{
    if(prevSecond ===59){
      setMin((prevmin)=>{
        if(prevmin ===59){
          setHour((prevHour)=>prevHour+1)
          return 0;
        }else{
          return prevmin +1
        }
      })
      return 0;
    }else{
      return prevSecond+1
    }
  })
}, 1000);
}


return()=> clearInterval(sec)
},[running])


const handleStart=()=>{
setRunning(true)
}
const handleStop =()=>{
  setRunning(false)
}
const handleRestart=()=>{
  setHour(0);
  setSecond(0);
  setMin(0);
}
  return (
    <>
     <div className="app">
      <p>{hour<10? "0"+hour : hour}:{min<10? "0"+min: min}:{second<10?"0"+second:second}</p>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleRestart}>Restart</button>
     </div>
    </>
  )
}

export default App
