import Button from "../../components/button/Button";
import "./Hero.scss";
import edgeIcon from "../../assets/edge.svg";
import lightHeroImage from "../../assets/home-hero.webp";
import darkHeroImage from "../../assets/home-hero-dark.webp";

const Hero: React.FC = () => {
  return (
    <div className="hero">
      <div className="hero__left">
        <h2>A crypto wallet & gateway to blockchain apps</h2>
        <p>
          Start exploring blockchain applications in seconds. Trusted by over 30
          million users worldwide.
        </p>

        <a href="#">
          <span>Download for</span>
          <img src={edgeIcon} alt="Microsoft edge icon" />
        </a>
      </div>

      <div className="hero__image">
        <img src={lightHeroImage} alt="hero image" />
      </div>
    </div>
  );
};

export default Hero;
