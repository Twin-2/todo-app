import { useState, useContext } from 'react';
import { LoginContext } from '../context/loginContext';
import { If, Then, Else } from 'react-if';
import { Button, Classes } from "@blueprintjs/core";

function Login(props) {
    const [login, setLogin] = useState({});
    const context = useContext(LoginContext);

    const handleChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        context.login(login);
    }

    return (
        <If condition={context.isLoggedIn}>
            <Then>
                Welcome {context.user.username}
                <Button onClick={context.logout}>Log Out</Button>
            </Then>
            <Else>
                <form onSubmit={handleSubmit}>
                    <input className={Classes.INPUT} name="username" onChange={handleChange} placeholder="Username" />
                    <input className={Classes.INPUT} name="password" type="password" onChange={handleChange} placeholder="Password" />
                    <Button type="submit">Log In</Button>
                </form>
            </Else>
        </If>
    )
}

export default Login