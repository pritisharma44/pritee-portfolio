import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Experiences from "./components/Experiences";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div className="font-sans text-gray-800 bg-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Education/>
      <Experiences/>
      {/* <Services /> */}
      {/* <Portfolio/> */}
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
