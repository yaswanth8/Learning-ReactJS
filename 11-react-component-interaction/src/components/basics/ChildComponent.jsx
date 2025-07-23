import React, {useState} from 'react';

const ChildComponent = (props) => {
    const {appName, setFromChild} = props;

    const [location, setLocation] = useState("Hyderabad");

    return (
        <>
            <div className="flex items-center justify-center ">
                <div className="max-w-sm p-6  rounded-2xl shadow-lg bg-orange-300">
                    <h2 className="text-xl font-bold text-gray-800">Child Component</h2>
                    <p className="mt-2 text-gray-600">
                        <pre>From Parent : {appName}</pre>
                        <pre>From Child : {location}</pre>
                    </p>
                    <button onClick={() => setFromChild(location)}
                            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                        Send Data
                    </button>
                </div>
            </div>
        </>
    )
};
export default ChildComponent;