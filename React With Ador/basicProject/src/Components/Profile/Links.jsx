import React from "react";

const Links = (obj) => {
  return (
    <div id="links" style={{ display: "flex", flexDirection: "column" }}>
      <h3 style={{ display: "inline" }}>Socia Links:</h3>

      <div
        id="links"
        style={{
          display: "flex",
          justifyContent: "space-around",
          fontFamily: "Arial",
          fontSize: "small",
        }}
      >
        {obj.links.map((el) => (
          <a href={el[1]}> {el[0]} </a>
        ))}
      </div>
    </div>
  );
};
export default Links;
