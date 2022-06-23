import React from "react"
import "./about-section.css"
import me from "../../../assets/lpa-foto-hero.png"
import { FaAward, FaUser } from "react-icons/fa"
import { VscFolderLibrary } from "react-icons/vsc"

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
              <small>
                Generalistic knowledge and complimentary know-how across
                different segments
              </small>
            </article>
            <article className="about__card">
              <FaUser className="about__icon" />
              <h5>Personality</h5>
              <small>
                People person with client oriented mindset and leadership traits
              </small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>20+ websites</small>
            </article>
          </div>

          <p>
            Hello there! I'm Lucas Pedro Abreu, a wannabe entrperneur and web
            developer with a passion for creating beautiful and functional web
            applications. I've had experience ranging from finance, passing
            through construction, marketing and coaching. I've had some
            experience with embrionary entrepreneurial ideas as well, but those
            did not grow past MVP stage. Today I'm focused on frontend
            development and I'm always looking for new ways to improve my
            skills.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  )
}

export default About
