/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from "react";

function Button(props) {
  const buttonStyle = {
    background: "none",
    border: 0,
    fontSize: "24px",
    fontFamily: "roboto-mono,monospace",
    fontWeight: 200,
    fontStyle: "normal",
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
