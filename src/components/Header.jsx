import { useState } from "react";
import { FaCartArrowDown, FaBars } from "react-icons/fa";
import { Link } from "react-router";

const Title = () => <h1>Namaste Food</h1>;

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle the mobile menu

  const handleClick = () => {
    setBtnName((prevState) => (prevState === "Login" ? "Logout" : "Login"));
  };

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        {/* Hamburger icon for mobile */}
        <div className="hamburger" onClick={toggleMenu}>
          <FaBars />
        </div>

        {/* Nav items */}
        <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li><Link to="/contactus">Contact</Link></li>
          <li>
            <FaCartArrowDown />
          </li>
          <li>
            <button className="login-btn" onClick={handleClick}>
              {btnName}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
