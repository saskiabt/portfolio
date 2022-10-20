/* eslint-disable react/prop-types */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Button from "./Button";
import headerStyles from "../styles/headerStyles";
import nameStyles from "../styles/nameStyles";
import wrapperStyles from "../styles/wrapperStyles";
import "../styles/nav/nav.css";

function Header({ scrollToAbout, scrollToProjects }) {
  const goToLinkedin = () => {
    window.open("https://www.linkedin.com/in/saskia-binder/", "_blank");
  };
  return (
    <div className="header" style={headerStyles}>
      <div id="name" className="font-face-gm" style={nameStyles}>
        SB
      </div>
      <div className="button-wrapper" style={wrapperStyles}>
        <Button text="About" onClick={scrollToAbout} />
        <Button text="Projects" onClick={scrollToProjects} />
        <button type="button" className="navButton" onClick={goToLinkedin}>
          <FontAwesomeIcon icon={faLinkedin} />
        </button>
        {/* <Button text="Art" /> */}
      </div>
    </div>
  );
}

export default Header;
