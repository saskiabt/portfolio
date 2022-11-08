import React, { useState } from "react";
import ArtCard from "../ArtCard/ArtCard.tsx";
import "./Artpage.css";
import flowers2 from "../../img/artpage/flowers2.jpg";
// import flowers2ZO from "../../img/artpage/flowers2-zoomout.png";
import flowers from "../../img/artpage/flowers1.png";
import ianLG from "../../img/artpage/ian-lg.jpg";
import yellowRainCoat from "../../img/artpage/yellowraincoat.png";
import talia from "../../img/artpage/talia.png";
import fernando from "../../img/artpage/fernando.jpg";
import binta from "../../img/artpage/binta.jpeg";
import magenta from "../../img/artpage/magenta.jpeg";
import orange from "../../img/artpage/orange.png";
import blueKimono from "../../img/artpage/blueKimono.jpg";

function Artpage() {
  const [source, setSource] = useState({
    flowers2,
    flowers,
    ianLG,
    yellowRainCoat,
    talia,
    fernando,
    binta,
    magenta,
    orange,
    blueKimono,
  });

  return (
    <div className="ArtPage">
      <div className="lr">
        <ArtCard
          source={source.flowers2}
          setSource={setSource}
          multipleImages
        />
        <ArtCard source={source.ianLG} />
        <ArtCard source={source.yellowRainCoat} />
        <ArtCard source={source.talia} />
        <ArtCard source={source.blueKimono} />
      </div>
      <div className="lr">
        <ArtCard source={source.flowers} />
        <ArtCard source={source.binta} />
        <ArtCard source={source.fernando} />
        <ArtCard source={source.magenta} />
        <ArtCard source={source.orange} />
      </div>

      {/* <ArtCard source={source.fernando} /> */}
    </div>
    /* <div className="button-container">
          <button
            type="button"
            className="img-button"
            onClick={() =>
              setSource({
                ...source,
                flowers2,
              })
            }
          >
            <img
              src={flowers2}
              alt="colorful
                painting
                of
                flowers
                by
                Saskia
                Binder"
            />
          </button>
          <button
            type="button"
            className="img-button"
            onClick={() =>
              setSource({
                ...source,
                flowers2: flowers2ZO,
              })
            }
          >
            <img
              src={flowers2ZO}
              alt="colorful
                painting
                of
                flowers
                by
                Saskia
                Binder"
            />
          </button>
        </div> */
  );
}

export default Artpage;
