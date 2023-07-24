import Accordion from "../../../../components/accordion/Accordion";
import Button from "../../../../components/button/Button";
import ThemeToggle from "../../../../components/themeToggle/ThemeToggle";
import { navigationDropdownConstants } from "../../../../constants";
import "./MobileNavLinks.scss";
import { FiMenu } from "react-icons/fi";

const MobileNavLinks: React.FC = () => {
  return (
    <div className="mobile-navigation">
      <div className="mobile-navigation__links">
        {navigationDropdownConstants.map((constant, index) => (
          <Accordion key={index} {...constant} />
        ))}
        <li>
          <a href="#">Learn</a>
        </li>
        <Button text="Download" />
        <ThemeToggle />
      </div>
    </div>
  );
};

export default MobileNavLinks;
