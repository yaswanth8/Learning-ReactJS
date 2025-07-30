import React from 'react';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Meals from './pages/Meals';
import NavBar from './components/NavBar';



function App() {



  return (
    <>
        <BrowserRouter>
        <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/meals" element={<Meals />} />
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
