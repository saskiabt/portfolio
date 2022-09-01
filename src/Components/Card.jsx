/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
import React from "react";
import openLink from "./openLink";

function Card({ src, name, text, link, repo }) {
  const cardStyle = {
    maxWidth: "60vmin",
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
    padding: "0px 50px 15px 50px",
  };

  const buttonContainerStyles = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: "2em",
    gap: ".5em",
  };

  const buttonStyle = {
    border: "1px 1px 0px solid black",
    fontFamily: "roboto-mono, monospace",
    fontWeight: "200",
    fontStyle: "normal",
    padding: "5px",
    width: "75%",
    cursor: "pointer",
    borderWidth: "0.1px",
    background: "aliceblue",
  };

  return (
    <div className="card" style={cardStyle}>
      <div onClick={() => openLink(link)}>
        <img src={src} className="gifs" alt="card gif" style={gifStyle} />
      </div>
      <div className="card-name" style={nameStyle}>
        {name}
      </div>
      <p className="card-text" style={cardTextStyle}>
        {text}
      </p>
      <div className="button-container" style={buttonContainerStyles}>
        <button
          type="button"
          style={buttonStyle}
          onClick={() => openLink(link)}
        >
          Live Site
        </button>
        <button
          type="button"
          style={buttonStyle}
          onClick={() => openLink(repo)}
        >
          Github Repo
        </button>
      </div>
    </div>
  );
}

export default Card;
