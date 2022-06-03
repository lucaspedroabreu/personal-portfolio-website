import React from "react";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";

const SocialLinks = () => {
  return (
    <div className="social_links">
      <a
        href="https://linkedin.com/lucaspedroabreu"
        target="_blank"
        rel="noreferrer noopener"
      >
        <FaLinkedin /> <span>LinkedIn</span>
      </a>
      <a
        href="https://instagram.com/eulucaspedroabreu"
        target="_blank"
        rel="noreferrer noopener"
      >
        <FaInstagram /> <span>Instagram</span>
      </a>
      <a
        href="https://github.com/lucaspedroabreu"
        target="_blank"
        rel="noreferrer noopener"
      >
        <FaGithub /> <span>GitHub</span>
      </a>
    </div>
  );
};

export default SocialLinks;
