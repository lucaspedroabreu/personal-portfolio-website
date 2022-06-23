import React from "react"
import { BiCheck } from "react-icons/bi"
import "./services-section.css"

function Services() {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li className="service__item">
              <BiCheck className="service__item-icon" />
              <p>Corporate homepages</p>
            </li>
            <li className="service__item">
              <BiCheck className="service__item-icon" />
              <p>Landing pages</p>
            </li>
            <li className="service__item">
              <BiCheck className="service__item-icon" />
              <p>Traditional Websites</p>
            </li>
            <li className="service__item">
              <BiCheck className="service__item-icon" />
              <p>One Page Applications</p>
            </li>
            <li className="service__item">
              <BiCheck className="service__item-icon" />
              <p>Blogs with CMS and blogging tools</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Keynote</h3>
          </div>

          <ul className="service__list">
            <li className="service__item">
              <BiCheck className="service__item-icon" size={40} />
              <p>
                Event driven keynote speaches to consolidate corporate culture.
              </p>
            </li>
            <li className="service__item">
              <BiCheck className="service__item-icon" size={40} />
              <p>
                Interactive speaches to encourage team work and integration.
              </p>
            </li>
            <li className="service__item">
              <BiCheck className="service__item-icon" size={50} />
              <p>
                Roster of best selling book oriented keynotes to promote best
                practices and mindset.
              </p>
            </li>
            <li className="service__item">
              <BiCheck className="service__item-icon" size={40} />
              <p>
                Leadership training for better presentation and daily meetings.
              </p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Coaching</h3>
          </div>

          <ul className="service__list">
            <li className="service__item">
              <BiCheck className="service__item-icon" />
              <p>Assisstance on bridging capability gaps</p>
            </li>
            <li className="service__item">
              <BiCheck className="service__item-icon" />
              <p>Self-centric strategies to develop momentum</p>
            </li>
            <li className="service__item">
              <BiCheck className="service__item-icon" />
              <p>
                Goal assessment to identify and develop better goal adherence
              </p>
            </li>
            <li className="service__item">
              <BiCheck className="service__item-icon" />
              <p>
                Personality trait assessment for better teamwork and cohesion
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services
