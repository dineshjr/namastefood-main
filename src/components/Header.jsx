import { useState } from "react";
import { FaCartArrowDown, FaBars } from "react-icons/fa";
import { Link } from "react-router";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = () => {
    setBtnName((prevState) => (prevState === "Login" ? "Logout" : "Login"));
  };

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <>
      {/* Header with Bottom Margin */}
      <header className="bg-white shadow-md fixed w-full z-50 pb-4">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-orange-500">
            Namaste Food
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6 items-center">
            <Link to="/" className="text-gray-700 hover:text-orange-500">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-orange-500">
              About
            </Link>
            <Link to="/grocery" className="text-gray-700 hover:text-orange-500">
              Grocery
            </Link>
            <Link
              to="/contactus"
              className="text-gray-700 hover:text-orange-500"
            >
              Contact
            </Link>
            <FaCartArrowDown className="text-gray-700 text-xl cursor-pointer hover:text-orange-500" />
            <button
              onClick={handleClick}
              className="px-4 py-2 border border-orange-500 text-orange-500 font-semibold rounded-lg hover:bg-orange-500 hover:text-white transition duration-300"
            >
              {btnName}
            </button>
          </nav>

          {/* Mobile Menu Icon */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-700 text-2xl"
          >
            <FaBars />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute left-0 top-full w-full bg-white shadow-md md:hidden">
            <nav className="flex flex-col space-y-3 p-4">
              <Link
                to="/"
                className="text-gray-700 hover:text-orange-500"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-gray-700 hover:text-orange-500"
                onClick={toggleMenu}
              >
                About
              </Link>
              <Link
                to="/grocery"
                className="text-gray-700 hover:text-orange-500"
                onClick={toggleMenu}
              >
                Grocery
              </Link>
              <Link
                to="/contactus"
                className="text-gray-700 hover:text-orange-500"
                onClick={toggleMenu}
              >
                Contact
              </Link>
              <button
                onClick={handleClick}
                className="w-full px-4 py-2 border border-orange-500 text-orange-500 font-semibold rounded-lg hover:bg-orange-500 hover:text-white transition duration-300"
              >
                {btnName}
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* Space Below Navbar to Prevent Overlapping */}
      <div className="pt-20"></div>
    </>
  );
};

export default Header;
