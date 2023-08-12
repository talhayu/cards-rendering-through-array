import React from 'react'
import Hero from './component/Hero'
import './component/Card.css'
import Main from './component/Main'
import { useState } from 'react'


function App() {
  let [counter, setCounter] =useState(0)
function add(){
  setCounter(counter + 1)
}  
  return (
    <>
        <h1>this use state</h1>
        <h2>Count: {counter}</h2>
        <button onClick={add}>add</button>
      <Hero/>
      <Main/>
      <h1>sdhl</h1>
    </> 
  )
}

export default App
