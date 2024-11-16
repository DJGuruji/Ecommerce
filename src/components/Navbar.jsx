import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaShoppingCart ,FaHome, FaShopify, FaMobile} from "react-icons/fa";  // React Icons
import { MdOutlineRoundaboutRight } from "react-icons/md";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);  // State to control dropdown visibility

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-blue-600 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-3xl font-semibold text-white">G-Cart</h1>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white text-2xl"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex space-x-6 text-white">
          <li className="">
            <NavLink
              to="/"
              className={({ isActive }) => 
                isActive ? "underline font-bold" : ""
              }
            ><div className="flex">
              <FaHome className="m-1"/>
              <span>  Home</span>
            </div>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="products"
              className={({ isActive }) => 
                isActive ? "underline font-bold" : ""
              }
            >
              <div className="flex">
              <FaShopify className="m-1"/>
              <span>  Shop</span>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="contact"
              className={({ isActive }) => 
                isActive ? "underline font-bold" : ""
              }
            >
              <div className="flex">
              <FaMobile className="m-1"/>
              <span>  Contact</span>
            </div>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="about"
              className={({ isActive }) => 
                isActive ? "underline font-bold" : ""
              }
            >
              <div className="flex">
              <MdOutlineRoundaboutRight className="m-1"/>
              <span>  About</span>
            </div>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="cart"
              className={({ isActive }) => 
                isActive ? "underline font-bold" : ""
              }
            >
              <div className="flex items-center space-x-2">
                <FaShoppingCart /> 
                <span>Cart</span>
              </div>
            </NavLink>
          </li>
        </ul>

        {/* Mobile Dropdown Navigation */}
        {isMenuOpen && (
          <ul className="lg:hidden absolute top-0 left-0 w-full bg-blue-500 text-white flex flex-col space-y-4 p-4 z-50">
            <li>
              <NavLink
                to="/"
                onClick={() => setIsMenuOpen(false)} // Close the menu on click
                className={({ isActive }) => 
                  isActive ? "underline font-bold" : ""
                }
              >
               <div className="flex">
              <FaHome className="m-1"/>
              <span>  Home</span>
            </div>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="products"
                onClick={() => setIsMenuOpen(false)} // Close the menu on click
                className={({ isActive }) => 
                  isActive ? "underline font-bold" : ""
                }
              >
               <div className="flex">
              <FaShopify className="m-1"/>
              <span>  Shop</span>
              </div>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="contact"
                onClick={() => setIsMenuOpen(false)} // Close the menu on click
                className={({ isActive }) => 
                  isActive ? "underline font-bold" : ""
                }
              >
                <div className="flex">
              <FaMobile className="m-1"/>
              <span>  Contact</span>
            </div>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="about"
                onClick={() => setIsMenuOpen(false)} // Close the menu on click
                className={({ isActive }) => 
                  isActive ? "underline font-bold" : ""
                }
              >
               <div className="flex">
              <MdOutlineRoundaboutRight className="m-1"/>
              <span>  About</span>
            </div>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="cart"
                onClick={() => setIsMenuOpen(false)} // Close the menu on click
                className={({ isActive }) => 
                  isActive ? "underline font-bold" : ""
                }
              >
                <div className="flex items-center space-x-2">
                  <FaShoppingCart /> 
                  <span>Cart</span>
                </div>
              </NavLink>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
