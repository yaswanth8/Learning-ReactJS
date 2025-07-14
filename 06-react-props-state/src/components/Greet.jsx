import React from 'react';

const Greet = (props) => {
    return (
        <>
            <h2>Hello {props.msg} at {props.time}</h2>
        </>
    )
}
export default Greet;