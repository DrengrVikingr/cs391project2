import React, { Component } from 'react';
import Footer from './components/Footer';
import Recipe from './components/Recipe';
import NavBar from './components/NavBar';
import './App.css';
import Babka from './components/recipe_info/Babka';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


class RecipePage extends Component {
    state = {}
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/recipe_page/Babka" component={Babka} />
                </Switch>


            </Router>
        );
    }

}


export default RecipePage;