import Navigation from "./components/Navigation";
import "./App.css";
import HeroSection from "./components/Hero";
import Doctorine from "./components/Doctorine"

function App() {
  return (
    <div className="page">
      <Navigation />
      <HeroSection />
      <Doctorine />
    </div>
  );
}

export default App;
