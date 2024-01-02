import React from 'react';
import { NavLink } from 'react-router-dom';
// import ThemeToggle from './ThemeToogle';


function Header() {
  return (
    <>
      <nav className="navbar">
        <ul>
         <a href='/home' rel="noreferrer"> Home</a>
        
          <li>
            <NavLink to="/about" className="nav-item" activeClassName="active" title="About me">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/work" className="nav-item" activeClassName="active" title="Coding projects">
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="nav-item" activeClassName="active" title="Contact me">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;

