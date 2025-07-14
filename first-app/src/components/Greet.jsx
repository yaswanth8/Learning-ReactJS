import React from "react";

const Greet = (props) => {
    console.log(props);
    const {employee,greet} = props;

    const greetFunction = () => {
        greet();
    };

    return(
        <>
            <h2 className="text-2xl font-bold text-blue-600">Hello, {}!</h2>
            <p className="text-lg text-gray-700">Age: {employee.age}</p>
            <p className="text-lg text-gray-700">City: {employee.city}</p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={greetFunction}>Greet</button>
        </>
    )
}
export default Greet;