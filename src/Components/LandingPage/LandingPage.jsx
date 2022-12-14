import React from "react";
import { useOutletContext } from "react-router-dom";
import AboutMe from "../AboutMe/AboutMe";
import "./LandingPage.css";

function LandingPage() {
  const { aboutSectionRef } = useOutletContext();
  return (
    <div className="LandingPage">
      <AboutMe ref={aboutSectionRef} />
    </div>
  );
}

export default LandingPage;
