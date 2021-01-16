import React, { Component } from 'react';
import Footer from './components/Footer';
import CategoriesPage from './components/CategoriesPage';
import NavBar from './components/NavBar';
import './App.css';

class Categories extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <NavBar/>
                <CategoriesPage/>
                <Footer />
            </React.Fragment>
        );
    }
}

export default Categories;