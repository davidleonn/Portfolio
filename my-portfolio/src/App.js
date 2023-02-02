import Contact from "./components/contact";
import Footer from "./components/footer";
import Home from "./components/home";
import Navbar from "./components/navbar";
import Skills from "./components/skills";
import Work from "./components/projects";
import About from "./components/resume/about";
import Decoration from "./app/decoration/decoration";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Skills />
      <About />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
