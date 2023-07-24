import "./LearnMore.scss";
import { FiChevronDown } from "react-icons/fi";
import wallet from "../../assets/wallet-illo.svg";
import browse from "../../assets/Browse-illo.svg";
import explore from "../../assets/Explore-illo.svg";

const LearnMore: React.FC = () => {
  return (
    <div className="learn-more">
      <div className="learn-more__head">
        <span>Learn More</span>
        <FiChevronDown />
      </div>

      <div className="learn-more__content">
        <div className="learn-more__content--flex">
          <div className="learn-more__content--flex_image">
            <img src={wallet} alt="wallet" />
          </div>
          <div className="learn-more__content--flex_text">
            <h3>Buy, store, send and swap tokens</h3>
            <p>
              Available as a browser extension and as a mobile app, MetaMask
              equips you with a key vault, secure login, token wallet, and token
              exchange-everything you need to manage your digital assets.
            </p>
          </div>
        </div>

        <div className="learn-more__content--flex">
          <div className="learn-more__content--flex_image">
            <img src={explore} alt="explore" />
          </div>
          <div className="learn-more__content--flex_text">
            <h3>Explore blockchain apps</h3>
            <p>
              MetaMask provides the simplest yet most secure way to connect to
              blockchain-based applications. You are always in control when
              interacting on the new decentralized web.
            </p>
          </div>
        </div>

        <div className="learn-more__content--flex">
          <div className="learn-more__content--flex_image">
            <img src={browse} alt="Wallet illutration" />
          </div>
          <div className="learn-more__content--flex_text">
            <h3>Own your data</h3>
            <p>
              MetaMask generates passwords and keys on your device, so only you
              have access to your accounts and data. You always choose what to
              share and what to keep private.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnMore;
