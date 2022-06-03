/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./navbar.css";
import { AiOutlineHome } from "react-icons/ai";
import { BiUserPin } from "react-icons/bi";
import { MdWorkOutline } from "react-icons/md";
import { FaRegHandshake, FaMailBulk } from "react-icons/fa";

function NavBar() {
  const [currentSection, setCurrentSection] = useState("#");

  return (
    <nav>
      <a
        href="#"
        className={currentSection === "#" ? "active" : ""}
        onClick={() => setCurrentSection("#")}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        className={currentSection === "#about" ? "active" : ""}
        onClick={() => setCurrentSection("#about")}
      >
        <BiUserPin />
      </a>
      <a
        href="#experience"
        className={currentSection === "#experience" ? "active" : ""}
        onClick={() => setCurrentSection("#experience")}
      >
        <MdWorkOutline />
      </a>
      <a
        href="#services"
        className={currentSection === "#services" ? "active" : ""}
        onClick={() => setCurrentSection("#services")}
      >
        <FaRegHandshake />
      </a>
      <a
        href="#contact"
        className={currentSection === "#contact" ? "active" : ""}
        onClick={() => setCurrentSection("#contact")}
      >
        <FaMailBulk />
      </a>
    </nav>
  );
}

export default NavBar;
