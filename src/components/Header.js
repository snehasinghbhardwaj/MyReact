import LogoImg from "../assets/FoodVilla.jpg";
import { useState } from "react";

const IsLoggeedInUser = () => {
  return false;
};
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
 * Using CSS with div
 *
 */

export const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="header">
      <Logo />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>Contact</li>
          <li>About</li>
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
