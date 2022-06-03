import React, { useRef, useState } from "react";
import { FaFacebookMessenger, FaWhatsapp } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import ReCAPTCHA from "react-google-recaptcha";
import "./contact-section.css";

import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const [isValid, setIsValid] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    if (!isValid) return;

    emailjs
      .sendForm(
        "service_hllpm15",
        "template_a11us7k",
        form.current,
        "i9GFQEd3u_B_PmnYQ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  function onChange(value) {
    console.log("Captcha value:", value);
    setIsValid(true);
  }

  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>lucas.abreu@gtrw.com.br</h5>
            <a
              href="mailto:lucas.abreu@gtrw.com.br"
              target="_blank"
              rel="noreferrer noopener"
            >
              Send a mail
            </a>
          </article>
          <article className="contact__option">
            <FaFacebookMessenger className="contact__option-icon" />
            <h4>Messanger</h4>
            <h5>Lucas Pedro Abreu</h5>
            <a
              href="https://m.me/lucaspedro.abreu"
              rel="noreferrer noopener"
              target="_blank"
            >
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <FaWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+55 (21) 97049-4914</h5>
            <a
              rel="noreferrer noopener"
              target="_blank"
              href="https://wa.me/5521970494914?text=Hello.%20I've%20visited%20your%20website%20and%20want%20to%20talk%20to%20you!"
            >
              Talk on WhatsApp
            </a>
          </article>
        </div>
        {/* {End of contact options} */}
        <form ref={form} onSubmit={sendEmail} className="contact__form">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" id="message" required></textarea>
          <div
            style={{ display: "flex", gap: "1rem", flexWrap: "wrap-reverse" }}
          >
            <button className="btn btn-primary" type="submit">
              Send Message
            </button>
            <ReCAPTCHA
              sitekey="6LfT9kAgAAAAAGL4-tdLsB8hkSL8SwTFocyX-z7b"
              onChange={onChange}
            />
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
