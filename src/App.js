/* eslint-disable react/jsx-filename-extension */
import React from "react";
import "./App.css";
import AboutMe from "./Components/AboutMe";
import Header from "./Components/Header";
import Projects from "./Components/Projects";

function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <Projects />
    </div>
  );
}

export default App;
