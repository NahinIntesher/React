import React from "react";
import Counter from "./Counter";
import HoverCounter from "./HoverCounter";
import Section from "./Section";
import ThemeContext from "./ThemeContext";

export default class AppContextAPI extends React.Component {
  state = {
    theme: "dark",
    switchTheme: () => {
      this.setState(({ theme }) => ({
        theme: theme === "dark" ? "light" : "dark",
      }));
    },
  };

  render() {
    const { theme } = this.state;
    return (
      <div>
        <ThemeContext.Provider
          /*
          value={{ theme: theme, switchTheme: this.switchTheme }} 
            -> In this case ThemeContext will be updated because '{ theme: theme, switchTheme: this.switchTheme }' 
                is passing with reference and the reference of an object will change every time. 
                So, we need to pass the object directly like below. 
          */
          value={this.state} // It prevents the re-rendering of ThemeContext
        >
          <Section />
        </ThemeContext.Provider>
      </div>
    );
  }
}
