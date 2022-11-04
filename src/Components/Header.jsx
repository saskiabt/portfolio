/* eslint-disable react/prop-types */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import Button from "./Button";
import headerStyles from "../styles/headerStyles";
import nameStyles from "../styles/nameStyles";
import wrapperStyles from "../styles/wrapperStyles";
import "../styles/nav/nav.css";

function Header({ scrollToAbout, scrollToProjects }) {
  const goToLink = (URL) => {
    window.open(URL, "_blank");
  };
  return (
    <div className="header" style={headerStyles}>
      <div id="name" className="font-face-gm" style={nameStyles}>
        <button className="home-button" type="button" onClick={scrollToAbout}>
          SB
        </button>
      </div>
      <div className="button-wrapper" style={wrapperStyles}>
        <Button text="About" onClick={scrollToAbout} />
        <Button text="Projects" onClick={scrollToProjects} />
        <button
          type="button"
          className="navButton"
          onClick={() => goToLink("https://www.linkedin.com/in/saskia-binder/")}
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </button>
        <button
          type="button"
          className="navButton"
          onClick={() => goToLink("https://github.com/saskiabt")}
        >
          <FontAwesomeIcon icon={faGithub} />
        </button>
        {/* <Button text="Art" /> */}
      </div>
    </div>
  );
}

export default Header;
