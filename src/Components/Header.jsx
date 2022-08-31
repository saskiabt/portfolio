import React from "react";
import Button from "./Button";

function Header() {
  const headerStyles = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100vw",
    paddingLeft: "2%",
    paddingRight: "2%",
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
  };

  return (
    <div className="header" style={headerStyles}>
      <div id="name" className="font-face-gm" style={nameStyles}>
        SB
      </div>
      <div className="button-wrapper" style={wrapperStyles}>
        <Button text="About Me" />
        <Button text="Projects" />
        <Button text="Art" />
      </div>
    </div>
  );
}

export default Header;
