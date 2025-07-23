import React from 'react';

import ComponentD from "./ComponentD.jsx";

const ComponentC = (props) => {
    const {appData} = props;
    return (
        <>
            <div className=" p-6 rounded-2xl shadow-lg w-96 bg-blue-300 m-5">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Component C</h2>
                <pre>{JSON.stringify(appData)}</pre>
                <ComponentD appData={appData}/>
            </div>
        </>
    )
};
export default ComponentC;