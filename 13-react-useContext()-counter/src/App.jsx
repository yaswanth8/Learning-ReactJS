import './App.css'
import Counter from "./components/Counter.jsx";
import Message from "./components/Message.jsx";
import React from "react";
import CounterContextProvider, {CounterContext} from "./context/CounterContext.jsx";


function App() {


    return (
        <>
            {/* <Counter/>*/}
            {/* <Message msg={"Good Morning"}>
                <div className="flex ">
                    <p className="text-red-500">Hello World</p>
                    <pre>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci dolore eius minima modi quidem sint veniam vero voluptatem! Optio, rem?</pre>
                </div>
            </Message>*/}

            <CounterContextProvider>
                <Counter/>
            </CounterContextProvider>
        </>
    )
}

export default App
