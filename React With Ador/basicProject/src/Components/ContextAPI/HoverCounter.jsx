import React from "react";

export default function HoverCounter({
  count,
  incrementCount,
  theme,
  switchTheme,
}) {
  const style =
    theme === "dark"
      ? { backgroundColor: "black", color: "white" }
      : { backgroundColor: "lightblue", color: "black" };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 style={{ ...style, padding: "10px" }} onMouseOver={incrementCount}>
        Hovered {count} times
      </h1>
      <button onClick={switchTheme}>Change Theme</button>
    </div>
  );
}
