import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import {  HashRouter } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import i18next from "./i18next.ts/i18next.ts";
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HashRouter>
    <I18nextProvider i18n={i18next}>
      <App />
      </I18nextProvider>
    </HashRouter>
  </React.StrictMode>
);
