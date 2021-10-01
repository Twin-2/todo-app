import React from 'react';
import { When } from 'react-if';

import { LoginContext } from '../context/loginContext.js';

class Auth extends React.Component {
    constructor(props) {
        super(props)
    }
    static contextType = LoginContext;


    render() {

        const isLoggedIn = this.context.isLoggedIn;
        const canDo = this.props.capability ? this.context.can(this.props.capability) : true;
        const okToRender = isLoggedIn && canDo;

        return (
            <When condition={okToRender}>
                {this.props.children}
            </When>
        );
    }
}

export default Auth;