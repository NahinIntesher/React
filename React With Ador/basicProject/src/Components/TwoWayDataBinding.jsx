import React from "react";

class TwoWayDataBinding extends React.Component {
  state = {
    title: "",
    text: "",
  };

  handleChange = (e) => {
    this.setState({
      title: e.target.value,
      text: e.target.value,
    });
  };
  render() {
    return (
      <div>
        <h1>Two Way Data Binding</h1>
        <br />
        <input
          style={{ padding: "10px", fontSize: "25px" }}
          type="text"
          value={this.state.title}
          placeholder="Enter name"
          onChange={this.handleChange}
        />
        <br />
        <br />
        <textarea
          style={{ padding: "10px", fontSize: "25px" }}
          type="text"
          value={this.state.title}
          placeholder="Enter Details"
          onChange={this.handleChange}
        ></textarea>
        {this.state.title && <h2>Welcome, {this.state.title}</h2>}
      </div>
    );
  }
}
export default TwoWayDataBinding;
