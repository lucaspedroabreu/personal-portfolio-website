import React from "react";
import NavBar from "./components/global/navbar";
import About from "./components/sections/aboutSection";
import Contact from "./components/sections/contactSection";
import Experience from "./components/sections/experienceSection";
import Hero from "./components/sections/heroSection";
import Testimonials from "./components/sections/testimonialsSection";
import Services from "./components/sections/servicesSection";
import Portfolio from "./components/sections/portfolioSection";
import Footer from "./components/global/footer";

function App() {
  return (
    <>
      <Hero />

      <NavBar />

      <main>
        <About />
        <Experience />
        <Services />
        <Portfolio />
        <Testimonials />
      </main>

      <Contact />
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
