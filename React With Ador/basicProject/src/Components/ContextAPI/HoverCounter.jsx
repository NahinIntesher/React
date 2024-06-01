import React from "react";

export default function HoverCounter({
  count,
  incrementCount,
  theme,
  switchTheme,
}) {
  const style =
    theme === "dark"
      ? {
          backgroundColor: "black",
          color: "white",
          padding: "10px",
          margin: "10px",
        }
      : {
          backgroundColor: "lightblue",
          color: "black",
          padding: "10px",
          margin: "10px",
        };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 style={style} onMouseOver={incrementCount}>
        Hovered {count} times
      </h1>
      <button onClick={switchTheme}>Change Theme</button>
    </div>
  );
}
