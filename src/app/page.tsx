//Import React Components
import Navbar from "./components/Navbar";
import Homepage from "./Homepage/page";
import Projects from "./Projects/page";
import About from "./About/page";
import Contact from "./Contact/page";
import Footer from "./components/Footer";

//Portfolio main page order/all the components that go into the layout of website
export default function Portfolio() {
  return (
    <main className="scroll-smooth">
      <Navbar />
      <Homepage />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
