import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // here one is like variable name and the other is the function
  // the refernce what you what it to be done in the whole code so we 
  // can just call it any where in the whole code instead of using js and updating it in the whole code
  let [Counter,setCounter]=useState(0)
  //  let Counter=5;
   const addvalue=()=>{
    //  Counter++;
    setCounter(Counter+1)
         
   }
   const removeValue=()=>{
    setCounter(Counter-1)
   }
  return (
    <>
      <h1>chai aur react </h1>
      <h2>Counter value:{Counter}</h2>
      <button onClick={addvalue}>Add value{Counter}</button>
      <br>
      </br>
      <button onClick={removeValue}> Remove value{Counter}</button>
      <p>footer: {Counter}</p>
    </>
  )
}

export default App
