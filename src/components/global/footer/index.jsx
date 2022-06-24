/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"
import { FaGithub } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import "./footer.css"

import lpaLogoWhite from "../../../assets/lpa-logo-white.png"

function Footer() {
  return (
    <section id="footer">
      <a href="#" className="footer__logo">
        <img src={lpaLogoWhite} alt="LPA" />
      </a>

      <ul className="permalinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/lucas-pedro-abreu/">
          <FaLinkedin />
        </a>
        <a href="https://github.com/lucaspedroabreu">
          <FaGithub />
        </a>
        <a href="https://instagram.com/eulucaspedroabreu">
          <FaInstagram />
        </a>
      </div>

      <div className="footer__copyright">
        <small>2022 &copy; Lucas Pedro Abreu, All Rights Reserved.</small>
      </div>
    </section>
  )
}

export default Footer
