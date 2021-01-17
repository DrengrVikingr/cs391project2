import React, { Component } from 'react';
import Footer from './components/Footer';
import AddRecipe from './components/AddRecipe';
import NavBar from './components/NavBar';

class  AddRecipePage extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <NavBar/>
                <AddRecipe />
                <Footer />
            </React.Fragment>
        );
    }
}

export default AddRecipePage;