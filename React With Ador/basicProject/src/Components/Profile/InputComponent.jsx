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


  

  // Event handler for form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted with values:", NameInput, BioInput, SkillsInput, SocialMediaLinksInput);
  };

  return (
    <form onSubmit={handleSubmit}>

      <div style={{display:"flex", flexDirection: "column"}}>

        <div>
          <label style={{display:"flex", justifyContent: 'space-between'}}>
            Name Input:
            <input type="text" value={NameInput} onChange={handleTextInputChange} />
          </label>
        </div>


        <div>
        <label style={{display:"flex", justifyContent: 'space-between'}}>
            Give some bio about yourself:
            <input type="text" value={BioInput} onChange={handleBioInputChange} />
          </label>
        </div>


        <div>
        <label style={{display:"flex", justifyContent: 'space-between'}}>
          Give some skills of yourself:
            <input type="skills" value={SkillsInput} onChange={handleSkillsInputChange} />
          </label>
        </div>

      
        <div>
        <label style={{display:"flex", justifyContent: 'space-between'}}>
            Links of social media:
            <input type="links" value={SocialMediaLinksInput} onChange={handleSocialMediaLinksInputChange} />
          </label>
        </div>

        <button type="submit">Submit</button>


      </div>


    </form>
  );
};

export default InputComponent;
