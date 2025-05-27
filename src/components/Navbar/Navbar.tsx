import "./Navbar.scss";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="/" className="logo">
          Skipwash
        </a>
      </div>
      <div className="navbar-center">
        <ul className="nav-links">
          <li
            onClick={() => {
              navigate("/home/services");
            }}
          >
            HOW DOES IT WORK?
          </li>
          <li>
            <a href="/contact">CONTACT</a>
          </li>
          <li>
            <a href="/book">BOOK ONLINE</a>
          </li>
          <li>
            <a href="/tracking">LAUNDRY TRACKING</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
