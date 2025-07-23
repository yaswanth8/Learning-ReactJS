import React, {useState} from 'react';
import ComponentB from "./ComponentB.jsx";

const ComponentA = (props) => {
    const {appData} = props;
    return (
        <>
            <div className=" p-6 rounded-2xl shadow-lg w-96 bg-green-300 m-5">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Component A</h2>
                <pre>{JSON.stringify(appData)}</pre>
                <ComponentB appData={appData}/>
            </div>
        </>
    )
};
export default ComponentA;