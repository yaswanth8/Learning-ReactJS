import React, {useContext} from 'react';
import ComponentThree from "./ComponentThree.jsx";
import {AppContext} from "../../App.jsx";

const ComponentTwo = () => {
    const {appData} = useContext(AppContext); // read the context data
    return (
        <>
            <div className=" p-6 rounded-2xl shadow-lg w-96 bg-orange-300 m-5">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Component Two</h2>
                <pre>{JSON.stringify(appData)}</pre>
                <ComponentThree/>
            </div>
        </>
    )
};
export default ComponentTwo;