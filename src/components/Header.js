import React from 'react';



function Header(){
    return (

        <>
        <nav className="navbar">
                <ul>
                    <li><a className="navbar-brand" href="/home">Home</a></li>
                    <li><a className="navbar-brand" href="/about">About</a></li>
                    <li><a className="navbar-brand" href="/work">Projects</a></li>
                    <li><a className="navbar-brand" href="/contact">Contact</a></li>
                </ul>
        </nav>
        </>
    );
}

export default Header;
