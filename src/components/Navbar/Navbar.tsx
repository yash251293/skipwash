import { useState } from "react";
import "./Navbar.scss";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="/" className="logo">
          Skipwash
        </a>
      </div>
      <div className={`hamburger-icon ${isMobileMenuOpen ? "open" : ""}`} onClick={toggleMobileMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <div className="navbar-center">
        <ul className={`nav-links ${isMobileMenuOpen ? "mobile-menu-open" : ""}`}>
          <li
            onClick={() => {
              navigate("/home/services");
              if (isMobileMenuOpen) toggleMobileMenu();
            }}
          >
            HOW DOES IT WORK?
          </li>
          <li onClick={() => {
              if (isMobileMenuOpen) toggleMobileMenu();
            }}>
            <a href="/contact">CONTACT</a>
          </li>
          <li onClick={() => {
              if (isMobileMenuOpen) toggleMobileMenu();
            }}>
            <a href="/book">BOOK ONLINE</a>
          </li>
          <li onClick={() => {
              if (isMobileMenuOpen) toggleMobileMenu();
            }}>
            <a href="/tracking">LAUNDRY TRACKING</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
