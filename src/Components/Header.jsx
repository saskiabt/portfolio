/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import "../styles/dark-mode.css";
import Button from "./Button";
import "../styles/nav/nav.css";
import { ModalContext } from "../context/modal-context";

function Header({ scrollToAbout }) {
  const { isDarkMode, setIsDarkMode } = useContext(ModalContext);

  const location = useLocation();
  const navigate = useNavigate();
  const goToLink = (URL) => {
    window.open(URL, "_blank");
  };

  const handleAboutClick = () => {
    // eslint-disable-next-line no-unused-expressions
    if (location.pathname === "/portfolio/art") {
      navigate("/portfolio");
    } else {
      scrollToAbout();
    }
  };

  return (
    <div className={isDarkMode ? "header dark-mode" : "header"}>
      <button className="home-button " type="button" onClick={handleAboutClick}>
        SB
      </button>

      <div className="button-wrapper">
        <Button text="Coding" onClick={handleAboutClick} />
        <Button
          text="Artwork"
          onClick={() => {
            navigate("/portfolio/art");
          }}
        />
        <button
          type="button"
          className="navButton"
          onClick={() => goToLink("https://www.linkedin.com/in/saskia-binder/")}
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </button>
        <button
          type="button"
          className="navButton"
          onClick={() => goToLink("https://github.com/saskiabt")}
        >
          <FontAwesomeIcon icon={faGithub} />
        </button>
        <button
          type="button"
          className="navButton"
          onClick={() => setIsDarkMode(!isDarkMode)}
        >
          <FontAwesomeIcon icon={isDarkMode ? faMoon : faSun} />
        </button>
      </div>
    </div>
  );
}

export default Header;
