/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import "./AboutMe.css";

const AboutMe = React.forwardRef((props, ref) => {
  const navigate = useNavigate();

  const [isItalic, setIsItalic] = useState(false);

  const buttonStyle = {
    background: "none",
    border: "0px",
  };
  return (
    <div className="about-section" ref={ref}>
      <h1 id="greeting">
        <Typewriter
          words={["Saskia Binder"]}
          loop={1}
          cursor={false}
          cursorBlinking={false}
          typeSpeed={120}
          className="greeting"
        />
      </h1>
      <div className="slide-in">
        <p>I`m a full stack web developer and artist based in Brooklyn, NY.</p>
        <p>
          I am proficient in React / Redux, JavaScript, TypeScript, Python,
          NodeJS, SQL, MongoDB,CSS/SCSS,HTML, Express, Git, and Adobe Creative
          Suite. I am also skilled in Photoshop, Illustrator, and Figma, and I
          enjoy building engaging, responsive websites and applications that
          reflect my interests in art and design.
        </p>

        <p>
          I&apos;m also a painter, illustrator, and fanatic about color theory.
          Check out my artwork
          <button
            type="button"
            style={buttonStyle}
            id="about-link"
            className={isItalic ? "italic" : null}
            onMouseEnter={() => setIsItalic(true)}
            onMouseLeave={() => setIsItalic(false)}
            onClick={() => navigate("/art")}
          >
            here!
          </button>
        </p>
        <p>
          This site was built in React with TypeScript.
          <br />
          Fonts courtesy of Sébastien Hayez and Jérémy Landes of Velvetyne Type
          Foundry.
        </p>
      </div>
      {/* <div className="float" /> */}
    </div>
  );
});

export default AboutMe;
