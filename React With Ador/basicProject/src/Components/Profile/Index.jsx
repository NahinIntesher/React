import React from "react";
import InputComponent from "./InputComponent";
const Index = (obj) => {
  return (
    <div
      style={{
        height: "50vh",
        width: "60vw",
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
      <h1 style={{ fontFamily: "Times New Roman" }}>Profile Information</h1>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <button id="addYourself"
          // onClick={this.state(<InputComponent/>)}
        >
          Add yourself
        </button>
        <button id="seeProfile"
          
        >
          See someones profile
        </button>
      </div>
    </div>
  );
};
export default Index;
