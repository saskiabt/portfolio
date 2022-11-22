import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { GlobalContext } from "../../context/modal-context";

function Modal() {
  const { modal, setModal } = useContext(GlobalContext);

  return (
    <div className="modal">
      <div className="left">
        <button
          type="button"
          onClick={() =>
            setModal({
              ...modal,
              isShowing: false,
            })
          }
        >
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
      <img src={modal.image} alt="artwork" />
    </div>
  );
}

export default Modal;
