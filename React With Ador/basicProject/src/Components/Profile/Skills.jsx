import React from "react";

const Skills = (obj) => {
  return (
    <div id="skills">
      <h3 style={{ fontWeight: "700" }}>Skills:</h3>
      <p style={{ fontFamily: "Arial", fontSize: "small", whiteSpace: "pre" }}>
        {obj.skills.join(",  ")}
      </p>
    </div>
  );
};
export default Skills;
