import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import "./style.scss";

const Header = () => {
  return (
    <header>
      <img className="logo" src={Logo} alt="Kasa" />
      <nav>
        <ul>
          <li>
            <Link to="/">accueil</Link>
          </li>
          <li>
            <Link to="/about-us" href="">
              à propos
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
