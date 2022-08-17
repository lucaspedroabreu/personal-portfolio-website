import React from 'react'
import './portfolio-section.css'
import portfolioOne from '../../../assets/screenshot-event-platform.png'
import portfolioTwo from '../../../assets/screenshot-feedback-widget.png'
import portfolioThree from '../../../assets/screenshot-image-uploader.png'
import portfolioFour from '../../../assets/screenshot-github-explorer.png'
import portfolioFive from '../../../assets/ignite-feed-screenshot.png'
import portfolioSix from '../../../assets/modern-ui-todo-app-screenshot.png'
import portfolioSeven from '../../../assets/coffe-delivery-demo-app.png'

const portfolioData = [
  {
    id: 1,
    image: portfolioOne,
    github: 'https://github.com/lucaspedroabreu/event-plataform-app',
    demo: 'https://event-plataform-app.vercel.app/',
    title: 'Event Plataform Application with lessons schedule and CMS',
  },
  {
    id: 2,
    image: portfolioTwo,
    github: 'https://github.com/lucaspedroabreu/feedback-widget',
    demo: 'https://feedback-widget-two-pied.vercel.app/',
    title: 'Feedback Widget with Vite App',
  },
  {
    id: 3,
    image: portfolioThree,
    github: 'https://github.com/lucaspedroabreu/image-uploader-backend',
    demo: 'https://lpa-image-uploader.herokuapp.com/',
    title:
      'A simple single responsability app with complete functionality: Uploads images to a remote storage and lets you fetch it or remove it.',
  },
  {
    id: 4,
    image: portfolioFour,
    github: 'https://github.com/lucaspedroabreu/github_explorer',
    demo: 'https://github-explorer-rust-rho.vercel.app/',
    title: 'A simple Github explorer web application',
  },
  {
    id: 4,
    image: portfolioFive,
    github: 'https://github.com/lucaspedroabreu/feed-page-example',
    demo: 'https://feed-page-example.vercel.app/',
    title: 'A Mocking Social Feed Page',
  },
  {
    id: 5,
    image: portfolioSix,
    github: 'https://github.com/lucaspedroabreu/mordern-ui-todos-list',
    demo: 'https://mordern-ui-todos-list.vercel.app/',
    title: 'A modern UI Todo List App',
  },
  {
    id: 6,
    image: portfolioSeven,
    github: 'https://github.com/lucaspedroabreu/coffee-delivery-e-commerce',
    demo: 'https://coffee-delivery-e-commerce.vercel.app/',
    title: 'A incomplete e-commerce app for coffee delivery',
  },
]

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
              <a href={item.github} className="btn" target="_blank" rel="noreferrer noopener">
                GitHub
              </a>
              <a href={item.demo} className="btn btn-primary" target="_blank" rel="noreferrer noopener">
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Portfolio
