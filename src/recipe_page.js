import React, { Component } from 'react';
import Footer from './components/Footer';
import Recipe from './components/Recipe';
import NavBar from './components/NavBar';
import './App.css';

class RecipePage extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <NavBar/>
                <Recipe/>
                <Footer />
            </React.Fragment>
        );
    }
}

export default RecipePage;