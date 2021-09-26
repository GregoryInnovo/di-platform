import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./routes/App";

/* Crea toda la app y lo anexa en public/index.html */
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
