/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import "../../styles/dark-mode.css";
import Button from "../Button";
import "./nav.css";
import { GlobalContext } from "../../context/modal-context";

function Header() {
  const { isDarkMode, setIsDarkMode } = useContext(GlobalContext);

  const navigate = useNavigate();
  const goToLink = (URL) => {
    window.open(URL, "_blank");
  };

  const handleAboutClick = () => {
    navigate("/");
  };

  return (
    <div className={isDarkMode ? "header dark-mode" : "header"}>
      <button className="home-button " type="button" onClick={handleAboutClick}>
        SB
      </button>

      <div className="button-wrapper">
        <Button text="About" onClick={() => navigate("/")} />

        <Button text="Coding" onClick={() => navigate("/coding")} />
        <Button
          text="Artwork"
          onClick={() => {
            navigate("/art");
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
          onClick={() => goToLink("https://www.instagram.com/saskiamair/")}
        >
          <FontAwesomeIcon icon={faInstagram} />
        </button>
        <button
          type="button"
          className="navButton"
          onClick={() => setIsDarkMode(!isDarkMode)}
        >
          <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
        </button>
      </div>
    </div>
  );
}

export default Header;
