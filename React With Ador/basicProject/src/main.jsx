import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import SimpleTimer from "./Components/SetState";
import Clock from "./Components/Clock";
import TwoWayDataBinding from "./Components/TwoWayDataBinding";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <Clock date={new Date()}/>
  <TwoWayDataBinding />
);
