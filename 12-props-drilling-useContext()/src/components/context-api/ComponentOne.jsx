import React, {useState} from 'react';
import ComponentTwo from "./ComponentTwo.jsx";

const ComponentOne = () => {
    return (
        <>
            <div className=" p-6 rounded-2xl shadow-lg w-96 bg-green-300 m-5">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Component One</h2>
                {/*    <pre>{JSON.stringify(appData)}</pre>*/}
                <ComponentTwo/>
            </div>
        </>
    )
};
export default ComponentOne;