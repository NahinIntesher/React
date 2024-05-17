import React from "react";
import Logged from "./Components/Logged.jsx";
import Unlogged from "./Components/Unlogged.jsx";
import Index from "./Components/Profile/Index.jsx";
import InputComponent from "./Components/Profile/InputComponent.jsx";

class App extends React.Component {
  state = {
    isLogged: false,
  };

  render() {
    return (
      <div>
        {this.state.isLogged ? <Index /> : <InputComponent />}
        <button
          onClick={() => {
            this.setState((prev) => {
              return { isLogged: !prev.isLogged };
            });
          }}
        >
          {this.state.isLogged ? "Logout" : "Login"}
        </button>
      </div>
    );
  }
}
export default App;
