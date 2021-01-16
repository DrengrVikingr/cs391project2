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
<<<<<<< HEAD
import AddRecipePage from './addRecipePage';

=======
import AddRecipe from './components/AddRecipe';
import RecipePage from './recipe_page';
>>>>>>> afcbccdefa5bd3fe4f8ef856d1b959f2b843860f

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/sign_up_login" component={SignUpLogin} />
<<<<<<< HEAD
      <Route path="/add_recipe" component={AddRecipePage}/>
=======
      <Route path="/add_recipe" component={AddRecipe}/>
      <Route path="/recipe_page" component={RecipePage}/>
>>>>>>> afcbccdefa5bd3fe4f8ef856d1b959f2b843860f
    </Switch>


  </Router>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
