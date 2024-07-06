import './styles/navbar.css';

function Navbar() {
    return (
        <div className="navbar-container">
            <nav className="navbar">
                <div className="navbar-logo">
                    <a href="#">MyLogo</a>
                </div>
                <div className="navbar-menu">
                    <a href="#">Log In</a>
                    <a href="#">Search</a>
                    <a href="#">Subscribe</a>
                    <a href="#">Menu</a>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
