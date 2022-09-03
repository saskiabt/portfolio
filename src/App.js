/* eslint-disable react/jsx-filename-extension */
import { React, useRef } from "react";
import "./App.css";
import AboutMe from "./Components/AboutMe";
import Header from "./Components/Header";
import Projects from "./Components/Projects";

function App() {
  const projectsSectionRef = useRef(null);
  const aboutSectionRef = useRef(null);

  const scrollToProjects = () => {
    projectsSectionRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "center",
    });
  };

  const scrollToAbout = () => {
    aboutSectionRef.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  return (
    <div className="App">
      <Header
        scrollToProjects={scrollToProjects}
        scrollToAbout={scrollToAbout}
      />
      <AboutMe ref={aboutSectionRef} />
      <Projects ref={projectsSectionRef} />
    </div>
  );
}

export default App;
