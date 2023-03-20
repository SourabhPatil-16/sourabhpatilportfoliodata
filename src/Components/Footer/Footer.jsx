import React from "react";

import "./footer.css";

const Footer = (props) => {
  return (
    <div className="footer">
      <div className="f-content">
        <strong className="footerEle">
          <a class="gmail" href="mailto:sdpatil166@gmail.com">
            sdpatil166@gmail.com
          </a>
          <br />
          &nbsp; &nbsp; &nbsp; &nbsp;
          <a href="tel:+918007018591" className="tel">
            +918007018591
          </a>
        </strong>
      </div>
    </div>
  );
};

export default Footer;
