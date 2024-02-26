import React from "react";
import { useOutletContext } from "react-router-dom";
import { useState } from "react";
import "./LandingPage.css";
import artworks from "../Art-page/artworks";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const { aboutSectionRef } = useOutletContext();
  const navigate = useNavigate();

  const [isHover, setHovered] = useState(false);

  const handleMouseOver = () => {
    setHovered(true);
  };
  const handleMouseOut = () => {
    setHovered(false);
  };

  return (
    <div className="LandingPage">
      <div className="header-row">
        <h1 className="header-row">Saskia Binder</h1>
      </div>
      <div className="content-row">
        <button
          className={`button-with-image ${isHover ? "hovered" : ""}`}
          onMouseEnter={handleMouseOver}
          onMouseLeave={handleMouseOut}
          onClick={() => {
            navigate("/aboutMe");
          }}
        >
          <img src={artworks.flowers.image}></img>
          {isHover && <span>Enter</span>}
        </button>
      </div>
      <div className="footer-row">
        <h1 className="footer-row rotated">Saskia Binder</h1>
      </div>
    </div>
  );
}

export default LandingPage;
