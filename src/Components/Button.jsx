/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from "react";

function Button(props) {
  const buttonStyle = {
    background: "none",
    border: 0,
    borderTop: "1px solid black",
    borderLeft: "1px solid black",
    borderRight: "1px solid black",
    fontSize: "24px",
    fontFamily: "roboto-mono,monospace",
    fontWeight: 200,
    fontStyle: "normal",
    padding: "5px",
  };

  return (
    <button
      className="navButton"
      type="button"
      onClick={props.onClick}
      style={buttonStyle}
    >
      {props.text}
    </button>
  );
}

export default Button;
