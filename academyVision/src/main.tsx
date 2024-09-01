import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { HashRouter } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import i18next from "./i18next.ts/i18next.ts";
import "bootstrap/dist/css/bootstrap.min.css";
import "./variables.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { ParallaxProvider } from 'react-scroll-parallax';


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HashRouter>
    <ParallaxProvider>
      <I18nextProvider i18n={i18next}>
        <ToastContainer
          position="top-center"
          autoClose={20000}
          className="toastContainer"
          theme="light"
        />
        <App />
      </I18nextProvider>
      </ParallaxProvider>
    </HashRouter>
  </React.StrictMode>
);
