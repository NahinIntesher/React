import React from "react";
import Counter from "./Counter";
import HoverCounter from "./HoverCounter";
import Section from "./Section";
import ThemeContext from "./Context";

export default class AppContextAPI extends React.Component {
  state = {
    theme: "dark",
  };
  render() {
    const { theme } = this.state;
    return (
      <div>
        <ThemeContext.Provider value={{ theme }}>
          <Section />
        </ThemeContext.Provider>
      </div>
    );
  }
}
