import { useState } from "react";
import { NavigationDropdownTypes } from "../../constants";
import "./Dropdown.scss";
import { FiChevronDown } from "react-icons/fi";

// interface Props {
//   header: string;
//   links: string[];
// }

const Dropdown: React.FC<NavigationDropdownTypes> = ({
  title: header,
  links,
}) => {
  //   const [dropdownActive, setDropdownActive] = useState(false);

  return (
    <li className="dropdown" tabIndex={0}>
      <div className="dropdown__trigger">
        <span>{header}</span>
        <FiChevronDown />
      </div>

      <ul className="dropdown__links">
        {links.map((link) => (
          <li key={link}>
            <a href="#">{link}</a>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default Dropdown;
