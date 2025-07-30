import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
let myObj = {
  username:"aakash",
  age:20
};
// let newArr =[1,2,3,4]
  return (
    <>
     <h1 ClassNameName='bg-green-500 text-black p-4 rounded-xl mb-4'>Hello World!</h1>
    <Card username="aakash" text="javascript"/>
    <Card username="kumar" text="CSS"/>
    </>
  )
}

export default App
