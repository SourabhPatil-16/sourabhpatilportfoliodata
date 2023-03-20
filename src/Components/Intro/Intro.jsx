import React from "react";

import "./intro.css";

import Me from "../../../public/images/me.gif";

const Intro = (props) => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h1 className="i-intro">Hello ,My name is</h1>
          <h1 className="i-name">Sourabh Patil</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item"> Frontend Web Developer</div>
              <div className="i-title-item">UI Designer</div>
              <div className="i-title-item">MongoDB Handler</div>
              <div className="i-title-item">Cloud Architect</div>
              <div className="i-title-item">Photographer</div>
            </div>
          </div>
          <div className="i-description">
            I am a professional frontend UI developer with latest technologies.
            I am working with Reactjs ,Bootstrap5,Material UI,React Modals,etc.
            I design and develope websites for customers of all sizes.
          </div>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={Me} alt="" className="i-img" />
      </div>
    </div>
  );
};

export default Intro;
