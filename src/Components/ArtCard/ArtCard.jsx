/* eslint-disable react/prop-types */
import React, { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";

import "./ArtCard.css";
import { ModalContext } from "../../context/modal-context";

function ArtCard({ artwork }) {
  const { image, altIMG, title, length, width, year, material } = artwork;
  const [activeIMG, setActiveIMG] = useState(image);
  const { modal, setModal } = useContext(ModalContext);

  const showModal = () => {
    setModal({
      ...modal,
      isShowing: true,
      image,
      altIMG,
      title,
      length,
      width,
      year,
      material,
    });
  };

  return (
    <div className={modal.isShowing ? "ArtCard-Modal" : "ArtCard"}>
      <button
        className="active-image-container"
        type="button"
        onClick={!modal.isShowing ? showModal : null}
        style={modal.isShowing ? { border: "0px" } : null}
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
              setActiveIMG(image);
            }}
            onMouseOver={() => {
              setActiveIMG(image);
            }}
            onFocus={() => {
              setActiveIMG(image);
            }}
          >
            <img src={image} alt="thumbnail button" />
          </button>
          {altIMG.map((btnImage, i) => {
            return (
              <button
                type="button"
                className="thumbnail"
                key={uuidv4()}
                onClick={() => {
                  setActiveIMG(altIMG[i]);
                }}
                onMouseOver={() => {
                  setActiveIMG(altIMG[i]);
                }}
                onFocus={() => {
                  setActiveIMG(altIMG[i]);
                }}
              >
                <img src={btnImage} alt="thumbnail button" />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default ArtCard;
