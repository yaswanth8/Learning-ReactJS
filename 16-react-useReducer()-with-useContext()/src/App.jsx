import './App.css'
import React from "react";
import ReducerCounter from "./components/ReducerCounter.jsx";
import CounterContextProvider from "./context/CounterContext.jsx";
import ShoppingProvider from "./context/ShoppingContext.jsx";
import ReducerShoppingCart from "./components/ReducerShoppingCart.jsx";
import ProductContextProvider from "./context/ProductContext.jsx";
import ReducerProduct from "./components/ReducerProduct.jsx";

function App() {

    return (
        <>
            {/*<CounterContextProvider>
                <ReducerCounter/>
            </CounterContextProvider>*/}

            <ProductContextProvider>
                <ReducerProduct/>
            </ProductContextProvider>

            {/*<ShoppingProvider>
                <ReducerShoppingCart/>
            </ShoppingProvider>*/}
        </>
    )
}

export default App
