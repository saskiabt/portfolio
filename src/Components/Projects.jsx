/* eslint-disable react/prop-types */

import React from "react";
import Card from "./Card";
import weatherGif from "../gifs/weather.gif";
import calcGif from "../gifs/calc.gif";
import gordosGif from "../gifs/gordos.gif";
import tttGif from "../gifs/ttt.gif";
import projectStyles from "../styles/projectStyles";
import resumeGif from "../gifs/resume.gif";
import mmbGif from "../gifs/mmb.gif";

const Projects = React.forwardRef((props, ref) => {
  return (
    <div className="project-section" style={projectStyles} ref={ref}>
      <h2 className="font-face-gm">Projects</h2>
      <Card
        className="mmb"
        src={mmbGif}
        name="Full Stack Message Board"
        text="Full Stack message board app featuring REST API Backend built with Node, Express, MongoDB and Mongoose. Frontend built in React with Redux and Redux Toolkit. Features backend authentication (login credentials) using JSON Web Tokens and Bcrypt. Frontend Authentication using Redux Toolkit and the Async Thunk API. Frontend routing with React-Router-Dom. Users can create an account or login to leave a comment, and see a protected dashboard with their own comments."
        link="https://mmb-saskiabt.herokuapp.com/"
        repo="https://github.com/saskiabt/mmb"
      />
      <Card
        className="resume"
        src={resumeGif}
        name="React Resume Builder"
        text="React App to create a formatted resume from user inputs, using react Forms, hooks, dynamic and conditional rendering."
        link="https://saskiabt.github.io/react-resume-app/"
        repo="https://github.com/saskiabt/react-resume-app"
      />

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
