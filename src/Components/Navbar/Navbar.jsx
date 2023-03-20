import React, { useRef } from "react";

import "./navbar.css";

const Navbar = (props) => {
  // const logo = useRef(null);

  // function rotateImg() {
  //   logo.current.style.transform = "rotate(180deg)";
  // }

  return (
    <div className="nav" id="top">
      <ul>
        <li className="contact">
          <a href="#contact" className="animate">
            Contact
          </a>
        </li>
        <li className="logo  ">
          <a href="#tech" className="animate">
            Skills
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
