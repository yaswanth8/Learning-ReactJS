import React, {useContext} from 'react';
import {CounterContext} from "../context/CounterContext.jsx";

const Buttons = () => {
    const {incrCount, incrCountBy, decrCount, decrCountBy} = useContext(CounterContext);
    return (
        <div className="flex justify-between">
            <button onClick={decrCount}
                    className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
                Decr
            </button>
            <button onClick={() => decrCountBy(5)}
                    className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
                DecrBy
            </button>
            <button onClick={incrCount}
                    className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">Incr
            </button>
            <button onClick={() => incrCountBy(5)}
                    className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">Incr By
            </button>
        </div>
    )
};
export default Buttons;