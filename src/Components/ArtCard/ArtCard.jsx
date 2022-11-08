/* eslint-disable react/prop-types */
import React from "react";
import "./ArtCard.css";

// type ArtCardProps = {
//   source: string;
//   setSource: Function;
//   children?: React.ReactNode;
// };

function ArtCard({ source, setSource, ...props }) {
  return (
    <div className="ArtCard">
      <button className="active-image-container" type="button">
        <img
          className="card-img"
          src={source}
          alt="colorful painting of flowers by Saskia Binder"
        />
      </button>
      {props.children || null}
    </div>
  );
}

export default ArtCard;
