import React from 'react';

const Employee = (props) => {
    const {employee, greet} = props;
    console.log(greet); // fn

    const helloFn = () => {
        greet("Naveen");
    };
    return (
        <>
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="max-w-sm w-full bg-white shadow-lg rounded-2xl p-6">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Employee Details</h2>
                    <ul className="space-y-2">
                        <li className="flex items-center space-x-2">
                            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                            <span className="text-gray-700">Name : {employee.name}</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                            <span className="text-gray-700">Age : {employee.age}</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                            <span className="text-gray-700">Designation : {employee.designation}</span>
                        </li>
                    </ul>
                    <button onClick={helloFn}
                            className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">Click
                        Me
                    </button>
                </div>

            </div>
        </>
    )
}
export default Employee;