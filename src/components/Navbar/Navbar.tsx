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
      {/* Desktop Header */}
      <div className="navbar-desktop">
        <div className="navbar-left">
          <a href="/" className="logo">
            Skipwash
          </a>
        </div>
        <div className="navbar-center">
          <ul className="nav-links"> {/* For desktop */}
            <li onClick={() => navigate("/home/services")}>
              HOW DOES IT WORK?
            </li>
            <li><a href="/contact">CONTACT</a></li>
            <li><a href="/book">BOOK ONLINE</a></li>
            <li><a href="/tracking">LAUNDRY TRACKING</a></li>
          </ul>
        </div>
      </div>

      {/* Mobile Header bar */}
      <div className="navbar-mobile">
        <div className="navbar-left"> {/* Can reuse or use new class for mobile logo */}
          <a href="/" className="logo">
            Skipwash
          </a>
        </div>
        <div className="mobile-hamburger-icon" onClick={toggleMobileMenu}>
          MENU {/* Placeholder text, will be replaced by actual icon later */}
        </div>
      </div>

      {/* Mobile Dropdown Menu (conditionally rendered) */}
      {isMobileMenuOpen && (
        <ul className="mobile-nav-links">
          <li onClick={() => { navigate("/home/services"); toggleMobileMenu(); }}>
            HOW DOES IT WORK?
          </li>
          {/* For links that are direct hrefs, ensure toggleMobileMenu is called.
              If using React Router's <Link> component, place toggleMobileMenu in its onClick.
              For simple hrefs, and if you want to navigate via JS for consistency: */}
          <li onClick={() => { navigate("/contact"); toggleMobileMenu(); }}>
            CONTACT
          </li>
          <li onClick={() => { navigate("/book"); toggleMobileMenu(); }}>
            BOOK ONLINE
          </li>
          <li onClick={() => { navigate("/tracking"); toggleMobileMenu(); }}>
            LAUNDRY TRACKING
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
