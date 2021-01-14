import React, { Component } from 'react';
import Logo from '../assets/logo-cream.png';

class NavBar extends Component {
    state = {  }
    render() { 
        return (<nav className="navbar navbar-dark bg-secondary">
        <div className="container-fluid">
          <div className="navbar-header">
            <img height = "50px" src={ Logo } className="img-responsive" alt="logo"></img>
            <a className="navbar-brand" href="#">La Marmotte</a>
          </div>
          
          <ul className="nav navbar-right">
            <li> Home   |  </li>
            <li> Add Recipe  |  </li>
            <li className="dropdown">
                <a className="dropdown-toggle" data-toggle="dropdown" href="#">Categories
                <span className="caret"></span></a>
                
                <ul className="dropdown-menu">
                    <li><a href="#">Page 1-1</a></li>
                    <li><a href="#">Page 1-2</a></li>
                    <li><a href="#">Page 1-3</a></li>
                </ul>
            </li>
          </ul>
          
        </div>
      </nav>  );
    }
}
 
export default NavBar;