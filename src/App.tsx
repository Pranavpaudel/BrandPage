import Navigation from "./components/Navigation";
import "./App.css";
import HeroSection from "./components/Hero";
import Doctorine from "./components/Doctorine";
import Collection from "./components/Collection";
import Atelier from "./components/Atelier";
import Footer from "./components/Footer"

function App() {
  return (
    <div className="page">
      <Navigation />
      <HeroSection />
      <Doctorine />
      <Collection />
      <Atelier />
      <Footer />
    </div>
  );
}

export default App;
