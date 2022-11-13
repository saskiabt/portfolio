/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
import React from "react";
import openLink from "../openLink";
import "./card.css";

function Card({ src, name, text, link, repo }) {
  return (
    <div className="Card">
      <div onClick={() => openLink(link)}>
        <img src={src} className="gifs" alt="card gif" />
      </div>
      <div className="card-name">{name}</div>
      <div className="card-bottom">
        <p className="card-text">{text}</p>
        <div className="button-container">
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
    </div>
  );
}

export default Card;
