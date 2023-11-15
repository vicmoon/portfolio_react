import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Work from './pages/Work';
import NoPage from '../src/pages/NoPage';




function Header(){
    return (

        <>
        <nav className="navbar">
                <ul>
                    <li><a className="navbar-brand" href="../pages/home">Home</a></li>
                    <li><a className="navbar-brand" href="/about">About</a></li>
                    <li><a className="navbar-brand" href="/work">Projects</a></li>
                    <li><a className="navbar-brand" href="/contact">Contact</a></li>
                </ul>
        </nav>
        </>
    );
}

export default Header;
