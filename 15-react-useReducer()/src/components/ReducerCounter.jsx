import React, {useReducer} from 'react';

const actionTypes = {
    INCREMENT_COUNT: "INCREMENT_COUNT",
    DECREMENT_COUNT: "DECREMENT_COUNT",
    INCREMENT_COUNT_BY: "INCREMENT_COUNT_BY",
    DECREMENT_COUNT_BY: "DECREMENT_COUNT_BY",
};

const initialState = {
    count: 0
}

const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT_COUNT:
            return {
                count: state.count + 1
            }
        case actionTypes.DECREMENT_COUNT:
            return {
                count: state.count - 1
            }
        case actionTypes.INCREMENT_COUNT_BY:
            return {
                count: state.count + action.payload
            }
        case actionTypes.DECREMENT_COUNT_BY:
            return {
                count: state.count - action.payload
            }
        default:
            return state;
    }
};

const ReducerCounter = () => {

    const [state, dispatch] = useReducer(reducer, initialState);
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