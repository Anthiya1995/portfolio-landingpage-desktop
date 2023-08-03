import React from "react";
import { useState, useEffect } from "react";
import "./BackToTopBTN.css";

function BackToTopButton() {
  const [BackToTopButton, setBackToTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      {BackToTopButton && (
        <button
          className="to-top-btn"
          style={{
            position: "fixed",
            bottom: "50px",
            right: "50px",
            height: "70px",
            width: "70px",
            fontSize: "70px",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={scrollUp}
        >
          ^
        </button>
      )}
    </div>
  );
}

export default BackToTopButton;
