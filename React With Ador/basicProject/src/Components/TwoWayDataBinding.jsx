import React from "react";

class TwoWayDataBinding extends React.Component {
  state = {
    name: "",
  };

  handleInput = (event) => {
    this.setState({ name: event.target.value });
  };
  render() {
    return (
      <div>
        <h1>Two Way Data Binding</h1>
        <input
          type="text"
          placeholder="Enter your name"
          value={this.state.name}
          onChange={this.handleInput}
        />
        {this.state.name && <h2>Welcome, {this.state.name}</h2>}
      </div>
    );
  }
}
export default TwoWayDataBinding;
