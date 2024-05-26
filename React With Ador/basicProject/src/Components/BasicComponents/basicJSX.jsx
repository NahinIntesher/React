import React from "react";
const MyComponent = () => <h1>My Component</h1>;

// class JSX extends React.Component {
//   render() {

//   }
// }
function JSX() {
  const obj = {
    title: "Test Title",
    id: "myh1",
  };
  const name = "Nahin Intesher";
  const bio = (
    <div>
      <h3>{name}</h3>
      <p>Learing React, Learned JS, Want to be a Entrepreneur</p>
    </div>
  );

  return (
    <div className="APP">
      <MyComponent />
      <h1 {...obj}>What is JSX?</h1>
      <p>JSX is Awesome and it's mean JS Extension</p>
      <p>{new Date().toString()}</p>
      <p>My name is {name}</p>
      {bio}
    </div>
  );
}
export default JSX;
