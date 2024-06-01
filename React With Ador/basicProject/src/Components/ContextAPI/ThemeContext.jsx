import React from "react";
import CreateContext from "./Context";

// const ThemeContext = CreateContext({
//   theme: "light",
// });
const ThemeContext = React.createContext({
  theme: "light",
});

export default ThemeContext;
