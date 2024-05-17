import React, { useState } from "react";

const InputComponent = () => {
  // Define state variables to store input values
  const [NameInput, setNameInput] = useState("");
  const [BioInput, setBioInput] = useState("");
  const [SkillsInput, setSkillsInput] = useState("");
  const [SocialMediaLinksInput, setSocialMediaLinksInput] = useState("");

  // Event handler for input change
  const handleTextInputChange = (event) => {
    setNameInput(event.target.value);
  };

  // Event handler for email input change
  const handleBioInputChange = (event) => {
    setBioInput(event.target.value);
  };

  // Event handler for skills input change
  const handleSkillsInputChange = (event) => {
    setSkillsInput(event.target.value);
  };

  // Event handler for social media links input change
  const handleSocialMediaLinksInputChange = (event) => {
    setSocialMediaLinksInput(event.target.value);
  };

  // const clicked = onclick(#submit);
  // Event handler for form submission
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div
        className="Container"
        style={{
          display: "flex",
          flexDirection: "column",
          height: "50vmin",
          width: "50vmax",
          background: "#9fd3c7",
          color: "#233142",
          borderRadius: "20px",
          boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.5)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-evenly",
          border: "2px solid black",
        }}
      >
        <table
          className="nahin"
          style={{
            height: "20vmin",
            width: "40vmax",
          }}
        >
          <tr>
            <td>Input your name: </td>
            <td>
              <input
                type="text"
                value={NameInput}
                onChange={handleTextInputChange}
              />
            </td>
          </tr>

          <tr>
            <td>Bio about yourself: </td>
            <td>
              <input
                type="text"
                value={BioInput}
                onChange={handleBioInputChange}
              />
            </td>
          </tr>

          <tr>
            <td>Skills of yourself: </td>
            <td>
              <input
                type="skills"
                value={SkillsInput}
                onChange={handleSkillsInputChange}
              />
            </td>
          </tr>

          <tr>
            <td>Links of social media:</td>
            <td>
              <input
                type="links"
                value={SocialMediaLinksInput}
                onChange={handleSocialMediaLinksInputChange}
              />
            </td>
          </tr>
        </table>

        <button type="submit" onClick={
          () => {
            console.log(NameInput);
            console.log(BioInput);
            console.log(SkillsInput);
            console.log(SocialMediaLinksInput);
          }
        
        }>Submit</button>
      </div>
    </form>
  );
};

export default InputComponent;
