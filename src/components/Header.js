const Logo = () => (
  <a>
    <img
      className="logo"
      alt="logo"
      src={require("../../Images/FoodVilla.jpg")}
    />
  </a>
);

/**
 * Using CSS with div
 *
 */
export const Header = () => {
  return (
    <div className="header">
      <div className="nav-items">
        <ul>
          <li>Contact Us</li>
          <li>About Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
