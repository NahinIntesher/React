import React from "react";
import Bio from "./Bio";
import Skills from "./Skills";
import Links from "./Links";

const Profile = (obj) => {
  return (
    <div
      style={{
        padding: "30px",
        background: "#9fd3c7",
        color: "#233142",
        borderRadius: "20px",
        boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.5)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
        border: "2px solid black",
      }}
    >
      <div
        id="main"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
        }}
      >
        <Bio name={obj.name} bio={obj.bio} />
        <Skills skills={obj.skills} />
        <Links links={obj.links} />
      </div>
    </div>
  );
};

export default Profile;
