import { FiChevronRight } from "react-icons/fi";
import "./Swag.scss";
import hoodie from "../../assets/mm-shop-hoodie.webp";

const Swag: React.FC = () => {
  return (
    <div className="swag">
      <div className="swag__top">
        <div>
          <h4 className="swag__top--header">Developers</h4>

          <p>
            MetaMask is powered by a strong community from across the globe.
            Interested in contributing? Find out how and what to contribute
            using the resources below.
          </p>

          <div className="swag__top--links">
            <a href="#">
              <span>Open Issues</span>
              <FiChevronRight />
            </a>
            <a href="#">
              <span>Open Bounties</span>
              <FiChevronRight />
            </a>
            <a href="#">
              <span>Documentation</span>
              <FiChevronRight />
            </a>
            <a href="#">
              <span>Contributing Guidelines</span>
              <FiChevronRight />
            </a>
          </div>
        </div>
      </div>

      <div className="swag__bottom">
        <div>
          <h4>Shop MetaMask Swag</h4>

          <div className="swag__bottom--image">
            <img src={hoodie} alt="MetaMask Swag" />
          </div>

          <div className="swag__bottom--text">
            <h4>Shop MetaMask Swag</h4>

            <a href="#">Shop Now</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Swag;
