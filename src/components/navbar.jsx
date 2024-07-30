import { useContext } from "react";
import "./styles/navbar.css";
import { Link } from "react-router-dom";
import DataContext from "../state/dataContext";

function Navbar() {
  const { user, cart } = useContext(DataContext);

  return (
    <div className="navbar-container">
      <nav className="navbar">
        <div className="navbar-logo">
          <img src="/images/logo.jpeg" width={41} height={41} alt="Logo" />
          <a href="/">Raider Nation Card Store</a>
        </div>

        <div className="navbar-menu">
          <a href="/">Homepage</a>
          <a href="/roster">Roster</a>
          <a href="/about">About</a>
          <a href="/admin">Admin</a>
        </div>

        <div>
          <label>{user.name}</label>
          <button type="button" className="cart-button navbar-btn">
            <Link to="/cart"> {cart.length}Cart</Link>
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
