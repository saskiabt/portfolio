/* eslint-disable react/prop-types */
import React, { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";

import "./ArtCard.css";
import { ModalContext } from "../../context/modal-context";

function ArtCard({ artwork }) {
  const { coverIMG, altIMG, title, length, width, year, materials } = artwork;
  const [activeIMG, setActiveIMG] = useState(coverIMG);
  const { modal, setModal } = useContext(ModalContext);

  const showModal = () => {
    setModal({
      ...modal,
      isShowing: true,
      image: coverIMG,
      altIMG,
      title,
      length,
      width,
      year,
      materials,
    });
  };

  return (
    <div className="ArtCard">
      <button
        className="active-image-container"
        type="button"
        onClick={showModal}
      >
        <img
          className="active-img"
          src={activeIMG}
          alt="colorful painting of flowers by Saskia Binder"
        />
      </button>
      {altIMG.length > 0 && (
        <div className="thumbnail-container">
          <button
            type="button"
            className="thumbnail"
            onClick={() => {
              setActiveIMG(coverIMG);
            }}
          >
            <img src={coverIMG} alt="thumbnail button" />
          </button>
          {altIMG.map((image, i) => {
            return (
              <button
                type="button"
                className="thumbnail"
                key={uuidv4()}
                onClick={() => {
                  setActiveIMG(altIMG[i]);
                }}
              >
                <img src={image} alt="thumbnail button" />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default ArtCard;
