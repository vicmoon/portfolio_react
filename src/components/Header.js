import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <>
      <nav className="navbar">
        <a href='/home' rel="noreferrer"> <img src="./images/Victoria1.jpg"id="logo" alt="Logo"></img></a>
        <ul>
          <li>
            <NavLink exact to="/home" className="navbar-brand" activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="navbar-brand" activeClassName="active">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/work" className="navbar-brand" activeClassName="active">
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="navbar-brand" activeClassName="active">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;

