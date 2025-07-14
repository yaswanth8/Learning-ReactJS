import React from "react";
import { useState } from "react";
const Counter = () => {

    const [count, setConst] = useState(0);
    const increment = () => {
        setConst(count + 1);
    };
    const decrement = () => {
        setConst(count - 1);    
    };
    const reset = () => {   
        setConst(0);
    };

    return(
        <>
            <h2 className="text-2xl font-bold text-blue-600">Counter Component</h2>
            <p className="text-lg text-gray-700">Count: {count}</p>
            <div className="space-x-2 mt-4">
                <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600" onClick={increment}>Increment</button>
                <button className="px-4 py-2 bg-red-500 text-white rounded
                    hover:bg-red-600" onClick={decrement}>Decrement</button>
                <button className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600" onClick={reset}>Reset</button>
            </div>

        </>
    )
}
export default Counter;