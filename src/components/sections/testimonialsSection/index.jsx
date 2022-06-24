import React from "react"
import "./testimonials-section.css"

// import Swiper core and required modules
import { Pagination } from "swiper"

import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"

const testimonialsDB = [
  {
    avatar: "avatar1",
    name: "Laura",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam labore explicabo eveniet obcaecati asperiores. Soluta explicabo estoptio cumque praesentium!",
  },
  {
    avatar: "avatar2",
    name: "Sophia",
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus aperiam ipsum, ab aliquid expedita officia voluptate quis placeat corporis perferendis.",
  },
  {
    avatar: "avatar3",
    name: "Ricardo",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam labore explicabo eveniet obcaecati asperiores. Soluta explicabo estoptio cumque praesentium!",
  },
]

function Testimonials() {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {testimonialsDB.map((user, index) => (
          <SwiperSlide key={index}>
            <article className="testimonial" key={index}>
              <div className="client__avatar">
                <img src={user.avatar} alt={user.name} />
              </div>
              <h5 className="client__name">{user.name}</h5>
              <small className="client__review">{user.review}</small>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Testimonials
