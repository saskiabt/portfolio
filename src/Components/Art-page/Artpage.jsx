import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import ArtCard from "../ArtCard/ArtCard";
import "./Artpage.css";
import "./modal.css";
import "../../styles/dark-mode.css";
import artworks from "./artworks";
import { ModalContext } from "../../context/modal-context";

function Artpage() {
  const { modal, setModal, isDarkMode } = useContext(ModalContext);

  const hideModal = () => {
    setModal({
      ...modal,
      isShowing: false,
      image: "",
      altIMG: "",
      title: "",
      length: null,
      width: null,
      year: "",
      material: "",
    });
  };

  return (
    <div className={isDarkMode ? "dark-mode ArtPage" : "ArtPage"}>
      {!modal.isShowing ? (
        <>
          <div className="lr">
            <ArtCard artwork={artworks.flowers2} />
            <ArtCard artwork={artworks.binta} />
            <ArtCard artwork={artworks.yellowRainCoat} />
            <ArtCard artwork={artworks.talia} />
            <ArtCard artwork={artworks.colorBlock} />
            <ArtCard artwork={artworks.orange} />
          </div>
          <div className="lr">
            <ArtCard artwork={artworks.flowers} />
            <ArtCard artwork={artworks.ianLG} />
            <ArtCard artwork={artworks.fernando} />
            <ArtCard artwork={artworks.magenta} />
            <ArtCard artwork={artworks.blueKimono} />
          </div>
        </>
      ) : (
        <div className="modal">
          <div className="left">
            <button type="button" onClick={hideModal}>
              <FontAwesomeIcon icon={faArrowLeft} id="arrow" /> Back
            </button>
            <div className="modal-info">
              <h3>{modal.title}</h3>
              <p>{modal.year}</p>
              <p>{modal.material}</p>
              <p>
                {modal.length} x {modal.width} inches
              </p>
            </div>
          </div>

          <ArtCard artwork={modal} />
        </div>
      )}
    </div>
  );
}

export default Artpage;
