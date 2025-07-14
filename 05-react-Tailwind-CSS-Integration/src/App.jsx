import { useState } from 'react'
import './App.css'
import Welcome from "./components/Welcome.jsx";

function App() {
  return (
      <>
          <nav className="bg-gray-800 text-white p-4">
              <div className="container mx-auto flex justify-between items-center">
                  <a href="#" className="text-2xl font-bold">React + Tailwind CSS </a>
              </div>
          </nav>
          <Welcome/>
      </>
  )
}

export default App
