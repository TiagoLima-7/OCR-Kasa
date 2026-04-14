import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import "./style.scss";

const Header = () => {
  return (
    <header>
      <Link to="/">
        <img className="logo" src={Logo} alt="Kasa" />
      </Link>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about-us"
              href=""
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              à propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
