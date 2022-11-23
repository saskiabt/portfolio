/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import "./AboutMe.css";

const AboutMe = React.forwardRef((props, ref) => {
  const navigate = useNavigate();

  const [isItalic, setIsItalic] = useState(false);

  const sectionPadding = {
    padding: "1em",
  };

  const buttonStyle = {
    background: "none",
    border: "0px",
  };
  return (
    <div className="about-section" style={sectionPadding} ref={ref}>
      <h1 className="font-face-gm" id="greeting">
        <Typewriter
          words={["Hi, I'm Saskia Binder"]}
          loop={1}
          cursor={false}
          cursorBlinking={false}
          typeSpeed={120}
        />
      </h1>
      <p>
        I&apos;m a full stack web developer based in Brooklyn, NY. I am
        proficient in React, Redux, JavaScript, TypeScript, NodeJS, CSS/SCSS,
        HTML, Express, MongoDB, Git, and Adobe Creative Suite. I enjoy building
        engaging, responsive websites and applications that reflect my interests
        in art and design.
        <br />
        See my programming projects below!
      </p>
      <p>
        I&apos;m also a
        <button
          type="button"
          style={buttonStyle}
          id="about-link"
          className={isItalic ? "italic" : null}
          onMouseEnter={() => setIsItalic(true)}
          onMouseLeave={() => setIsItalic(false)}
          onClick={() => navigate("/art")}
        >
          fine art painter and illustrator,
        </button>
        and I am experienced in Photoshop, Illustrator, and Figma for UI and
        design.
      </p>
      <p>
        This site was built in React with TypeScript & React Context. Fonts
        courtesy of Sébastien Hayez and Jérémy Landes of Velvetyne Type Foundry.
      </p>
    </div>
  );
});

export default AboutMe;
