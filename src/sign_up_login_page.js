import React, { Component } from 'react';
import Footer from './components/Footer';
import { SignUp, Login } from './components/forms';
import NavBar from './components/NavBar';

class SignUpLoginPage extends Component {
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

export default SignUpLoginPage;