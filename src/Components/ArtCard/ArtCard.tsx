import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

import "./ArtCard.css";
import { ArtInterface } from "../../interfaces/ArtCardInterface";

function ArtCard({
  artwork,
  setArtworks,
}: {
  artwork: ArtInterface;
  setArtworks: Function;
}) {
  const { coverIMG, altIMG, title, length, width, year, material } = artwork;
  const [activeIMG, setActiveIMG] = useState(coverIMG);
  const [modalIsShowing, setModalIsShowing] = useState(false);

  const toggleModal = () => {
    setModalIsShowing(!modalIsShowing);
  };

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
              {altIMG.map((image: string, i: number) => {
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
            <img src={activeIMG} />
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
