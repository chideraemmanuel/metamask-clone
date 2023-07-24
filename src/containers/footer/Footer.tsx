import FooterLinks from "../../components/footerLinks/FooterLinks";
import Logo from "../../components/logo/Logo";
import { footerLinks } from "../../constants";
import "./Footer.scss";

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <a href="#" className="footer__logo">
        <Logo />
      </a>

      <div className="footer__links">
        {footerLinks.map((link, index) => (
          <FooterLinks key={index} {...link} />
        ))}
      </div>

      <div className="footer__copyright">
        <span>&copy;2023 MetaMask • A Consensys Formation</span>
      </div>
    </div>
  );
};

export default Footer;
