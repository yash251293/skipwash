import { useState } from "react";
import "./Navbar.scss";
import { useNavigate, Link } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate(); // Keep for programmatic navigation if needed elsewhere, or for combined actions
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      {/* Desktop Header */}
      <div className="navbar-desktop">
        <div className="navbar-left">
          <Link to="/" className="logo">
            Skipwash
          </Link>
        </div>
        <div className="navbar-center">
          <ul className="nav-links"> {/* For desktop */}
            <li>
              <Link to="/home/services">HOW DOES IT WORK?</Link>
            </li>
            <li><Link to="/contact">CONTACT</Link></li>
            <li><Link to="/book">BOOK ONLINE</Link></li>
            <li><Link to="/tracking">LAUNDRY TRACKING</Link></li>
          </ul>
        </div>
      </div>

      {/* Mobile Header bar */}
      <div className="navbar-mobile">
        <div className="navbar-left"> {/* Can reuse or use new class for mobile logo */}
          <Link to="/" className="logo">
            Skipwash
          </Link>
        </div>
        <div
          className={`mobile-hamburger-icon ${isMobileMenuOpen ? "mobile-hamburger-icon--open" : ""}`}
          onClick={toggleMobileMenu}
        >
          <span className="mobile-bar"></span>
          <span className="mobile-bar"></span>
          <span className="mobile-bar"></span>
        </div>
      </div>

      {/* Mobile Dropdown Menu (conditionally rendered) */}
      {isMobileMenuOpen && (
        <ul className="mobile-nav-links">
          <li onClick={toggleMobileMenu}>
            <Link to="/home/services">HOW DOES IT WORK?</Link>
          </li>
          <li onClick={toggleMobileMenu}>
            <Link to="/contact">CONTACT</Link>
          </li>
          <li onClick={toggleMobileMenu}>
            <Link to="/book">BOOK ONLINE</Link>
          </li>
          <li onClick={toggleMobileMenu}>
            <Link to="/tracking">LAUNDRY TRACKING</Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
