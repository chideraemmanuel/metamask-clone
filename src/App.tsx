import { useContext } from "react";
import "./App.scss";
import Applications from "./containers/applications/Applications";
import Footer from "./containers/footer/Footer";
import GetStarted from "./containers/getStarted/GetStarted";
import Hero from "./containers/hero/Hero";
import LearnMore from "./containers/learnMore/LearnMore";
import Navbar from "./containers/navbar/Navbar";
import MobileNavLinks from "./containers/navbar/components/mobileNavLinks/MobileNavLinks";
import Newsletter from "./containers/newsletter/Newsletter";
import Swag from "./containers/swag/Swag";
import { themeContext } from "./contexts/ThemeContext";
import { navMenuContext } from "./contexts/NavMenuContext";
import SummaryVideo from "./containers/summaryVideo/SummaryVideo";

const App: React.FC = () => {
  const { theme } = useContext(themeContext);
  const { navMenuActive } = useContext(navMenuContext);

  return (
    <div className={`App ${theme}`}>
      <header>
        <Navbar />
        {navMenuActive && <MobileNavLinks />}
      </header>

      <main>
        <Hero />
        <LearnMore />
        <GetStarted />
        <SummaryVideo />
        <Applications />
        <Swag />
        <Newsletter />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
