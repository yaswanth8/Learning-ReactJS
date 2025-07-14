import { useState } from 'react'
import './App.css'
import Welcome from "./components/Welcome.jsx";
import {AppBar, Toolbar, Typography} from "@mui/material";

function App() {
  return (
    <>
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    React + Material UI
                </Typography>
            </Toolbar>
        </AppBar>
        <Welcome/>
    </>
  )
}

export default App
