/* eslint-disable react/prop-types */

import React from "react";
import Card from "./Card";
import weatherGif from "../gifs/weather.gif";
import calcGif from "../gifs/calc.gif";
import gordosGif from "../gifs/gordos.gif";
import tttGif from "../gifs/ttt.gif";
import projectStyles from "../styles/projectStyles";

const Projects = React.forwardRef((props, ref) => {
  return (
    <div className="project-section" style={projectStyles} ref={ref}>
      <h2 className="font-face-gm">Projects</h2>
      <Card
        className="weather"
        src={weatherGif}
        name="React Weather App"
        text="Weather App built in React using data from the OpenWeather Geolocation API."
        link="https://saskiabt.github.io/react-weather-app2/"
        repo="https://github.com/saskiabt/react-weather-app2"
      />
      <Card
        className="gordos"
        src={gordosGif}
        name="Mock Restaurant Website"
        text="Restaurant website written in JS using personalized webpack config and ES6 Modules. Responsive design and mobile friendly."
        link="https://saskiabt.github.io/restaurant-website/"
        repo="https://github.com/saskiabt/restaurant-website"
      />
      <Card
        className="calc"
        src={calcGif}
        name="Javascript Calculator"
        text="Keyboard compatible and draggable calculator, with add, subtract, multiply, divide, exponentiation, and square root functionality. 
        Can perform multiple successive operations on sequential presses of 'enter' or the equals button. Also features delete and clear display buttons."
        link="https://saskiabt.github.io/calculator/"
        repo="https://github.com/saskiabt/calculator"
      />
      <Card
        className="ttt"
        src={tttGif}
        name="Tic Tac Toe"
        text="Javascript game of tic-tac-toe in-browser. 
        Built using modules and factory functions. Option to play against another person, or against the computer. Responsive design and mobile-friendly."
        link="https://saskiabt.github.io/tic-tac-toe/"
        repo="https://github.com/saskiabt/tic-tac-toe"
      />
    </div>
  );
});

export default Projects;