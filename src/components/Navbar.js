import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import logo from '../assets/logo.jpeg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Logo" className="navbar-logo" />
        </Link>
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="hamburger" onClick={toggleMenu}>
        <div className={`line ${isOpen ? 'open' : ''}`}></div>
        <div className={`line ${isOpen ? 'open' : ''}`}></div>
        <div className={`line ${isOpen ? 'open' : ''}`}></div>
      </div>

      {/* Navigation Links */}
      <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
        <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
        <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
        <li><Link to="/projects" onClick={toggleMenu}>Projects</Link></li>
        <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
