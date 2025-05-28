import { useState } from 'react';
import "./Navbar.scss";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="/" className="logo">
          Skipwash
        </a>
      </div>
      <button className="navbar-hamburger" onClick={toggleMobileMenu}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div className="navbar-center">
        <ul className={`nav-links ${isMobileMenuOpen ? 'mobile-menu-active' : ''}`}>
          <li
            onClick={() => {
              navigate("/home/services");
              if (isMobileMenuOpen) toggleMobileMenu(); // Close menu on navigate
              if (isMobileMenuOpen) toggleMobileMenu(); // Close menu on navigate
            }}
          >
            HOW DOES IT WORK?
          </li>
          <li onClick={() => { if (isMobileMenuOpen) toggleMobileMenu(); }}>
            <a href="/contact">CONTACT</a>
          </li>
          <li onClick={() => { if (isMobileMenuOpen) toggleMobileMenu(); }}>
            <a href="/book">BOOK ONLINE</a>
          </li>
          <li onClick={() => { if (isMobileMenuOpen) toggleMobileMenu(); }}>
            <a href="/tracking">LAUNDRY TRACKING</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
