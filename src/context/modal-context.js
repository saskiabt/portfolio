/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, useState } from "react";

export const GlobalContext = createContext(null);

export function ModalProvider({ children }) {
  const [modal, setModal] = useState({
    isShowing: false,
    image: "",
    altIMG: "",
    title: "",
    length: null,
    width: null,
    year: "",
    material: "",
  });

  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <GlobalContext.Provider
      value={{
        modal,
        setModal,
        isExpanded,
        setIsExpanded,
        isDarkMode,
        setIsDarkMode,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
