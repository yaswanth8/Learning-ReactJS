import React, { useState } from "react";

const Registration = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        designation: "",
        about: "",
        terms: false
    });

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: (e.target.type === "checkbox" ? e.target.checked : e.target.value)
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can handle form submission here
        console.log("User registered:", user);
    };

    return (
        <>
        <pre>{JSON.stringify(user, null, 2)}</pre>
            <form className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md" onSubmit={handleSubmit}>
                <h2 className="text-2xl font-bold mb-4">Registration Form</h2>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" value={user.name} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" value={user.email} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" value={user.password} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="designation">Designation</label>
                    <select id="designation" name="designation" value={user.designation} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option value="">Select your designation</option>
                        <option value="student">Student</option>
                        <option value="developer">Developer</option>
                        <option value="designer">Designer</option>
                        <option value="manager">Manager</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="about">About You</label>
                    <textarea id="about" name="about" value={user.about} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                </div>
                <div className="mb-4">
                    <label className="inline-flex items-center">
                        <input type="checkbox" name="terms" checked={user.terms} onChange={handleChange} className="form-checkbox h-5 w-5 text-blue-600" />
                        <span className="ml-2 text-gray-700">I agree to the terms and conditions</span>
                    </label>
                </div>
                <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-300">Register</button>
            </form>
        </>
    );
};

export default Registration;