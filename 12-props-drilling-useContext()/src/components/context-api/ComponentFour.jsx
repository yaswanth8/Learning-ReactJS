import React, {useContext} from 'react';
import {AppContext} from "../../App.jsx";

const ComponentFour = () => {
    const {appData, setAppData} = useContext(AppContext); // read the context data

    const changeParentData = () => {
        setAppData({
            appName: "FlipCart E-Commerce",
            version: "1.2.3"
        })
    };

    return (
        <>
            <div className=" p-6 rounded-2xl shadow-lg w-96 bg-purple-300 m-5">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Component Four</h2>
                <pre>{JSON.stringify(appData)}</pre>
                <button onClick={changeParentData} className="bg-blue-500 text-white px-4 py-2 rounded-lg">Click Here
                </button>
            </div>
        </>
    )
};
export default ComponentFour;