/* eslint-disable react/prop-types */
import React from "react";
import "./AboutMe.css";

const AboutMe = React.forwardRef((props, ref) => {
  const greeting = {
    color: "blue",
  };

  const sectionPadding = {
    padding: "1em",
  };
  return (
    <div className="about-section" style={sectionPadding} ref={ref}>
      <h1 className="font-face-gm" id="greeting" style={greeting}>
        Hi, I&apos;m Saskia Binder{"   "}
      </h1>
      <p>
        I&apos;m a full stack web developer based in Brooklyn, NY. I am
        proficient in React, Redux, JavaScript, NodeJS, CSS/SCSS, HTML, Express,
        MongoDB, Git, and Adobe Creative Suite. I enjoy building engaging,
        responsive websites and applications that reflect my interests in art
        and design.
      </p>
      <p>
        I&apos;m also a fine art painter and illustrator, and I am experienced
        in Photoshop, Illustrator, and Figma for UI and design.
      </p>
      <p>
        This site was built in React with TypeScript & React Context. Fonts
        courtesy of Sébastien Hayez and Jérémy Landes of Velvetyne Type Foundry.
      </p>
    </div>
  );
});

export default AboutMe;
