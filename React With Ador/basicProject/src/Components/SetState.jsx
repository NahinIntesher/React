import React from "react";

class SetState extends React.Component {
  state = {
    count: 0,
  };
  incrementCount = () => {
    this.setState((prev) => {
      return { count: prev.count + 1 };
    });
  };
  decreamentCount = () => {
    if (this.state.count > 0) {
      this.setState((prev) => {
        return { count: prev.count - 1 };
      });
    }
  };
  setTimer = () => {
    if (this.state.count > 0) {
      setInterval();
      this.setState({ count: prev.count - 1 });
    }
  };
  render() {
    return (
      <div
        style={{
          height: "50vh",
          width: "60vw",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          alignItems: "center",
          backgroundColor: "teal",
        }}
      >
        <h1>Simple Timer</h1>
        <h1>{this.state.count}</h1>
        <div>
          <button onClick={this.incrementCount}>Increment</button>
          <button onClick={this.decreamentCount}>Decreament</button>
        </div>
        <div>
          <button onClick={this.decreamentCount}>Start</button>
          <button onClick={this.decreamentCount}>Stop</button>
          <button onClick={this.decreamentCount}>Reset</button>
        </div>
      </div>
    );
  }
}
export default SetState;
