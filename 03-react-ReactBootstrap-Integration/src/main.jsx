import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

/**
 * React Bootstrap Configuration
 */
//import "../node_modules/bootstrap/dist/css/bootstrap.css";

createRoot(document.getElementById('root')).render(

    <App />
  ,
)
