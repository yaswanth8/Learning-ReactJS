import React from 'react';

const ComponentD = (props) => {
    const {appData} = props;
    return (
        <>
            <div className=" p-6 rounded-2xl shadow-lg w-96 bg-purple-300 m-5">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Component D</h2>
                <pre>{JSON.stringify(appData)}</pre>
            </div>
        </>
    )
};
export default ComponentD;