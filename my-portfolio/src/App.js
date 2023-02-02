import Resume from "./components/resume/resume";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Home from "./components/home";
import Navbar from "./components/navbar";
import Skills from "./components/skills";
import Work from "./components/projects";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Resume />
      <Skills />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
