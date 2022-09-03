/* eslint-disable react/prop-types */
import React from "react";
import Button from "./Button";
import headerStyles from "../styles/headerStyles";
import nameStyles from "../styles/nameStyles";
import wrapperStyles from "../styles/wrapperStyles";

function Header({ scrollToAbout, scrollToProjects }) {
  return (
    <div className="header" style={headerStyles}>
      <div id="name" className="font-face-gm" style={nameStyles}>
        SB
      </div>
      <div className="button-wrapper" style={wrapperStyles}>
        <Button text="About" onClick={scrollToAbout} />
        <Button text="Projects" onClick={scrollToProjects} />
        {/* <Button text="Art" /> */}
      </div>
    </div>
  );
}

export default Header;
