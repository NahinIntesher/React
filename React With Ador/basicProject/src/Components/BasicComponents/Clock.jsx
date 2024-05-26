import React from "react";
import Button from "./Button";
class Clock extends React.Component {
  state = {
    date: new Date(),
    locale: "bn-BD",
  };
  componentDidMount() {
    this.clockTimer = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    this.clearInterval(this.clockTimer);
  }
  tick() {
    this.setState({
      date: new Date(),
    });
  }
  handleClick = (locale) => {
    this.setState({
      locale,
    });
  };

  render() {
    console.log("Clock Component is rendered");
    const { date, locale } = this.state;
    let button;

    return (
      <div>
        <h1 className="heading">
          <span className="text">{date.toLocaleTimeString(locale)}</span>
        </h1>
        {/* <Button change={this.handleClick.bind(this, locale)} /> This is the old way to bind the function */}

        {/* <Button change={() => this.handleClick(locale)} /> 
        This is a new way but If re-rendering is a issue then don't use this way */}

        {/* When we don't want to re-render the component then we can use the bottom way: */}
        {/* <Button change={this.handleClick} /> */}

        {locale === "bn-BD" ? (
          <Button change={this.handleClick} locale="en-US" />
        ) : (
          <Button change={this.handleClick} locale="bn-BD" />
        )}
      </div>
    );
  }
}
export default Clock;
