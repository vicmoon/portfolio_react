import React from 'react';



function Header(){
    return (

        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="nav-links">
        <a className="navbar-brand" href="/home">Home</a>
        <a className="navbar-brand" href="/about">About</a>
        <a className="navbar-brand" href="/contact">Contact</a>
        <a className="navbar-brand" href="/work">Work</a>
        </div>
        </nav>
        </>
    );
}

export default Header;
