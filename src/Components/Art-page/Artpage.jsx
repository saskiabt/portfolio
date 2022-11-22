import React, { useContext } from "react";

import ArtCard from "../ArtCard/ArtCard";
import "./Artpage.css";
import "./modal.css";
import "../../styles/dark-mode.css";
import artworks from "./artworks";
import { ModalContext } from "../../context/modal-context";

function Artpage() {
  const { isDarkMode } = useContext(ModalContext);

  return (
    <div className={!isDarkMode ? "ArtPage" : "dark-mode ArtPage"}>
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
    </div>
  );
}

export default Artpage;
