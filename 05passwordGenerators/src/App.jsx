import { useState,useCallback, useEffect,useRef } from 'react'

function App() {
  const [length, setLength]=useState(8);
const [numberAllowd, setNumberAllowed]=useState(false);
const [charAllowd, setCharAllowed]=useState(false);
const [Password, setPassword]=useState("");

//Useref Hook
const passwordRef=useRef(null)

const passwordGenerators=useCallback(()=>{
  let pass="";
  let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
if (numberAllowd) {
  str+='123456789'
}
if(charAllowd){
  str+="!@#$%^&*()-+=[]{}~`"
}
for (let i = 1; i <=length; i++) {
 let char= Math.floor(Math.random()*str.length+1);
 pass+=str.charAt(char)
}
setPassword(pass)
}, [length, numberAllowd,charAllowd,setPassword]);

const copyPasswordToClipboard=useCallback(()=>{
  passwordRef.current?.select();
  passwordRef.current?.setSelectionRange(0,100)
window.navigator.clipboard.writeText(Password)
},[Password]);

useEffect(()=>{
  passwordGenerators()
},[length,numberAllowd,charAllowd,passwordGenerators])
  return (
    <>
   <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 py-3 text-orange-500 bg-gray-800">
    <h1 className='text-white text-center text-4xl my-3'>Password Generators</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
    <input type="text" value={Password} className='outline-none w-full py-2 px-4 text-2xl  bg-white' placeholder='password' ref={passwordRef} readOnly/> 
    <button onClick={copyPasswordToClipboard} className='outline-none bg-blue-700 text-white px-6 py-0.5 shrink-0'>Copy</button>
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className="flex items-center gap-x-1">
        <input type="range" min={6} max={100} value={length} className='cursor-pointer' onChange={(e)=>{setLength(e.target.value)}}/>
        <label >Length:{length}</label>
      </div>
      <div className="flex items-center gap-x-1">
        <input type="checkbox" defaultChecked={numberAllowd} id='numberInput' onChange={()=>{
          setNumberAllowed((prev)=>!prev)
        }}/>
        <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
        <input type="checkbox" defaultChecked={charAllowd} id='numberInput' onChange={()=>{
          setCharAllowed((prev)=>!prev)
        }}/>
        <label htmlFor="numberInput">Characters</label>
      </div>
    </div>
    </div>

    </>
  )
}

export default App
