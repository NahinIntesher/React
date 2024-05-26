import React from "react";

class TwoWayDataBinding extends React.Component {
  state = {
    title: "",
    text: "",
    country: "",
    isStudent: false,
    submitted: false,
  };

  handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ submitted: true });
  };

  render() {
    const { title, text, country, isStudent, submitted } = this.state;

    const containerStyle = {
      display: "flex",
      flexDirection: "column",
      width: "30vw",
      margin: "auto",
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      backgroundColor: "#f9f9f9",
    };

    const formGroupStyle = {
      marginBottom: "20px",
    };

    const inputStyle = {
      display: "flex",
      width: "95%",
      padding: "10px",
      marginTop: "5px",
      fontSize: "16px",
      border: "1px solid #ccc",
      borderRadius: "5px",
    };

    const submitButtonStyle = {
      width: "100%",
      padding: "10px",
      fontSize: "16px",
      border: "1px solid #ccc",
      borderRadius: "10px",
      backgroundColor: "#007bff",
      color: "white",
      cursor: "pointer",
    };

    const submitButtonHoverStyle = {
      ...submitButtonStyle,
      backgroundColor: "#0056b3",
    };

    const submissionMessageStyle = {
      marginTop: "20px",
      padding: "20px",
      borderTop: "1px solid #ccc",
      backgroundColor: "#e9ecef",
      borderRadius: "5px",
    };

    return (
      <div style={containerStyle}>
        <h1>Form</h1>
        <form onSubmit={this.handleSubmit}>
          <div style={formGroupStyle}>
            <label htmlFor="title">Name:</label>
            <input
              type="text"
              id="title"
              name="title"
              value={title}
              placeholder="Enter name"
              onChange={this.handleChange}
              style={inputStyle}
            />
          </div>

          <div style={formGroupStyle}>
            <label htmlFor="text">Details:</label>
            <textarea
              id="text"
              name="text"
              value={text}
              placeholder="Enter details"
              onChange={this.handleChange}
              style={inputStyle}
            ></textarea>
          </div>

          <div style={formGroupStyle}>
            <label htmlFor="country">Country:</label>
            <select
              id="country"
              name="country"
              value={country}
              onChange={this.handleChange}
              style={inputStyle}
            >
              <option value="">Select a country</option>
              <option value="Bangladesh">Bangladesh</option>
              <option value="India">India</option>
              <option value="Pakistan">Pakistan</option>
            </select>
          </div>

          <div style={formGroupStyle}>
            <label>
              <input
                type="checkbox"
                name="isStudent"
                checked={isStudent}
                onChange={this.handleChange}
                style={{
                  inputStyle,
                  width: "auto",
                  marginRight: "1rem",
                  verticalAlign: "middle",
                }}
              />
              Are you a student?
            </label>
          </div>

          <div style={formGroupStyle}>
            <button
              type="submit"
              style={submitButtonStyle}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
            >
              Submit
            </button>
          </div>
        </form>

        {submitted && (
          <div style={submissionMessageStyle}>
            <h2>Welcome, {title}!</h2>
            <p>Details: {text}</p>
            <p>Country: {country}</p>
            <p>{isStudent ? "You are a student." : "You are not a student."}</p>
          </div>
        )}
      </div>
    );
  }
}

export default TwoWayDataBinding;
