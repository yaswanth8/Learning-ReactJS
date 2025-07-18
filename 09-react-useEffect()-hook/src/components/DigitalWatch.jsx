import React, {useEffect, useState} from "react";

const DigitalWatch = () => {

    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        // when component is mounted
        let interval = setInterval(() => {
            setCurrentTime(new Date().toLocaleTimeString());
        }, 1000);

        return () => {
            clearInterval(interval); // un-mounting
        }
    }, [])


    return (
        <>
            <div className="flex items-center justify-center min-h-screen bg-gray-900">
                <div className="bg-gray-800 text-white p-6 rounded-2xl shadow-lg w-64 text-center">
                    <h2 className="text-xl font-semibold mb-2">{currentTime}</h2>
                    <div id="clock" className="text-4xl font-bold"></div>
                </div>
            </div>
        </>
    )
}
export default DigitalWatch;