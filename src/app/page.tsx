import Navbar from "./components/Navbar";
import Homepage from "./Homepage/page";
import Projects from "C:\Users\User\OneDrive\Desktop\portfolio-site\frontend\src\app\projects\page.tsx";
import About from "./About/page";
import Contact from "./Contact/page";
import Footer from "./components/Footer";


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
  )
}
