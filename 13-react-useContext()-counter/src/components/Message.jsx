import React from 'react';

const Message = (props) => {

    const {msg, children} = props;
    return (
        <>
            <h2>{msg}</h2>
            <div>
                {children}
            </div>
        </>
    )

};
export default Message;