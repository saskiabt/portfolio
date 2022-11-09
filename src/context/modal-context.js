import React, { createContext, useState } from "react";
import PropTypes, { element } from "prop-types";

export const ModalContext = createContext(null);

// eslint-disable-next-line react/require-default-props
export function ModalProvider({ children }) {
  const [modal, setModal] = useState({
    isShowing: false,
    image: "",
    altIMG: "",
    title: "",
    length: null,
    width: null,
    year: "",
    materials: "",
  });

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <ModalContext.Provider value={{ modal, setModal }}>
      {children}
    </ModalContext.Provider>
  );
}

ModalProvider.propTypes = {
  children:
    PropTypes.objectOf(PropTypes.instanceOf(element)) || PropTypes.symbol,
};
