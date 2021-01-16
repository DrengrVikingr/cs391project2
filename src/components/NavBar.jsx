import React, { Component } from 'react';
import Logo from '../assets/logo-cream.png';
import './NavBar-Footer.css';
import Navbar from 'react-bootstrap/Navbar'

class NavBar extends Component { 
  
  state = {}
  render() {
    return (<Navbar bg="secondary" >
      <Navbar.Brand href="#home">
        <img
          src={Logo}
          width="60"
          height="60"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />
        <a class="marmotte" href="../home/index.html" style={{color:'white'}}>La Marmotte</a>
      </Navbar.Brand>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav"  >
          <li class="nav-item"  >
            <a class="nav-link " style={{ color: "white", fontSize: 18}} href="./">Home</a>
          </li>
          <li class="nav-item">
            <form class="nav-link"  action="../recipe_page/recipe_page.html" method="GET">
              <label for="recipes" class="label" style={{ color: "white", fontSize: 18 }}>Categories &nbsp;</label>
              <select name="recipes" onchange="this.form.submit()">
                <option disabled selected value>Select a Recipe</option>
                <optgroup label="Starters" id="starters">
                </optgroup>
                <optgroup label="Main Dishes" id="main_dishes">
                </optgroup>
                <optgroup label="Desserts" id="desserts">
                </optgroup>
              </select>
            </form>
          </li>
          <li class="nav-item">
            <a class="nav-link" style={{ color: "white", fontSize: 18 }} href="./add_recipe">Add Recipe </a>
          </li>
        </ul>

      </div>

    </Navbar>);
  }
}

export default NavBar;

