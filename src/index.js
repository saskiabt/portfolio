/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./styles.css";
import "./styles/dark-mode.css";
import App from "./App";
import "./fonts/VictoriannaThint_Web/vtf_victorianna_thin-webfont.ttf";
import Artpage from "./Components/Art-page/Artpage";
import LandingPage from "./Components/LandingPage/LandingPage";
import { ModalProvider } from "./context/modal-context";
import Projects from "./Components/Projects/Projects";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/art",
        element: <Artpage />,
      },
      {
        path: "/coding",
        element: <Projects />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ModalProvider>
      <RouterProvider router={router} />
    </ModalProvider>
  </React.StrictMode>,
);
