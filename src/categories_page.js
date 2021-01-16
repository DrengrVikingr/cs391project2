import React, { Component } from 'react';
import Footer from './components/Footer';
import { Login } from './components/forms';
import NavBar from './components/NavBar';

class CategoriesPage extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <NavBar />

                <Footer />
            </React.Fragment>
        );
    }
}

export default CategoriesPage;