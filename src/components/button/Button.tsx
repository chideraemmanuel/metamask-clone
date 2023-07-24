import "./Button.scss";

interface Props {
  text: string;
  icon?: any;
  transparent?: true;
}

const Button: React.FC<Props> = ({ text, icon, transparent }) => {
  return (
    <a href="#" className={transparent ? "button transparent" : "button"}>
      <span>{text}</span>
      {/* <img src={icon} alt="Microsoft Edge Icon" /> */}
    </a>
  );
};

export default Button;
