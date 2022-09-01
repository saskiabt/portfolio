import React from "react";

function AboutMe() {
  const greeting = {
    fontSize: "2.5em",
    color: "blue",
  };

  const sectionPadding = {
    padding: "1em",
  };
  return (
    <div className="about-section" style={sectionPadding}>
      <h1 className="font-face-gm" id="greeting" style={greeting}>
        {/* <span className="rotate">✿ </span> */}
        Hi, I&apos;m Saskia Binder{"   "}
        {/* <span className="rotate">✿</span> */}
      </h1>
      <p>
        I&apos;m a web developer based in Brooklyn, NY. I am proficient in
        React, JavaScript, CSS/SCSS, HTML, and Git, and I enjoy building
        engaging, responsive websites and applications that reflect my interests
        in art and design.
      </p>
      <p>
        I&apos;m also a fine art painter and illustrator, and I am experienced
        in Photoshop, Illustrator, and Figma for UI and design.
      </p>
      {/* <p>
        I&apos;m a dedicated, quick, and fastidious learner: I taught myself to
        code over the past year, and I&apos;m eager to learn as much about
        front-end development as I can going forward.
      </p> */}
    </div>
  );
}

export default AboutMe;
