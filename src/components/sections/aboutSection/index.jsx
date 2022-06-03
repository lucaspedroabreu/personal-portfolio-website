import React from "react";
import "./about-section.css";
import me from "../../../assets/lpa-foto-hero.png";
import { FaAward, FaUser } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";

function About() {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={me} alt="About me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>2+ years working</small>
            </article>
            <article className="about__card">
              <FaUser className="about__icon" />
              <h5>Clients</h5>
              <small>20 clients</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>2+ completed</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae
            repellat blanditiis vero fugiat natus consequuntur molestiae ratione
            fugit consectetur, nemo error at quisquam necessitatibus
            perspiciatis nostrum voluptas atque cum officiis! Aliquam itaque
            similique eos eius reprehenderit quibusdam blanditiis corporis ut
            ratione assumenda odit numquam nesciunt, hic pariatur saepe
            molestias neque ad unde omnis dicta. Praesentium maxime illo modi
            consectetur velit. Eveniet vel voluptates ullam temporibus
            recusandae repudiandae quaerat fugiat?
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
