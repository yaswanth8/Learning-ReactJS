import React, {useState} from "react";


export const CounterContext = React.createContext({});

const CounterContextProvider = ({children}) => {

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

    const valueObj = {
        count: count,
        incrCount: incrCount,
        incrCountBy: incrCountBy,
        decrCount: decrCount,
        decrCountBy: decrCountBy
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