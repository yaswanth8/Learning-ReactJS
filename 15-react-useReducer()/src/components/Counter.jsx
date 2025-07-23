import React, {useState} from 'react';

const Counter = () => {

    const [count, setCount] = useState(0);

    const incrCount = () => {
        setCount(count + 1);
    };

    const incrCountBy = (value) => {
        setCount(count + value);
    };

    const decrCount = () => {
        setCount(count - 1);
    };

    const decrCountBy = (value) => {
        setCount(count - value);
    };

    return (
        <>
            <div className="flex items-center justify-center min-h-screen bg-gray-100">

                <div className="bg-white p-6 rounded-2xl shadow-lg w-md text-center">
                    <h2 className="text-xl font-semibold mb-2">Counter</h2>
                    <p id="counter" className="text-5xl text-gray-700">{count}</p>
                    <div className="mt-4 flex justify-between">
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
                </div>
            </div>
        </>
    )
};
export default Counter;