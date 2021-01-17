import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Footer from './components/Footer';
<<<<<<< HEAD
import NavBar from './components/NavBar';
import { Login, SignUp } from './components/forms';
=======
import Login from './components/Login';
import NavBar from './components/NavBar';
import SignUp from './components/SignUp';

>>>>>>> def1fe02ed9586c13a02a03e732e761aa9a634ba

class SignUpLogin extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <NavBar />
<<<<<<< HEAD
                <SignUp />
                <Login />
=======
                <Container style={{marginTop:'8rem', marginBottom:'15rem'}}>
                    <Row>
                        <Col> <Login /> </Col>
                        <Col>  <SignUp /> </Col>
                    </Row>
                </Container>
>>>>>>> def1fe02ed9586c13a02a03e732e761aa9a634ba
                <Footer />
            </React.Fragment>
        );
    }
}

export default SignUpLogin;