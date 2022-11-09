/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./styles.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./fonts/VictoriannaThint_Web/vtf_victorianna_thin-webfont.ttf";
import Artpage from "./Components/Art-page/Artpage";
import LandingPage from "./Components/LandingPage/LandingPage";
import { ModalProvider } from "./context/modal-context";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/portfolio",
        element: <LandingPage />,
      },
      {
        path: "/portfolio/art",
        element: <Artpage />,
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

// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
