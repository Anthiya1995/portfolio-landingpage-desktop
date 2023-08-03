import React from "react";
import { passions } from "../assets/passions";
import useLists from "../utils/useLists";
import "./Passions.css";

function Passions() {
  return (
    <section className="passions">
      <div className="passions-container">
        <div className="passions-head">
          <span>Additional </span>
          <span className="bold">passions</span>
        </div>
        <div className="passions-list">{useLists(passions)}</div>
      </div>
    </section>
  );
}

export default Passions;
