import React, { Component } from 'react';
import Logo from '../assets/logo-cream.png';
import './NavBar-Footer.css';
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'

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
        <a class="marmotte" href="/" style={{color:'white'}}>La Marmotte</a>
      </Navbar.Brand>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav"  >
          <li class="nav-item"  >
            <Link to="/" style={{ color: "white", fontSize: 18, marginRight: '20px', textDecoration: 'none'}}>Home</Link>
          </li>
          <li class="nav-item">
            <Link to="/categories" style={{ color: "white", fontSize: 18, marginRight: '20px', textDecoration: 'none' }}>Categories</Link>
          </li>
          <li class="nav-item">
            <Link to="/add_recipe" style={{ color: "white", fontSize: 18, marginRight: '20px', textDecoration: 'none' }}>Add Recipe</Link>
          </li>
        </ul>

      </div>

    </Navbar>);
  }
}

export default NavBar;

