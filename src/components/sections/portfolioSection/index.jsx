import React from "react";
import "./portfolio-section.css";
import portfolioOne from "../../../assets/alien-pixels-webapp.png";
import portfolioTwo from "../../../assets/alien-pixels-webapp2.png";
import portfolioThree from "../../../assets/alien-pixels-webapp.png";
import portfolioFour from "../../../assets/alien-pixels-webapp2.png";

const portfolioData = [
  {
    id: 1,
    image: portfolioOne,
    github: "http://github.com/lucaspedroabreu",
    demo: "http://github.com/lucaspedroabreu",
    title: "Image Uploader App with Node and React",
  },
  {
    id: 1,
    image: portfolioTwo,
    github: "http://github.com/lucaspedroabreu",
    demo: "http://github.com/lucaspedroabreu",
    title: "Feedback Widget with Vite App",
  },
  {
    id: 1,
    image: portfolioThree,
    github: "http://github.com/lucaspedroabreu",
    demo: "http://github.com/lucaspedroabreu",
    title: "Proffy App",
  },
  {
    id: 1,
    image: portfolioFour,
    github: "http://github.com/lucaspedroabreu",
    demo: "http://github.com/lucaspedroabreu",
    title: "Example",
  },
];

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Latest Work</h5>
      <h2>Public Portfolio</h2>

      <div className="container portfolio__container">
        {portfolioData.map((item) => (
          <article key={item.id} className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={item.image} alt={item.title} />
            </div>
            <h3>{item.title}</h3>
            <div className="portfolio__item-cta">
              <a
                href={item.github}
                className="btn"
                target="_blank"
                rel="noreferrer noopener"
              >
                GitHub
              </a>
              <a
                href={item.demo}
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer noopener"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
