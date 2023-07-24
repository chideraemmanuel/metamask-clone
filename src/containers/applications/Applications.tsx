import { applications } from "../../constants";
import "./Applications.scss";

const Applications: React.FC = () => {
  return (
    <div className="applications">
      <div>
        <div className="applications__header">
          <h4>Your key to blockchain applications</h4>
          <p>
            MetaMask is the leading self-custodial wallet. The safe and simple
            way to access blockchain applications and web3. Trusted by millions
            of users worldwide.
          </p>
        </div>

        <div className="applications__content">
          {applications.map((application, index) => (
            <div className="" key={index}>
              <img src={application.imageSrc} alt={application.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Applications;
