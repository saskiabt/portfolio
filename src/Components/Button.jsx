/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from "react";

function Button(props) {
  const buttonStyle = {
    background: "none",
    border: 0,
    fontSize: "20px",
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
