/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
import React from "react";
import openLink from "./openLink";

function Card({ src, name, text, link, repo }) {
  const cardStyle = {
    border: "1px solid black",
    // borderRadius: "35px",
  };

  const gifStyle = {
    width: "100%",
    display: "flex",
    cursor: "pointer",
    // borderRadius: "18px 18px 0px 0px;",
  };

  const nameStyle = {
    fontFamily: "roboto-mono,monospace",
    fontWeight: 400,
    fontStyle: "normal",
    paddingTop: "10px",
    fontSize: "larger",
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
          onClick={() => openLink(link)}
          className="card-button"
        >
          Live Site
        </button>
        <button
          type="button"
          onClick={() => openLink(repo)}
          className="card-button"
        >
          Github Repo
        </button>
      </div>
    </div>
  );
}

export default Card;
