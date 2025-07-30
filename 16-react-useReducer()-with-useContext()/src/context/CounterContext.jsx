import React, {useReducer, useState} from "react";

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

export const CounterContext = React.createContext({});

const CounterContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const valueObj = {
        state: state,
        dispatch: dispatch,
        actionTypes: actionTypes
    }

    return (
        <>
            <CounterContext.Provider value={valueObj}>
                {children}
            </CounterContext.Provider>
        </>
    )
}
export default CounterContextProvider;