import React from "react";
import { useOutletContext } from "react-router-dom";
import AboutMe from "../AboutMe/AboutMe";
import Projects from "../Projects/Projects";
import "./LandingPage.css";

function LandingPage() {
  const { projectsSectionRef, aboutSectionRef } = useOutletContext();
  return (
    <div className="LandingPage">
      <AboutMe ref={aboutSectionRef} />
      <Projects ref={projectsSectionRef} />
    </div>
  );
}

export default LandingPage;
