import React from "react";
// import SimpleTimer from "./Components/BasicComponents/SetState";
// import Clock from "./Components/BasicComponents/Clock";
// import TwoWayDataBinding from "./Components/BasicComponents/InputForm";
// import BoilingVerdict from "./Components/BoilingVerdict/BoilingVerdict";
// import Calculate from "./Components/BoilingVerdict/Calculate";
import App from "./Components/ReactComposition/App";
// import ClickCounter from "./Components/HigherOrderComponent/ClickCounter";
// import HoverCounter from "./Components/HigherOrderComponent/HoverCounter";
// import Counter from "./Components/RenderProps/Counter";
// import ClickCounter from "./Components/RenderProps/ClickCounter";
// import HoverCounter from "./Components/RenderProps/HoverCounter";
import Counter from "./Components/ContextAPI/Counter";
import HoverCounter from "./Components/ContextAPI/HoverCounter";
import Section from "./Components/ContextAPI/Content";

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
      <HoverCounter />

      <Counter>
        {(count, incrementCount) => (
          <ClickCounter count={count} incrementCount={incrementCount} />
        )}
      </Counter>
      <Counter>
        {(count, incrementCount) => (
          <HoverCounter count={count} incrementCount={incrementCount} />
        )}
      </Counter>*/}

      <Section></Section>
    </div>
  );
}
export default App;
