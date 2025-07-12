import { useState } from 'react'
import './App.css'
import Welcome from "./components/Welcome.jsx";

function App() {
  return (
    <>
        <h1>Welcome to React</h1>
        <Welcome name="John" age="40"/>
        <Welcome name="Wilson" age="30"/>
    </>
  )
}

export default App
