import FooterLogo from "../../assets/images/footer_logo.png";
import "./style.scss";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <img src={FooterLogo} alt="Logo Kasa" />
      <p className="footer-text">© {currentYear} Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;
