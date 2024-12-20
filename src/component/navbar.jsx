import React from "react";
import "./styles/navbar.css";
import { useState } from "react";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <img src="public/logo.png" alt="logo" />
        </div>
        <div className={`menu ${isMenuOpen ? "open" : ""}`}>
          <span>About Us </span>
          <span>Our Story</span>
          <span>Sell on 1MDM</span>
          <span>Pricing</span>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
