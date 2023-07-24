import { useContext } from "react";
import { NavigationDropdownTypes } from "../../constants";
import "./Accordion.scss";
import { FiChevronDown } from "react-icons/fi";
import { navMenuContext } from "../../contexts/NavMenuContext";

const Accordion: React.FC<NavigationDropdownTypes> = ({
  title: header,
  links,
}) => {
  const { activeAccordion, setActiveAccordion } = useContext(navMenuContext);

  const handleClick = () => {
    if (activeAccordion === header) {
      setActiveAccordion(null);
    } else {
      setActiveAccordion(header);
    }
  };

  return (
    <div className="accordion">
      <div
        className={
          activeAccordion === header
            ? "accordion__trigger active"
            : "accordion__trigger"
        }
        onClick={handleClick}
      >
        <span>{header}</span>
        <FiChevronDown />
      </div>

      {activeAccordion === header && (
        <ul className="accordion__links">
          {links.map((link) => (
            <li key={link}>
              <a href="#">{link}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Accordion;
