import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import SimpleTimer from "./Components/BasicComponents/SetState";
import Clock from "./Components/BasicComponents/Clock";
import TwoWayDataBinding from "./Components/BasicComponents/InputForm";
import BoilingVerdict from "./Components/BoilingVerdict/BoilingVerdict";
import Calculate from "./Components/BoilingVerdict/Calculate";
// import App from "./Components/ReactComposition/App";
import ClickCounter from "./Components/HigherOrderComponent/ClickCounter";
import HoverCounter from "./Components/HigherOrderComponent/HoverCounter";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      {/* <SimpleTimer />
      <Clock />
      <TwoWayDataBinding />
      <BoilingVerdict />
      <Calculate />
      <App /> 
      <ClickCounter />
      <HoverCounter />*/}
    </div>
  );
}
export default App;
