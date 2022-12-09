import React from "react";
import * as ReactDOM from "react-dom/client";
import ReactivityCop from "./ReactivityCop";
import "../../css/impress-common.css";
import "../../css/impress-demo.css";
import "./global.less";
import "highlight.js/styles/ocean.css";

const root = document.body.querySelector("#root");
ReactDOM.createRoot(root).render(<ReactivityCop />);

setTimeout(() => {
  impress().init();
});
