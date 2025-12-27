import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="scroll-smooth">
      <Navigation />
      <AboutMe />
      <Projects />
      <Experience />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
