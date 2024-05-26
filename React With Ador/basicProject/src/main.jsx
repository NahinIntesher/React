import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import SimpleTimer from "./Components/BasicComponents/SetState";
import Clock from "./Components/BasicComponents/Clock";
import TwoWayDataBinding from "./Components/BasicComponents/InputForm";
import BoilingVerdict from "./Components/BoilingVerdict/BoilingVerdict";
import Calculate from "./Components/BoilingVerdict/Calculate";

ReactDOM.createRoot(document.getElementById("root")).render(<Calculate />);
