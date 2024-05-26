import React from "react";
import BoilingVerdict from "./BoilingVerdict";
import TemparatureInput from "./TemparatureInput";
import { convert, toCelcious, toFarenheit } from "./Converter";

export default class Calculate extends React.Component {
  state = {
    temparature: "",
    scale: "c",
  };
  handleChange = (e, scale) => {
    this.setState({
      temparature: e.target.value,
      scale,
    });
  };
  render() {
    const { temparature, scale } = this.state;
    const celcius =
      scale === "f" ? convert(temparature, toCelcious) : temparature;
    const farenheit =
      scale === "c" ? convert(temparature, toFarenheit) : temparature;
    return (
      <div
        style={{
          backgroundColor: "#d4f8e8",
          width: "40vw",
          height: "60vh",
          display: "flex",
          flexDirection: "column",
          paddingTop: "100px",
          alignItems: "center",
          borderRadius: "20px",
        }}
      >
        <TemparatureInput
          temparature={celcius}
          scale="c"
          onTemparatureChange={this.handleChange}
        />
        <TemparatureInput
          temparature={farenheit}
          scale="f"
          onTemparatureChange={this.handleChange}
        />
        <BoilingVerdict celcius={parseFloat(celcius)} />
      </div>
    );
  }
}
