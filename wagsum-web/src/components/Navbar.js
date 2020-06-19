import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
class Navbar extends Component {
    render() {
        return (
            <div>
                <header className>
  <nav className="navbar navbar-expand-lg">
    <div className="container">
      <NavLink className="navbar-brand" to='/'><h2>Sixteen <em>Clothing</em></h2></NavLink>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <NavLink className="nav-link" to='/'>Home</NavLink>
          </li> 
          <li className="nav-item">
            <NavLink className="nav-link" to='/products'>Our Products</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to='/about'>About Us</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to='/contact'>Contact Us</NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</header>

            </div>
        );
    }
}

export default Navbar;
