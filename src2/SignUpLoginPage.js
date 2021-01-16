import React, { Component } from 'react';
import Footer from './components/Footer';
import { Login } from './components/forms';
import NavBar from './components/NavBar';
import { login, signUp } from './components/sign_up_login';

class SignUpLogin extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <signUp />
                <Login />
                <Footer />
            </React.Fragment>
        );
    }
}

export default SignUpLogin;