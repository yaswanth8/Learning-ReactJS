import React, {useContext} from 'react';

import ComponentFour from "./ComponentFour.jsx";
import {AppContext} from "../../App.jsx";

const ComponentThree = () => {
    const {appData} = useContext(AppContext); // read the context data
    return (
        <>
            <div className=" p-6 rounded-2xl shadow-lg w-96 bg-blue-300 m-5">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Component Three</h2>
                <pre>{JSON.stringify(appData)}</pre>
                <ComponentFour/>
            </div>
        </>
    )
};
export default ComponentThree;