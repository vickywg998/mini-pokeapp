import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import "semantic-ui-css/semantic.min.css";
import Routes from "./Routes";

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById("root")
);
