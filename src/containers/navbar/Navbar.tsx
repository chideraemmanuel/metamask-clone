import Logo from "../../components/logo/Logo";
import "./Navbar.scss";
import DesktopNavLinks from "./components/desktopNavLinks/DesktopNavLinks";
import { FiMenu } from "react-icons/fi";

const Navbar: React.FC = () => {
  return (
    <div className="navbar">
      <Logo />

      <div className="navbar__right">
        <DesktopNavLinks />

        <button className="navbar__right--button active">
          <FiMenu />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
