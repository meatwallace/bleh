import "minireset.css";
// import "./mocks/browser";
// import "./polyfills.ts";
import "./styles.css";

import React from "react";
import { render } from "react-dom";
// import { App } from "./App";

const rootElement = document.getElementById("🤷");

render(
  <React.StrictMode>
    <span>bleh</span>
  </React.StrictMode>,
  rootElement
);
