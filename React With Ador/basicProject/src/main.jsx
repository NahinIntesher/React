import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import Profile from "./Components/Profile/Profile.jsx";
import InputComponent from "./Components/Profile/InputComponent.jsx";
import Index from "./Components/Profile/Index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <Profile
  //   name="Nahin Intesher"
  //   bio="Learning full stack development, Dedicated developer..."
  //   skills={["HTML", "CSS", "Javascript", "React", "C", "C++", "Java"]}
  //   links={[
  //     ["Facebook", "https://www.facebook.com/nahin.intesher"],
  //     ["Linkedin", "https://www.linkedin.com/in/nahin-intesher-903724253/"],
  //     ["Github", "https://github.com/Assassin318554"],
  //   ]}
  // />
  <InputComponent />
);
