import React from "react";

const Bio = (obj) => {
  return (
    <div id="bio">
      <h1 style={{ fontFamily: "Times New Roman" }}> {obj.name} </h1>
      <p style={{ fontSize: "small", fontWeight: "lighter" }}> {obj.bio} </p>
    </div>
  );
};
export default Bio;
