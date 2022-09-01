/* eslint-disable react/prop-types */
import React from "react";
import Button from "./Button";
import scrollDown from "./scrollDown";

function Header({ aboutSection, projectSection }) {
  const headerStyles = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    width: "100vw",
    paddingLeft: "2%",
    paddingRight: "2%",
    fontSize: "1.5em",
    borderBottom: "1px solid black",
    position: "sticky",
    top: 0,
    backgroundColor: "white",
  };

  const nameStyles = {
    paddingTop: "10px",
    fontSize: "2.5em",
    marginBlockStart: 0,
    marginBlockEnd: 0,
    display: "flex",
    alignItems: "flex-end",
  };

  const wrapperStyles = {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    paddingBottom: "1px",
    gap: "1em",
  };

  return (
    <div className="header" style={headerStyles}>
      <div id="name" className="font-face-gm" style={nameStyles}>
        SB
      </div>
      <div className="button-wrapper" style={wrapperStyles}>
        <Button text="About" onclick={() => scrollDown(aboutSection)} />
        <Button text="Projects" onclick={() => scrollDown(projectSection)} />
        {/* <Button text="Art" /> */}
      </div>
    </div>
  );
}

export default Header;
