import React from "react";

class myApp extends React.Component {
  render() {
    /* Hard to Understand: 
    return React.createElement("div", { className: "myapp" }, [
      React.createElement("h1", null, "What is JSX?"),
      React.createElement("p", null, "JSX is Awesome"),
    ]); */

    // Easy to Understand:
    return (
      <div className="myapp">
        <h1>What is JSX?</h1>
        <p>JSX is Awesome</p>
      </div>
    );
  }
}
