import "./App.scss";
import GetStarted from "./containers/getStarted/GetStarted";
import Hero from "./containers/hero/Hero";
import LearnMore from "./containers/learnMore/LearnMore";
import Navbar from "./containers/navbar/Navbar";
import MobileNavLinks from "./containers/navbar/components/mobileNavLinks/MobileNavLinks";

const App: React.FC = () => {
  return (
    <div className="App">
      <header>
        <Navbar />
        {/* <MobileNavLinks /> */}
      </header>

      <main>
        <Hero />
        <LearnMore />
        <GetStarted />
      </main>
    </div>
  );
};

export default App;
