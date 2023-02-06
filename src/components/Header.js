import LogoImg from "../assets/FoodVilla.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";

const Logo = () => (
  <a>
    <img
      className="logo"
      alt="logo"
      src={LogoImg} //{require("../../Images/FoodVilla.jpg")}
    />
  </a>
);

/**
 * * Using CSS with div
 * * SPA - Single Page Application
 * * Routing 2 Types - Server Side Routing & Client Side Routing (CSR)
 * * If using <a>..</a> then it will be server side routing & it will load whole page
 * *-----react-router-dom gives Link to provide CSR
 */

export const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="header">
      <Logo />
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home </Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>Cart</li>
        </ul>
      </div>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};

export default Header;
