import React, { useEffect } from "react"
import NavBar from "./components/global/navbar"
import About from "./components/sections/aboutSection"
import Contact from "./components/sections/contactSection"
import Experience from "./components/sections/experienceSection"
import Hero from "./components/sections/heroSection"
import Testimonials from "./components/sections/testimonialsSection"
import Services from "./components/sections/servicesSection"
import Portfolio from "./components/sections/portfolioSection"
import Footer from "./components/global/footer"

function App() {
  function handleNavbar() {
    const sections = document.querySelectorAll("section")
    const home = document.querySelector("header")
    const links = document.querySelectorAll("nav a")
    sections.forEach((section) =>
      section.addEventListener("mouseover", (e) => {
        e.preventDefault()
        let targetLink = document.querySelector(`nav a[href="#${section.id}"]`)
        if (targetLink == null) return null
        links.forEach((link) => link.classList.remove("active"))
        targetLink.classList.add("active")
        home.classList.remove("active")
      })
    )
    home.addEventListener("mouseover", (e) => {
      e.preventDefault()
      let targetLink = document.querySelector(`nav a[href="#home"]`)
      if (targetLink == null) return null
      links.forEach((link) => link.classList.remove("active"))
      targetLink.classList.add("active")
      home.classList.remove("active")
    })
  }

  useEffect(() => {
    handleNavbar()
  }, [])

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
  )
}

export default App
