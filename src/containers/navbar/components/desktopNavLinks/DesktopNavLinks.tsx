import Button from "../../../../components/button/Button";
import Dropdown from "../../../../components/dropdown/Dropdown";
import ThemeToggle from "../../../../components/themeToggle/ThemeToggle";
import { navigationDropdownConstants } from "../../../../constants";
import "./DesktopNavLinks.scss";

const DesktopNavLinks: React.FC = () => {
  return (
    <div className="desktop-navigation">
      <div className="desktop-navigation__links">
        {navigationDropdownConstants.map((constant, index) => (
          <Dropdown key={index} {...constant} />
        ))}
        <li>
          <a href="#">Learn</a>
        </li>
      </div>

      <Button text="download" />
      <ThemeToggle />
    </div>
  );
};

export default DesktopNavLinks;
