import React from "react";
import heroimg from "../assets/image/heroimg.png";
import "./Header.css";

function Header() {
  return (
    <header id="banner">
      <nav className="nav-bar">
        <div className="header-text">
          <a href="#banner">ANTHIYA PORTFOLIO</a>
        </div>
        <div className="menu-list">
          <span>
            <a href="#banner">About</a>
          </span>
          <span>
            <a href="#passions">Passions</a>
          </span>
          <span>
            <a href="#portfolio">Portfolio</a>
          </span>
          <span>
            <a href="#contact">
              <button>Contact Me</button>
            </a>
          </span>
        </div>
      </nav>
      <div className="banner-content">
        <article>
          <h2>Hi !</h2>
          <div className="banner-text">
            <div className="introduction">I'm Anthiya </div>
            <div className="dynamic-text">a Full-Stack Developer</div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            corrupti cum eius beatae. Vel dignissimos quaerat debitis minus
            repellendus molestiae nihil! Recusandae voluptatem animi voluptate
            nihil omnis quam ab dicta.
          </p>
        </article>
        <div className="hero-image">
          <img src={heroimg} alt="banner-image" />
        </div>
      </div>
    </header>
  );
}

export default Header;
