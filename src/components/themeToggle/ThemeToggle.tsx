import { useContext } from "react";
import "./ThemeToggle.scss";
import { FaSun, FaMoon } from "react-icons/fa";
import { themeContext } from "../../contexts/ThemeContext";

const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useContext(themeContext);
  // console.log(theme);

  const changeTheme = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.checked);
    if (e.target.checked) {
      setTheme("dark");
      console.log("set to dark");
    } else {
      setTheme("light");
      console.log("set to light");
    }

    // console.log(theme);
  };

  return (
    <div className="theme-toggle">
      <input
        type="checkbox"
        name="themeToggle"
        id="themeToggle"
        checked={theme === "light" ? false : true}
        onChange={(e) => changeTheme(e)}
      />
      <label htmlFor="themeToggle">
        <span></span>

        <FaSun />
        <FaMoon />
      </label>
    </div>
  );
};

export default ThemeToggle;
