import { NavigationDropdownTypes } from "../../constants";
import "./Accordion.scss";
import { FiChevronDown } from "react-icons/fi";

const Accordion: React.FC<NavigationDropdownTypes> = ({
  title: header,
  links,
}) => {
  return (
    <div className="accordion">
      <div className="accordion__trigger">
        <span>{header}</span>
        <FiChevronDown />
      </div>

      <ul className="accordion__links">
        {links.map((link) => (
          <li key={link}>
            <a href="#">{link}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Accordion;
