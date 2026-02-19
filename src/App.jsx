
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Technologies from "./components/Technologies";
import Testimonial from "./components/Testimonial";
import Services from "./components/Services";
import Contact from "./components/Contact";
import ParticlesBackground from "./components/ParticlesBackground"; // Import new component

export default function App() {
  return (
    <>
      <ParticlesBackground /> {/* This replaces the gradient-bg div */}
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Technologies />
      <Services />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
}
