import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import HomeRecipes from './components/HomeRecipes';
import SignUpLogin from './SignUpLoginPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './home';
import AddRecipe from './components/AddRecipe';
import RecipePage from './recipe_page';

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/sign_up_login" component={SignUpLogin} />
      <Route path="/add_recipe" component={AddRecipe}/>
      <Route path="/recipe_page" component={RecipePage}/>
    </Switch>


  </Router>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
