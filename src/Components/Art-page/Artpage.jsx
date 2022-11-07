import React, { useState } from "react";
import "./Artpage.css";
import flowers2 from "../../img/artpage/flowers2.jpg";
import flowers2ZO from "../../img/artpage/flowers2-zoomout.png";

function Artpage() {
  const [flowers2Source, setFlowers2Source] = useState(flowers2);

  return (
    <div className="ArtPage">
      <div className="card">
        <div className="active-image-container">
          <img
            className="card-img"
            src={flowers2Source}
            alt="colorful painting of flowers by Saskia Binder"
          />
        </div>
        <div className="button-container">
          <button
            type="button"
            className="img-button"
            onClick={() => setFlowers2Source(flowers2)}
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
            onClick={() => setFlowers2Source(flowers2ZO)}
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
        </div>
      </div>
    </div>
  );
}

export default Artpage;
