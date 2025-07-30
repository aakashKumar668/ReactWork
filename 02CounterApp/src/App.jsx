import { useState } from 'react'
import './App.css'

function App() {
let [counter, setCounter] = useState(15)
const addValue=()=>{ 
// counter = counter+1
if(counter>=20) return;
setCounter(++counter)

 
}

const RemoveValue=()=>{ 
// counter = counter- 1
if(counter==0) return;
setCounter(--counter)
  
}

  return (
    <>
     <h1>This is Counter</h1>
     <h2>Counter value:{counter}</h2>
<button onClick={addValue}>Add Value</button>
<br/>
<button onClick={RemoveValue}>Remove Value</button>

    </>
  )
}

export default App
