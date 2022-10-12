/* eslint-disable react/function-component-definition */
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import Artpage from "./Art-page/Artpage";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/art" element={<Artpage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
