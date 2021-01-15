import React, { Component } from 'react';
import Footer from './components/Footer';
import HomeRecipes from './components/HomeRecipes';
import NavBar from './components/NavBar';
import './App.css';

class Home extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <NavBar/>
                <HomeRecipes />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Home;