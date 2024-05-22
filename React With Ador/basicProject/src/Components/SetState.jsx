import React from "react";

class SetState extends React.Component {
  state = {
    count: 0,
  };
  intervalId = null;
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
    if (this.state.count > 0 && !this.intervalId) {
      this.intervalId = setInterval(() => {
        this.setState(
          (prev) => {
            return { count: prev.count - 1 };
          },
          () => {
            if (this.state.count === 0) {
              alert("Timer is finished");
              clearInterval(this.intervalId);
              this.intervalId = null;
            }
          }
        );
      }, 1000);
    }
  };
  stopTimer = () => {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  };
  resetTimer = () => {
    this.setState({ count: 0 });
    clearInterval(this.intervalId);
    this.intervalId = null;
  };
  render() {
    return (
      <div
        style={{
          height: "50vh",
          width: "50vw",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          alignItems: "center",
          backgroundColor: "teal",
          borderRadius: "10px",
        }}
      >
        <h1>Simple Timer</h1>
        <h1>{this.state.count}</h1>
        <div>
          <button onClick={this.incrementCount}>+</button>
          <button onClick={this.decreamentCount}>-</button>
        </div>
        <div>
          <button onClick={this.setTimer}>Start</button>
          <button onClick={this.stopTimer}>Stop</button>
          <button onClick={this.resetTimer}>Reset</button>
        </div>
      </div>
    );
  }
}
export default SetState;
