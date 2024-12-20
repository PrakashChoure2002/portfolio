import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import SocialLinks1 from "./components/SocialLinks1";
import Footer from "./components/Footer"

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
      <Footer />
      <SocialLinks />
      {/* <SocialLinks1/> */}
    </div>
  );
}

export default App;
