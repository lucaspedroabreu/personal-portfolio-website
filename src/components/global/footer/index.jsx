/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { FaFacebook } from "react-icons/fa";
import "./footer.css";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <section>
      <a href="#" className="footer__logo">
        LPA
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
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
        <a href="https://linkedin.com/lucaspedroabreu">
          <FaLinkedin />
        </a>
        <a href="https://github.com/lucaspedroabrei">
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
  );
}

export default Footer;
