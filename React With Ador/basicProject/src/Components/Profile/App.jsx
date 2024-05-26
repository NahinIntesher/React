import React from "react";
import Index from "./Index.jsx";
import InputComponent from "./InputComponent.jsx";
import Profile from "./Profile.jsx"; // Assuming you have a Profile component

class App extends React.Component {
  state = {
    addYourself: false,
    seeProfile: false,
  };

  render() {
    const { addYourself, seeProfile } = this.state;

    return (
      <div>
        {addYourself && <InputComponent />}
        {seeProfile && (
          <Profile
            name="Nahin Intesher"
            bio="Learning full stack development, Dedicated developer..."
            skills={["HTML", "CSS", "Javascript", "React", "C", "C++", "Java"]}
            links={[
              ["Facebook", "https://www.facebook.com/nahin.intesher"],
              ["Linkedin", "https://www.linkedin.com/in/nahin-intesher-903724253/"],
              ["Github", "https://github.com/Assassin318554"],
            ]}
          />
        )}
        {!addYourself && !seeProfile && <Index />}

        <br />
        <div
          id="buttonContainer"
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <button
            onClick={() => {
              this.setState({ addYourself: !addYourself, seeProfile: false });
            }}
          >
            {addYourself ? "Back" : "Add Yourself"}
          </button>

          <button
            id="seeProfile"
            onClick={() => {
              this.setState({ seeProfile: !seeProfile, addYourself: false });
            }}
          >
            {seeProfile ? "Back" : "See someone's profile"}
          </button>
        </div>
      </div>
    );
  }
}

export default App;
