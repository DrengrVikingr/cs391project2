import React, { Component } from 'react';
import Footer from './components/Footer';
import Recipe from './components/Recipe';
import NavBar from './components/NavBar';
import './App.css';
import Babka from './components/recipe_info/Babka';
import Profiterole from './components/recipe_info/Profiterole';
import Brownie from './components/recipe_info/Brownie';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


class RecipePage extends Component {
    state = {}
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/recipe_page/Babka" component={Babka} />
                    <Route path="/recipe_page/Brownie" component={Brownie} />
                    <Route path="/recipe_page/Profiterole" component={Profiterole} />
                </Switch>


            </Router>
        );
    }

}


export default RecipePage;