import React, {useState} from 'react';
import ChildComponent from "./ChildComponent.jsx";

const ParentComponent = () => {

    const [appName, setAppName] = useState("Sids Farm App");
    const [fromChild, setFromChild] = useState("");

    return (
        <>
            <div className="flex items-center justify-center min-h-screen ">
                <div className="max-w-sm p-6  rounded-2xl shadow-lg bg-green-300">
                    <h2 className="text-xl font-bold text-gray-800">Parent Component</h2>
                    <p className="mt-2 text-gray-600">
                        <pre>From Parent : {appName}</pre>
                        <pre> From Child : {fromChild}</pre>
                    </p>
                    <ChildComponent appName={appName} setFromChild={setFromChild}/>
                </div>
            </div>
        </>
    )
};
export default ParentComponent;