import React, { useState, useEffect } from 'react';
import axios from 'axios';
import cookie from 'react-cookies';
import jwt from 'jsonwebtoken';


export const LoginContext = React.createContext();

const SECRET = process.env.REACT_APP_SECRET || 'wheeloftime';
const API = process.env.REACT_APP_BASE_URL || 'https://bearer-auth-practice.herokuapp.com';

console.log(SECRET, API)

function Login(props) {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState({});

    const login = async (input) => {
        // Call the API
        try {
            const response = await axios.post(`${API}/signin`, {}, {
                auth: {
                    username: input.username,
                    password: input.password
                }
            });

            setIsLoggedIn(true);
            setUser(response.data.user);
            cookie.save('auth', response.data.token);

        } catch (e) {
            console.error(e.message);
        }

    }

    const logout = () => {
        cookie.remove('auth');
        setIsLoggedIn(false);
    }

    const can = (capability) => {
        return user?.capabilities?.includes(capability)
    }

    useEffect(() => {
        const token = cookie.load('auth') || null;
        try {
            const tokenUser = jwt.verify(token, SECRET);
            setUser(tokenUser);
            setIsLoggedIn(true);
        } catch (e) {
            console.error("Invalid Token");
        }
    }, []);

    const context = {
        isLoggedIn,
        user,
        login,
        logout,
        can
    }

    return (
        <LoginContext.Provider value={context}>
            {props.children}
        </LoginContext.Provider>
    )

}

export default Login;