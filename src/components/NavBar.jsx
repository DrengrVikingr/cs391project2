import React, { Component } from 'react';
import Logo from '../assets/logo-cream.png';
import './NavBar-Footer.css';
import { Navbar, Nav } from 'react-bootstrap'

class NavBar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isLogged: sessionStorage.getItem("isLoggedIn") ? "Sign Out" : "Sign In"
    }

    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    if (sessionStorage.getItem("isLoggedIn")) {
      sessionStorage.setItem("isLoggedIn", false);
      this.props.isLogged("Sign In");
    }
  }

  componentDidMount() {
    this.onClick();
  }

  componentDidUpdate(prevProps) {
    if (!(this.props.isLogged, prevProps.isLogged)) // Check if it's a new user, you can also use some unique property, like the ID  (this.props.user.id !== prevProps.user.id)
    {
      this.updateUser();
    }
  }



  render() {
    return (
      <Navbar bg="secondary" >
        <Navbar.Brand href="#home">
          <img
            src={Logo}
            width='auto'
            height='auto'
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
            style={{ maxHeight: 60, maxWidth: 60 }}
          />
          <a class="marmotte" href="/" style={{ color: 'white' }}>La Marmotte</a>
        </Navbar.Brand>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
          <Nav>
            <Nav.Link href="/" style={{ color: "white", fontSize: 18, marginRight: '20px', textDecoration: 'none' }}>Home</Nav.Link>
            <Nav.Link href="/categories" style={{ color: "white", fontSize: 18, marginRight: '20px', textDecoration: 'none' }}>Categories</Nav.Link>
            <Nav.Link onClick={this.onClick} href="/sign_up_login" style={{ color: "white", fontSize: 18, marginRight: '20px', textDecoration: 'none' }}>{this.state.isLogged}</Nav.Link>
          </Nav>
        </div>
      </Navbar>);
  }
}

export default NavBar;

