/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

import "./ArtCard.css";

function ArtCard({ artwork }) {
  const { coverIMG, altIMG, title, length, width, year } = artwork;
  const [activeIMG, setActiveIMG] = useState(coverIMG);
  // eslint-disable-next-line no-unused-vars
  const [modalIsShowing, setModalIsShowing] = useState(false);

  // const toggleModal = () => {
  //   setModalIsShowing(!modalIsShowing);
  // };

  // const toggleActiveImg = () => {
  //   activeIMG === coverIMG ? setActiveIMG(altIMG[0]) : setActiveIMG(coverIMG);
  // };

  return (
    <>
      <div className="ArtCard">
        <button
          className="active-image-container"
          type="button"
          // onClick={toggleModal}
        >
          <img
            className="active-img"
            src={activeIMG}
            alt="colorful painting of flowers by Saskia Binder"
          />
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
        </button>
      </div>

      {modalIsShowing && (
        <div className="modal">
          <button type="button">
            <FontAwesomeIcon icon={faX} />
          </button>
          <div>
            <img src={activeIMG} alt="artwork" />
          </div>
          <div>
            <h2>{title}</h2>
            <p>{year}</p>
            <p>
              {length} x {width} inches
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default ArtCard;
