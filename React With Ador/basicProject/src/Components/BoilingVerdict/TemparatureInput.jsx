import React from "react";

export default function Calculate({ temparature, scale, onTemparatureChange }) {
  return (
    <fieldset style={{ backgroundColor: "#a4d1c8", borderRadius: "10px" }}>
      <legend
        style={{
          fontSize: "1rem",
          fontWeight: "bold",
          marginBottom: "1rem",
          borderRadius: "10px",
        }}
      >
        Enter temparature in {scale === "c" ? "Celcius" : "Farenheit"}:
      </legend>

      <input
        type="text"
        value={temparature}
        onChange={(e) => onTemparatureChange(e, scale)}
        style={{ borderRadius: "10px" }}
      />
    </fieldset>
  );
}
