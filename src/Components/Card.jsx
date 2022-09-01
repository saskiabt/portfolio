/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
import React from "react";

function Card({ src, name, text, link }) {
  const cardStyle = {
    maxWidth: "50vmin",
    border: "1px solid black",
  };

  const gifStyle = {
    width: "100%",
    display: "flex",
    cursor: "pointer",
  };

  const nameStyle = {
    fontFamily: "roboto-mono,monospace",
    fontWeight: 400,
    fontStyle: "normal",
    paddingTop: "10px",
  };

  const cardTextStyle = {
    padding: "10px",
  };

  const handleClick = () => {
    window.open(link, "blank");
  };

  return (
    <div className="card" style={cardStyle}>
      <div onClick={() => handleClick(link)}>
        <img src={src} className="gifs" alt="card gif" style={gifStyle} />
      </div>
      <div className="card-name" style={nameStyle}>
        {name}
      </div>
      <p className="card-text" style={cardTextStyle}>
        {text}
      </p>
    </div>
  );
}

export default Card;
