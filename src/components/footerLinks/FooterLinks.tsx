import { FooterLinksTypes } from "../../constants";
import "./FooterLinks.scss";

const FooterLinks: React.FC<FooterLinksTypes> = ({ header, links }) => {
  return (
    <div className="footer-links">
      <span>{header}</span>

      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <a href="#">{link}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;
