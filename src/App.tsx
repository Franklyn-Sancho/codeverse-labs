import CreatorProfile from "./Components/Creator";
import Features from "./Components/features";
import Footer from "./Components/Footer";
import Hero from "./Components/hero";
import Navbar from "./Components/navbar";
import Projects from "./Components/projects";

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <Navbar />
      <Hero />
      <Projects />
      <Features />
      <CreatorProfile/>
      <Footer/>
    </div>
  );
}

export default App;
