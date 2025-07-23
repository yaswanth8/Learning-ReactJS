import './App.css'
import React from "react";
import ShoppingProvider from "./context/ShoppingContext.jsx";
import ShoppingCart from "./components/ShoppingCart.jsx";

function App() {

    return (
        <>
            <ShoppingProvider>
                <ShoppingCart/>
            </ShoppingProvider>
        </>
    )
}

export default App
