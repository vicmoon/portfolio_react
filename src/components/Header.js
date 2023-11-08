import react from 'react';
import About from './About';

function Header(){
    return (
        <div className='navbar navbar-expand-lg bg-light'> 
          <nav className="navbar">
          <div className="container-fluid">
           <a href="/index.html">
            <img
            src="/images/Victoria1.jpg"
            className="logo d-block d-md-none"
            title="Victoria Munteanu"/></a>
                    <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    >
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                            <a
                                className="nav-link active"
                                href="About.js"
                                title="About Victoria"
                                >About</a>
                            </li>
                            <li className="nav-item">
                            <a
                                className="nav-link active"
                                href="#"
                                title="Victoria's work"
                                >Work</a
                            >
                            </li>
                           </ul>
                        </div>
                   </div>
                 </nav>   
            </div>
    );
};

export default Header;
