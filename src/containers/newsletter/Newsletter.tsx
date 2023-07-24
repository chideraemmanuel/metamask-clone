import Button from "../../components/button/Button";
import "./Newsletter.scss";

const Newsletter: React.FC = () => {
  return (
    <div className="newsletter">
      <h4>Receive our Newsletter</h4>
      <p>Sign up to receive updates and announcements</p>
      <Button text="Sign up" />
    </div>
  );
};

export default Newsletter;
