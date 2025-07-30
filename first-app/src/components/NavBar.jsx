import React from "react";
import { Link } from "react-router-dom";
// create navbar component using tailwind css
const NavBar = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-lg font-bold">  
                    My App
                </div>
                <div className="space-x-4">
                    <Link to="/" className="text-white hover:text-gray-300">Home</Link>
                    <Link to="/about" className="text-white hover:text-gray-300">About
</Link>
                    <Link to="/contact" className="text-white hover:text-gray-300">Contact</Link>
                    <Link to="/users" className="text-white hover:text-gray-300">Users</Link>
                </div>  
            </div>
        </nav>
    );
};
export default NavBar;