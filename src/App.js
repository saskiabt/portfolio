/* eslint-disable react/jsx-filename-extension */
import { React, useRef } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";

function App() {
  const projectsSectionRef = useRef(null);
  const aboutSectionRef = useRef(null);

  const scrollToProjects = () => {
    projectsSectionRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "center",
      top: "10px",
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
      <Outlet context={{ projectsSectionRef, aboutSectionRef }} />
    </div>
  );
}

export default App;
