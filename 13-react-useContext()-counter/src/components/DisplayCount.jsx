import React, {useContext} from 'react';
import {CounterContext} from "../context/CounterContext.jsx";

const DisplayCount = () => {
    const {count} = useContext(CounterContext);
    return (
        <div>
            <h2 className="text-xl font-semibold mb-2">Counter</h2>
            <p id="counter" className="text-5xl text-gray-700">{count}</p>
        </div>
    )
};
export default DisplayCount;