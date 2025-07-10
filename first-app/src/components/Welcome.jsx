import React from "react";
import './Welcome.css';

const Welcome = (props) => {
    const { name, age } = props;
    // Destructuring props to extract name and age
    console.log(props);
 
    return(
        <>
        <div className="bg-color">
        <h3>Welcome to React! Good Morning {name}</h3>
        <p>Your age is {age ? age : "unknown"}</p>
        <p>React is a JavaScript library for building user interfaces.</p>
        </div>
        </>
    )
};
export default Welcome;