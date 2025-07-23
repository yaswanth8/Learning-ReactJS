import React, {useState} from 'react';
import DisplayCount from "./DisplayCount.jsx";
import Buttons from "./Buttons.jsx";

const Counter = () => {

    return (
        <>
            <div className="flex items-center justify-center min-h-screen bg-gray-100">

                <div className="bg-white p-6 rounded-2xl shadow-lg w-md text-center">
                    <DisplayCount/>
                    <div className="mt-4 ">
                        <Buttons/>
                    </div>
                </div>
            </div>
        </>
    )
};
export default Counter;