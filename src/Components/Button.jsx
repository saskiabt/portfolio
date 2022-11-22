/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from "react";
import "./Nav/nav.css";

function Button(props) {
  return (
    <button className="navButton" type="button" onClick={props.onClick}>
      {props.text}
    </button>
  );
}

export default Button;
