import React from "react";
import { portfolio } from "../assets/portfolio";
import "./Portfolio.css";
import useLists from "../utils/useLists";

function Portfolio() {
  return (
    <section className="portfolio">
      <div className="portfolio-container">
        <div className="portfolio-head">
          <span>My </span>
          <span className="bold">Portfolio</span>
        </div>
        <div className="portfolio-list">{useLists(portfolio)}</div>
      </div>
    </section>
  );
}

export default Portfolio;
