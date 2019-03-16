import React from "react";
import ReactDOM from "react-dom";
import Main from "./components/Main";

console.log("Hello Webpack!");

ReactDOM.render(
  <h1>Hello React!</h1>,
  <Main />,
  document.getElementById("app")
);
