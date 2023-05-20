import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/global.css";
import "./assets/style.css";
import "./assets/utils.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
