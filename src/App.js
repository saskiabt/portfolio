/* eslint-disable react/jsx-filename-extension */
import { React, useRef, useContext } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import MobileNav from "./Components/Mobile-Nav/MobileNav";
import { ModalContext } from "./context/modal-context";

function App() {
  const { isExpanded } = useContext(ModalContext);

  const projectsSectionRef = useRef(null);
  const aboutSectionRef = useRef(null);

  const scrollToProjects = () => {
    projectsSectionRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "center",
      top: "2px",
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
      <MobileNav />
      {!isExpanded && (
        <Outlet context={{ projectsSectionRef, aboutSectionRef }} />
      )}
    </div>
  );
}

export default App;
