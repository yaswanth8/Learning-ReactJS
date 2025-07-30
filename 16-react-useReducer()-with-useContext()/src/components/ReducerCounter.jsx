import React, {useContext, useReducer} from 'react';
import {CounterContext} from "../context/CounterContext.jsx";

const ReducerCounter = () => {
    const {state, dispatch, actionTypes} = useContext(CounterContext);

    const incrCount = () => {
        dispatch({
            type: actionTypes.INCREMENT_COUNT,
        })
    };

    const incrCountBy = (value) => {
        dispatch({
            type: actionTypes.INCREMENT_COUNT_BY,
            payload: value
        })
    };

    const decrCount = () => {
        dispatch({
            type: actionTypes.DECREMENT_COUNT,
        })
    };

    const decrCountBy = (value) => {
        dispatch({
            type: actionTypes.DECREMENT_COUNT_BY,
            payload: value
        })
    };

    return (
        <>
            <div className="flex items-center justify-center min-h-screen bg-gray-100">

                <div className="bg-white p-6 rounded-2xl shadow-lg w-md text-center">
                    <h2 className="text-xl font-semibold mb-2">ReducerCounter</h2>
                    <p id="ReducerCounter" className="text-5xl text-gray-700">{state.count}</p>
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
export default ReducerCounter;