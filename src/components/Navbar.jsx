import React, { useState } from "react";
import "./Navbar.css"; // Import the CSS file for styling

const Navbar = () => {
  const [sideNavOpen, setSideNavOpen] = useState(false);

  const toggleSideNav = () => {
    setSideNavOpen((prev) => !prev);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          {/* Logo can go here */}
        </div>
        <div className="menu-items">
          <a href="#about">ABOUT</a>
          <a href="#discography">DISCOGRAPHY</a>
          <a href="#concerts">CONCERT TOURS</a>
          <a href="#compositions">COMPOSITIONS</a>
          <a href="#new-tracks">NEW TRACKS</a>
          <a href="#events">UPCOMING EVENTS</a>
          <a href="#contact">CONTACT</a>
        </div>

        <div className="hamburger-menu" onClick={toggleSideNav}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>

      <div className={`sidenav ${sideNavOpen ? "open" : ""}`}>
        <div className="close-btn" onClick={toggleSideNav}>
          &times;
        </div>
        <a href="#about">ABOUT</a>
          <a href="#discography">DISCOGRAPHY</a>
          <a href="#concerts">CONCERT TOURS</a>
          <a href="#compositions">COMPOSITIONS</a>
          <a href="#new-tracks">NEW TRACKS</a>
          <a href="#events">UPCOMING EVENTS</a>
          <a href="#contact">CONTACT</a>
      </div>
    </div>
  );
};

export default Navbar;
