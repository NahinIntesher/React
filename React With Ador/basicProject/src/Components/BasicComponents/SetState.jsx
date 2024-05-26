import React from "react";

function SetState() {
  let [count, setCount] = React.useState(0);
  let [interval, setCurrInterval] = React.useState(null);
  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrementCount = () => {
    setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
  };
  const startTimer = () => {
    if (interval === null) {
      setCurrInterval(
        setInterval(() => {
          setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
        }, 1000)
      );
    }
  };
  const stopTimer = () => {
    if (interval != null) {
      clearInterval(interval);
      setCurrInterval(null);
    }
  };
  const resetTimer = () => {
    if (interval != null) {
      clearInterval(interval);
      setCurrInterval(null);
    }
    setCount(0);
  };

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
        borderRadius: "50px",
      }}
    >
      <h1>Simple Timer</h1>
      <h1>{count}</h1>
      <div>
        <button onClick={incrementCount}>+</button>
        <button onClick={decrementCount}>-</button>
      </div>
      <div>
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
}

export default SetState;
