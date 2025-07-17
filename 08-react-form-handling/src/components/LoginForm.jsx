import React, {useState} from 'react';

const LoginForm = () => {

    const [user, setUser] = useState({
        username: '',
        password: ''
    });

    const updateInput = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        })
    };


    return (
        <>
            <form>

                <label>UserName </label>
                <input type="text"
                       name={'username'}
                       value={user.username}
                       onChange={e => updateInput(e)}
                       className="border-2"/>
                <br/><br/>
                <label>Password </label>
                <input type="password"
                       name={'password'}
                       value={user.password}
                       onChange={e => updateInput(e)}
                       className="border-2"/>
            </form>
            <pre>user : {JSON.stringify(user)}</pre>
        </>
    )
};
export default LoginForm;