import React from 'react';
import "./Welcome.css";

const Welcome = (props) => {
    const {name, age} = props;

    return (
        <>
            <div className="bgColor">
                <h3>Hello Good Morning!</h3>
                <pre>Name : {name}</pre>
                <pre>Age : {age}</pre>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate dolore esse expedita incidunt, ipsum maiores nam numquam pariatur, porro quaerat recusandae repellendus, voluptatum. At aut culpa dolor eveniet minus nam!</p>
            </div>
        </>
    )
};
export default Welcome;