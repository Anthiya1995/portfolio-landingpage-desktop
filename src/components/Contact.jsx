import React from "react";
import "./Contact.css";
import wave from "../assets/image/wave.svg";
import Git from "../assets/image/Git.png";
import Instagram from "../assets/image/Instagram.png";
import Email from "../assets/image/Email.png";
import telephone from "../assets/image/telephone.png";

const ContactEmailLink = () => {
  const myEmail = "anthiya.r@gmail.com";

  return (
    <a href={`mailto:${myEmail}`}>
      <img src={Email} alt="email-icon" />
    </a>
  );
};

function Contact() {
  return (
    <section className="contact-me">
      <div className="contact-container">
        <div className="contact-head">
          <span>Contact </span>
          <span className="bold">Me </span>
        </div>
        <div className="contact-list">
          <a href="https://github.com">
            <img src={Git} alt="git-icon" />
          </a>
          <a href="https://www.instagram.com">
            <img src={Instagram} alt="ig-icon" />
          </a>
          <ContactEmailLink />
          <a href="tel:+123456789">
            <img src={telephone} alt="tel-icon" />
          </a>
        </div>
      </div>
      <img src={wave} alt="wave" className="wave" />
    </section>
  );
}

export default Contact;
