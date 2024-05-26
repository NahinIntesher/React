import React from "react";
import withCounter from "./withCounter";

const HoverCounter = (props) => {
  const { count, incrementCount } = props;
  return (
    <h1
      style={{
        backgroundColor: "lightblue",
        borderRadius: "5px",
        padding: "10px",
      }}
      onMouseOver={incrementCount}
    >
      Hovered {count} times
    </h1>
  );
};
export default withCounter(HoverCounter);
