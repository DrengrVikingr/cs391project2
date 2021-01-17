import React, { Component } from 'react';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import { Login, SignUp } from './components/forms';

class SignUpLogin extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <SignUp />
                <Login />
                <Footer />
            </React.Fragment>
        );
    }
}

export default SignUpLogin;