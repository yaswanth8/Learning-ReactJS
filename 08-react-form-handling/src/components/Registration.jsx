import React, {useState} from "react";

const Registration = () => {

    const [user, setUser] = useState({
        username: "",
        email: "",
        password: "",
        designation: "",
        about: "",
        terms: false
    });

    const updateInput = (e) => {
        setUser({
            ...user,
            [e.target.name]: (e.target.type === 'checkbox' ? e.target.checked : e.target.value),
        })
    };

    const submitRegister = (e) => {
        e.preventDefault();
        console.log(user);
    };


    return (
        <>
            {/* <pre>{JSON.stringify(user)}</pre>*/}
            <div className="flex  min-h-screen bg-gray-100">

                <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md m-5">
                    <h2 className="text-2xl font-bold text-center text-gray-700 mb-4">Register</h2>
                    <form onSubmit={e => submitRegister(e)} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Username</label>
                            <input type="text"
                                   name={'username'}
                                   value={user.username}
                                   onChange={e => updateInput(e)}
                                   className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring focus:ring-blue-300"
                                   placeholder="Enter username" required/>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email</label>
                            <input type="email"
                                   name={'email'}
                                   value={user.email}
                                   onChange={e => updateInput(e)}
                                   className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring focus:ring-blue-300"
                                   placeholder="Enter email" required/>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Password</label>
                            <input type="password"
                                   name={'password'}
                                   value={user.password}
                                   onChange={e => updateInput(e)}
                                   className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring focus:ring-blue-300"
                                   placeholder="Enter password" required/>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Designation</label>
                            <select className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring focus:ring-blue-300"
                                    required
                                    name={'designation'}
                                    value={user.designation}
                                    onChange={e => updateInput(e)}>
                                <option value="">Select designation</option>
                                <option value="developer">Developer</option>
                                <option value="designer">Designer</option>
                                <option value="manager">Manager</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">About</label>
                            <textarea
                                name={'about'}
                                value={user.about}
                                onChange={e => updateInput(e)}
                                className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring focus:ring-blue-300"
                                rows="3" placeholder="Tell us about yourself..."></textarea>
                        </div>
                        <div className="flex items-center">
                            <input type="checkbox"
                                   name={'terms'}
                                   checked={user.terms}
                                   onChange={e => updateInput(e)}
                                   className="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring focus:ring-blue-300"
                                   required/>
                            <label className="ml-2 text-sm text-gray-700">I agree to the terms and conditions</label>
                        </div>
                        <button type="submit"
                                disabled={!user.terms}
                                className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 disabled:bg-gray-500">Register
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
};
export default Registration;