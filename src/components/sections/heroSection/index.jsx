import React from "react"
import "./hero-section.css"
import "../../../index.css"
import CTA from "./CTA"
import avatar from "../../../assets/avatar-lpa-foto.png"
import SocialLinks from "./SocialLinks"

function Hero() {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1 className="myName">Lucas Pedro Abreu</h1>
        {/* <img src={lpaLogo} alt="Lucas Pedro Abreu" /> */}
        <h5 className="text-light">Fullstack Developer</h5>

        <CTA />

        <div className="my_avatar">
          <img src={avatar} alt="myself" />
        </div>

        <SocialLinks />
        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  )
}

export default Hero
