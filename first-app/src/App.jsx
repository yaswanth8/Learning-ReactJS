import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Welcome from './components/Welcome'

function App() {
  

  return (
    <>
      <h1>Welcome to React</h1> 
      <Welcome name="Jhon" age="30"/>
     <Welcome name="Wilson"/>
    </>
  )
}

export default App
