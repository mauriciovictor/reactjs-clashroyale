import React from "react";
import ReactDOM from "react-dom";
import { AppRoutes } from "./routes";
import { GlobalStyle } from "./global/styles/global";
ReactDOM.render(
  <React.StrictMode>
    <AppRoutes />
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById("root")
);
