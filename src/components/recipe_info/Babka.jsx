import React, { Component } from 'react';
import Footer from '../Footer';
import NavBar from '../NavBar';
import Recipe from '../Recipe';

class Babka extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <Recipe name={this.getName("Babka")} author={this.getAuthor("Babka")} description={this.getDesc("Babka")} ingredients={this.getIngredients("Babka")} instructions={this.getInstructions("Babka")} />
                <Footer />
            </React.Fragment>
        );
    }

    getName(name) {
        return "Babka";
    }

    getAuthor(name) {
        return "";
    }

    getDesc(name) {
        return "";
    }

    getIngredients(name) {
        return "";
    }

    getInstructions(name) {
        return "";
    }

}

export default Babka;