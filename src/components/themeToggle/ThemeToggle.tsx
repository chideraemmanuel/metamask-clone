import "./ThemeToggle.scss";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeToggle: React.FC = () => {
  return (
    <div className="theme-toggle">
      <input type="checkbox" name="themeToggle" id="themeToggle" />
      <label htmlFor="themeToggle">
        <span></span>

        <FaSun />
        <FaMoon />
      </label>
    </div>
  );
};

export default ThemeToggle;
