import React from "react";
import Header from "./components/Header";
import Passions from "./components/Passions";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Background from "./assets/image/Background.png";
import BackToTopText from "./components/BackToTopText";

import "./App.css";

function App() {
  return (
    <div
      id="root"
      style={{
        backgroundImage: `url(${Background})`,
      }}
    >
      <BackToTopText />
      <div id="banner">
        <Header />
      </div>
      <div id="passions">
        <Passions />
      </div>
      <div id="portfolio">
        <Portfolio />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}

export default App;
