import React from "react";

export default function HoverCounter({ count, incrementCount } ) {
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
}
