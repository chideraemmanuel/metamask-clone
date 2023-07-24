import { useContext } from "react";
import Logo from "../../components/logo/Logo";
import { navMenuContext } from "../../contexts/NavMenuContext";
import "./Navbar.scss";
import DesktopNavLinks from "./components/desktopNavLinks/DesktopNavLinks";
import { FiMenu } from "react-icons/fi";

const Navbar: React.FC = () => {
  const { navMenuActive, setNavMenuActive } = useContext(navMenuContext);
  const { activeAccordion, setActiveAccordion } = useContext(navMenuContext);

  const handleClick = () => {
    setNavMenuActive((prev: boolean) => !prev);
    setActiveAccordion(null);
  };

  return (
    <div className="navbar">
      <Logo />

      <div className="navbar__right">
        <DesktopNavLinks />

        <button
          className={
            navMenuActive
              ? "navbar__right--button active"
              : "navbar__right--button"
          }
          onClick={handleClick}
        >
          <FiMenu />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
