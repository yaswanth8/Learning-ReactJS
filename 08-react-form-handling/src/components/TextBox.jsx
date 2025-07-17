import React, {useState} from 'react';

const TextBox = () => {

    const [username, setUsername] = useState("");

    const updateUsername = (e) => {
        setUsername(e.target.value);
    };

    return (
        <>
            <form>

                <label>UserName </label>
                <input type="text"
                       value={username}
                       onChange={e => updateUsername(e)}
                       className="border-2"/>
            </form>
            <pre>{username}</pre>
        </>
    )
};
export default TextBox;