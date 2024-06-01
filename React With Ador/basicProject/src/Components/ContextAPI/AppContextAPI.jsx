import React from "react";
import Counter from "./Counter";
import HoverCounter from "./HoverCounter";
import Section from "./Section";
import ThemeContext from "./ThemeContext";

export default class AppContextAPI extends React.Component {
  state = {
    theme: "dark",
  };
  switchTheme = () => {
    this.setState((prevState) => ({
      theme: prevState.theme === "light" ? "dark" : "light",
    }));
  };
  render() {
    const { theme } = this.state;
    return (
      <div>
        <ThemeContext.Provider
          value={{ theme: theme, switchTheme: this.switchTheme }}
        >
          <Section />
        </ThemeContext.Provider>
      </div>
    );
  }
}