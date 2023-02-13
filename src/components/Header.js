import LogoImg from "../assets/FoodVilla.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../../utils/useOnline";

const Logo = () => (
  <a>
    <img
      className="h-34 w-36"
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
  const isOnline = useOnline();

  return (
    <div className="flex justify-between bg-neutral-200 shadow-lg">
      <Logo />
      <div className="nav-items">
        <ul className="flex py-10">
          <li className="px-2">
            <Link to="/">Home </Link>
          </li>
          <li className="px-2">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-2">
            <Link to="/about">About</Link>
          </li>
          <li className="px-2">
            <Link to="instamart">Instamart</Link>
          </li>
          <li className="px-2">Cart</li>
        </ul>
      </div>
      {/* below 2 lines are same but 1st one is better */}
      <h1>{isOnline ? "You are Online !!" : "You are Offline !!"}</h1>
      {isOnline ? <h1>You are Online !!</h1> : <h1>You are Offline !!</h1>}
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};

export default Header;
