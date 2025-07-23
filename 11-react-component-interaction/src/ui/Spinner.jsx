import React from 'react';
import spinnerImg from "../assets/react.svg";

const Spinner = () => {
    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
                <img src={spinnerImg} alt="" width={200} height={200} className="animate-spin"/>
            </div>
        </>
    )
}
export default Spinner;