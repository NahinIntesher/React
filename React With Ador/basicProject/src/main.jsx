import React from "react";
import App from "./App";
import "./style.css";
import ReactDOM from "react-dom";
import InputComponent from "./Components/Profile/InputComponent";
import Index from "./Components/Profile/Index";


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
  <App />
  // <App key={true} />
);
