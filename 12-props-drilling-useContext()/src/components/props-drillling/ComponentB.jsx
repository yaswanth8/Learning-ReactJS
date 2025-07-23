import React from 'react';
import ComponentC from "./ComponentC.jsx";

const ComponentB = (props) => {
    const {appData} = props;

    return (
        <>
            <div className=" p-6 rounded-2xl shadow-lg w-96 bg-orange-300 m-5">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Component B</h2>
                <pre>{JSON.stringify(appData)}</pre>
                <ComponentC appData={appData}/>
            </div>
        </>
    )
};
export default ComponentB;