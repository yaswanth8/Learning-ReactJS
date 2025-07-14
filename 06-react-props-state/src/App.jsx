import {useState} from 'react'
import './App.css'
import Welcome from "./components/Welcome.jsx";
import Greet from "./components/Greet.jsx";
import Employee from "./components/Employee.jsx";
import Counter from "./components/Counter.jsx";
import Product from "./components/Product.jsx";

function App() {

    const employee = {
        id: 1,
        name: "John",
        age: 25,
        designation: "Software Engineer"
    };

    const greet = (name) => {
        alert("Iam from Greet Function " + name);
    };

    return (
        <>
            {/*<Greet msg={"Good Morning"} time={new Date().toLocaleTimeString()}/>*/}
            {/*<Employee employee={employee} greet={greet}/>*/}
            {/*<Counter/>*/}
            <Product/>
        </>
    )
}

export default App
