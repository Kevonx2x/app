import './styles/navbar.css';


import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className="navbar-container">
            <nav className="navbar">
                <div className="navbar-logo">
                    <a href="/">Raider Nation Card Store</a>
                    <img src="/images/logo.jpeg" width={41} height={41}  />
                </div>
                <div className="navbar-menu">
                    <a href="/">Homepage</a>
                    <a href="/roster">Roster</a>
                    <a href="/about">About</a>
                    <a href="/admin">Admin</a>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
