import React, { useState, useEffect } from "react";
import Spinner from "../ui/Spinner";
import axios from "axios";

const UsersFromServer = () => {
    const [state, setState] = useState({
        loading: false,
        users: [],
        errorMessage: null
    });

    useEffect(() => {
        setState({ ...state, loading: true });
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                setState({
                    ...state,
                    loading: false,
                    users: response.data
                });
            })
            .catch((error) => {
                setState({
                    ...state,
                    loading: false,
                    errorMessage: error.message
                });
            });
        // eslint-disable-next-line
    }, []);

    const { loading, users, errorMessage } = state;
    if (loading) {
        return <Spinner />;
    }
    if (!loading && errorMessage) {
        return <div className="alert alert-danger">{errorMessage}</div>;
    }

    return (
        <>
            <div className="container mx-auto mt-8">
                <div className="mb-6">
                    <h3 className="text-3xl font-bold text-blue-700 mb-2">Users From Server</h3>
                </div>
                <div className="overflow-x-auto rounded-lg shadow">
                    <table className="min-w-full bg-white border border-gray-200">
                        <thead>
                            <tr className="bg-blue-600 text-white">
                                <th className="py-3 px-4 text-left">SNO</th>
                                <th className="py-3 px-4 text-left">Name</th>
                                <th className="py-3 px-4 text-left">Username</th>
                                <th className="py-3 px-4 text-left">Email</th>
                                <th className="py-3 px-4 text-left">City</th>
                                <th className="py-3 px-4 text-left">Phone</th>
                                <th className="py-3 px-4 text-left">Website</th>
                                <th className="py-3 px-4 text-left">Company</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, idx) => (
                                <tr key={user.id} className={idx % 2 === 0 ? "bg-blue-50" : "bg-white"}>
                                    <td className="py-2 px-4">{user.id}</td>
                                    <td className="py-2 px-4">{user.name}</td>
                                    <td className="py-2 px-4">{user.username}</td>
                                    <td className="py-2 px-4">{user.email}</td>
                                    <td className="py-2 px-4">{user.address.city}</td>
                                    <td className="py-2 px-4">{user.phone}</td>
                                    <td className="py-2 px-4">{user.website}</td>
                                    <td className="py-2 px-4">{user.company.name}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default UsersFromServer;