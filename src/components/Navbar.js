import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar is-transparent">
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item">
              Reactor
              </Link>
            <div className="navbar-burger burger" data-target="reactorNavbar">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div id="reactorNavbar" className="navbar-menu">
            <div className="navbar-end">
              <div className="navbar-item">
                <Link to="/login">Log In</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;