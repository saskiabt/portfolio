/* eslint-disable react/prop-types */
import React from "react";

function Card({ src, name, text }) {
  const cardStyle = {
    maxWidth: "50vmin",
    border: "1px solid black",
  };

  const gifStyle = {
    width: "100%",
    display: "flex",
  };

  const nameStyle = {
    fontFamily: "roboto-mono,monospace",
    fontWeight: 400,
    fontStyle: "normal",
  };

  return (
    <div className="card" style={cardStyle}>
      <img src={src} className="gifs" alt="card gif" style={gifStyle} />
      <div className="card-name" style={nameStyle}>
        {name}
      </div>
      <p>{text}</p>
    </div>
  );
}

export default Card;
