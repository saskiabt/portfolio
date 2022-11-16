import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX, faSun } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import "./MobileNav.css";
import { ModalContext } from "../../context/modal-context";
import openLink from "../openLink";

function MobileNav() {
  const navigate = useNavigate();
  const { isExpanded, setIsExpanded, isDarkMode, setIsDarkMode } =
    useContext(ModalContext);
  return (
    <div className="MobileNav">
      {!isExpanded ? (
        <div className="not-expanded" style={{ width: "100%" }}>
          <p>SB</p>
          <button type="button" onClick={() => setIsExpanded(true)}>
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
      ) : (
        <div className="dropdown">
          <button type="button">
            <FontAwesomeIcon icon={faX} onClick={() => setIsExpanded(false)} />
          </button>

          <button
            type="button"
            onClick={() => {
              setIsExpanded(false);
              navigate("/portfolio");
            }}
          >
            Coding
          </button>
          <button
            type="button"
            onClick={() => {
              setIsExpanded(false);
              navigate("/portfolio/art");
            }}
          >
            ArtWork
          </button>
          <button
            type="button"
            onClick={() => openLink("https://github.com/saskiabt")}
          >
            <FontAwesomeIcon icon={faGithub} />
          </button>
          <button
            type="button"
            onClick={() =>
              openLink("https://www.linkedin.com/in/saskia-binder/")
            }
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </button>
          <button
            type="button"
            className="navButton"
            onClick={() => setIsDarkMode(!isDarkMode)}
          >
            <FontAwesomeIcon icon={isDarkMode ? faMoon : faSun} />
          </button>
        </div>
      )}
    </div>
  );
}

export default MobileNav;
