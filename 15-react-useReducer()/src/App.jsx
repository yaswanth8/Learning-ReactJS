import './App.css'
import React from "react";
import Counter from "./components/Counter.jsx";
import ReducerCounter from "./components/ReducerCounter.jsx";
import ReducerProduct from "./components/ReducerProduct.jsx";
import ReducerShoppingCart from "./components/ReducerShoppingCart.jsx";

function App() {

    return (
        <>
            {/* <ReducerCounter/>*/}
            {/*<ReducerProduct/>*/}
            <ReducerShoppingCart/>
        </>
    )
}

export default App
