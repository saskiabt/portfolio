/* eslint-disable react/jsx-filename-extension */
import { React, useRef } from "react";
import "./App.css";
import AboutMe from "./Components/AboutMe";
import Header from "./Components/Header";
import Projects from "./Components/Projects";

function App() {
  const aboutSection = useRef(null);
  const projectsSection = useRef(null);

  return (
    <div className="App">
      <Header aboutSection={aboutSection} projectSection={projectsSection} />
      <AboutMe aboutSection={aboutSection} />
      <Projects projectsSection={projectsSection} />
    </div>
  );
}

export default App;
