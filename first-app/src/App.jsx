import { useState } from 'react'
import React from 'react'
import './App.css'
import Greet from './components/Greet';
import Counter from './components/Counter';


function App() {

  const emp={
    name:"John",
    age:30,
    city:"New York"
  };

  const greet = () => {
    alert("Hello, Welcome to ReactJS");
  };

  return (
    <>

      <h1>Welcome to React + Tailwind CSS</h1> 

      {/* <Product/> */}
      <Greet employee={emp} greet={greet}/>
      <Counter/>
    
    </>
  )
}

export default App
