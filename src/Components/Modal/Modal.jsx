import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function Modal() {
  return (
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
  );
}

export default Modal;
