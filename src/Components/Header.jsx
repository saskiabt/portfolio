/* eslint-disable react/prop-types */
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import Button from "./Button";
import "../styles/nav/nav.css";

function Header({ scrollToAbout, scrollToProjects }) {
  const location = useLocation();
  const navigate = useNavigate();
  const goToLink = (URL) => {
    window.open(URL, "_blank");
  };

  const handleAboutClick = () => {
    // eslint-disable-next-line no-unused-expressions
    if (location.pathname === "/art") {
      navigate("/portfolio");
    } else {
      scrollToAbout();
    }
  };

  const handleProjectsClick = () => {
    if (location.pathname === "/art") {
      navigate("/portfolio");
    } else {
      scrollToProjects();
    }
  };

  return (
    <div className="header">
      <button className="home-button " type="button" onClick={handleAboutClick}>
        SB
      </button>

      <div className="button-wrapper">
        <Button text="About" onClick={handleAboutClick} />
        <Button text="Projects" onClick={handleProjectsClick} />
        <Button
          text="Art"
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
      </div>
    </div>
  );
}

export default Header;
