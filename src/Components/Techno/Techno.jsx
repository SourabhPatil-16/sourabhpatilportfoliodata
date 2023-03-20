import React from "react";

import "./techno.css";
import tech from "../../../public/images/about1.gif";

const Techno = (props) => {
  return (
    <div id="tech">
      <h1 className="heading">Check About My Skills & Technologies</h1>
      <p>
        <img src={tech} alt="technologies" className="img" />
        <ul className="skills">
          <li>HTML</li>
          <li>CSS</li>
          <li>JAVASCRIPT</li>
          <li>Reactjs</li>
          <li>Redux</li>
          <li>Bootstrap</li>
          <li>aws</li>
        </ul>
      </p>
      <div className="go-top">
        <strong>
          <a href="#top">⇑</a>
        </strong>
      </div>
    </div>
  );
};

export default Techno;
